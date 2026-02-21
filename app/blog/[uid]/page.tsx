import { notFound } from 'next/navigation';
import { SliceZone } from '@prismicio/react';
import { createClient } from '@/prismicio';
import { components } from '@/slices';

type Params = Promise<{ uid: string }>;

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType('blog_post');

  return pages.map((page) => {
    return { uid: page.uid };
  });
}

export default async function BlogPost({ params }: { params: Params }) {
  const resolvedParams = await params;

  const uid = resolvedParams.uid;

  const client = createClient();

  // Fetch the specific blog post by its UID
  const page = await client.getByUID('blog_post', uid).catch(() => notFound());

  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">{page.data.title}</h1>

      {/* The SliceZone dynamically renders the content blocks you created */}
      <div className="p-2">
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </article>
  );
}
