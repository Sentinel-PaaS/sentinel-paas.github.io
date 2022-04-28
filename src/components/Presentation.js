function Presentation() {
  return (
    <div id="presentation" className="bg-gray-200">
      <div className="flex flex-col py-24 max-w-screen-xl mx-auto">
        <h2 className=" text-center text-6xl text-gray-800 mb-12 font-extrabold">Presentation</h2>
        <div className="mx-20 videoWrapper">
          <iframe className="absolute rounded-lg border-2 border-gray-700 shadow-lg w-full h-full" src="https://www.youtube.com/embed/1vaIc_sCDag" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Presentation;