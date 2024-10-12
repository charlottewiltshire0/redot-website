import type { ArticleItem } from '@/types';
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';
import { IconDeviceGamepad2 } from '@tabler/icons-react';

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
            background={<div>123</div>}
            Icon={IconDeviceGamepad2}
            description='123'
            href={`/blog/${article.id}`}
            cta='Learn more'
            key={id}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default ArticleItemList;
