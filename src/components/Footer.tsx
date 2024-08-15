'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-300 max-w-[1200px] items-center text-black w-full mx-auto flex">
      <div className="flex flex-col m-5">
        <button className="m-1 underline text-left">FAQ</button>
        <button className="m-1 underline text-left">Program</button>
        <button className="m-1 underline text-left">Schedule</button>
      </div>
      <div className="text-center text-xs text-gray-500 grow"></div>
      <img src="art_of_gen.png" className="h-[50px] m-10" alt="" />
    </footer>
  );
};

export default Footer;
