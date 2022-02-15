import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LinkList from './components/LinksList.component'

export default function Home() {
  return (
    <div>
      <LinkList/>
    </div>
  )
}
