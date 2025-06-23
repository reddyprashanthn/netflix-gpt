import React from 'react'
import { useSelector } from 'react-redux';
import { IMG_CDN_URL } from '../utils/constant';

const Info = () => {
    const {
      poster_path,
      title,
      overview,
      tagline,
      release_date,
      spoken_languages,
      genres,
      runtime
    } = useSelector(
      (store) => store.movies?.movieDetails
    );
  return (
    <div className='flex bg-black'>
      <img src={IMG_CDN_URL+poster_path} alt="poster" className='w-1/4 p-8'/>
      <div className='m-8 p-2'>
        <h1 className='text-6xl text-white my-2 font-bold'>Title : {title}</h1>
        <h2 className='text-2xl text-white my-2'>Tag Line : {tagline}</h2>
        <h2 className='text-xl text-white my-2'>Overview : {overview}</h2>
        <h2 className='text-xl text-white my-2'>Langauage: {spoken_languages?.map(
            (lang,index)=><span key={index}>{lang.english_name}
            {index < spoken_languages.length - 1 ? ", ": ""}
          </span>
          )}
        </h2>
        <h2 className='text-xl text-white my-2'>Genres : {genres?.map(
          (genre,index) => 
          <span key = {genre.id}>
            {genre.name}
            {index < genres.length - 1 ? ', ' : ''}
          </span> 
        )}
        </h2>
        <h2 className='text-xl text-white my-2'>Time : {runtime}mins</h2>
        <h2 className='text-xl text-white my-2'>Release Date : {release_date}</h2>
      </div>
    </div>
  )
}

export default Info
