const VideoTitle = ({title,overView}) => {
  return (
    <div className=" w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-xl md:text-5xl font-bold md:pt-0 pt-10">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overView}</p>
      <div className="my-4 md:my-0">
          <button className="bg-white text-black py-1 px-3 md:py-4 md:px-12 rounded-lg text-xl hover:opacity-80">
            ▶️ Play</button>
          <button className="hidden md:inline-block bg-gray-500 text-white mx-2 p-4 px-12 rounded-lg text-lg hover:opacity-80">
            ⓘ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
