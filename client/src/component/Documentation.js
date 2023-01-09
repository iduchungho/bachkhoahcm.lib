import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CSE from './pages/CSE';
import ElectricalComponent from './pages/Electrical';
import MechanicalComponent from './pages/Mechanical';
import Overview from './pages/Overviews';
import './styles/Documentation.css';
import Sidenavbar from './Sidenav';
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