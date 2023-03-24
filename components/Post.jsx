import React, { useState } from 'react';
import { BsThreeDots, BsBookmark } from 'react-icons/bs';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FaRegCommentDots } from 'react-icons/fa';
import { GrEmoji } from 'react-icons/gr';
import { useSession } from 'next-auth/react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';

export default function Post({ img, userImg, caption, username, id }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState('');

  async function sendComment(e) {
    e.preventDefault();
    const commentToSend = comment;

    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestapm: serverTimestamp(),
    });

    setComment('');
  }

  return (
    <div className='"bg-white my-7 border rounded-md'>
      {/* Header */}
      <div className='flex items-center p-5'>
        <img
          className='h-12 w-12 rounded-full object-cover border p-1 mr-3'
          src={userImg}
          alt={username}
        />
        <p className='font-bold flex-1 '>{username}</p>
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
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            type='text'
            placeholder='Enter your comment...'
            className='border-none flex-1 focus:ring-0'
          />
          <button
            type='submit'
            onClick={sendComment}
            disabled={!comment.trim()}
            className='text-blue-400 font-bold disabled:text-blue-200 disabled:cursor-not-allowed'
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}
