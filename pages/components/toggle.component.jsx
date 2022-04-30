import { RiMoonClearFill } from 'react-icons/ri';

export default function Toggle() {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-80 flex flex-col items-end'>
        <button className='mt-6 mb-10 text-center inline'>
          <RiMoonClearFill fill='white' stroke='white' className='scale-125' />
        </button>
      </div>
    </div>
  );
}
