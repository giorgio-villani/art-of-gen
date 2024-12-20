'use client';

import React, { useState } from 'react';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import LinkButton from './LinkButton';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="relative max-w-[1200px] items-center text-black w-full mx-auto flex text-xl py-5">
      <a href="/">
        <img src="/AOG_logo_v2.png" className="h-[75px] p-2" alt="" />
      </a>
      <div className="text-center text-gray-500 grow"></div>

      <div className="flex items-center ">
        <div className="md:hidden m-5">
          <span className="text-2xl cursor-pointer" onClick={toggleMenu} onMouseDown={(e) => e.preventDefault()}>
            {menuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
          </span>
        </div>
        <div className="hidden md:flex items-centerspace-x-4">
          <LinkButton href="/artists" text="Artists" />
          <LinkButton href="/pieces" text="Gallery" />
          <LinkButton href="/donate" text="Donate" />
          {/* <LinkButton href="/sponsorship" text="Sponsor" /> */}
          <a href="https://lu.ma/aezgoax2" target="_blank">
            <button className="m-5 p-3 border border-black">RSVP</button>
          </a>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden min-h-full text-2xl flex flex-col absolute top-[100%] left-0 w-full p-4 bg-white text-center">
          <LinkButton href="/artists" text="Artists" />
          <LinkButton href="/pieces" text="Gallery" />
          <LinkButton href="/donate" text="Donate" />
          {/* <LinkButton href="/sponsorship" text="Sponsor" /> */}
          <a href="https://lu.ma/aezgoax2" target="_blank">
            <button className="p-5 hover:bg-gray-200">RSVP</button>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
