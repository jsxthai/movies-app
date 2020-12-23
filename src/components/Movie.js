import React from "react";

const IMG_API = `https://image.tmdb.org/t/p/w1280`;
const defautlImg = `https://images.unsplash.com/photo-1509281373149-e957c6296406?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=369&q=80`;

const Movie = ({ title, poster_path, vote_average, overview }) => {
    const setVoteClass = (vote) => {
        if (vote >= 8) return "green";
        else if (vote >= 6) return "orange";
        else return "red";
    };

    return (
        <div className="movie">
            <img
                src={poster_path ? IMG_API + poster_path : defautlImg}
                alt={title}
            ></img>
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>
                    {vote_average}
                </span>
            </div>
            <div className="movie-over">
                <h2>Overview</h2>
                <p>{overview}</p>
            </div>
        </div>
    );
};

export default Movie;
