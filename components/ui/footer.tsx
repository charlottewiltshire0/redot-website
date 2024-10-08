import Image from 'next/image';
import Link from 'next/link';
import { footer_links_asset, footer_links_first, social } from '@/data';

const Footer = () => {
  return (
    <footer className='bottom-0 z-[50] w-full border-t border-neutral-100 bg-black px-8 py-20 dark:border-white/[0.1]'>
      <div className='mx-auto flex max-w-7xl flex-col items-start justify-between text-sm text-neutral-500 sm:flex-row'>
        <div>
          <div className='mb-4 mr-4 md:flex'>
            <Link
              className='mr-10 flex items-center justify-center space-x-2 py-0 text-center text-2xl font-bold text-neutral-600 selection:bg-emerald-500 dark:text-gray-100'
              href='/'
            >
              <div className='relative flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 bg-black text-sm text-white antialiased md:h-6 md:w-6'>
                <div className='absolute inset-x-0 -top-10 h-10 w-full rounded-full bg-white/[0.2] blur-xl'></div>
                <div className='relative z-20 text-sm text-emerald-500'>
                  <Image
                    src='/logo.png'
                    alt='Logo'
                    width={24}
                    height={24}
                    loading='lazy'
                    decoding='async'
                    data-nimg='1'
                    className='hidden text-transparent dark:block'
                  />
                </div>
              </div>
              <div className='flex flex-col'>
                <h1 className='font-sans text-black dark:text-white'>
                  Redot Engine
                </h1>
              </div>
            </Link>
          </div>
          <div>リードット</div>
          <div className='mt-2'>Fork of the Godot Engine. Mak Gam.</div>
          <div className='mt-2'>
            Website&nbsp;
            <Link
              className='font-medium text-neutral-600 dark:text-sky-500'
              target='__blank'
              href='https://github.com/charlottewiltshire0/redot-website'
            >
              source code on GitHub.
            </Link>
          </div>
        </div>
        <div className='mt-10 grid grid-cols-3 items-start gap-10 md:mt-0'>
          <div className='mt-4 flex flex-col justify-center space-y-4'>
            {footer_links_first.map((link) => (
              <Link
                key={link.name}
                target='__blank'
                className='text-foreground/60 transition-colors hover:text-foreground/80'
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className='mt-4 flex flex-col justify-center space-y-4'>
            {social.map((link) => (
              <Link
                key={link.label}
                target='__blank'
                className='text-foreground/60 transition-colors hover:text-foreground/80'
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className='mt-4 flex flex-col justify-center space-y-4'>
            {footer_links_asset.map((link) => (
              <Link
                key={link.name}
                target='__blank'
                className='text-foreground/60 transition-colors hover:text-foreground/80'
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
