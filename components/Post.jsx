import React from 'react';
import { BsThreeDots, BsBookmark } from 'react-icons/bs';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FaRegCommentDots } from 'react-icons/fa';
import { GrEmoji } from 'react-icons/gr';
import { useSession } from 'next-auth/react';

export default function Post({ img, userImg, caption, username, id }) {
  const { data: session } = useSession();

  return (
    <div className=''>
      {/* Header */}
      <div className='flex items-center p-5 justify-between bg-white mt-7'>
        <div className='flex items-center'>
          <img
            className='h-12 w-12 rounded-full object-cover border p-1 mr-3'
            src={userImg}
            alt={username}
          />
          <p className='font-bold '>{username}</p>
        </div>
        <BsThreeDots className='h-5' />
      </div>
      {/* Image */}
      <img className='object-cover w-full' src={img} alt={caption} />
      {/* Buttons */}

      {session && (
        <div className='flex justify-between px-4 pt-4'>
          <div className='flex space-x-4'>
            <AiOutlineHeart className='postBtn' />
            <FaRegCommentDots className='postBtn' />
          </div>
          <BsBookmark className='postBtn' />
        </div>
      )}

      {/* Post Comments */}

      <p className='p-5 truncate'>
        <span className='font-bold mr-2'>{username}</span>
        {caption}
      </p>

      {/* Post Input Box */}
      {session && (
        <form className='flex items-center p-4'>
          <GrEmoji className='text-2xl' />
          <input
            type='text'
            placeholder='Enter your comment...'
            className='border-none flex-1 focus:ring-0'
          />
          <button className='text-blue-400 font-bold'>Post</button>
        </form>
      )}
    </div>
  );
}
