import React, { useEffect, useState } from 'react';
import AppsLoader from './Apps/AppsLoader';
import { ToastContainer, toast } from 'react-toastify';
import useApps from '../Hooks/useApps';
import vectorPic from "/src/assets/Vector.png";
import avgRat from "/src/assets/fi_1828884 (1).png";
import review from "/src/assets/fi_17817684.png";

const Installation = () => {

    const {removeInstalledApp} = useApps();
    const [installedApp, setInstalledApp] = useState([]);
    const [allApp, setAllApp] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortOrder, setSortOrder] = useState("none");

    useEffect(() => {
        setLoading(true);
        fetch('/AllApp.json')
        .then(res => res.json())
        .then(data => {
        setAllApp(data);
        getInstalledApps(data);
        setLoading(false)
        });
    }, []);

    const getInstalledApps = (apps) => {
        const installed = localStorage.getItem("installedApps");
        const parsedInstalled = installed ? JSON.parse(installed) : [];
        
        const installedApps = apps.filter(app => parsedInstalled.includes(app.id));
        setInstalledApp(installedApps);
    };

    const handleUninstallApp = (id) => {
        removeInstalledApp(id);
        setInstalledApp(prev => prev.filter(app => app.id !== id));
        toast("App has been removed from your list.")
    }

    const sortedItem = (
        () => {
        if (sortOrder === 'Size-Asc') {
            return [...installedApp].sort((a,b) => a.downloads - b.downloads)
        } else if (sortOrder === 'Size-Desc') {
            return [...installedApp].sort((a,b) => b.downloads - a.downloads)
        } else {
            return installedApp
        }
    }
    ) ()
    

    return (
        <div>
            <div>
                <div className='font-bold text-4xl text-center m-5 mt-10'>
                    <h1>Your Installed Apps</h1>
                    <p className='font-semibold text-sm text-[#627382] mt-3'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='flex justify-between items-center px-5'>
                    <p className='font-semibold text-xl'>{installedApp.length} App Found</p>
                    <label className="form-control w-40 max-w-xs">
                        <select
                        className='select select-bordered'
                        value={sortOrder}
                        onChange={e => setSortOrder(e.target.value)}>
                            <option value="none">Sort By Size</option>
                            <option value="Size-Asc">Low To High</option>
                            <option value="Size-Desc">High To Low</option>
                        </select>
                    </label>
                </div>
                {
                    loading ? 
                    <AppsLoader/> :
                <div className='mt-5 mb-10 space-y-5'>
                    
                    { installedApp.length == 0 ? 
                    <div className='text-center items-center space-y-2'>
                        <h1 className='font-bold text-4xl'>No App Installed</h1>
                        <p className='text-lg text-[#627382]'>Start exploring and install your favorite apps</p>
                    </div> :
                        sortedItem.map(app => 
                            <div key={app.id} className='border-1 border-gray-500 mx-5 rounded shadow 
                            flex justify-between items-center p-5'>
                                <div className='flex gap-2'>
                                    <img
                                    className='w-20 h-20 rounded' 
                                    src={app.image} 
                                    alt="App Image" />

                                    <div>
                                        <h1 className='sm:text-xl lg:text-2xl font-semibold'>{app.brief}</h1>
                                        <div className='text-sm flex items-center sm:mt-8 mt-3'>

                                            <img
                                            className='inline-block w-3 h-4'
                                            src={vectorPic} 
                                            alt="Vector Icon" />
                                            <p className='text-[#00D390] mr-2'>{app.downloads}M</p>  

                                            <img
                                            className='w-3 h-4'
                                            src={avgRat} 
                                            alt="Star Icon" />
                                            <p className='text-[#FF8811] mr-2'>{app.ratingAvg}</p>                              

                                            <p className='text-[#627382]'>{app.size} MB</p>

                                        </div>
                                    </div>
                                </div>
                                <button
                                onClick={() => handleUninstallApp(app.id)} 
                                className='text-white px-6 py-2 rounded bg-green-500'>
                                    Uninstall
                                </button>
                            </div>
                        )
                    }
                    <ToastContainer/>
                </div>
                }
            </div>
        </div>
    );
};

export default Installation;