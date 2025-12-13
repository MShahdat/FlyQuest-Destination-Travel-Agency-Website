import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null); // For mobile only

  // Navbar links as config for DRY
  const navItems = [
    {
      key: 'study',
      label: 'Study Abroad',
      to: '/abroad',
      children: [
        { label: 'Australia', to: '/australia' },
        { label: 'Canada', to: '/canada' },
        { label: 'Europe', to: '/europe' },
        { label: 'Malaysia', to: '/malaysia' },
        { label: 'UK', to: '/uk' },
        { label: 'USA', to: '/usa' },
      ],
    },
    {
      key: 'services',
      label: 'Our Services',
      to: '/services',
      children: [
        { label: 'Tourist Visa', to: '/tourist' },
        { label: 'Hajj & Umrah', to: '/hajj-umrah' },
        { label: 'Air Ticket', to: '/air-ticket' },
      ],
    },
    {
      key: 'coaching',
      label: 'English Coaching',
      to: '/english-couching',
      children: [
        { label: 'IELTS Coaching', to: '/ielts' },
        { label: 'Duolingo', to: '/duolingo' },
      ],
    },
    {
      key: 'gallery',
      label: 'Gallery',
      to: '/gallery',
      children: [
        { label: 'Success Stories', to: '/success-stories' },
      ],
    },
    {
      key: 'resources',
      label: 'Resources',
      to: '/resources',
      children: [
        { label: 'Blogs', to: '/blogs' },
        { label: 'FAQ', to: '/faq' },
        { label: 'Visa Interview', to: '/visa-interview' },
        { label: 'How to Enroll', to: '/how-to-enroll' },
      ],
    },
    {
      key: 'about',
      label: 'About Us',
      to: '/about',
      children: [
        { label: 'About', to: '/about' },
        { label: 'Meet our Chairman', to: '/chairman' },
        { label: 'Meet our MD', to: '/md' },
        { label: 'Our Team', to: '/our-team' },
      ],
    },
  ];

  return (
    <div className='bg-sky-900 sticky top-0 left-0 z-50'>
      <div className="max-w-6xl px-4 py-2 mx-auto">
      {/* Hamburger Icon for Mobile */}
      <div className="flex items-center justify-between lg:hidden">
        <Link to="/" className="font-bold text-lg text-white py-3">Home</Link>
        <button
          onClick={() => setMobileMenu(true)}
          className="text-white text-2xl focus:outline-none"
        >
          <FaBars />
        </button>
      </div>

      {/* Desktop Nav */}
      <div className="hidden lg:flex gap-6 items-center justify-between font-bold text-md">
        <div className='py-4 text-white'>
          <Link to="/">Home</Link>
        </div>
        {navItems.map(item => (
          <div
            key={item.key}
            className="relative py-4"
            onMouseEnter={() => setOpenMenu(item.key)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <Link to={item.to} className="flex items-center gap-1 cursor-pointer text-white">
              {item.label} <FaChevronDown size={12} />
            </Link>
            {openMenu === item.key && (
              <div className="absolute left-0 bg-white shadow-lg mt-2 rounded-lg z-50 w-60">
                {item.children.map(child => (
                  <Link key={child.label} to={child.to}
                    className="block px-4 py-3 hover:scale-105 transform duration-600 hover:rounded-lg hover:bg-sky-700 hover:text-white"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className='py-4 text-white'>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      {/* Mobile Drawer/Menu */}
      {mobileMenu && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-6 lg:hidden overflow-y-auto">
          <button
            onClick={() => setMobileMenu(false)}
            className="self-end text-2xl text-gray-700 mb-2"
          >
            <FaTimes />
          </button>
          <Link to="/" className="px-8 py-2 text-lg font-bold text-sky-800 hover:rounded-xl hover:scale-101 transform duration-600 hover:bg-sky-700 hover:text-white" onClick={() => setMobileMenu(false)}>
            Home
          </Link>
          {navItems.map(item => (
            <MobileMenuDropdown
              key={item.key}
              item={item}
              openMobileDropdown={openMobileDropdown}
              setOpenMobileDropdown={setOpenMobileDropdown}
              onLinkClick={() => setMobileMenu(false)}
            />
          ))}
          <Link to="/contact" className="px-8 py-2 text-lg font-bold text-sky-800 mt-2 hover:rounded-xl hover:scale-101 transform duration-600 hover:bg-sky-700 hover:text-white" onClick={() => setMobileMenu(false)}>
            Contact
          </Link>
        </div>
      )}
    </div>
    </div>
  );
};

// Dropdown for Mobile, only one open at a time, WITH HOVER!
const MobileMenuDropdown = ({ item, onLinkClick, openMobileDropdown, setOpenMobileDropdown }) => {
  const isOpen = openMobileDropdown === item.key;

  const handleToggle = () => {
    if (isOpen) {
      setOpenMobileDropdown(null); // close if already open
    } else {
      setOpenMobileDropdown(item.key); // open this, close others
    }
  };

  return (
    <div className="w-full">
      <button
        className={`px-8 flex items-center justify-between w-full py-2 text-lg font-bold text-sky-800 focus:outline-none transition hover:scale-101 hover:rounded-xl transform duration-600 hover:bg-sky-700 hover:text-white`}
        onClick={handleToggle}
      >
        <span>{item.label}</span>
        <FaChevronDown className={`ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="pl-4">
          {item.children.map(child => (
            <Link
              key={child.label}
              to={child.to}
              className="block px-16 py-2 text-lg font-bold text-sky-700 transition hover:scale-101 hover:rounded-xl transform duration-600 hover:bg-sky-700 hover:text-white"
              onClick={onLinkClick}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
