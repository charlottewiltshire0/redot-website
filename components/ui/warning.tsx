import Link from 'next/link';

const Warning = ({
  children,
  href = '/',
}: {
  children?: string | React.ReactNode;
  href?: string;
}) => {
  return (
    <Link href={href}>
      <div className='sticky top-0 z-[50] w-full bg-gradient-to-r from-red-700 via-orange-500 to-orange-500 px-4 py-1 text-left font-sans text-sm font-medium tracking-tight text-white md:text-center'>
        {children}
      </div>
    </Link>
  );
};

export default Warning;
