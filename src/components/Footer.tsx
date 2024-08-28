'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="max-w-[1200px] items-center text-black w-full mx-auto flex font-century">
      <div className="flex flex-col m-5">
        <button className="m-1 underline text-left">FAQ</button>
        <button className="m-1 underline text-left">Program</button>
        <button className="m-1 underline text-left">Schedule</button>
      </div>
      <div className="text-center text-xs text-gray-500 grow"></div>
      <a href="/">
        <img src="AOG_logo_v2.png" className="h-[75px] m-10" alt="" />
      </a>
    </footer>
  );
};

export default Footer;
