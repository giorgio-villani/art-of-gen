import React from 'react';
import artists from '@/data/artists';

export default function Artists() {
  return (
    <div className="w-full">
      <h1 className="text-5xl text-center font-inter pb-5">Artists</h1>
      {artists.map((artist, index) => (
        <div key={artist.id} className="bg-white py-5 lg:py-10 text-center text-2xl">
          <a className="hover:underline" href={`/artists/${artist.id}`}>
            {artist.name}
          </a>
        </div>
      ))}
    </div>
  );
}
