import Head from "next/head";
import Container from "@/src/components/Container.component";
import favicon from "@/public/favicon.ico";

export default function Home() {
    return (
        <>
            <Head>
                <title>Links | williamk19</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta
                    name="description"
                    content="Links for all williamk19 other social media"
                />
                <link
                    rel="shortcut icon"
                    href={favicon.src}
                />
            </Head>
            <Container />
        </>
    );
}
