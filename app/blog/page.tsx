'use client';
import { createClient } from '@/prismicio';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { FaCalendarAlt } from 'react-icons/fa';
import Link from 'next/link';
import { useSearchParams, usePathname } from 'next/navigation';

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function BlogIndex(props: { searchParams: SearchParams }) {
  const client = createClient();

  // const pathname = usePathname();
  // const searchValues = useSearchParams();
  // const currentPage = Number(searchValues.get('page')) || 1;

  const searchParams = await props.searchParams;

  const pageParam = searchParams.page;
  const pageString = Array.isArray(pageParam) ? pageParam[0] : pageParam;
  const pageNumber = pageString ? Number(pageString) : 1;

  const posts = await client.getAllByType('blog_post', {
    orderings: [{ field: 'my.blog_post.publication_date', direction: 'desc' }],
    pageSize: 12,
  });

  return (
    <main className="w-full mx-auto py-12 px-10 bg-white">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Guitar Guides & Articles
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article
            key={post.id}
            className="border-none rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            {/* Image Container */}
            <PrismicNextLink
              document={post}
              className="block aspect-video relative overflow-hidden bg-gray-100"
            >
              {post.data.featured_image == null ? (
                <PrismicNextImage
                  field={post.data.featured_image}
                  alt=""
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  No Image Available
                </div>
              )}
            </PrismicNextLink>

            {/* Content Container */}
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-semibold mb-2">
                <PrismicNextLink
                  document={post}
                  className="hover:text-blue-600 transition-colors"
                >
                  {post.data.title}
                </PrismicNextLink>
              </h2>

              <time className="text-sm text-gray-500 mb-4 block inline-flex items-center">
                <FaCalendarAlt className="inline-block mr-1" />
                {post.data.publication_date &&
                  new Date(post.data.publication_date).toLocaleDateString(
                    'en-US',
                    {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    }
                  )}
              </time>

              {/* Pushes the read more link to the bottom of the card */}
              <div className="mt-auto pt-4">
                <PrismicNextLink
                  document={post}
                  className="font-medium text-[#ff7f00] hover:underline"
                >
                  READ ARTICLE &rarr;
                </PrismicNextLink>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 flex justify-center space-x-4">
        {posts.prev_page && (
          <Link
            href={`/blog?page=${posts.page - 1}`}
            className="px-4 py-2 bg-[#ff7f00] text-white rounded hover:bg-[#e67e00] transition-colors"
          >
            &larr; Previous Page
          </Link>
        )}
        <span className="text-sm text-gray-500">
          Page {posts.page} of {posts.total_pages}
        </span>
        {posts.next_page && (
          <Link
            href={`/blog?page=${posts.page + 1}`}
            className="px-4 py-2 bg-[#ff7f00] text-white rounded hover:bg-[#e67e00] transition-colors"
          >
            Next Page &rarr;
          </Link>
        )}
      </div>
    </main>
  );
}
