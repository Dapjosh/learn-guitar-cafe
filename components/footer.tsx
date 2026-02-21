import Link from 'next/link';
import { createClient } from '@/prismicio';
import { PrismicNextLink } from '@prismicio/next';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle('settings').catch(() => null);

  const socialMedia = settings?.data?.social_media || [];

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
            {socialMedia.map((item, index) => (
              <PrismicNextLink
                key={index}
                field={item?.link[0]}
                className="flex items-center justify-center w-8 h-8 bg-gray-300 rounded hover:bg-[#FF7F00] hover:text-white transition-colors text-[#0b1b36] font-bold text-xs"
              >
                {item.social_media === 'Facebook' && <FaFacebook />}
                {item.social_media === 'Twitter' && <FaTwitter />}
                {item.social_media === 'Instagram' && <FaInstagram />}
                {item.social_media === 'YouTube' && <FaYoutube />}
              </PrismicNextLink>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#0b1b36] py-4 px-8">
        <div className="mx-auto text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Learn Guitar Cafe. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
