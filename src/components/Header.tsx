'use client';

import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-300 max-w-[1200px] items-center text-black w-full mx-auto flex ">
      <img src="art_of_gen.png" className="h-[50px] m-10" alt="" />
      <div className="text-center text-xs text-gray-500 grow"></div>
      <div>
        <button className="m-5">Artists</button>
        <button className="m-5">Donate</button>
        <button className="m-5 p-3 border border-black">RSVP</button>
      </div>
    </header>
  );
};

export default Header;
