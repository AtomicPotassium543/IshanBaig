import { useEffect, useState } from "react"

function Navbar() {
const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolledPercentage = (scrollTop / windowHeight) * 100;

        if (scrolledPercentage > 20) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav id="navbar" className={`w-full scale-50 flex justify-between items-center flex-row px-10 sticky top-0 left-0 z-20 ${isScrolled ? "border-b-2 scale-100 bg-black border-white" : "bg-transparent scale-95"} transition-all duration-500`}>
                <img src="./Logo.png" className="h-full" />
                <div className="flex flex-row invisible space-x-12 sm:invisible md:visible lg:visible">
                    <button className="w-1/2 h-full">
                        <p className="text-lg text-white text-bold text-nowrap">
                            About me
                        </p>
                    </button>
                    <button className="w-1/2 h-full">
                        <p className="text-lg text-white text-bold text-nowrap">
                            Socials
                        </p>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar