import React from 'react'
import saleimg1 from '../../assets/saleimg1.png'
import saleimg2 from '../../assets/saleimg2.png'
import saleimg3 from '../../assets/saleimg3.png'

const TopBanner = () => {
    return (
        <section className="py-12 bg-gradient-to-r from-orange-400 to-orange-600">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-16">
                {/* Left Image */}
                <div className="order-2 md:order-1 mt-8 md:mt-0 flex justify-center md:justify-start">
                    <img
                        src={saleimg1}
                        alt="Sale Item 1"
                        className="hidden md:block h-40 w-auto transform rotate-12 hover:rotate-0 transition-transform duration-500"
                    />
                </div>

                {/* Main Text */}
                <div className="order-1 md:order-2 text-center md:text-left">
                    <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl">
                        Up to 40% Off
                    </h1>
                    <p className="mt-4 text-white text-lg sm:text-xl">
                        Selected Items Only
                    </p>
                    <button className="mt-6 bg-white text-orange-600 font-bold py-2 px-6 rounded-full shadow-md hover:bg-gray-100 transition">
                        Shop Now
                    </button>
                </div>

                {/* Right Image */}
                <div className="order-3 mt-8 flex justify-center md:justify-end">
                    <img
                        src={saleimg2}
                        alt="Sale Item 2"
                        className="hidden md:block h-48 w-auto transform -rotate-12 hover:rotate-0 transition-transform duration-500"
                    />
                </div>
            </div>
        </section>
    )
}

export default TopBanner
