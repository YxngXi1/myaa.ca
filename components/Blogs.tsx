import React from 'react';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import blogs from '@/utils/blogData'

const Page: FC = () => {

  return (
    <main className='flex justify-center items-center w-full'>
      <div className='flex flex-col justify-center items-center lg:grid lg:grid-cols-2 lg:gap-x-32 gap-y-16'>
        {blogs.map((blog, index) => (
          <Link href={`/blog/${blog.slug}`} key={index}>
            <div className=" w-[320px] rounded-md shadow-[0_0_6px_2px_rgba(255,255,255,0.5)] hover:bg-[rgba(0,0,0,0.75)] transition duration-500 hover:cursor-pointer ">
              <div className='flex flex-col justify-cener items-center text-left mx-8'>
                <div className="relative w-[220px] h-[220px] overflow-hidden rounded-md mb-8 mt-8">
                  <Image src={blog.cover} alt="blog cover" className="object-cover" layout="fill" />
                </div>
                <div className='mx-4 text-white flex flex-col gap-y-2 mb-8'>
                  <h1 className="w-full text-xl">{blog.title}</h1>
                  <p className="w-full font-light">{blog.date}</p>
                  <p className="w-full font-light">By {blog.author}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>  
    </main>
  );
};

export default Page;