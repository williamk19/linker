import Head from 'next/head'
import Link from './Link.component'

import github from '../../public/github-1.png'
import linkedin from '../../public/linkedin.png'
import www from '../../public/www.png'
import gmail from '../../public/gmail.png'

export default function LinkList() {
  return (
    <div className='flex flex-col items-center'>
      <Link icon={www} name="My Website"/>
      <Link icon={gmail} name="Email"/>
      <Link icon={linkedin} name="LinkedIn"/>
      <Link icon={github} name="Github"/>
    </div>
  )
}