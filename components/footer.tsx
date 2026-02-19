import Link from 'next/link';
import { createClient } from '@/prismicio';
import { PrismicNextLink } from '@prismicio/next';

export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle('settings').catch(() => null);

  const genres = [
    'Blues',
    'Jazz',
    'Rock',
    'Country',
    'Slide Guitar',
    'Neo Soul',
    'Fingerstyle',
  ];
  const importantLinks = [
    'History Of Guitar Players',
    'Best Online Teaching Sites',
    'Lessons',
    'Kids Learning Guitar',
    'Fair Use Disclaimer',
    'Publishers',
    'Privacy Policy',
    'Terms of Service',
  ];
  const socialIcons = ['FB', 'TW', 'IG', 'YT'];

  return (
    <footer>
      <div className="bg-[#fcfaf9] py-16 px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {settings?.data?.footer_column_1.map((item, index) => (
            <div key={index}>
              <h3 className="text-[22px] font-bold mb-6 text-[#0d274a]">
                {item.label}
              </h3>
              <ul className="space-y-3 mb-8 text-[#0d274a] list-none">
                {item.link.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="flex items-center before:content-['•'] before:mr-2 before:text-gray-400"
                  >
                    <PrismicNextLink
                      field={link}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {link.text}
                    </PrismicNextLink>
                  </li>
                ))}
                {item.footer_logo && item.footer_logo.url && (
                  <li className="mt-4">
                    <img
                      src={item?.footer_logo.url}
                      alt={item.footer_logo.alt || 'Footer Logo'}
                      className="w-36 drop-shadow-md"
                    />
                  </li>
                )}
              </ul>
            </div>
          ))}

          {settings?.data?.footer_column_2.map((item, index) => (
            <div key={index}>
              <h3 className="text-[22px] font-bold mb-6 text-[#0d274a]">
                {item.label}
              </h3>
              <ul className="space-y-3 mb-8 text-[#0d274a] list-none">
                {item.link.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="flex items-center before:content-['•'] before:mr-2 before:text-gray-400"
                  >
                    <PrismicNextLink
                      field={link}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {link.text}
                    </PrismicNextLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {settings?.data?.footer_column_3.map((item, index) => (
            <div key={index}>
              <h3 className="text-[22px] font-bold mb-6 text-[#0d274a]">
                {item.label}
              </h3>
              <ul className="space-y-3 mb-8 text-[#0d274a] list-none">
                {item.link.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="flex items-center before:content-['•'] before:mr-2 before:text-gray-400"
                  >
                    <PrismicNextLink
                      field={link}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {link.text}
                    </PrismicNextLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {settings?.data?.footer_column_4.map((item, index) => (
            <div key={index}>
              <h3 className="text-[22px] font-bold mb-6 text-[#0d274a]">
                {item.label}
              </h3>
              <ul className="space-y-3 mb-8 text-[#0d274a] list-none">
                {item.link.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="flex items-center before:content-['•'] before:mr-2 before:text-gray-400"
                  >
                    <PrismicNextLink
                      field={link}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {link.text}
                    </PrismicNextLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* <div>
            <h3 className="text-[22px] font-bold mb-6 text-[#0d274a]">
              About LGC
            </h3>
            <ul className="space-y-3 mb-8 text-[#0d274a] list-none">
              <li className="flex items-center before:content-['•'] before:mr-2 before:text-gray-400">
                <Link
                  href="/about"
                  className="hover:text-blue-600 transition-colors"
                >
                  About
                </Link>
              </li>
              <li className="flex items-center before:content-['•'] before:mr-2 before:text-gray-400">
                <Link
                  href="/contact"
                  className="hover:text-blue-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <img
              src="/images/lgc-bottle-caps.png"
              alt="Learn Guitar Cafe Bottle Caps"
              className="w-36 drop-shadow-md"
            />
          </div> */}

          {/* <div>
            <h3 className="text-[22px] font-bold mb-6 text-[#0d274a]">
              Genres & Styles
            </h3>
            <ul className="space-y-3 text-[#0d274a] list-none">
              {genres.map((genre) => (
                <li
                  key={genre}
                  className="flex items-center before:content-['•'] before:mr-2 before:text-gray-400"
                >
                  <Link
                    href={`/genres/${genre.toLowerCase().replace(' ', '-')}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {genre}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* <div>
            <h3 className="text-[22px] font-bold mb-6 text-[#0d274a]">
              Important Links
            </h3>
            <ul className="space-y-3 text-[#0d274a] list-none">
              {importantLinks.map((link) => (
                <li
                  key={link}
                  className="flex items-center before:content-['•'] before:mr-2 before:text-gray-400"
                >
                  <Link
                    href="#"
                    className="hover:text-blue-600 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[22px] font-bold mb-6 text-[#0d274a]">
              Popular Subjects
            </h3>
            <ul className="space-y-3 text-[#0d274a] list-none">
              <li className="flex items-center before:content-['•'] before:mr-2 before:text-gray-400">
                <Link
                  href="#"
                  className="hover:text-blue-600 transition-colors"
                >
                  I love Fender Guitars
                </Link>
              </li>
            </ul>
          </div>*/}
        </div>
      </div>

      <div className="bg-[#0b1b36] py-8 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-gray-400 text-sm">
            <Link href="/" className="hover:text-white transition-colors">
              HOME
            </Link>
            <Link
              href="/courses"
              className="hover:text-white transition-colors"
            >
              ALL COURSES
            </Link>
            <Link
              href="/history"
              className="hover:text-white transition-colors"
            >
              PLAYER HISTORY
            </Link>
            <Link
              href="/reviews"
              className="hover:text-white transition-colors"
            >
              REVIEWS
            </Link>
            <Link
              href="/lessons"
              className="hover:text-white transition-colors"
            >
              LESSONS
            </Link>
            <Link href="/login" className="hover:text-white transition-colors">
              LOGIN
            </Link>
          </nav>

          <div className="flex space-x-3">
            {socialIcons.map((icon) => (
              <a
                key={icon}
                href="#"
                className="flex items-center justify-center w-8 h-8 bg-gray-300 rounded hover:bg-white transition-colors text-[#0b1b36] font-bold text-xs"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
