import ArticleItemList from '@/components/ui/article-list-item';
import { getCategorisedArticles } from '@/lib/articles';
import { Tabs } from '@/components/ui/tabs';

export default function Blog() {
  const articles = getCategorisedArticles();

  const tabs = Object.keys(articles).map((category) => ({
    title: category,
    value: category.toLowerCase(),
    content: (
      <div className=''>
        <ArticleItemList category={category} articles={articles[category]} />
      </div>
    ),
  }));

  return (
    <>
      <div className='flex flex-col overflow-hidden bg-white px-2 pb-40 pt-20 dark:bg-black md:px-4 md:pt-20 lg:px-8'>
        <div className='absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black dark:bg-grid-white/[0.03]'>
          {/* Radial gradient for the container to give a faded look */}
          <div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black'></div>
        </div>
        <section className='relative z-20 mx-auto mt-16 h-screen w-full max-w-[84rem]'>
          <Tabs tabs={tabs} />
        </section>
      </div>
    </>
  );
}
