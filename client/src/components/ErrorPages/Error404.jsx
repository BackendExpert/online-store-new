import React from 'react';
import { Link } from 'react-router-dom'; // Optional if you use react-router

const Error404 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-500 px-6 text-gray-900">
            <h1 className="text-9xl font-extrabold mb-4 drop-shadow-lg select-none">404</h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Oops! Page Not Found</h2>
            <p className="max-w-md text-center mb-8 text-lg text-gray-800">
                The page you are looking for doesn’t exist or has been moved.
            </p>
            <Link
                to="/"
                className="bg-gray-900 text-yellow-500 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 hover:text-gray-900 transition-colors duration-300"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default Error404;
