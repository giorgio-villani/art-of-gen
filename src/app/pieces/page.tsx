import React from 'react';
import pieces from '@/data/pieces';

export default function Artists() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <h1 className="text-5xl text-center font-inter pb-5">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-2">
        {pieces.map((piece) => (
          <div key={piece.id} className="bg-gray-300 relative overflow-hidden flex items-center justify-center text-2xl text-center text-white p-2">
            <a href={`/pieces/${piece.id}`}>
              <div className="absolute inset-0 flex items-center justify-center">
                {/* <span>{piece.name}</span> */}
                {/* <img src="" alt="" /> */}
                <img src={`/pieces/${piece.picture}`} alt={piece.name} />
              </div>
            </a>
            <div className="pb-[100%]"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
