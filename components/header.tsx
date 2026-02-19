import Link from 'next/link';
import { createClient } from '@/prismicio';
import { PrismicNextLink } from '@prismicio/next';

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle('settings').catch(() => null);
  return (
    <header className="flex items-center justify-between px-8 py-6 bg-white border-b border-gray-100">
      <div className="flex-shrink-0">
        <Link href="/">
          <img
            src="/images/learn-guitar-cafe-logo.png"
            alt="Learn Guitar Cafe Logo"
            className="h-14"
          />
        </Link>
      </div>

      <nav className="hidden md:flex space-x-8 text-gray-400 font-semibold tracking-wide text-sm">
        {settings?.data?.navigation?.map((item, index) => (
          <PrismicNextLink
            key={index}
            field={item.link[0]}
            className="hover:text-gray-800 transition-colors"
          >
            {item.label?.toUpperCase()}
          </PrismicNextLink>
        ))}
      </nav>
    </header>
  );
}
