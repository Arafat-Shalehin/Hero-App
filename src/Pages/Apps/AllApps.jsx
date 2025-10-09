import React from 'react';
import { Link } from 'react-router';

const AllApps = ({eachapp}) => {

    const {image, title, size, ratingAvg}  = eachapp;
    
    return (
        <Link to={`/app/${eachapp.id}`}>
            <div className='mx-auto hover:scale-110 transition ease-in-out shadow'>
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
                        text-[#00D390] sm:px-5 px-2 py-1 rounded-lg flex items-center'>
                            <img 
                            className='w-5'
                            src="/src/assets/fi_9131795.png" 
                            alt="Download Pic" />
                            {size}M
                        </span>
                        <span className='bg-[#FFF0E1] font-bold gap-2 
                        text-[#FF8811] px-5 py-1 rounded-lg flex items-center'>
                            <img 
                            src="/src/assets/fi_1828884.png" 
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

export default AllApps;