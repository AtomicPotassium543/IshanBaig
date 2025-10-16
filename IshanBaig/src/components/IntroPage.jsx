function TopPage() {
    return (
        <>
            <div className="w-full h-screen bg-gradient-to-b from-transparent to-black">
                <video 
                    src="./public/Cosmic.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    playbackRate = {0.5}
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-50 -z-10"
                >
                </video>
                <div className="h-screen w-full flex flex-col items-center text-white relative z-10">
                    <div className="w-2/3 lg:w-1/3 md:w-2/3 sm:w-2/3 h-1/3 space-y-6 flex flex-col items-center">
                        <img src="Icon.png" className="w-2/3 mx-auto"/>
                        <p className="w-full text-nowrap mx-auto text-3xl lg:text-7xl md:text-5xl sm:text-3xl text-center tracking-wider font-bold">Ishan Baig</p>
                        <p className="w-full text-nowrap mx-auto text-sm lg:text-lg md:text-md sm:text-sm text-center text-gray-400 font-regular">Professional content creator and programmer.</p>

                        <div className="flex flex-row space-x-6 mx-auto">
                            <button className="bg-white rounded-lg p-2 cursor-pointer hover:bg-blue-500 hover:-rotate-12 hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 transition-all duration-300">
                                <span><img src="DiscordIcon.png" className="w-5 lg:w-10 md:w-7 sm:w-5"/></span>
                            </button>
                            <button className="bg-white rounded-lg p-2 cursor-pointer hover:bg-red-500 hover:rotate-12 hover:scale-105 hover:-translate-y-2 hover:translate-x-2 transition-all duration-300">
                                <span><img src="YoutubeIcon.png" className="w-5 lg:w-10 md:w-7 sm:w-5"/></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopPage