import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie= movies[0];
  const {title, overview, id} = mainMovie;
  return (
    <div>
        <VideoTitle title = {title} overView={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
