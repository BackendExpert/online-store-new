import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-yellow-500 text-gray-700 px-6 md:px-12 xl:px-32 py-12 max-w-full overflow-x-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                {/* Customer Service */}
                <div>
                    <h3 className="text-white font-bold mb-5 tracking-wide text-lg">Customer Service</h3>
                    <ul className="space-y-3 text-sm">
                        {['Contact Us', 'Order Tracking', 'Returns & Refunds', 'FAQs', 'Shipping Info'].map((item, i) => (
                            <li key={i}>
                                <a href="#" className="hover:text-white transition-colors duration-300">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* About Us */}
                <div>
                    <h3 className="text-white font-bold mb-5 tracking-wide text-lg">About Us</h3>
                    <ul className="space-y-3 text-sm">
                        {['Company Info', 'Careers', 'Press & News', 'Affiliate Program'].map((item, i) => (
                            <li key={i}>
                                <a href="#" className="hover:text-white transition-colors duration-300">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Help & FAQs */}
                <div>
                    <h3 className="text-white font-bold mb-5 tracking-wide text-lg">Help & FAQs</h3>
                    <ul className="space-y-3 text-sm">
                        {['Payment Methods', 'Security', 'Privacy Policy', 'Terms of Use'].map((item, i) => (
                            <li key={i}>
                                <a href="#" className="hover:text-white transition-colors duration-300">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Follow Us */}
                <div>
                    <h3 className="text-white font-bold mb-5 tracking-wide text-lg">Follow Us</h3>
                    <div className="flex space-x-6 flex-wrap sm:flex-nowrap text-yellow-100">
                        {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                aria-label="Social Link"
                                className="hover:text-white transition-colors duration-300 shadow-lg rounded-full p-2 bg-yellow-600 hover:bg-yellow-700"
                            >
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>

                    <p className="mt-8 text-xs text-yellow-100 max-w-xs">
                        &copy; {new Date().getFullYear()} Online Store. All rights reserved. Engineered by{' '}
                        <span className="text-gray-900 font-semibold">
                            <a href="https://www.blackalphalabs.com" target='_blank' className="uppercase hover:underline">Blackalpha Labs</a>
                        </span>
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
