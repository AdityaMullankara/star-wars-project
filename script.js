import React, { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]); 
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch("https://swapi.dev/api/films/?format=json")
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []); 

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie); 
  };

  const renderMovies = () => {
    return movies.map((movie) => (
      <li key={movie.episode_id} onClick={() => handleMovieClick(movie)}>
        {movie.title} ({movie.release_date})
      </li>
    ));
  };

  const renderMovieDetails = () => {
    if (!selectedMovie) return <p>No movie selected.</p>;

    const { title, episode_id, release_date, opening_crawl } = selectedMovie;
    return (
      <div>
        <h2>Episode {episode_id}: {title}</h2>
        <p>Release Date: {release_date}</p>
        <p>Opening Crawl: {opening_crawl}</p>
      </div>
    );
  };

  return (
    <div className="App">
      <h1>Star Wars Movies</h1>
      <ul>{renderMovies()}</ul>
      {renderMovieDetails()}
    </div>
  );
}

export default App;
