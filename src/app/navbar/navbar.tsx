"use client"
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Logo from "../images/image.png"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <div className="w-full  flex items-center md:justify-center top-0 z-50 bg-transparent md:gap-10 justify-between xl:gap-44 ">
      <Image src={Logo} alt="Logo" className="h-8 md:h-10 w-36" />
      <div className={`fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center xl:gap-44 gap-10 transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:transform-none md:static md:flex md:flex-row md:gap-6 md:bg-transparent`}>
        <button className="absolute top-4 right-4 text-2xl md:hidden text-white" onClick={toggleMenu}>
          <FaTimes />
        </button>
        <ul className="flex flex-col text-white opacity-50  items-center gap-5 md:flex-row xl:gap-12 ">
          <li><Link href="/" className= ""> Post job</Link></li>
          <li><Link href="/about" className="">Salaries</Link></li>
          <li><Link href="/contact" className="">Blog</Link></li>
          <li><Link href="/contact" className="">Employee</Link></li>
          <li><Link href="/contact" className="">About us</Link></li>


        </ul>
        <button className="h-12 w-[110px] text-white border-2 border-blue-600 rounded-lg  hover:bg-blue-600 transition-all duration-300 ">
          <Link href="/sign">Sign in</Link>
        </button>
      </div>
      <FaBars className="cursor-pointer md:hidden text-white text-2xl " onClick={toggleMenu} />
    </div>
  );
};

export default Navbar;
