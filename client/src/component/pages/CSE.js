import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Divider, Table } from "rsuite";
import { BreadcrumbPage } from "../utils/page.utils";
import './styles/CSE.css';

const dataList = [
    { MSMH: 'MT1003', tc: 4, name: 'Giải Tích 1'},
    { MSMH: 'MT1003', tc: 4, name: 'Giải tích 2'},
    { MSMH: 'MT1003', tc: 4, name: 'Vật lý 1'},
];

const config = {
    height : 600,
    width : 400
}

export default function CSE(){
    const location = useLocation();
    // console.log(location);
    const { Column, HeaderCell, Cell } = Table;

    useEffect(() => {
        const element = document.getElementById(location.hash.substring(1));
        if(element){
            element.scrollIntoView({behavior: 'smooth'});
        }
    },[location])

    return(
        <div>
            <div className='markdown'>
                <div className="breadcrumb__page">
                    <BreadcrumbPage separator={'/'} e = {'CSE'}/>
                </div>
                <h1 className='page-heading'>Khoa khoa học và kỹ thuật máy tính</h1>
                <p>Tài liệu đại cương, tài liệu chuyên ngành ...</p>
                <Divider />
            </div>
            
            <h4 id = 'cs' className="cs-title">Khoa học máy tính</h4>
            <h5 className="cs-title">Các môn bắt buộc</h5>
            <div className="subject-content">
                <Table virtualized height={config.height} data={dataList} onRowClick = {data => console.log(data)}>
                    <Column width={150} align="center" >
                        <HeaderCell>MSMH</HeaderCell>
                        <Cell dataKey="MSMH" />
                    </Column>

                    <Column width={100}>
                        <HeaderCell>Tín Chỉ</HeaderCell>
                        <Cell dataKey="tc" />
                    </Column>

                    <Column width={620}>
                        <HeaderCell>Tên môn học</HeaderCell>
                        <Cell dataKey="name" />
                    </Column>

                </Table>
            </div>
            <h4 id='ce' className="cs-title">Kỹ thuật máy tính</h4>
            <h5 className="cs-title">Các môn bắt buộc</h5>
            <div className="subject-content">
                <Table virtualized height={config.height} data={dataList} onRowClick={data => console.log(data)}>
                    <Column width={150} align="center" >
                        <HeaderCell>MSMH</HeaderCell>
                        <Cell dataKey="MSMH" />
                    </Column>

                    <Column width={100}>
                        <HeaderCell>Tín Chỉ</HeaderCell>
                        <Cell dataKey="tc" />
                    </Column>

                    <Column width={620}>
                        <HeaderCell>Tên môn học</HeaderCell>
                        <Cell dataKey="name" />
                    </Column>

                </Table>
            </div>
        </div>
    );
}