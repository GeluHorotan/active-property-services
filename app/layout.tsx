import Navigation from '@/components/Navigation';
import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Providers } from './providers';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Active Property | Dashboard',
  description: 'App for monitoring active properties.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <div className="pl-3 pr-[71px] bg-custom_gray-300 pb-96 pt-2 w-full h-full flex items-start gap-6 ">
            <header className="min-h-screen h-screen w-[15%] ">
              <Navigation />
            </header>
            <main className="w-full">{children}</main>
          </div>
          <footer></footer>
        </Providers>
      </body>
    </html>
  );
}
