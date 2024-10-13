import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ArticleItemList from '@/components/ui/article-list-item';
import { getCategorisedArticles } from '@/lib/articles';

const News = () => {
  const articles = getCategorisedArticles();

  const latestArticles = Object.keys(articles).reduce((acc, category) => {
    const latestInCategory = articles[category].slice(0, 2);
    return acc.concat(latestInCategory);
  }, []);

  return (
    <section className='relative mx-auto mt-16 w-full max-w-[84rem] px-4 md:mt-0 md:px-0'>
      <div className='space-y-4'>
        <div className='flex flex-row items-center justify-between'>
          <h2 className='text-neutrl-900 text-3xl font-medium tracking-tight dark:text-white sm:text-left'>
            News
          </h2>
          <Button variant='outline' asChild>
            <Link href='/blog'>View all</Link>
          </Button>
        </div>
        <ArticleItemList articles={latestArticles} />
      </div>
    </section>
  );
};

export default News;
