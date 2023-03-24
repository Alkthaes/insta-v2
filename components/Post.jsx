import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { BsThreeDots, BsBookmark } from 'react-icons/bs';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FaRegCommentDots } from 'react-icons/fa';
import { GrEmoji } from 'react-icons/gr';
import { useSession } from 'next-auth/react';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';
import { db } from '@/firebase';

export default function Post({ img, userImg, caption, username, id }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, 'posts', id, 'comments'),
        orderBy('timestamp', 'desc')
      ),
      (snapshot) => {
        setComments(snapshot.docs);
      }
    );
  }, [db, id]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'posts', id, 'likes'),
      (snapshot) => {
        setLikes(snapshot.docs);
      }
    );
  }, [db]);

  useEffect(() => {
    setHasLiked(likes.findIndex((like) => like.id === session.user.uid) !== -1);
  }, [likes]);

  async function likePost() {
    if (hasLiked) {
      await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid));
      return;
    } else {
      await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
        username: session.user.username,
      });
    }
  }

  async function sendComment(e) {
    e.preventDefault();
    const commentToSend = comment;

    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
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
            {hasLiked ? (
              <AiFillHeart
                onClick={likePost}
                className='postBtn text-red-600'
              />
            ) : (
              <AiOutlineHeart onClick={likePost} className='postBtn' />
            )}

            <div className='flex space-x-2'>
              <FaRegCommentDots className='postBtn' />
              {comments.length > 0 && (
                <p className='text-sm font-bold'>{comments.length} comment</p>
              )}
              {comments.length > 1 && (
                <p className='text-sm font-bold'>{comments.length} comments</p>
              )}
            </div>
          </div>
          <BsBookmark className='postBtn' />
        </div>
      )}

      {/* Post Comments */}

      <p className='p-5 truncate'>
        {likes.length > 0 && (
          <p className='font-bold mb-1'>{likes.length} like</p>
        )}
        {likes.length > 1 && (
          <p className='font-bold mb-1'>{likes.length} likes</p>
        )}
        <span className='font-bold mr-2'>{username}</span>
        {caption}
      </p>
      {comments.length > 0 && (
        <div className='mx-10 max-h-24 overflow-y-scroll scrollbar-none'>
          {comments.map((comment) => (
            <div
              key={comment.data().id}
              className='flex items-center space-x-2 mb-2'
            >
              <img
                className='h-7  rounded-full object-cover'
                src={comment.data().userImage}
                alt='user-image'
              />
              <p className='font-semibold'>{comment.data().username}</p>
              <p className='flex-1 truncate'>{comment.data().comment}</p>
              <Moment fromNow>{comment.data().timestamp?.toDate()}</Moment>
            </div>
          ))}
        </div>
      )}

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
