import { RiMoonClearFill, RiSunFill } from "react-icons/ri";

export default function Toggle({ darkMode, setDarkMode }) {
    return (
        <div className="flex flex-col items-center">
            <div className="w-80 flex flex-col items-end">
                <button
                    onClick={() =>
                        darkMode ? setDarkMode(false) : setDarkMode(true)
                    }
                    className="mt-6 mb-10 text-center inline"
                >
                    {darkMode ? (
                        <RiMoonClearFill
                            fill="white"
                            stroke="white"
                            className="scale-125 hover:-translate-y-1 active:translate-y-1 transition duration-500 ease-in-out"
                        />
                    ) : (
                        <RiSunFill
                            fill="black"
                            stroke="white"
                            className="scale-125 hover:-translate-y-1 active:translate-y-1 transition duration-500 ease-in-out"
                        />
                    )}
                </button>
            </div>
        </div>
    );
}
