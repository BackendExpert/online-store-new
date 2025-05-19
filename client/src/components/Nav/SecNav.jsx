import React, { useState } from 'react';
import { secdata } from './SecNacMenu';
import { FaBars, FaTimes } from 'react-icons/fa';

const SecNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-yellow-500 text-white px-4 md:px-12 xl:px-32">
            {/* Mobile Toggle Button */}
            <div className="flex justify-between items-center md:hidden py-4">
                <h2 className="text-lg font-semibold">Categories</h2>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white text-2xl focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded"
                    aria-label="Toggle Menu"
                    aria-expanded={isOpen}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Menu */}
            <nav
                className={`
          overflow-hidden transition-[max-height] duration-300 ease-in-out
          md:flex md:flex-wrap md:gap-4 md:justify-start
          ${isOpen ? 'max-h-[500px] py-4' : 'max-h-0'}
          md:max-h-full md:py-4
        `}
            >
                {secdata.map((data, index) => (
                    <a
                        href={data.link}
                        key={index}
                        className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-white transition-colors duration-200"
                    >
                        <data.icon className="text-lg" />
                        <span className="text-sm font-medium">{data.name}</span>
                    </a>
                ))}
            </nav>
        </div>
    );
};

export default SecNav;
