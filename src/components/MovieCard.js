import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className="w-48 pr-4">
      <img alt="Movie card"
        src= {IMG_CDN_URL + posterPath}
      />
    </div>
  )
}

export default MovieCard
