import React from 'react';
import { promotions } from '../../api/promotionsData';
import { Link } from 'react-router-dom';

const Promotions: React.FC = () => {
    return(
        <div className="p-6 ">
            <h2 className="text-black text-3xl font-bold text-center mb-8">
                ~|Sự Kiện / Khuyến Mãi|~
            </h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {promotions.map((promo) => (
                    <div 
                        key={promo.id} 
                        className="relative bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden group"
                    >
                       <img
                            src={promo.image}
                            alt={promo.title}
                            className="w-full h-[200px] object-cover transition duration-300 ease-in-out group-hover:blur-sm"
                        /> 
                        <div className="p-4">
                            <h3 className="text-lg font-bold truncate">{promo.title}</h3>
                            <p className="text-sm mt-2 truncate">{promo.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-8 text-center">
                <Link to="/promotions">
                <button className="bg-primary hover:bg-green-500 font-bold py-2 px-6 rounded">
                    Xem Thêm
                </button>
                </Link>
            </div>
        </div>
    );
};

export default Promotions;