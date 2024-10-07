import { Spotlight } from '@/components/ui/spotlight';
import { WordRotate } from '@/components/ui/word-rotate';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import AnimatedShinyText from '@/components/ui/animated-shiny-text';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const Hero = () => {
  return (
    <div>
      <div>
        <Spotlight
          className='-top-40 left-10 h-screen md:-top-20 md:left-32'
          fill='white'
        />
      </div>
      <div className='relative z-20 mx-auto mt-14 w-full max-w-[84rem]'>
        <div
          className='grid grid-cols-1 items-center justify-center gap-10 pb-10 md:pb-40 xl:grid-cols-2'
          style={{ opacity: 1, transform: 'none' }}
        >
          <div className='flex flex-col items-start px-8 xl:px-0'>
            <div
              className={cn(
                'group mb-4 rounded-full border border-black/5 bg-neutral-100 text-sm text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800'
              )}
            >
              <AnimatedShinyText className='inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400'>
                <Link href='https://github.com/Redot-Engine/redot-demo-projects'>
                  ✨ Introducing Redot Engine
                </Link>
                <ArrowRightIcon className='ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5' />
              </AnimatedShinyText>
            </div>
            <h1 className='relative mb-6 max-w-4xl text-left text-4xl font-bold text-zinc-700 dark:text-zinc-100 md:text-7xl'>
              <span className='inline-block break-words align-top no-underline'>
                Build with Redot
                <WordRotate
                  words={['2D games', '3D worlds', 'XR apps', 'Cross-play']}
                  className='bg-gradient-to-r from-red-500 to-orange-600 bg-clip-text text-transparent'
                />
              </span>
            </h1>
            <h2 className='relative mb-8 max-w-2xl text-left text-sm leading-loose tracking-wide text-zinc-500 antialiased dark:text-zinc-300 sm:text-xl'>
              Create your 2D and 3D games, cross-platform projects, or explore
              innovative ideas in XR technology with Redot Engine!
            </h2>
            <div className='relative mb-4 flex w-full flex-col justify-center space-y-2 sm:flex-row sm:justify-start sm:space-x-4 sm:space-y-0'>
              <Button size='lg'>Download Latest</Button>
              <Button size='lg' variant='outline' asChild>
                <Link href='https://github.com/Redot-Engine/redot-docs'>
                  Learn Redot
                </Link>
              </Button>
            </div>
          </div>
          <div className='relative hidden h-full w-full xl:block'>
            <Suspense fallback={<Skeleton className='h-[650] w-[366px]' />}>
              <video
                className='rounded-lg'
                loop={true}
                muted={true}
                preload='auto'
                autoPlay
              >
                <source src='/video.webm' type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </Suspense>
            <div className='mt-8 flex flex-row items-center justify-between'>
              <h2 className='relative w-[50%] text-left text-sm leading-loose tracking-wide text-zinc-500 antialiased dark:text-zinc-300 sm:text-xl'>
                Want to see more games created with Redot?
              </h2>
              <Button asChild>
                <Link href='https://discord.gg/redot'>
                  Join Our Community &rarr;
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
