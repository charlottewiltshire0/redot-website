'use client';

import GradualSpacing from '@/components/ui/gradual-spacing';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CoolMode } from '@/components/ui/cool-mode';

const Download = () => {
  const platform =
    typeof window !== 'undefined'
      ? window.navigator.userAgent.includes('Win')
        ? 'Windows'
        : window.navigator.userAgent.includes('Mac')
          ? 'Mac'
          : window.navigator.userAgent.includes('Linux')
            ? 'Linux'
            : 'your platform'
      : null;

  const platformDownloadLink =
    platform === 'Windows'
      ? 'https://github.com/Redot-Engine/redot-engine/releases/download/2024101114/redot-windows-template.zip'
      : platform === 'Mac'
        ? 'https://github.com/Redot-Engine/redot-engine/releases/download/2024101114/macos-template.zip'
        : platform === 'Linux'
          ? 'https://github.com/Redot-Engine/redot-engine/releases/download/2024101114/redot-linux-template.zip'
          : 'https://github.com/Redot-Engine/redot-engine/releases';

  return (
    <section>
      <div className='relative z-20 mx-auto mt-16 w-full max-w-[84rem]'>
        <div className='flex flex-col items-center px-8 xl:px-0'>
          <div className='flex items-center justify-center gap-10 pb-10 md:pb-40'>
            <div className='flex flex-col items-start px-8 xl:px-0'>
              <h1 className='relative mb-12 max-w-4xl text-left text-4xl font-bold text-zinc-700 dark:text-zinc-100 md:text-7xl'>
                <span className='inline-block break-words text-center align-top no-underline'>
                  Download Redot for
                  <GradualSpacing
                    className='font-display text-center text-4xl font-bold -tracking-widest text-black dark:text-white md:text-7xl md:leading-[5rem]'
                    text={platform as string}
                  />
                </span>
              </h1>
              <div className='mb-4 flex w-full flex-col items-center justify-center space-y-6 sm:space-x-4 sm:px-0 md:px-12'>
                <CoolMode>
                  <Button className='w-full' size='lg' asChild>
                    <Link href={platformDownloadLink} target='__blank'>
                      Download Latest
                    </Link>
                  </Button>
                </CoolMode>
                <div className='text-gray-400'>
                  Looking for{' '}
                  <Link
                    className='font-medium text-neutral-600 dark:text-sky-500'
                    target='_blank'
                    href='https://github.com/Redot-Engine/redot-engine/releases/'
                  >
                    previous versions?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
