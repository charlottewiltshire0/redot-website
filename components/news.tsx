import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { news } from '@/data';
import Link from 'next/link';

const News = () => {
  return (
    <section className='relative mx-auto mt-16 w-full max-w-[84rem] md:mt-0'>
      <div>
        <h2 className='text-neutrl-900 mb-4 text-3xl font-medium tracking-tight dark:text-white sm:text-left'>
          Latest news
        </h2>
        <BentoGrid className='grid max-w-[84rem] grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-3'>
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
              header={item.header}
              className={index === 2 ? 'col-start-auto md:col-start-2' : ''}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default News;
