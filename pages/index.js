import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Container from './components/Container.component';
import favicon from '../public/favicon.ico';


export default function Home() {
  console.log(favicon);
  return (
    <>
      <Head>
        <title>Links</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Links for all williamk19 other social media" />
        <link rel="shortcut icon" href={favicon.src} />
      </Head>
      <Container />
    </>
  );
}
