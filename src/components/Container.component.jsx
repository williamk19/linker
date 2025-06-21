import { useState } from "react";
import LinkList from "./LinksList.component";
import Header from "./Header.component";
import Footer from "./Footer.component";
import Toggle from "./toggle.component";

export default function Container() {
    const [darkMode, setDarkMode] = useState(true);
    return (
        <div
            className={`h-screen ${
                darkMode ? "bg-neutral-900" : "bg-slate-100"
            } transition-all duration-500 ease-in-out`}
        >
			<div className="h-full w-full overflow-y-auto">
				<Toggle
					darkMode={darkMode}
					setDarkMode={setDarkMode}
				/>
				<Header darkMode={darkMode} />
				<LinkList />
				<Footer darkMode={darkMode} />
			</div>
        </div>
    );
}
