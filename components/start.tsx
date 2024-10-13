'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BackgroundLines } from '@/components/ui/background-lines';

const Start = () => {
  return (
    <section className='relative'>
      <BackgroundLines className='flex w-full flex-col items-center justify-center px-4'>
        <h2 className='relative z-20 bg-gradient-to-b from-neutral-900 to-neutral-700 bg-clip-text py-2 text-center font-sans text-2xl font-bold tracking-tight text-transparent dark:from-neutral-600 dark:to-white md:py-10 md:text-4xl lg:text-7xl'>
          Ready to Create?
        </h2>
        <p className='mx-auto max-w-xl text-center text-sm text-neutral-700 dark:text-neutral-400 md:text-lg'>
          Create captivating 2D and 3D games with Redot Engine for
          cross-platform immersive experiences.
        </p>
        <Button asChild>
          <Link href='/download'>Get Started</Link>
        </Button>
      </BackgroundLines>
    </section>
  );
};

export default Start;
