import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant"
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
    const getMovieVideos = async (movieId) => {
      const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
      const json = await data.json();
      const filterdata = (json.results.filter((video) => video.type === "Trailer"));
      const trailer = filterdata.lenght ? filterdata[0] : json.results[0];
      dispatch(addTrailerVideo(trailer));
    }
    
    useEffect(()=> {
        getMovieVideos(movieId)
    },[])
}
export default useMovieTrailer;
