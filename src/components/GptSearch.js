import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constant'
import BG from "./images/netflix.jpg"

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className='h-screen object-cover md:h-auto' 
        src= {BG} 
        alt = "backgroundpage"/>
      </div>
      <div className=''>
        <GptSearchBar />
        <GptMovieSuggestions />
    </div>
    </>
  )
}

export default GptSearch
