import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ToastContainer, toast } from 'react-toastify';

const AppDetails = () => {

    const {id} = useParams();
    const [app, setApp] = useState('');
    const [installed, setInstalled] = useState(false);

    useEffect(() => {
        fetch('/AllApp.json')
        .then(res => res.json())
        .then(data => {
            const foundApp = data.find(app => app.id.toString() === id);
            setApp(foundApp);
        });
    }, [id]);

    const {image, ratings, reviews, ratingAvg, brief, developedBy, 
        downloads, description}  = app;

     useEffect(() => {
    
        const installedApps = JSON.parse(localStorage.getItem("installedApps") || "[]");
        if (installedApps.includes(app.id)) {
            setInstalled(true);
        }
    }, [app.id]);

    const handleAppInstall = () => {
        if (app && !installed) {
        const installedApps = JSON.parse(localStorage.getItem("installedApps") || '[]');

        if (!installedApps.includes(app.id)) {
            installedApps.push(app.id);
            localStorage.setItem("installedApps", JSON.stringify(installedApps));
        }

        setInstalled(true);
        toast.success(`${app.title} has been Installed`);
        }

    }

    return (
        <div>
            <div className='p-10'>
                <div className='flex sm:flex-row text-center flex-col items-center gap-5'>
                    <div>
                        <img
                        className='rounded-xl shadow w-65' 
                        src={image}
                        alt="App Image" />
                    </div>
                    <div className='sm:text-left text-center'>
                        <h1 className='font-bold lg:text-3xl md:text-2xl text-xl text-black'>{brief}</h1>
                        <p className='text-sm text-[#627382] mt-2'>Developed by 
                            <span className='text-purple-700 font-semibold ml-1'>{developedBy}</span>
                        </p>
                        <div className="divider"></div>
                        <div className='flex items-center gap-8'>
                            <h6>
                                <img className='w-7 mx-auto sm:mx-0' src="/src/assets/Vector.png" alt="Download Pic" />
                                <p className='text-sm text-[#627382]'>Downloads</p>
                                <span className='font-bold text-black text-3xl'>{downloads}M</span>
                            </h6>
                            <h6>
                                <img className='mx-auto sm:mx-0' src="/src/assets/fi_1828884 (1).png" alt="Star Pic" />
                                <p className='text-sm text-[#627382]'>Average Ratings</p>
                                <span className='font-bold text-black text-3xl'>{ratingAvg}</span>
                            </h6>
                            <h6>
                                <img className='mx-auto sm:mx-0' src="/src/assets/fi_17817684.png" alt="Like Pic" />
                                <p className='text-sm text-[#627382]'>Total Reviews</p>
                                <span className='font-bold text-black text-3xl'>{reviews}</span>
                            </h6>
                        </div>
                        <button
                        disabled={installed}
                        onClick={() => handleAppInstall()} 
                        className={`${
                            installed ? 
                            'bg-gray-300 cursor-not-allowed text-white font-semibold px-12 py-2 rounded' 
                            : 
                            'text-white font-semibold px-8 py-2 rounded bg-[#00D390] shadow hover:scale-110 transition ease-in-out mt-3'
                            }`}>
                            {installed ? "Installed" : `Install Now (${app.size} MB)`}
                        </button>
                        
                    </div>
                </div>
                <div className="divider"></div>
                <div className='w-[100%] h-[450px]'>
                    <h1 className='font-bold text-3xl mb-5'>Ratings</h1>
                    <div className='w-[100%] h-[380px]'>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                            data={ratings}
                            layout="vertical"
                            margin={{ top: 5, right: 30, bottom: 5 }}
                            >
                            <XAxis type="number" />
                            <YAxis 
                            type="category" 
                            dataKey="name" 
                            width={90}
                            reversed />
                            <Tooltip />
                            <Bar dataKey="count" fill="#ff9800" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="divider"></div>
                <h1 className='text-2xl font-semibold'>Description</h1>
                <p className='text-[#627382] mt-2 text-[20px]'>{description}</p>
                <ToastContainer/>
            </div>
        </div>
    );
};

export default AppDetails;