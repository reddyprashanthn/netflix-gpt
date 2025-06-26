import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constant'
import BG from "./images/netflix.jpg"

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src= {BG} 
        alt = "backgroundpage"/>
      </div>
        <GptSearchBar />
        <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch
