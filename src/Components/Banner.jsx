import React from 'react';
import googleplay from '/src/assets/fi_16076057.png';
import appStore from '/src/assets/fi_5977575.png';
import heroPic from '/src/assets/hero.png';

const Banner = () => {
    return (
        <div>
            <div className='text-center md:space-y-8 space-y-4 pt-10'>
                <h1 className='text-5xl font-bold'>
                We Build <br /><span className='text-[#9F62F2]'>Productive</span> Apps
                </h1>
                <p className='text-[#627382] md:text-sm text-[16px] p-4 md:p-0'>
                    At HERO.IO, we craft innovative apps designed to make 
                    everyday life simpler, smarter, and more exciting. <br />
                    Our goal is to turn your ideas into digital 
                    experiences that truly make an impact.
                </p>
                <div className='font-semibold space-x-10 text-xl mb-8'>
                    <a
                    target="_blank" 
                    href="https://play.google.com/store/games?device=windows">
                        <button className='border-2 border-gray-400 px-3 md:px-6 
                            py-2 rounded-lg'>
                            <img src={googleplay} className='inline-block items-center
                            h-10 md:text-3xl'/> 
                            Google Play
                        </button>
                    </a>
                    <a target="_blank" href="https://www.apple.com/app-store/">
                        <button className='border-2 border-gray-400 px-3 md:px-6 
                            py-2 rounded-lg'>
                            <img src={appStore} className='inline-block items-center
                            h-10 md:text-3xl'/> 
                            App Store
                        </button>
                    </a>
                </div>
                <img
                className='md:w-[100vh] w-[50vh] mx-auto' 
                src={heroPic}
                alt="Hero pic" />
            </div>
            <div className='w-full h-[200px] bg-gradient-to-t from-[#9F62F2] to-[#632EE3]
            text-white text-center space-y-6'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold pt-5'>
                    Trusted by Millions, Built for You
                </h1>
                <div className='sm:text-sm text-[12px] flex justify-evenly'>
                    <p>
                        Total Downloads <br />
                        <span className='font-bold md:text-4xl sm:text-3xl text-2xl'>29.6M</span> <br />
                        21% more than last month
                    </p>

                    <p>
                        Total Reviews <br />
                        <span className='font-bold md:text-4xl sm:text-3xl text-2xl'>906K</span> <br />
                        46% more than last month
                    </p>

                    <p>
                        Active Apps <br />
                        <span className='font-bold md:text-4xl sm:text-3xl text-2xl'>132+</span> <br />
                        31 more will Launch
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;