import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-[#001931] 
            text-white p-10">
            <aside>
                
                <div className='flex items-center gap-2'>
                    <img 
                    className='w-19'
                    src="/src/assets/logo.png" 
                    alt="Logo Pic" />
                    <p className='text-2xl'>
                    HERO.IO
                    </p>
                </div>

            </aside>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <nav>
                <h6 className="footer-title">Social Links</h6>
                <div className='flex gap-3 text-xl'>
                    <a href=""><FaXTwitter /></a>
                    <a href=""><FaFacebook /></a>
                    <a href=""><IoLogoLinkedin /></a>
                </div>
            </nav>
            </footer>
            <footer className="footer sm:footer-horizontal footer-center
             bg-[#001931] text-white p-4 border-t-1 border-gray-500">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            </footer>
        </div>
    );
};

export default Footer;