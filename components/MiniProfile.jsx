import React from 'react';

export default function MiniProfile() {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <img
        src='https://cdn-cf.ginx.tv/respawn-cdn/mV6-7qivPHPLOY0xShEBDbIowWshVOf9ig2f_JyLa60/fill/1280/0/no/1/aHR0cHM6Ly93d3cuZ2lueC50di91cGxvYWRzL3Bhc3RlZF9pbWFnZV8wLTEyNS5wbmc.webp'
        alt='Your profile picture'
        className='h-16 w-16 object-cover rounded-full border p-[2px]'
      />
      <div className='flex-1 ml-4'>
        <h2 className='font-bold'>johnny_silverhand</h2>
        <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
      </div>
      <button className='font-semibold text-blue-400 text-sm'>Sign Out</button>
    </div>
  );
}
