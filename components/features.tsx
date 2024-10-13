import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';
import { features } from '@/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Features = () => {
  return (
    <section
      id='features'
      className='relative mx-auto mt-24 w-full max-w-[84rem] px-4 md:mt-32 md:px-0'
    >
      <div className='space-y-4'>
        <div className='flex flex-row items-center justify-between'>
          <h2 className='text-neutrl-900 text-3xl font-medium tracking-tight dark:text-white sm:text-left'>
            Next-Gen Game Design
          </h2>
          <Button variant='outline' asChild>
            <Link href='/#features'>Learn more</Link>
          </Button>
        </div>
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default Features;
