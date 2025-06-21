import "@/styles/globals.css";
import "@/styles/Home.module.css";
import { Mulish } from "next/font/google";

const mulish = Mulish({
	subsets: ["latin"],
	variable: "--font-mulish",
});

function MyApp({ Component, pageProps }) {
    return (
		<main className={`${mulish.variable} font-sans`}>
			<Component {...pageProps} />
		</main>
	);
}

export default MyApp;
