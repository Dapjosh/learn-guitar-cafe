import { createClient } from '@/prismicio';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';

export default async function BlogIndex() {
  const client = createClient();

  // Fetch all blog posts, sorted by your custom publication date field (newest first)
  const posts = await client.getAllByType('blog_post', {
    orderings: [{ field: 'my.blog_post.publication_date', direction: 'desc' }],
  });

  return (
    <main className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Guitar Guides & Articles
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article
            key={post.id}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            {/* Image Container */}
            <PrismicNextLink
              document={post}
              className="block aspect-video relative overflow-hidden bg-gray-100"
            >
              <PrismicNextImage
                field={post.data.featured_image}
                fill
                className="object-cover"
              />
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

              <time className="text-sm text-gray-500 mb-4 block">
                {new Date(post.data.publication_date).toLocaleDateString(
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
                  className="font-medium text-blue-600 hover:underline"
                >
                  Read Article &rarr;
                </PrismicNextLink>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
