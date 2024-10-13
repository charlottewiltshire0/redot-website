import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BentoGridItem, BentoGridNews } from '@/components/ui/bento-grid-news';
import { involved } from '@/data';

const Involved = () => {
  return (
    <section className='relative mx-auto mt-24 w-full max-w-[84rem] md:mt-32 md:px-0'>
      <div className='space-y-4'>
        <div className='flex flex-row items-center justify-between'>
          <h2 className='text-neutrl-900 text-3xl font-medium tracking-tight dark:text-white sm:text-left'>
            Get Involved
          </h2>
          <Button variant='outline' asChild>
            <Link href='/community'>Learn more</Link>
          </Button>
        </div>
        <BentoGridNews>
          {involved.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
            />
          ))}
        </BentoGridNews>
      </div>
    </section>
  );
};

export default Involved;
