import React, { useState } from 'react';
import MovieCard from './MovieCard';

export default function SearchMovies() {

  // states - input query, movies
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=db2e9c8cc82dda710557d25b38a00323&query=${query}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.results);
      setMovies(data.results)
    } catch(err){
      console.log(err)
    }
  }

  return (
    <div>
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">Movie Name</label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e. Jurassic Park"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          />
        <button className="button" type="submit">Search</button>
      </form>
      <div className="card-list">
        {movies.filter(movie => movie.poster_path).map(movie => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  )
}
