function AboutMe() {
    return (
        <>
            <div className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-black via-transparent to-black">
                <video 
                    src="./public/Camp.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    playbackRate = {0.5}
                    className="absolute w-full h-full object-cover opacity-50 -z-10 saturate-200"
                >
                </video>
                <div className="w-7/9 h-3/4 flex flex-col lg:flex-row md:flex-row sm:flex-col space-x-64 space-y-128">
                    <div className="w-1/3 h-1/2 flex flex-col sm:flex-col md:flex-col space-y-12 my-auto mx-auto">
                        <div className="flex flex-col space-y-3">
                            <p className="text-white text-5xl text-center lg:text-left sm:text-center font-semibold tracking-wider">About Me</p>
                            <p className="text-white text-sm text-center lg:text-left sm:text-center font-lg">"Making content meant to satisfy..."</p>
                        </div>
                        <p className="text-white text-sm text-center lg:text-left lg:text-lg sm:text-center tracking-wider">Hello there, I am Ehsaan Baig, also known as The Netizen or Aquablaze23. I'm a small YouTuber with over 300 subscribers. I make videos about countryballs and gaming. If you'd like to support me, subscribe and join my Discord server!</p>
                    </div>
                    <div className="w-1/3 h-1/2 bg-black my-auto shadow-2xl mx-auto">
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe