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
                <ul>
                    <li>General</li>
                    <li>
                        <a href = '/doc/cse'>Khoa học và kỹ thuật máy tính</a>
                        <ul>
                            <li><a href="/doc/cse#cs">Khoa học máy tính</a></li>
                            <li><a href="/doc/cse#ce">Kỹ thuật máy tính</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    );
}