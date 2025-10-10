import React from 'react';
import logoImage from "../../assets/logo.png";

const AppsLoader = () => {
    return (
        <div>
            <div className="flex items-center justify-center h-50">
            <p className='flex font-bold text-7xl text-[#627382]'>
                L<img 
                src={logoImage} 
                alt="Loading..." 
                className="w-17 h-17 animate-spin"
                />ading...
            </p>
            </div>
        </div>
    );
};

export default AppsLoader;