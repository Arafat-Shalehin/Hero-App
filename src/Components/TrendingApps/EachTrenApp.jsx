import React from 'react';
import { Link } from 'react-router';
import vectorPic from "/src/assets/Vector.png";
import avgRat from "/src/assets/fi_1828884 (1).png";

const EachTrenApp = ({app}) => {
    const {image, title, size, ratingAvg}  = app;
    return (
        <Link to={`/app/${app.id}`}>
            <div className='mx-auto hover:scale-110 transition ease-in-out'>
                <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img
                    className='w-[300px] object-contain 
                    contrast-125 brightness-110 p-5'
                    src={image}
                    alt={title}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">
                        {title}
                    </h2>
                    <div className='flex justify-between mt-3'>
                        <span className='bg-[#F1F5E8] font-bold gap-2 
                        text-[#00D390] md:px-5 px-2 py-1 rounded-lg flex items-center'>
                            <img 
                            className='w-5'
                            src={vectorPic} 
                            alt="Download Pic" />
                            {size}M
                        </span>
                        <span className='bg-[#FFF0E1] font-bold gap-2 
                        text-[#FF8811] md:px-5 px-2 py-2 rounded-lg flex items-center'>
                            <img
                            className='w-5' 
                            src={avgRat}
                            alt="Star Pic" />
                            {ratingAvg}
                        </span>
                    </div>
                </div>
                </div>
            </div>
        </Link>
    );
};

export default EachTrenApp;