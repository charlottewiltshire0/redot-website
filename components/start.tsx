import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const WavyBackground = dynamic(() =>
  import('@/components/ui/wavy-background').then((mod) => mod.WavyBackground)
);

const Start = () => {
  return (
    <section className='relative'>
      <WavyBackground className='mx-auto max-w-4xl pb-40'>
        <div className='flex flex-col items-center justify-center space-y-4'>
          <div>
            <p className='inter-var text-center text-2xl font-bold text-white md:text-4xl lg:text-7xl'>
              Ready to Create?
            </p>
            <p className='inter-var mt-4 text-center text-base font-normal text-white md:text-lg'>
              Create captivating 2D and 3D games with Redot Engine for
              cross-platform immersive experiences.
            </p>
          </div>
          <div>
            <Button asChild>
              <Link href='/download'>Get Started</Link>
            </Button>
          </div>
        </div>
      </WavyBackground>
    </section>
  );
};

export default Start;
