import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/next';

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  creator: 'Redot Engine',
  appleWebApp: true,
  applicationName:
    'Redot Engine - Free and Open Source Fork of Godot for 2D and 3D Game Development',
  title:
    'Redot Engine - Free and Open Source Fork of Godot for 2D and 3D Game Development',
  description:
    'Redot Engine provides a huge set of common tools, allowing you to focus on creating your game without reinventing the wheel.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${jetBrainsMono.className} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
