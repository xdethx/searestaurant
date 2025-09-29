"use client";
import { useEffect, useState } from "react";

function Navbar() {

  useEffect(()=> {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return()=> window.removeEventListener('scroll', handleScroll);
  }, [] );
    const [isOpen,setIsOpen]= useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    return ( 

  <nav
  className={`fixed top-0 left-0 w-full z-20 px-4 py-3 flex items-center justify-between md:justify-start transition-all duration-300 ${
    (isScrolled || isOpen)
      ? "bg-white/80 backdrop-blur-md shadow-md"
      : "md:bg-transparent md:backdrop-blur-sm bg-white"
  }`}
>


        {/* Logo */}
        <div className="text-white text-xl font-bold flex-shrink-0">Logo</div>

        {/* Masaüstü menü */}
        <div className="flex-1 flex justify-center items-center">
          <ul className="hidden md:flex md:space-x-8 items-center">
            <li className=" text-white cursor-pointer hover:text-blue-600">Ana Sayfa</li>
            <li className="text-white cursor-pointer hover:text-blue-600">Hakkımızda</li>
            <li className="text-white text-whitecursor-pointer hover:text-blue-600">İletişim</li>
          </ul>
        </div>

        {/* Hamburger butonu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex-shrink-0 z-20"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <div className="w-6 h-6 relative flex items-center justify-center">
              <span className="block w-5 h-0.5 bg-black rotate-45 absolute top-1/2 left-0 right-0 transform -translate-y-1/2"></span>
              <span className="block w-5 h-0.5 bg-black -rotate-45 absolute top-1/2 left-0 right-0 transform -translate-y-1/2"></span>
            </div>
          ) : (
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </div>
          )}
        </button>

        {/* Mobil menü */}
        <ul
          className={`md:hidden absolute top-full left-0 w-full bg-white transition-all duration-300 overflow-hidden
            ${isOpen ? "max-h-60" : "max-h-0"}`}
        >
          <li className="p-4 border-b cursor-pointer hover:text-blue-600">
            Ana Sayfa
          </li>
          <li className="p-4 border-b cursor-pointer hover:text-blue-600">
            Hakkımızda
          </li>
          <li className="p-4 border-b cursor-pointer hover:text-blue-600">
            İletişim
          </li>
        </ul>
      </nav>
     );
     // logolar solda menu ortada prompt girdin ordan devam et
}

export default Navbar;