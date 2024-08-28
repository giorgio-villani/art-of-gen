'use client';

import React, { useState } from 'react';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="relative max-w-[1200px] items-center text-black w-full mx-auto flex text-xl py-5">
      <a href="/">
        <img src="AOG_logo_v2.png" className="h-[75px] " alt="" />
      </a>
      <div className="text-center text-gray-500 grow"></div>

      <div className="flex items-center ">
        <div className="md:hidden m-5">
          <span className="text-2xl cursor-pointer" onClick={toggleMenu} onMouseDown={(e) => e.preventDefault()}>
            {menuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
          </span>
        </div>
        <div className="hidden md:flex items-centerspace-x-4">
          <button className="m-5">
            <a href="/artists">Artists</a>
          </button>
          <button className="p-5 hover:bg-gray-200">
            <a href="/donate">Donate</a>
          </button>
          <button className="m-5">
            <a href="/sponsorship">Sponsor</a>
          </button>
          <button className="m-5 p-3 border border-black">RSVP</button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden min-h-full text-2xl flex flex-col absolute top-[100%] left-0 w-full p-4 bg-white text-center">
          <button className="m-5">
            <a href="/artists">Artists</a>
          </button>
          <button className="p-5 hover:bg-gray-200">
            <a href="/donate">Donate</a>
          </button>
          <button className="m-5">
            <a href="/sponsorship">Sponsor</a>
          </button>
          <button className="p-5 hover:bg-gray-200">RSVP</button>
        </div>
      )}
    </header>
  );
};

export default Header;
