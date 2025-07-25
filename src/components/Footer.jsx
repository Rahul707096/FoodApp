import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <h2 className="text-xl font-bold mb-2">FoodApp</h2>
          <p className="text-sm">Delicious food delivered at your door. Fresh ingredients, fast service.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/menu" className="hover:underline">Menu</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <ul className="text-sm space-y-1">
            <li>Email: support@foodapp.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: New Delhi, India</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#"><i className="fab fa-facebook hover:text-gray-300"></i></a>
            <a href="#"><i className="fab fa-instagram hover:text-gray-300"></i></a>
            <a href="#"><i className="fab fa-twitter hover:text-gray-300"></i></a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-200 mt-6">
        © {new Date().getFullYear()} FoodApp. All rights reserved.
      </div>
    </footer>
  );
}
