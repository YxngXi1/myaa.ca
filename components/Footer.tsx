import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Footer = () => {
  return (
    <footer className='w-full bg-black py-16 flex justify-center items-center absolute'>
        <div className='flex justify-between w-3/4'>
            <p className='text-white font-thin'>Copyright © 2024 MYAA - All Rights Reserved.</p>
            <div className='flex gap-x-4'>
                <Link href='https://www.instagram.com/youthastro_assoc/' target='_blank'>
                    <div className='bg-white w-[30px] h-[30px] rounded-full flex justify-center items-center'>
                    <Image
                        src='/instagram.png'
                        height={20}
                        width={20}
                        alt='instagram logo'
                    />
                    </div>
                </Link>
                    {/* <div className='bg-white w-[30px] h-[30px] rounded-full flex justify-center items-center'>
                    {/* <Image
                        src='/facebook.png'
                        height={20}
                        width={20}
                        alt='instagram logo'
                    />
                </div>
                <Link href='/'></Link>
                <div className='bg-white w-[30px] h-[30px] rounded-full flex justify-center items-center'>
                    <Image
                        src='/tiktok.png'
                        height={20}
                        width={20}
                        alt='instagram logo'
                    />
                </div> */}
            </div>
        </div>
    </footer>
  )
}

export default Footer