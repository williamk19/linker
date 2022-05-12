import Image from 'next/image';
import img from '../../public/profile2.svg';
import DarkMode from './DarkMode.component';

export default function Header({darkMode}) {
  return (
    <div className='flex flex-col items-center'>
      <Image
        className='rounded-full'
        src={img}
        alt='Profile picture'
        width={100}
        height={100}
      />

      <h4
        className={`text-lg font-bold mt-5 ${
          darkMode ? 'text-white' : 'text-black'
        }`}
      >
        @williamk19
      </h4>
      <h1
        className={`text-2xl font-bold mt-1.5 mb-9 ${
          darkMode ? 'text-white' : 'text-black'
        }`}
      >
        William Kurniawan
      </h1>
    </div>
  );
}