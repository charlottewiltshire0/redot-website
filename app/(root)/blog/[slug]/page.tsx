import Link from 'next/link';
import Image from 'next/image';
import { getArticleData } from '@/lib/articles';
import { IconArrowLeft } from '@tabler/icons-react';

const Article = async ({ params }: { params: { slug: string } }) => {
  const articleData = await getArticleData(params.slug);

  return (
    <>
      <div className='flex flex-col overflow-hidden bg-white px-2 pb-40 pt-20 dark:bg-black md:px-4 md:pt-20 lg:px-8'>
        <div className='absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black dark:bg-grid-white/[0.03]'>
          {/* Radial gradient for the container to give a faded look */}
          <div className='pointer-events-none absolute inset-0 flex bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black'></div>
        </div>
        <section className='relative mx-auto h-full w-full max-w-[60rem] md:px-0'>
          <div className='relative h-full'>
            <Link href={`/blog/${articleData.id}`}>
              <Image
                className='rounded-lg object-cover'
                src={articleData.background}
                alt={articleData.title}
                fill='cover'
              />
            </Link>
          </div>

          <div className='mb-12 flex justify-between'>
            <Link href={'/'} className='flex flex-row place-items-center gap-1'>
              <IconArrowLeft width={20} />
              <span>Back to Home</span>
            </Link>
            <p>{articleData.date.toString()}</p>
          </div>
          <article
            className='article'
            dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}
          />
        </section>
      </div>
    </>
  );
};

export default Article;
