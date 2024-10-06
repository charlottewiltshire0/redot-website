import Image from 'next/image';
import Link from 'next/link';
import { links, social } from '@/data';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';
import { MobileSidebar } from '@/components/ui/mobile-sidebar';

const Header = () => {
  return (
    <header className='sticky top-0 z-[50] w-full border-b border-transparent bg-transparent'>
      <div className='hidden lg:block'>
        <div className='mx-auto flex h-16 max-w-[88rem] items-center px-8'>
          <div className='mr-4 hidden md:flex'>
            <Link
              className='mr-10 flex items-center justify-center space-x-2 py-6 text-center text-2xl font-bold text-neutral-600 selection:bg-emerald-500 dark:text-gray-100'
              href='/'
            >
              <div className='relative flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 bg-black text-sm text-white antialiased md:h-6 md:w-6'>
                <div className='absolute inset-x-0 -top-10 h-10 w-full rounded-full bg-white/[0.2] blur-xl'></div>
                <div className='relative z-20 text-sm text-emerald-500'>
                  <Image
                    src='/logo.png'
                    alt='Logo'
                    width={21}
                    height={21}
                    loading='lazy'
                    decoding='async'
                    data-nimg='1'
                    className='hidden text-transparent dark:block'
                  />
                </div>
              </div>
              <div className='flex flex-col'>
                <h1 className='font-sans text-black dark:text-white'>Redot</h1>
              </div>
            </Link>
          </div>
          <nav className='flex items-center space-x-6 text-sm font-medium xl:flex'>
            {links.map((link) => (
              <a
                key={link.label}
                className='hover:text-foreground/80 text-foreground/60 hidden space-x-1 transition-colors sm:flex'
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className='flex flex-1 items-center justify-end gap-3 text-sm sm:gap-3 md:justify-end'>
            {social.map((link) => (
              <a
                key={link.label}
                className='hover:text-foreground/80 text-foreground/60 hidden space-x-1 transition-colors sm:flex'
                href={link.href}
              >
                {link.label}
              </a>
            ))}
            <Button size='sm' asChild>
              <Link href='https://github.com/Redot-Engine/redot-engine'>
                Download
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className='block lg:hidden'>
        <div className='flex w-full items-center justify-between rounded-md px-4 py-4'>
          <Link href='/' className='flex items-center gap-1.5'>
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
          </Link>
          <MobileSidebar />
        </div>
      </div>
    </header>
  );
};

export default Header;
