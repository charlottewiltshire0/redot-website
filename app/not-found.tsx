import Image from 'next/image';

export default function NotFound() {
  return (
    <div className='relative z-10 flex h-screen flex-col justify-center overflow-hidden bg-blue-600 px-6 text-lg text-white sm:px-36 sm:text-xl'>
      <div
        aria-hidden='true'
        className='text-6xl sm:text-7xl md:text-[length:120px]'
      >
        :)
      </div>
      <div className='my-10 sm:my-16 sm:max-w-4xl md:text-[length:30px] md:leading-[40px]'>
        Looks like you&#39;ve wandered off the beaten path! This page has packed
        its bags and left for a vacation.
      </div>
      <div className='my-10 sm:my-16 sm:max-w-4xl md:text-[length:30px] md:leading-[40px]'>
        Don&#39;t worry, it happens to the best of us! You might want to check
        the URL, or maybe even your sense of direction.
      </div>
      <Image
        className='h-24 w-24'
        alt=''
        aria-hidden='true'
        src='/qrcode.webp'
      />
    </div>
  );
}
