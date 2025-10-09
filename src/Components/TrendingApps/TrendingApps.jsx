import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import EachTrenApp from './EachTrenApp';

const TrendingApps = () => {

    const [trendingApps, setTrendingApps] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        setIsLoading(true);

        fetch('/TrendingApps.json')
        .then(res => res.json())
        .then(data => setTrendingApps(data));

        setIsLoading(false);
    }, [])

    return (
        <div className='py-10 text-center space-y-5'>
            <h1 className='text-5xl font-bold'>Trending Apps</h1>
            <p className='text-[#627382] md:text-sm mt-10'>Explore All Trending Apps on the Market developed by us</p>

           {
            isLoading ? 
            <Loader/> :
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2
                sm:gap-8 gap-6 sm:p-15 p-5'>
                {
                    trendingApps.map(app => 
                    <EachTrenApp key={app.id} app={app}></EachTrenApp>
                    )
                }
            </div>
           }
           <button className='bg-gradient-to-l from-[#9F62F2] hover:scale-120 transition 
           to-[#632EE3] text-white font-bold px-10 py-3 rounded-lg'>
                <a href="/apps">Show All</a>
            </button>
        </div>
    );
};

export default TrendingApps;