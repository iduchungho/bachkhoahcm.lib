import React from "react";
import { Divider } from "rsuite";
import './styles/Overview.css';
export default function Overview(){
    return (
        <>
            <div className='markdown'>
                <h1 className='page-heading'>Tài liệu</h1>
                <p>Tất cả tài liệu của từng chủ đề cho từng khoa trong Thư Viện Tài Liệu Bách Khoa</p>
                <Divider />
            </div>
            <div className='component-content'>

            </div>
        </>
    );
}