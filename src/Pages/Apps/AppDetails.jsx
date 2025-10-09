import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const AppDetails = () => {

    const {id} = useParams();
    const [app, setApp] = useState('');

    useEffect(() => {
        fetch('/AllApp.json')
        .then(res => res.json())
        .then(data => {
            const foundApp = data.find(app => app.id.toString() === id);
            setApp(foundApp);
        });
    }, [id]);

    const {image, title, reviews, ratingAvg, brief, developedBy, 
        downloads, size, description}  = app;

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
                                <span className='font-bold text-black text-3xl'>{downloads}</span>
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
                        <button className='text-white font-semibold px-8 py-2 rounded
                         bg-[#00D390] shadow hover:scale-110 transition ease-in-out mt-3'>
                            Install Now ({size} MB)
                        </button>
                        
                    </div>
                </div>
                <div className="divider"></div>
                <h1 className='font-bold text-3xl'>Ratings</h1>
                {/* Chart */}
                <div className="divider"></div>
                <h1 className='text-2xl font-semibold'>Description</h1>
                <p className='text-[#627382] mt-2 text-[20px]'>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;