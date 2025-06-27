import { useSelector } from "react-redux"
import MovieList from "./MovieList"
const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return movies && (
    <div className="bg-black">
      <div className="mt-0 md:-mt-52 pl-1 md:pl-5 relative z-20">
         <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
         <MovieList title={"Popular"} movies={movies.popularMovies}/>
         <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
         <MovieList title={"Upcoming"} movies={movies.upComingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer
