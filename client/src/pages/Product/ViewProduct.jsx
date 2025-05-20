import React from 'react';
import cloth1 from '../../assets/cloth1.png';

const ViewProduct = () => {
    return (
        <div className="px-4 md:px-12 xl:px-32 py-16">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Product Image */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src={cloth1}
                        alt="Product"
                        className="h-96 w-auto object-contain rounded-2xl shadow-md"
                    />
                </div>

                {/* Product Info */}
                <div className="md:w-1/2 flex flex-col">
                    {/* Price and Discount */}
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                        $59.00
                    </h1>
                    <div className="flex items-center gap-4 mb-4">
                        <p className="text-xl line-through text-gray-400">$119.00</p>
                        <p className="text-red-500 text-lg font-semibold">68% off</p>
                    </div>

                    {/* Short Description */}
                    <p className="text-sm text-gray-500 mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sed sit culpa fugiat.
                    </p>

                    {/* Full Description */}
                    <p className="text-base md:text-lg font-medium text-gray-700 mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut officiis minima sint vero
                        maiores sapiente explicabo facilis, modi reiciendis totam sed, eos consectetur ipsam
                        eligendi illum voluptates pariatur quia tempore?
                    </p>

                    {/* Sales Info */}
                    <p className="text-sm text-green-600 font-medium mb-4">5000+ sold</p>

                    {/* Thumbnails */}
                    <div className="flex gap-2 overflow-x-auto">
                        {[cloth1, cloth1, cloth1].map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`Thumbnail ${index + 1}`}
                                className="h-24 w-auto border border-gray-300 rounded-lg hover:border-black transition duration-300 cursor-pointer"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewProduct;
