import Image from 'next/image';
import React from 'react';
import {
  AiOutlineSearch,
  AiFillHome,
  AiOutlinePlusCircle,
} from 'react-icons/ai';

export default function Header() {
  return (
    <header className='sticky top-0 shadow-sm bg-white z-30'>
      <div className='flex items-center justify-between max-w-6xl mx-4 xl:mx-auto'>
        <div className='cursor-pointer h-24 w-24 relative hidden lg:inline-grid'>
          <Image
            src='https://blog.adaptimmo.com/wp-content/uploads/2021/09/instagram-1594387_1280.png'
            alt='Instagram'
            fill='true'
            className='object-contain'
          />
        </div>
        <div className='cursor-pointer h-24 w-10 relative lg:hidden'>
          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png'
            alt='Instagram'
            fill='true'
            className='object-contain'
          />
        </div>

        <div className='relative mt-1'>
          <div className='absolute top-2 left-2'>
            <AiOutlineSearch className='text-2xl text-gray-500' />
          </div>
          <input
            type='text'
            name='search'
            id='search'
            placeholder='Search'
            className='bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md'
          />
        </div>

        <div className='flex space-x-4 items-center'>
          <AiFillHome className='hidden md:inline-flex text-2xl cursor-pointer hover:scale-125 transition-transform duration-200 ease-out' />
          <AiOutlinePlusCircle className='text-2xl cursor-pointer hover:scale-125 transition-transform duration-200 ease-out' />
          <img
            src='https://cdn-cf.ginx.tv/respawn-cdn/mV6-7qivPHPLOY0xShEBDbIowWshVOf9ig2f_JyLa60/fill/1280/0/no/1/aHR0cHM6Ly93d3cuZ2lueC50di91cGxvYWRzL3Bhc3RlZF9pbWFnZV8wLTEyNS5wbmc.webp'
            alt='Your avatar picture'
            className='h-10 w-10 object-cover rounded-full cursor-pointer hover:scale-125 transition-transform duration-200 ease-out'
          />
        </div>
      </div>
    </header>
  );
}
