import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/flag-logo-favicon.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Untuk deteksi apakah menu pada mobile view sedang terbuka atau tidak

  return (
    <nav className="p-4 font-bold text-gray-600 bg-white shadow-md font-spartan">
      <div className="container flex flex-col items-center justify-center mx-auto md:flex-row md:justify-between">
        {/* Judul dan Logo */}
        <div className="flex items-center mb-4 md:mb-0">
          <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
          <h1 className="text-xl font-bold font-volkhov">Country List</h1>
        </div>

        {/* Hamburger Icon Mobile View */}
        <div className="absolute md:hidden right-4 top-4">
          {/* Tombol untuk membuka/menutup menu pada mobile view */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 focus:outline-none"
          >
            {/* Ikon hamburger menggunakan SVG */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Menampilkan navigasi ke menu lain yang muncul/tidak tergantung state 'isOpen' pada mobile view */}
        <div
          className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
            isOpen ? 'max-h-40' : 'max-h-0'
          } md:max-h-full md:flex md:flex-row items-center md:space-x-4`}
        >
          {/* Link ke Home Page */}
          <Link
            to="/"
            className="block px-4 py-2 text-center rounded hover:bg-gray-200 md:inline-block md:mt-0"
          >
            Home
          </Link>
          {/* Link ke Cooperation List */}
          <Link
            to="/cooperation"
            className="block px-4 py-2 mt-2 text-center text-white bg-gray-600 rounded-full hover:bg-gray-700 md:mt-0"
          >
            Cooperation List
          </Link>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;