import Image from 'next/image';
import img from '../../public/profile.png';

export default function Header() {
  return (
    <div className="flex flex-col items-center mt-16">
      <Image
        className="rounded-full"
        src={img}
        alt="Profile picture"
        width={100}
        height={100}
      />
      <h4 className="text-lg font-bold mt-5">@william.nod</h4>
      <h1 className="text-2xl font-bold mt-1.5 mb-9">William Kurniawan</h1>
    </div>
  )
}