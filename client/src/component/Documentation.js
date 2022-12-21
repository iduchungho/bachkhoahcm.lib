import React from 'react';
import { Divider } from 'rsuite';
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
                                <div className='markdown'>
                                    <h1 className='page-heading'>Tài liệu</h1>
                                    <p>Tất cả tài liệu của từng chủ đề cho từng khoa trong Thư Viện Tài Liệu Bách Khoa</p>
                                    <Divider />
                                </div>
                                <div className='component-content'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}