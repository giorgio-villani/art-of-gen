'use client';

import React, { useState } from 'react';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="relative max-w-[1200px] items-center text-black w-full mx-auto flex">
      <a href="/">
        <img src="art_of_gen.png" className="h-[50px] m-10" alt="" />
      </a>
      <div className="text-center text-xs text-gray-500 grow"></div>

      <div className="flex items-center m-4 ">
        <div className="lg:hidden m-5">
          <span className="text-2xl cursor-pointer" onClick={toggleMenu} onMouseDown={(e) => e.preventDefault()}>
            {menuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
          </span>
        </div>
        <div className="hidden lg:flex items-centerspace-x-4">
          <button className="m-5">Artists</button>
          <button className="m-5">Donate</button>
          <button className="m-5 p-3 border border-black">RSVP</button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden min-h-full text-2xl flex flex-col absolute top-[100%] left-0 w-full p-4 bg-white text-center">
          <button className="m-5">Artists</button>
          <button className="m-5">Donate</button>
          <button className="m-5 p-3 border border-black">RSVP</button>
        </div>
      )}
    </header>
  );
};

export default Header;
