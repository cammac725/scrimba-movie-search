import React from 'react'

export default function SearchMovies() {

  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("submitting")

    const query = "Jurassic Park";

    const url = `https://api.themoviedb.org/3/movie/550?api_key=db2e9c8cc82dda710557d25b38a00323&query=${query}&page=1&adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch(err){
      console.log(err)
    }
  }

  return (
   
    <form className="form" onSubmit={searchMovies}>
      <label htmlFor="query" className="label">Movie Name</label>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="i.e. Jurassic Park" />
      <button className="button" type="submit">Search</button>
    </form>
  )
}
