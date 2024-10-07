import Header from '@/components/ui/header';
import Warning from '@/components/ui/warning';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Warning href='https://github.com/charlottewiltshire0/redot-website'>
        The website is under development.
      </Warning>
      <Header />
      {children}
    </>
  );
}
