import React from 'react';
import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from 'react-router';

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
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                isActive
                                    ? "text-purple-800 border-b-2 border-purple-800"
                                    : "hover:text-purple-800 hover:border-b-2 hover:border-purple-800"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/apps'
                                className={({ isActive }) =>
                                isActive
                                    ? "text-purple-800 border-b-2 border-purple-800"
                                    : "hover:text-purple-800 hover:border-b-2 hover:border-purple-800"
                                }
                            >
                                Apps
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/sdgfsdf"
                                className={({ isActive }) =>
                                isActive
                                    ? "text-purple-800 border-b-2 border-purple-800"
                                    : "hover:text-purple-800 hover:border-b-2 hover:border-purple-800"
                                }
                            >
                                Installation
                            </NavLink>
                        </li>
                    </ul>
                    </div>
                    <a href='/' className="text-xl flex items-center">
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
                    <ul className='font-semibold flex items-center gap-5'>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                isActive
                                    ? "text-purple-800 border-b-2 border-purple-800"
                                    : "hover:text-purple-800 hover:border-b-2 hover:border-purple-800"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/apps'
                                className={({ isActive }) =>
                                isActive
                                    ? "text-purple-800 border-b-2 border-purple-800"
                                    : "hover:text-purple-800 hover:border-b-2 hover:border-purple-800"
                                }
                            >
                                Apps
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/sdgfsdf"
                                className={({ isActive }) =>
                                isActive
                                    ? "text-purple-800 border-b-2 border-purple-800"
                                    : "hover:text-purple-800 hover:border-b-2 hover:border-purple-800"
                                }
                            >
                                Installation
                            </NavLink>
                        </li>
                        
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='https://github.com/Arafat-Shalehin' className="btn bg-gradient-to-l from-[#9F62F2] to-[#632EE3]
                    text-white">
                        <FaGithub className='text-xl' />Contribute
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;