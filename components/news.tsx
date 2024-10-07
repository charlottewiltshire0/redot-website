import { BentoGridNews, BentoGridItem } from '@/components/ui/bento-grid-news';
import { news } from '@/data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const News = () => {
  return (
    <section className='relative mx-auto mt-16 w-full max-w-[84rem] px-4 md:mt-0 md:px-0'>
      <div className='space-y-4'>
        <h2 className='text-neutrl-900 text-3xl font-medium tracking-tight dark:text-white sm:text-left'>
          Latest news
        </h2>
        <BentoGridNews className='grid max-w-[84rem] grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-3'>
          <BentoGridItem
            key={0}
            title={news[0].title}
            description={news[0].description}
            header={news[0].header}
            icon={news[0].icon}
            href={news[0].href}
            className='row-span-1 md:row-span-3'
          />

          {news.slice(1).map((item, index) => (
            <BentoGridItem
              key={index + 1}
              title={item.title}
              description={item.description}
              icon={item.icon}
              href={item.href}
              className={index === 2 ? 'col-start-auto md:col-start-2' : ''}
            />
          ))}
        </BentoGridNews>
        <div className='flex flex-row items-center justify-between px-0 md:px-8'>
          <h2 className='relative w-[50%] text-left text-sm leading-loose tracking-wide text-zinc-500 antialiased dark:text-zinc-300 sm:text-xl'>
            Want to see more news?
          </h2>
          <Button variant='secondary' asChild>
            <Link href='/blog'>More News</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;
