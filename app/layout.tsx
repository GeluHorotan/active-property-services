import Navigation from '@/components/Navigation';
import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

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
        <div className="pl-3 pr-[71px] bg-gray-300 py-2 w-full h-screen flex items-start gap-6">
          <header className="h-full w-[15%] ">
            <Navigation />
          </header>
          <main className="w-full">{children}</main>
        </div>
        <footer></footer>
      </body>
    </html>
  );
}
