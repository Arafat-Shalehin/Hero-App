import React, { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import AppsLoader from './AppsLoader';
import AllApps from './AllApps';

const Apps = () => {

    const [allAppData, setAllAppData] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        fetch('/AllApp.json')
        .then(res => res.json())
        .then(data => setAllAppData(data))

        setIsLoading(false);
    }, [])

    return (
        <div>
            <div className='text-center space-y-5 mt-5'>
                <h1 className='text-black font-bold text-4xl'>Our All Applications</h1>
                <p className='text-sm text-[#627382]'>Explore All Apps on the Market developed by us. 
                    We code for Millions
                </p>
            </div>

            <div className='flex items-center justify-between p-5'>
                <p className='font-semibold text-xl'>({allAppData.length})Apps Found</p>
                <span className='flex items-center border-1 border-gray-400 rounded'>
                    <CiSearch className='text-xl mr-1' /> <input 
                    className='font-semibold'
                    type="search" 
                    placeholder='Search Apps'/>
                </span>
            </div>

            {
                isLoading ? 
                <AppsLoader/> :
                
                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2
                sm:gap-8 gap-6 sm:p-15 p-5'>
                    {
                        allAppData.map(eachapp => 
                        <AllApps key={eachapp.id} eachapp={eachapp}></AllApps>
                        )
                    }
                </div>
            }
            
        </div>
    );
};

export default Apps;