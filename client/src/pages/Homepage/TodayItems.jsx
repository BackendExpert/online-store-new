import React from 'react';
import { todatedeals } from '../../components/Data/TodayDeals';

const TodayItems = () => {
    return (
        <section className="my-16 px-4 md:px-8 lg:px-16">
            <h1 className="text-orange-500 font-extrabold text-2xl text-center uppercase mb-10">
                Today's Hot Deals
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {todatedeals.map((product, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-4 flex flex-col items-center text-center"
                    >
                        <img
                            src={product.img}
                            alt={product.name}
                            className="h-40 w-auto object-contain mb-4"
                        />
                        <h2 className="font-semibold text-lg text-gray-800">{product.name}</h2>
                        <p className="text-orange-500 font-bold mt-1">{product.price}</p>
                        <p className="text-sm text-gray-500 mt-2">{product.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TodayItems;
