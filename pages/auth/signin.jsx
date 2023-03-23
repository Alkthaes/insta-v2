import React from 'react';
import { getProviders, signIn } from 'next-auth/react';
import Header from '@/components/Header';

export default function Signin({ providers }) {
  return (
    <>
      <Header />
      <div className='flex justify-center space-x-7 mt-20'>
        <img
          className='hidden object-cover rotate-6 md:inline-flex md:w-48'
          src='https://www.achat-followers.com/wp-content/uploads/2023/01/acheter-followers-europe-instagram.png'
          alt='instagram logo'
        />
        <div className=''>
          {Object.values(providers).map((provider) => (
            <div key={provider.name} className='flex flex-col items-center'>
              <img
                className='w-32 object-cover'
                src='https://webdrop.fr/wp-content/uploads/2019/04/klan-loup-instagram.png'
                alt='instagram logo'
              />
              <p className='text-sm italic my-10 text-center'>
                This app is created for learning purposes
              </p>
              <button
                className='bg-red-400 rounded-lg p-3 text-white hover:bg-red-500 transition-colors duration-200 ease-out'
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
