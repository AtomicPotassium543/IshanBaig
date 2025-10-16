import { useEffect, useState } from "react"

function MyContent() {

    const tabs = [
        ["Countryballs", "./public/USA.png", "Countryballs are basically countries represented in the form of balls that have their national flags on them. They are used to illustrate historical and geopolitical events in a simplistic way."],
        ["Gaming", "./public/Peashooter.png", "I also play some games like Super Auto Pets, Plants vs. Zombies, and EvoWorld.io (FlyOrDie.io). If you are interested in any of these games, please click the button below to check them out!"],
        ["Sporcle.com", "./public/flags.png", "Sporcle.com is a famous trivia and quiz website that has a plethora of different quizzes about many different subjects. I have made several videos in which I test my geography skills by doing some of the geography-related quizzes."]
    ]

    const [activeTab, setActiveTab] = useState(1);

    const [inactiveTab1, setInactiveTab1] = useState(0);
    const [inactiveTab2, setInactiveTab2] = useState(2);

    function handleLeftTabClick() {
        if (activeTab === 0) {
            setActiveTab(tabs.length - 1);
            setInactiveTab1(tabs.length - 2);
            setInactiveTab2(1);
        } else {
            setActiveTab(activeTab - 1);
            setInactiveTab1(activeTab - 2);
            setInactiveTab2(activeTab);
        }
    }

    function handleRightTabClick() {
        if (activeTab === tabs.length - 1) {
            setActiveTab(0);
            setInactiveTab1(tabs.length - 1);
            setInactiveTab2(1);
        } else {
            setActiveTab(activeTab + 1);
            setInactiveTab1(activeTab);
            setInactiveTab2(activeTab + 2);
        }
    }

    

    return (
        <>
            <div className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-black via-transparent to-black">
                <video 
                    src="./public/RedCosmic.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    playbackRate = {0.5}
                    className="absolute w-full h-full object-cover opacity-50 -z-10 saturate-200"
                >
                </video>
                
                <div className="w-full h-screen flex flex-col justify-center items-center my-auto">
                    <div className="w-full h-1/8">
                        <p className="w-full text-center font-bold text-5xl text-white tracking-wider">My Content</p>
                    </div>
                    <div className="w-7/8 h-3/4 flex flex-row">
                        <div className="w-1/4 flex-col mx-auto items-center justify-center space-y-4 opacity-50 scale-75 hidden sm:hidden md:hidden lg:flex">
                            <p className="w-full text-center font-medium text-4xl text-white tracking-wider">
                                {tabs[inactiveTab2][0]}
                            </p>
                            <div className="w-full flex flex-row">
                                <img className="w-6/8 mx-auto shadow-2xl rounded-lg" src={tabs[inactiveTab1][2]}/>
                            </div>
                            <p className="w-6/8 text-center text-sm text-white tracking-wide">
                                {tabs[inactiveTab2][2]}
                            </p>
                        </div>
                        <div className="w-2/4 flex flex-col mx-auto items-center justify-center space-y-4">
                            <p className="w-full text-center font-medium text-4xl text-white tracking-wider">
                                {tabs[activeTab][0]}
                            </p>
                            <div className="w-full flex flex-row sm:w-7/8">
                                <button className="size-12 p-2 bg-black rounded-full my-auto cursor-pointer" onClick={handleLeftTabClick}>
                                    <img src="LeftArrow.png" className="mx-auto my-auto"/>
                                </button>
                                <img className="w-6/8 mx-auto shadow-2xl rounded-lg" src={tabs[activeTab][1]}/>
                                <button className="size-12 p-2 bg-black rounded-full my-auto cursor-pointer" onClick={handleRightTabClick}>
                                    <img src="RightArrow.png" className="mx-auto my-auto"/>
                                </button>
                            </div>
                            <p className="w-6/8 text-center text-md text-white tracking-wide">
                                {tabs[activeTab][2]}
                            </p>
                        </div>
                        <div className="w-1/4 flex-col mx-auto items-center justify-center space-y-4 opacity-50 scale-75 hidden sm:hidden md:hidden lg:flex">
                            <p className="w-full text-center font-medium text-4xl text-white tracking-wider">
                                {tabs[inactiveTab1][0]}
                            </p>
                            <div className="w-full flex flex-row">
                                <img className="w-6/8 mx-auto shadow-2xl rounded-lg" src={tabs[inactiveTab1][1]}/>
                            </div>
                            <p className="w-6/8 text-center text-sm text-white tracking-wide">
                                {tabs[inactiveTab1][2]}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyContent