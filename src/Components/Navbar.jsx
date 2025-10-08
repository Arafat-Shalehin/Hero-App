import React from 'react';
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm lg:px-15">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 
                        rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold">
                        <li><a>Home</a></li>
                        <li><a>Apps</a></li>
                        <li><a>Installation</a></li>
                    </ul>
                    </div>
                    <a className="text-xl flex items-center">
                        <img
                        className='w-9 mr-1' 
                        src="/src/assets/logo.png" 
                        alt="Logo Pic" />
                        <span className='text-[#632EE3] font-bold'>
                            HERO.IO
                        </span>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <li><a>Home</a></li>
                        <li><a>Apps</a></li>
                        <li><a>Installation</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-gradient-to-l from-[#9F62F2] to-[#632EE3]
                    text-white">
                        <FaGithub className='text-xl' />Contribute
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;