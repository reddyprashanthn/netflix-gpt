import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({posterPath, movieId}) => {
  if(!posterPath) return null;
  return (
    <div className="w-48 pr-4">
      <Link to={`/${movieId}`}>
        <img 
        className="hover:scale-110"
        alt="Movie card"
        src= {IMG_CDN_URL + posterPath}
        />
      </Link>
    </div>
  )
}

export default MovieCard
