import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import ai from "../utils/genai"
import { API_OPTIONS } from '../utils/constant'
import { addGenMovieResult } from '../utils/gptSlice'

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langkey = useSelector(store => store.config.lang);
  const searchText = useRef(null);
  
  //search Movie in TMDB Databse
  const searchMovieTMDB = async(movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie +'&include_adult=false&language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    return json.results;

  }
  const handleGptSearchClick = async () => {
    //Make an API call to GENAI API and Get Movie result
    const genQuery = "Act as a Movie Recommendation system and suggest some movies for the query:" + searchText.current.value + "only give me names of 5 movies, comma sepeareted like the example result given ahead. Example Result:  Sardar, Sholay, Stalin, Game Changer, KGF  ";
    const genResults = await ai.models.generateContent({
      model: 'gemini-2.0-flash-lite-001',
      contents: genQuery,
    });
    if(!genResults.text){
      return null;
    }
    const genMovies = ((genResults?.text).trimEnd()).split(",");
    const promiseArray = genMovies.map ((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(addGenMovieResult({movieNames: genMovies, movieResults: tmdbResults}));
  }
  return (
    <div className='pt-[50%] md:pt-[10%] flex justify-center' >
      <form className='bg-black md:w-1/2 w-full grid grid-cols-12 rounded-xl' onSubmit={(e) => e.preventDefault()}>
        <input 
        ref= {searchText}
        type="text" className="p-4 m-4 col-span-9 rounded-lg" 
        placeholder={lang[langkey].gptsearchPlaceHolder} />
        <button className='py-2 px-4 m-4 bg-red-700  col-span-3 text-white rounded-lg'
        onClick={handleGptSearchClick}>
            {lang[langkey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
