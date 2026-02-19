import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Learn Guitar Cafe - Your Ultimate Guitar Learning Hub',
  description:
    'Learn to play guitar with online courses, player history, reviews, and lessons covering Blues, Jazz, Rock, and more.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-900 flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow bg-[#fff7f5]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
