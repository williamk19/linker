import Head from 'next/head'
import Link from './Link.component'

import github from '../../public/github-1.png'
import linkedin from '../../public/linkedin.png'
import www from '../../public/www.png'
import gmail from '../../public/gmail.png'

export default function LinkList() {
  return (
    <div className='flex flex-col items-center'>
      <Link link="https://william-nod.com" icon={www} name="My Website"/>
      <Link link="mailto:williamkurniawan1144@gmail.com" icon={gmail} name="Email"/>
      <Link link="https://www.linkedin.com/in/william-nod/" icon={linkedin} name="LinkedIn"/>
      <Link link="https://github.com/william-nod" icon={github} name="Github"/>
    </div>
  )
}