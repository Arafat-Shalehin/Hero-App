import React, { useEffect, useState } from 'react';

const Installation = () => {

    const [installedApp, setInstalledApp] = useState([]);
    const [allApp, setAllApp] = useState([]);

    useEffect(() => {
    fetch('/AllApp.json')
        .then(res => res.json())
        .then(data => {
        setAllApp(data);
        getInstalledApps(data);
        });
    }, []);

    const getInstalledApps = (apps) => {
    const installed = localStorage.getItem("installedApps");
    const parsedInstalled = installed ? JSON.parse(installed) : [];
    
    const installedApps = apps.filter(app => parsedInstalled.includes(app.id));
    setInstalledApp(installedApps);
    };

    console.log(installedApp);



    return (
        <div>
            <div>
                <div className='font-bold text-4xl text-center m-5 mt-10'>
                    <h1>Your Installed Apps</h1>
                    <p className='font-semibold text-sm text-[#627382] mt-3'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='flex justify-between items-center px-5'>
                    <p className='font-semibold text-xl'>{installedApp.length} App Found</p>
                    <details className="dropdown">
                        <summary className="btn m-1">Sort By Size</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a>Low To High</a></li>
                            <li><a>High To Low</a></li>
                        </ul>
                    </details>
                </div>
                <div className='mt-5 mb-10 space-y-5'>
                    {
                        installedApp.map(app => 
                            <div key={app.id} className='border-1 border-gray-500 mx-5 rounded shadow 
                            flex justify-between items-center p-5'>
                                <div className='flex gap-2'>
                                    <img
                                    className='w-20 h-20 rounded' 
                                    src={app.image} 
                                    alt="App Image" />

                                    <div>
                                        <h1 className='sm:text-xl font-semibold'>{app.brief}</h1>
                                        <div className='text-sm flex items-center sm:mt-8 mt-3'>

                                            <img
                                            className='inline-block w-3 h-4'
                                            src="/src/assets/Vector.png" 
                                            alt="Vector Icon" />
                                            <p className='text-[#00D390] mr-2'>{app.downloads}</p>  

                                            <img
                                            className='w-3 h-4'
                                            src="/src/assets/fi_1828884.png" 
                                            alt="Star Icon" />
                                            <p className='text-[#FF8811] mr-2'>{app.ratingAvg
}</p>                              

                                            <p className='text-[#627382]'>{app.size} MB</p>

                                        </div>
                                    </div>
                                </div>
                                <button className='text-white px-6 py-2 rounded bg-green-500'>
                                    Uninstall
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Installation;