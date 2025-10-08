import React from 'react';

const Loader = () => {

    const countCard = Array(8).fill(0);
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2
        gap-8 mt-15'>
            {
                countCard.map((num, index) => 
                <div className='mx-auto' key={index}>
                    <div className="flex w-52 flex-col gap-4">
                        <div className="skeleton h-32 w-full"></div>
                        <div className="skeleton h-4 w-28"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default Loader;