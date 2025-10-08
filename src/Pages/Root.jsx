import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useRouteError } from 'react-router';
import Footer from '../Components/Footer';
import ErrorPage from './ErrorPage';

const Root = () => {

    const error = useRouteError();

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar></Navbar>
            <main className='flex-1'>
                {
                    error ? <ErrorPage/> : <Outlet></Outlet>
                }
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Root;