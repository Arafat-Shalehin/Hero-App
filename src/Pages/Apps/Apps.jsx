import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import AppsLoader from './AppsLoader';
import AllApps from './AllApps';
import AppErrorPage from './AppErrorPage';
import useApps from '../../Hooks/useApps';

const Apps = () => {

    const {allApp, loading} = useApps()

    const [search, setSearch] = useState("");

    const finalSearch = search.trim().toLowerCase()
    const searchApps = finalSearch ? allApp.filter(app => 
        app.title.toLowerCase().includes(finalSearch)) : allApp

    return (
        <div>
            <div className='text-center space-y-5 mt-5'>
                <h1 className='text-black font-bold text-4xl'>Our All Applications</h1>
                <p className='text-sm text-[#627382]'>Explore All Apps on the Market developed by us. 
                    We code for Millions
                </p>
            </div>

            <div className='flex items-center justify-between p-5'>
                <p className='font-semibold text-xl'>({searchApps.length})Apps Found</p>
                <span className='flex items-center border-1 border-gray-400 rounded'>
                    <input 
                    className='font-semibold px-4 py-1'
                    type="search" 
                    placeholder="Search Apps"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}/>
                </span>
            </div>
            { 
                searchApps.length == 0 && <AppErrorPage/>
            }

            {
                loading ? 
                <AppsLoader/> :
                
                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2
                sm:gap-8 gap-6 sm:p-15 p-5'>
                    {
                        searchApps.map(eachapp => 
                        <AllApps key={eachapp.id} eachapp={eachapp}></AllApps>
                        )
                    }
                </div>
            }
            
        </div>
    );
};

export default Apps;