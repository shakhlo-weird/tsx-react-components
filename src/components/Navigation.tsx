// src/components/Navigation.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="bg-gray-800 mx-auto to-blue-gray-800">
            <div className="container">
                <div className="flex items-center justify-between h-16">
                    <div className="hidden md:flex md:space-x-8">
                        <Link to="/"
                              className="text-gray-300 hover:bg-gray-700 hover:text-white py-2 rounded-md text-sm font-medium">
                            Home
                        </Link>
                        <Link to="/about"
                              className="text-gray-300 hover:bg-gray-700 hover:text-white py-2 rounded-md text-sm font-medium">
                            About
                        </Link>
                        <Link to="/services"
                              className="text-gray-300 hover:bg-gray-700 hover:text-white  py-2 rounded-md text-sm font-medium">
                            Services
                        </Link>
                        <Link to="/contact"
                              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
