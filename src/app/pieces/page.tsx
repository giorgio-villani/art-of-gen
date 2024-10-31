import React from 'react';
import pieces from '@/data/pieces';

export default function Artists() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <h1 className="text-5xl text-center font-inter pb-5">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-2">
        {pieces.map((piece) => (
          <div key={piece.id} className="relative overflow-hidden bg-gray-300 text-2xl text-center text-white group">
            {/* Aspect ratio trick to make each container square */}
            <div className="relative w-full pb-[100%]">
              <a href={`/pieces/${piece.id}`} className="absolute inset-0 w-full h-full">
                {/* Image */}
                <img src={`/pieces/${piece.picture}`} alt={piece.name} className="w-full h-full object-cover" />

                {/* Opacity overlay that fades in on hover */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

                {/* Text overlay that fades in on hover */}
                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{piece.name}</div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
