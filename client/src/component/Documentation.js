import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Overview from './pages/Overviews';
import './styles/Documentation.css';
import Sidenavbar from './ui/Sidenav';
export default function Documentation() {
    return (
        <>
            <Sidenavbar/>
            <div className="docu-wall">
                <div className="docu-ctn">
                    <div className='document___ctn'>
                        <div className='main-container'>
                            <div className='document-nav-content'>
                                <Routes>
                                    <Route path = '' element = {<Overview/>}/>
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}