import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { addMovieDetails } from "../utils/moviesSlice";


const useMoviesDetails = (movieId) => {
    const dispatch = useDispatch();
    // Fetch data from TMDB API and update store
    const getMovieDeatils = async(movieId) => {
      const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '?language=en-US', API_OPTIONS);
      const json = await data.json();
      dispatch(addMovieDetails(json));
    }
    
  useEffect(()=>{
    getMovieDeatils(movieId)
  },[])
}

export default useMoviesDetails;