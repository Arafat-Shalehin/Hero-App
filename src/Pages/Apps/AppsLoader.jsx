import React from 'react';

const AppsLoader = () => {
    return (
        <div>
            <div className="flex items-center justify-center h-50">
            <p className='flex font-bold text-7xl text-[#627382]'>
                L<img 
                src="/src/assets/logo.png" 
                alt="Loading..." 
                className="w-17 h-17 animate-spin"
                />ading...
            </p>
            </div>
        </div>
    );
};

export default AppsLoader;