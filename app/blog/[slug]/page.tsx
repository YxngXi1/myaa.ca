'use client';

import React, { FC } from 'react';
import blogs from '@/utils/blogData';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image'

const Page: FC = () => {
  const params = useParams();
  const { slug } = params;

  const blog = blogs.find((blog) => blog.slug === slug);

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <main className='flex justify-center items-center'>
      <div className='container'>
        <div className='mx-12 flex flex-col gap-y-4 mt-4'>
          <h1 className='text-6xl w-[750px]'>{blog.title}</h1>
          <Image
            src={blog.cover}
            height={750}
            width={750}
            alt='blog cover'
            />
          <p className='text-xl'>By: <span className='text-blue-600'>{blog.author}</span></p>
          <p className='text-xl'>{blog.date}</p>
          
          <p>{blog.para1}</p>
          <p>{blog.para2}</p>
          <Image
            src={blog.image1}
            height={400}
            width={400}
            alt='image 1'
            />
          <p>{blog.para3}</p>
          <p>{blog.para4}</p>
          <Image
            src={blog.image2}
            height={400}
            width={400}
            alt='image 1'
            />
          <p>{blog.para5}</p>
            <Image
          src={blog.image3}
          height={400}
          width={400}
          alt='image 1'
            />
        </div>
        <div className='flex w-full justify-center items-center mb-4'>
          <Link href='/'>
            <button className='p-4 bg-white text-black border-black border hover:bg-gray-300 rounded-full'>&larr; Return To Home</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Page;
