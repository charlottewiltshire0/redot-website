import { Skeleton } from '@/components/ui/skeleton';

export default function Blog() {
  return (
    <>
      <div className='flex flex-col overflow-hidden bg-white px-2 pb-40 pt-20 dark:bg-black md:px-4 lg:px-8'>
        <div className='absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black dark:bg-grid-white/[0.03]'>
          {/* Radial gradient for the container to give a faded look */}
          <div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black'></div>
        </div>
        <section className='relative z-20 mx-auto h-screen w-full max-w-[84rem]'>
          <h2 className='mb-2 text-center text-5xl font-bold leading-[1.2] tracking-tighter text-foreground'>
            Showcase
          </h2>
          <h3 className='mx-auto mb-8 text-balance text-center text-lg font-medium tracking-tight text-foreground/80'>
            Developers use Redot Engine to create immersive, captivating games.
          </h3>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton key={index} className='h-[18rem] w-[24rem]' />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
