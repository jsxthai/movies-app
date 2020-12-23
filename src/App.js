import { useState, useEffect } from "react";
import Movie from "./components/Movie";

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query=`;

function App() {
    const [movies, setMovies] = useState([]);
    const [searchKey, setSearchKey] = useState("");

    const fetchMovies = (API) => {
        fetch(API)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results);
            });
    };

    useEffect(() => {
        fetchMovies(FEATURED_API);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchKey) fetchMovies(SEARCH_API + searchKey);

        setSearchKey("");
    };

    const handleOnChange = (e) => {
        setSearchKey(e.target.value);
    };

    const handleClick = () => {
        fetchMovies(FEATURED_API);
    };

    return (
        <div className="container">
            <div className="header">
                <h2 className="home" onClick={handleClick}>
                    Home page
                </h2>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input
                            className="search"
                            type="search"
                            placeholder="Search ..."
                            value={searchKey}
                            onChange={handleOnChange}
                        ></input>
                    </form>
                </div>
            </div>
            <div className="movie-container">
                {movies.length > 0 &&
                    movies.map((movie) => <Movie key={movie.id} {...movie} />)}
            </div>
        </div>
    );
}

export default App;
