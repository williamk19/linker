import Image from "next/image";
import img from "../../public/profile2.svg";

export default function Header({ darkMode }) {
    return (
        <div className="flex flex-col items-center flex-shrink-0">
            <Image
                className="rounded-full"
                src={img}
                alt="Profile picture"
                width={100}
                height={100}
            />
            <h4
                className={`text-lg font-bold mt-4 ${
                    darkMode ? "text-white" : "text-black"
                }`}
            >
                @williamk19
            </h4>
            <h1
                className={`text-2xl font-bold mt-1.5 mb-7 ${
                    darkMode ? "text-white" : "text-black"
                }`}
            >
                William Kurniawan
            </h1>
        </div>
    );
}
