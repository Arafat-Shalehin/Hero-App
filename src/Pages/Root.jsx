import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useNavigation, useRouteError } from 'react-router';
import Footer from '../Components/Footer';
import ErrorPage from './ErrorPage';
import AppsLoader from './Apps/AppsLoader';

const Root = () => {

    const error = useRouteError();

    const navigation = useNavigation();

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar></Navbar>

            {navigation.state === "loading" && <AppsLoader/>}

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