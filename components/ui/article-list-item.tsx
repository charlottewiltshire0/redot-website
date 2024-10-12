import type { ArticleItem } from '@/types';
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';
import { IconNews } from '@tabler/icons-react';
import Image from 'next/image';

interface Props {
  articles: ArticleItem[];
}

const ArticleItemList = ({ articles }: Props) => {
  return (
    <div>
      <BentoGrid>
        {articles.map((article, id) => (
          <BentoCard
            name={article.title}
            className='col-span-3 lg:col-span-1'
            background={
              <Image
                className='absolute -right-20 -top-20 object-cover transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105'
                src={article.background}
                alt={article.title}
                fill
              />
            }
            Icon={IconNews}
            description={article.description}
            href={`/blog/${article.id}`}
            cta='Read more'
            key={id}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default ArticleItemList;
