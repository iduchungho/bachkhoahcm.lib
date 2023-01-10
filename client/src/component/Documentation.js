import React from 'react';
import { Route, Routes } from 'react-router-dom';

//for css files
import './styles/Documentation.css';

//for local components
import Sidenavbar from './Sidenav';
import CSE from './pages/CSE';
import Overview from './pages/Overviews';
import ElectricalComponent from './pages/Electrical';
import MechanicalComponent from './pages/Mechanical';
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
                                    <Route path = '/' element = {<Overview/>}/>
                                    <Route path = 'cse' element = {<CSE/>}/>
                                    <Route path = 'mechanical' element = {<MechanicalComponent/>}/>
                                    <Route path = 'electrical' element = {<ElectricalComponent/>}/>
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}