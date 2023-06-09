import React from 'react';
import { useSession, signOut } from 'next-auth/react';

export default function MiniProfile() {
  const { data: session } = useSession();

  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <img
        src={session?.user.image}
        alt='Your profile picture'
        className='h-16 w-16 object-cover rounded-full border p-[2px]'
      />
      <div className='flex-1 ml-4'>
        <h2 className='font-bold truncate'>{session?.user.username}</h2>
        <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
      </div>
      <button onClick={signOut} className='font-semibold text-blue-400 text-sm'>
        Sign Out
      </button>
    </div>
  );
}
