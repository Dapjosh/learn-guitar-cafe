import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full h-fit flex items-center justify-between relative">
        <img
          src="/images/slide7.png"
          className="w-full h-auto"
          alt="Learn Guitar Cafe Banner"
        />
        <div className="absolute flex top-20 flex-col items-left justify-left px-8">
          <img
            src="/images/learn-guitar-cafe.png"
            alt="Learn Guitar Cafe Logo"
            className="w-48 mb-4 drop-shadow-lg"
          />
          <h1 className="text-4xl md:text-6xl font-bold font-[Fugaz_One] text-white text-center">
            ONLINE GUITAR LESSONS
          </h1>
        </div>
      </div>
    </main>
  );
}
