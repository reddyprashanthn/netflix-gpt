import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const {gemMovieNames, genMovies } = useSelector(store => store.gpt);
  if (!gemMovieNames) return null;

  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
      <div>
        {gemMovieNames.map((movieName,index) =>
            <MovieList 
            key= {movieName} 
            title ={movieName} 
            movies={genMovies[index]}  
            /> 
        )}
        
      </div>
    </div>
  )
}

export default GptMovieSuggestions
