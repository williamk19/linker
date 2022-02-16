import Head from 'next/head'
import Image from 'next/image'

export default function Link(props) {
  return (
    <div className='mb-5 rounded-md cursor-pointer drop-shadow-xl bg-neutral-800 font-bold text-lg text-white w-80 items-center justify-center relative py-4 transition-all hover:-translate-y-1'>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <span className='absolute cursor-pointer left-10 mt-0.5'>
          <Image
            src={props.icon}
            alt="logo"
            width={24}
            height={24}
          />
        </span>
        <h1 className='text-center cursor-pointer relative'>{props.name}</h1>
      </a>
    </div>
  )
}