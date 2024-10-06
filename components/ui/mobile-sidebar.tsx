import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { links, social } from '@/data';

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side='left'>
        <SheetHeader>
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
        </SheetHeader>
        <div className='flex flex-col items-start justify-start'>
          {links.map((link) => (
            <a
              key={link.label}
              className='relative flex items-center space-x-2'
              href={link.href}
            >
              <span className='block text-[26px] text-black dark:text-white'>
                {link.label}
              </span>
            </a>
          ))}
          {social.map((link) => (
            <a
              key={link.label}
              className='relative flex items-center space-x-2'
              href={link.href}
            >
              <span className='block text-[26px] text-black dark:text-white'>
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
