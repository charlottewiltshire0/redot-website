import Hero from '@/components/hero';

export default function Home() {
  return (
    <>
      <div className='relative h-screen overflow-hidden bg-white px-2 pb-40 pt-20 dark:bg-black md:px-4 md:pt-20 lg:px-8'>
        <Hero />
      </div>
    </>
  );
}
