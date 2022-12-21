import React, { useState } from "react";
import '../styles/Sidenav.css';
import { Nav, Col } from 'rsuite';
import { TiDocumentText } from 'react-icons/ti';


const CustomNav = ({ active, onSelect, ...props }) => {
    return (
        <Nav {...props} vertical activeKey={active} onSelect={onSelect} style={{ width: 230 }}>
            <div className="header">
                <TiDocumentText /><span className="header-txt">Tài liệu</span>
            </div>
            {/* <Divider/> */}
            <div className="panel">KH & KT Máy Tính</div>
            <Nav.Item eventKey="CS" >
                Khoa học máy tính
            </Nav.Item>
            <Nav.Item eventKey="CE">Kỹ thuật máy tính</Nav.Item>

            <div className="panel">Cơ khí</div>
            <Nav.Item eventKey="KCK">Kỹ thuật cơ khí</Nav.Item>
            <Nav.Item eventKey="CDT">Kỹ thuật cơ điện tử</Nav.Item>
            <Nav.Item eventKey="DM">Kỹ thuật dệt may</Nav.Item>
            <Nav.Item eventKey="CNNL">Công nghệ nhiệt lạnh</Nav.Item>
            <Nav.Item eventKey="QKCCU">Quản lý chuỗi cung ứng</Nav.Item>

            <div className="panel">Điện - điện tử</div>
            <Nav.Item eventKey="TDH">Điều khiển và tự động hóa</Nav.Item>
            <Nav.Item eventKey="KTD">Kỹ thuật điện</Nav.Item>
            <Nav.Item eventKey="DTVT">Kỹ thuật điện tử - Viễn thông</Nav.Item>
            
            <div className="panel">Xây dựng</div>
            <Nav.Item eventKey="solutions">Solutions</Nav.Item>
            <Nav.Item eventKey="products">Products</Nav.Item>
            <Nav.Item eventKey="about">About</Nav.Item>

            <div className="panel">Địa chất và Dầu khí</div>
            <Nav.Item eventKey="solutions">Solutions</Nav.Item>
            <Nav.Item eventKey="products">Products</Nav.Item>
            <Nav.Item eventKey="about">About</Nav.Item>

            <div className="panel">Khoa học ứng dụng</div>
            <Nav.Item eventKey="solutions">Solutions</Nav.Item>
            <Nav.Item eventKey="products">Products</Nav.Item>
            <Nav.Item eventKey="about">About</Nav.Item>

            <div className="panel">Công nghệ vật liệu</div>
            <Nav.Item eventKey="solutions">Solutions</Nav.Item>
            <Nav.Item eventKey="products">Products</Nav.Item>
            <Nav.Item eventKey="about">About</Nav.Item>

            <div className="panel">Môi trường và tài nguyên</div>
            <Nav.Item eventKey="solutions">Solutions</Nav.Item>
            <Nav.Item eventKey="products">Products</Nav.Item>
            <Nav.Item eventKey="about">About</Nav.Item>

            <div className="panel">Kỹ thuật hóa học</div>
            <Nav.Item eventKey="solutions">Solutions</Nav.Item>
            <Nav.Item eventKey="products">Products</Nav.Item>
            <Nav.Item eventKey="about">About</Nav.Item>

            <div className="panel">Trung tâm bảo dưỡng công nghiệp</div>
            <Nav.Item eventKey="solutions">Solutions</Nav.Item>
            <Nav.Item eventKey="products">Products</Nav.Item>
            <Nav.Item eventKey="about">About</Nav.Item>

            <div className="panel">Kỹ thuật giao thông</div>
            <Nav.Item eventKey="solutions">Solutions</Nav.Item>
            <Nav.Item eventKey="products">Products</Nav.Item>
            <Nav.Item eventKey="about">About</Nav.Item>

            <div className="panel">Tài liệu khác</div>
            <Nav.Item eventKey="solutions">Solutions</Nav.Item>
            <Nav.Item eventKey="products">Products</Nav.Item>
            <Nav.Item eventKey="about">About</Nav.Item>
        </Nav>
    );
};
export default function Sidenavbar(){
    const [active, setActive] = useState('home');
    return (
        <div className="sidebar">
            <Col md={4}>
                <CustomNav active={active} onSelect={setActive} />
            </Col>
        </div>
    );
}