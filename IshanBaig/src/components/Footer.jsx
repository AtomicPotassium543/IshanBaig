function Footer() {
    return (
        <>
            <footer className="w-full h-3/8 flex justify-center items-center py-4">
                <div className="w-full flex flex-col justify-center items-center space-y-6">
                    <div className="flex flex-col space-y-3">
                        <p className="text-center text-4xl tracking-wider text-white">
                            Ishan Baig
                        </p>
                        <div className="flex flex-row space-x-3 mx-auto">
                            <button className="bg-white scale-75 rounded-lg p-2 cursor-pointer hover:bg-blue-500 hover:-translate-y-2 transition-all duration-300">
                                <span><img src="DiscordIcon.png" className="w-10"/></span>
                            </button>
                            <button className="bg-white scale-75 rounded-lg p-2 cursor-pointer hover:bg-red-500 hover:-translate-y-2 transition-all duration-300">
                                <span><img src="YoutubeIcon.png" className="w-10"/></span>
                            </button>
                        </div>
                    </div>
                    <p className="text-center text-sm tracking-wider text-white space-y-6">
                        © 2025 Ishan Baig. All rights reserved
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer