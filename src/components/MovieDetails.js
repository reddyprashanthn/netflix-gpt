import { useNavigate, useParams } from 'react-router-dom'
import useMoviesDetails from '../hooks/useMoviesDetails';
import Info from './Info';
import VideoBackground from './VideoBackground';

const MovieDetails = () => {
  const navigate = useNavigate();
    const {movieId} = useParams();
    useMoviesDetails(movieId);
    return (
    <div>
      <div className='bg-black opacity-100'>
      <button className='m-6 font-bold text-3xl text-white' onClick={() => navigate(-1)}>くBack</button>
      </div>
      <VideoBackground movieId={movieId}/>
      <Info />
    </div>
  )
}

export default MovieDetails
