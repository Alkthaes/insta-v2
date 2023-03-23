import React from 'react';
import Post from './Post';

export default function Posts() {
  const dummyPosts = [
    {
      id: 1,
      username: 'johnny_silverhand',
      userImg:
        'https://cdn-cf.ginx.tv/respawn-cdn/mV6-7qivPHPLOY0xShEBDbIowWshVOf9ig2f_JyLa60/fill/1280/0/no/1/aHR0cHM6Ly93d3cuZ2lueC50di91cGxvYWRzL3Bhc3RlZF9pbWFnZV8wLTEyNS5wbmc.webp',
      img: 'https://cdn-cf.ginx.tv/respawn-cdn/mV6-7qivPHPLOY0xShEBDbIowWshVOf9ig2f_JyLa60/fill/1280/0/no/1/aHR0cHM6Ly93d3cuZ2lueC50di91cGxvYWRzL3Bhc3RlZF9pbWFnZV8wLTEyNS5wbmc.webp',
      caption: 'Wake up Samurai, we have a city to burn.',
    },
    {
      id: 2,
      username: 'johnny_silverhand',
      userImg:
        'https://cdn-cf.ginx.tv/respawn-cdn/mV6-7qivPHPLOY0xShEBDbIowWshVOf9ig2f_JyLa60/fill/1280/0/no/1/aHR0cHM6Ly93d3cuZ2lueC50di91cGxvYWRzL3Bhc3RlZF9pbWFnZV8wLTEyNS5wbmc.webp',
      img: 'https://cdn-cf.ginx.tv/respawn-cdn/mV6-7qivPHPLOY0xShEBDbIowWshVOf9ig2f_JyLa60/fill/1280/0/no/1/aHR0cHM6Ly93d3cuZ2lueC50di91cGxvYWRzL3Bhc3RlZF9pbWFnZV8wLTEyNS5wbmc.webp',
      caption: 'Wake up Samurai, we have a city to burn.',
    },
  ];

  return (
    <div>
      {dummyPosts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
