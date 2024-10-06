import Hero from '@/components/hero';
import Header from '@/components/ui/header';

export default function Home() {
  return (
    <>
      <Header />
      <div className='dark:bg-brand relative h-screen overflow-hidden bg-white px-2 pb-40 pt-20 md:px-4 md:pt-20 lg:px-8'>
        <Hero />
      </div>
    </>
  );
}
