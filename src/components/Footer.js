import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="bg-black text-white py-6 w-full mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="transition-transform duration-200 transform hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path d="M23.643 4.937a10.028 10.028 0 01-2.828.775 4.951 4.951 0 002.165-2.724 10.086 10.086 0 01-3.127 1.195 4.93 4.93 0 00-8.388 4.48A13.988 13.988 0 011.671 3.149 4.928 4.928 0 003.18 9.05a4.922 4.922 0 01-2.236-.616v.062a4.925 4.925 0 003.946 4.828 4.904 4.904 0 01-2.223.084 4.93 4.93 0 004.604 3.42A9.869 9.869 0 010 19.54a13.934 13.934 0 007.557 2.211c9.055 0 14.008-7.485 14.008-13.952 0-.213-.005-.425-.014-.635A10.023 10.023 0 0024 4.59a9.943 9.943 0 01-2.357.647z" />
            </svg>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-transform duration-200 transform hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12 0 6.627 5.373 12 12 12 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zm0 22c-5.525 0-10-4.475-10-10 0-5.525 4.475-10 10-10 5.525 0 10 4.475 10 10 0 5.525-4.475 10-10 10zm5-10c0 2.762-2.238 5-5 5-2.762 0-5-2.238-5-5 0-2.762 2.238-5 5-5 2.762 0 5 2.238 5 5zm-5-7c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm6.5 0c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5 1.672-1.5 1.5-1.5 1.5.672 1.5 1.5z" />
            </svg>
          </a>

          <a
            href="https://messenger.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Messenger"
            className="transition-transform duration-200 transform hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path d="M12 2c-5.523 0-10 4.477-10 10 0 1.793.526 3.465 1.48 4.902l-1.183 4.57 4.682-1.263c1.361.758 2.878 1.263 4.773 1.263 5.523 0 10-4.477 10-10s-4.477-10-10-10zm4.227 8.366-4.873 3.292c-.183.121-.377.182-.575.182-.213 0-.425-.065-.608-.19l-2.813-1.953c-.392-.27-.606-.738-.606-1.23 0-.183.054-.36.156-.514l.052-.077c.198-.308.524-.469.854-.469.157 0 .315.036.462.108l2.663 1.882 3.83-2.577c.408-.274.948-.164 1.222.244.275.409.163.947-.244 1.222z" />
            </svg>
          </a>
        </div>

        <div style={{marginBottom:"50p"}} className={`text-center ${fadeIn ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'}`}>
          <h1 className="text-lg font-semibold mb-4">
            Design of trade of today <br /> just like you
          </h1>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-transparent border border-gray-500 rounded-l-lg py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-lg transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
