const VideoTitle = ({title,overView}) => {
  return (
    <div className=" w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overView}</p>
      <div>
          <button className="bg-white text-black p-4 px-12 rounded-lg text-xl hover:opacity-80">
            ▶️ Play</button>
          <button className="bg-gray-500 text-white mx-2 p-4 px-12 rounded-lg text-lg hover:opacity-80">
            ⓘ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
