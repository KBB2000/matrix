import React, { useState } from 'react';
import Dashboard from './Dashboard';
import HeroSec from './HeroSec';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <header className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-4 px-8">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-bold">EthAi</span>
          </div>

          <nav className="hidden md:flex space-x-6" style={{backgroundColor:"#091f21", color :"#7eb9bd", borderRadius:"30px", padding:"20px"}}>
            <a href="#" className="text-white hover:text-yellow-300">Features</a>
            <a href="#" className="text-white hover:text-yellow-300">Why Us</a>
            <a href="#" className="text-white hover:text-yellow-300">Tokenomics</a>
            <a href="#" className="text-white hover:text-yellow-300">Roadmap</a>
          </nav>

          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400">Log in</a>
            <button className="bg-white text-black px-4 py-2 rounded-lg">Whitepaper</button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMobileMenu} className="md:hidden flex items-center text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4">
            <nav className="space-y-4">
              <a href="/" className="block text-white hover:text-yellow-300">Features</a>
              <a href="/" className="block text-white hover:text-yellow-300">Why Us</a>
              <a href="/" className="block text-white hover:text-yellow-300">Tokenomics</a>
              <a href="/" className="block text-white hover:text-yellow-300">Roadmap</a>
            </nav>
            <div className="mt-4">
              <a href="/" className="block text-white hover:text-gray-400">Log in</a>
              <button className="mt-2 bg-white text-black px-4 py-2 rounded-lg w-full">Whitepaper</button>
            </div>
          </div>
        )}
      </header>

      <section className="bg-gradient-to-r from-black via-gray-900 to-black h-screen">
        <div className="container mx-auto text-center text-white py-20">
          <h1 className="text-5xl font-bold mb-6">When Innovation</h1>
          <h1 className="text-5xl font-bold mb-6">
            Meets <span style={{ backgroundColor: "#b0f8ff", color: "#0b2b2e", borderRadius: "5px" }}>Investment</span>
          </h1>
          <p className="text-lg mb-8">Empowering Trading Through Advanced Technology</p>
          <button className="bg-gray-800 text-white text-lg font-semibold py-2 px-4 rounded-full border-2 border-green-500 hover:bg-gray-700 transition duration-300 ease-in-out">
            Open dApp
          </button>
        </div>
        <Dashboard />
        <HeroSec />
      </section>
    </div>
  );
};

export default Navbar;
