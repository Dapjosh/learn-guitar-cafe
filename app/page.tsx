import Image from 'next/image';
import { createClient } from '@/prismicio';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';

export default async function Home() {
  const client = createClient();

  const courses = await client.getAllByType('course');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full h-250 flex overflow-hidden items-center justify-between relative">
        <img
          src="/images/slide7.png"
          className="w-full h-full object-cover"
          alt="Learn Guitar Cafe Banner"
        />
        <div className="absolute flex top-20 bottom-10 flex-col items-left justify-left px-8 gap-3">
          <img
            src="/images/learn-guitar-cafe.png"
            alt="Learn Guitar Cafe Logo"
            className="w-48 mb-4 drop-shadow-lg"
          />
          <h1 className="text-9xl font-extrabold font-[Fugaz_One] text-[#0a1f41] overline">
            ONLINE <br />
            GUITAR <br />
            LESSONS
          </h1>
          <h4 className="font-bold text-xl mt-4">
            BECOME THE BEST PLAYER YOU CAN BE
          </h4>
          <a href="#">
            <button className="mt-6 cursor-pointer px-6 py-3 bg-[#ff7f00] text-white rounded-none text-lg font-bold hover:bg-[#ff7f00]/90 transition duration-300">
              SIGN UP FOR FREE CLASS
            </button>
          </a>
        </div>
      </div>

      <div className="w-full h-auto px-6 py-6 bg-white">
        <h1 className="text-7xl font-extrabold text-[#0a1f41] text-center mt-12">
          Unlock Your Slide Guitar <br /> Learning Journey at Learn Guitar Cafe
        </h1>
        <p className="text-3xl leading-10 text-[#0a1f41] text-center mt-6 break-word">
          Discover a unique learning approach that will get you results and
          recieve a tailored service aimed at enhancing your musical skills.
          Specialised online courses and <strong>Guitar Vision </strong>
          critique sessions will instil a feeling of confidence along the way
          through your guitar playing journey.
        </p>

        <p className="text-3xl leading-10 text-[#0a1f41] text-center mt-6 break-word">
          Inside Learn Guitar Cafe, you’ll encounter an engaging and structured
          learning environment that applies more of the practical approach to
          jamming and improvisation.
        </p>

        <p className="text-3xl leading-10 text-[#0a1f41] text-center mt-6 break-word">
          Paul’s approach and style of teaching ensures you receive precisely
          what you need, precisely when you need it, throughout your musical
          journey.
        </p>

        <p className="text-3xl leading-10 text-[#0a1f41] text-center mt-6 mb-5 break-word">
          And the best part? It’s all available without the hefty price tag.”
        </p>
        <hr className="border-[#eee] border-1 w-1/2 mx-auto my-10" />

        <h1 className="text-5xl font-extrabold text-[#0a1f41] text-center mt-12">
          TAKE A FREE COURSE TODAY
        </h1>

        <p className="text-2xl font-extrabold text-[#0a1f41] text-center mt-6">
          The Beginners Series
        </p>

        <div className="w-full flex items-center justify-center mt-6">
          <div className="w-1/3 h-auto p-6">
            <ul className="list-['♠'] list-outside">
              <li className="text-2xl text-[#0a1f41] mb-4 pt-2 pl-2">
                Interactive Onscreen TABs
              </li>
              <li className="text-2xl text-[#0a1f41] mb-4 pt-2 pl-2">
                4K video with multiple angles
              </li>
              <li className="text-2xl text-[#0a1f41] mb-4 pt-2 pl-2">
                Jam Tracks
              </li>
              <li className="text-2xl text-[#0a1f41] mb-4 pt-2 pl-2">
                Instant access all devices
              </li>
            </ul>
          </div>
          <div className="w-2/3 h-auto p-6">
            <img
              src="/images/paul-greig-guitar-teacher.jpg"
              alt="Learn Guitar Cafe - You Guitar Teacher"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-auto px-6 py-6 bg-[#f9f9f9]">
        <h1 className="text-5xl font-extrabold text-[#0a1f41] text-center mt-12">
          Explore Our Free Courses
        </h1>
        <p className="text-2xl font-extrabold text-[#0a1f41] text-center mt-6 mb-5">
          Suited for Beginners and it is all for free!
        </p>
      </div>

      <div className="grid grid-cols-2 w-full p-10 gap-10">
        {courses
          .filter((course) => course.data.course_category === 'Free')
          .map((course) => (
            <div
              key={course.id}
              className="w-full h-auto p-6 rounded-lg bg-white shadow-md"
            >
              <PrismicNextImage
                field={course.data.course_cover}
                className="w-full h-auto object-cover"
              />
              <PrismicNextLink
                field={course.data.link}
                className="inline-flex w-full items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#ff7f00] hover:bg-[#0d274a]/90 transition-colors mt-4"
              >
                Start Learning
              </PrismicNextLink>
            </div>
          ))}
      </div>

      <div className="w-full h-auto px-6 py-6 bg-[#f9f9f9] mb-6">
        <div className="flex items-center justify-center gap-6">
          <div className="px-6 py-6 w-2/3">
            <h4 className="text-3xl leading-10 font-medium text-[#0a1f41] text-left mt-6 mb-5">
              Access your lessons 24-7 from any device
            </h4>
            <ul className="list-disc list-inside">
              <li className="text-lg text-[#0a1f41] pt-2 pl-2">
                No downloading videos - all easily accessible via membership
                area.
              </li>
              <li className="text-lg text-[#0a1f41] pt-2 pl-2">
                High quality step by step instruction
              </li>
              <li className="text-lg text-[#0a1f41] pt-2 pl-2">
                Beginners and beyond
              </li>
            </ul>
          </div>
          <img
            src="/images/devices.png"
            alt="Learn Guitar Cafe - Access on Any Device"
            className="w-1/3 h-auto object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="w-full h-auto px-6 py-6 bg-white">
        <div className="grid grid-cols-2 w-full p-10 gap-10">
          {courses
            .filter((course) => course.data.course_category === 'Paid')
            .map((course) => (
              <div
                key={course.id}
                className="w-full h-auto p-6 rounded-lg bg-white shadow-md"
              >
                <PrismicNextImage
                  field={course.data.course_cover}
                  className="w-full h-auto object-cover"
                />
                <PrismicNextLink
                  field={course.data.link}
                  className="inline-flex w-full items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#ff7f00] hover:bg-[#0d274a]/90 transition-colors mt-4"
                >
                  Start Learning
                </PrismicNextLink>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
