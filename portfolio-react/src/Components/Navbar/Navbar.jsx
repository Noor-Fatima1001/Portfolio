import React, { useState } from 'react';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container py-2 md:flex md:justify-around items-center">


        {/* Menu Icon */}
        <img
          src={menu_open}
          onClick={toggleMenu}
          alt="Open menu"
          className="fixed mx-72 md:hidden lg:hidden cursor-pointer"
        />

        {/* Menu Items */}
        <ul
          className={` grid grid-cols-3 items-center size-3 gap-2 bg-black-700 t-5 h-5 w-full left-0 right-48 top-0 transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          } md:flex  md:flex-row md:space-x-6 md:static md:translate-x-0`}
        >
          
          <li>
            <AnchorLink
              className="hover:text-gray-400"
              href="#home"
              onClick={() => setMenu('home')}
            >
              Home
            </AnchorLink>
            {menu === 'home' && <img src={underline} alt="underline" />}
          </li>

          <li>
            <AnchorLink
              className="hover:text-gray-400"
              offset={50}
              href="#about"
              onClick={() => setMenu('about')}
            >
              About me
            </AnchorLink>
            {menu === 'about' && <img src={underline} alt="underline" />}
          </li>

          <li>
            <AnchorLink
              className="hover:text-gray-400"
              offset={50}
              href="#services"
              onClick={() => setMenu('services')}
            >
              Services
            </AnchorLink>
            {menu === 'services' && <img src={underline} alt="underline" />}
          </li>

          <li>
            <AnchorLink
              className="hover:text-gray-400"
              offset={50}
              href="#work"
              onClick={() => setMenu('work')}
            >
              Portfolio
            </AnchorLink>
            {menu === 'work' && <img src={underline} alt="underline" />}
          </li>

          <li>
            <AnchorLink
              className="hover:text-gray-400"
              offset={50}
              href="#contact"
              onClick={() => setMenu('contact')}
            >
              Contact
            </AnchorLink>
            {menu === 'contact' && <img src={underline} alt="underline" />}
          </li>
        </ul>

        {/* Connect Button */}
        <div className="nav-connect">
          <AnchorLink
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
            offset={50}
            href="#contact"
          >
            Connect 
          </AnchorLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
