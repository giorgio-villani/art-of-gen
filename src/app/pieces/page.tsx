import React from 'react';
import pieces from '@/data/pieces';

export default function Artists() {
  return (
    <div className="w-full">
      <h1 className="text-5xl text-center font-inter pb-5">Pieces</h1>
      {pieces.map((piece, index) => (
        <div key={piece.id} className="bg-white py-5 lg:py-10 text-center text-2xl">
          <a className="hover:underline" href={`/pieces/${piece.id}`}>
            {piece.name}
          </a>
        </div>
      ))}
    </div>
  );
}
