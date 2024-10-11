import { Skeleton } from '@/components/ui/skeleton';

const FeaturesSkeleton = () => {
  return (
    <section className='relative mx-auto mt-24 w-full max-w-[84rem] px-4 md:mt-32 md:px-0'>
      <div>
        <Skeleton className='h-[500px] w-full' />
      </div>
    </section>
  );
};

export default FeaturesSkeleton;
