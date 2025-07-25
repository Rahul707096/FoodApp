import React, { useState } from 'react';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a href="/" className="text-2xl font-bold text-blue-600">
            FoodApp
          </a>

          {/* Mobile toggle button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </a>
            <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Features
            </a>
            <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Pricing
            </a>
            <a href="/" className="text-gray-400 cursor-not-allowed">
              Disabled
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 pt-4 pb-4">
            <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </a>
            <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Features
            </a>
            <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Pricing
            </a>
            <a href="/" className="text-gray-400 cursor-not-allowed">
              Disabled
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
