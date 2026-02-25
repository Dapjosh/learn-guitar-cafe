import { createClient } from '@/prismicio';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import { FaGuitar } from 'react-icons/fa';

export const metadata = {
  title: 'All Courses | Learn Guitar Cafe',
  description:
    'Browse our complete collection of guitar courses for all skill levels.',
};

export default async function AllCourses() {
  const client = createClient();

  const courses = await client.getAllByType('course');

  return (
    <main className="bg-[#FFF7F5] py-16 px-6">
      <div className="flex flex-col max-w-7xl mx-auto my-12 px-4 sm:px-6 lg:px-8 py-12 bg-white">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-[Fugaz_One] leading-10 text-[#0d274a] mb-4">
            LEARN GUITAR CAFE MEMBERSHIP
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Unlock Your Musical Journey at Learn Guitar Cafe
          </p>
        </div>

        <div className="text-center flex mb-12 bg-[#fcfaf9] py-16 px-8">
          <img
            src="/images/learn-guitar-cafe-membership.png"
            alt="Learn Guitar Cafe Membership"
            className="w-1/2"
          />
          <img
            src="/images/learn-guitar-cafe-pro.png"
            alt="Learn Guitar Cafe Membership Pro"
            className="w-1/2 h-auto object-cover"
          />
        </div>

        <div className="mt-10 mb-12 px-10">
          <p className="text-2xl text-gray-700 leading-10 text-left">
            Embark on a guitar learning experience like no other. With a{' '}
            <a
              href="https://courses.learnguitarcafe.com/lgc-membership/"
              className="text-[#ff7f00] hover:underline"
            >
              Learn Guitar Cafe Membership
            </a>
            you will receive a personalised service designed to elevate your
            playing and build confidence.
          </p>

          <img
            src="/images/guitar-vision-logo.png"
            alt="Learn Guitar Cafe Membership Benefits"
            className="w-50 object-cover mt-6"
          />
          <p className="text-2xl text-gray-700 leading-10 text-left mt-6">
            With a <strong>Pro Membership </strong> you will get 12 personal
            feedback sessions aka{' '}
            <a
              href="https://courses.learnguitarcafe.com/guitar-vision/"
              className="text-[#ff7f00] underline"
            >
              GUITAR VISION
            </a>
            ,valued at $99 per session. This has been tremendously successful
            with many students taking their guitar playing skills to another
            level. Not only that inside Learn Guitar Cafe you will find a fun
            and organised approach to learning. It's designed to help drive your
            practice and find the right information in your development. And NO,
            it won't cost you thousands of dollars…
          </p>
          <div className="text-center my-10">
            <button className="text-center mt-6 cursor-pointer px-6 py-3 bg-[#ff7f00] text-white rounded-md w-80 text-nowrap text-lg font-bold hover:bg-[#ff7f00]/90 transition duration-300 inline-flex justify-center items-center gap-2">
              <FaGuitar />
              ENROLL TODAY
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course) => (
            <article
              key={course.id}
              className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <div className="absolute top-4 left-4 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 rounded-full z-10">
                  <p>{course.data.course_category}</p>
                </div>
                <PrismicNextImage
                  field={course.data.course_cover}
                  alt=""
                  fill
                  className="object-cover h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Course Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-[#0d274a] mb-3 group-hover:text-[#ff7f00] transition-colors">
                  {course.data.title}
                </h2>

                <div className="text-gray-500 mb-6 flex-grow prose-sm line-clamp-3">
                  <PrismicRichText field={course.data.description} />
                </div>

                {/* Call to Action */}
                <div className="mt-auto">
                  <PrismicNextLink
                    field={course.data.link}
                    className="inline-flex w-full items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#ff7f00] hover:bg-[#0d274a]/90 transition-colors"
                  >
                    Start Learning
                  </PrismicNextLink>
                </div>
              </div>
            </article>
          ))}
        </div>

        {courses.length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-2xl">
            <h3 className="text-xl font-semibold text-gray-900">
              No courses found
            </h3>
            <p className="text-gray-500 mt-2">
              Check back soon for new content!
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
