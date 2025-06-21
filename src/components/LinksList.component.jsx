import Link from "./Link.component";

import github from "../../public/github-1.png";
import linkedin from "../../public/linkedin.png";
import www from "../../public/www.png";
import gmail from "../../public/gmail.png";

export default function LinkList() {
    const LINKS = [
        {
            link: "https://williamk19.com",
            icon: www,
            name: "My Website",
        },
        {
            link: "mailto:williamkurniawan1144@gmail.com",
            icon: gmail,
            name: "Email",
        },
        {
            link: "https://www.linkedin.com/in/williamk19/",
            icon: linkedin,
            name: "LinkedIn",
        },
        {
            link: "https://github.com/williamk19",
            icon: github,
            name: "Github",
        },
    ];

    return (
        <div className="flex flex-col items-center flex-grow overflow-y-auto">
            {LINKS.map((link, index) => (
                <Link
                    key={index}
                    link={link.link}
                    icon={link.icon}
                    name={link.name}
                />
            ))}
        </div>
    );
}
