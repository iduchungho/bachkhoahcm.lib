import React, { useState } from "react";

//for css styles
import './styles/Sidenav.css';
import { Nav, Col } from 'rsuite';

// for icon support in local component
import { TiDocumentText } from 'react-icons/ti';
import bkimg from '../img/bk.png';

const FacultyNav = ({ active, onSelect, ...props }) => {
    return (
        <Nav {...props} vertical activeKey={active} onSelect={onSelect} style={{ width: 230 }}>
            <div className="header">
                <TiDocumentText /><span className="header-txt">Tài liệu Bách Khoa</span>
            </div>
            <div className="logo-ctn">
                <img
                    src={bkimg}
                    alt='logo'
                    className="bk-logo-sidenav"
                />
            </div>
            {/* <Divider/> */}
            <div className="panel"># KH & KT Máy Tính</div>
            <Nav.Item eventKey="CS" href="/doc/cse#cs">Khoa học máy tính</Nav.Item>
            <Nav.Item eventKey="CE" href="/doc/cse#ce">Kỹ thuật máy tính</Nav.Item>

            <div className="panel"># Cơ khí</div>
            <Nav.Item eventKey="KCK" href="/doc/mechanical#ktck">Kỹ thuật cơ khí</Nav.Item>
            <Nav.Item eventKey="CDT" href="/doc/mechanical#cdt">Kỹ thuật cơ điện tử</Nav.Item>
            <Nav.Item eventKey="DM" href="/doc/mechanical#dm">Kỹ thuật dệt may</Nav.Item>
            <Nav.Item eventKey="CNNL" href="/doc/mechanical#cnnl">Công nghệ nhiệt lạnh</Nav.Item>
            <Nav.Item eventKey="QKCCU" href="/doc/mechanical#qlccu">Quản lý chuỗi cung ứng</Nav.Item>

            <div className="panel"># Điện - điện tử</div>
            <Nav.Item eventKey="TDH" href="/doc/electrical#dktd">Điều khiển và tự động hóa</Nav.Item>
            <Nav.Item eventKey="KTD" href="/doc/electrical#ktd">Kỹ thuật điện</Nav.Item>
            <Nav.Item eventKey="DTVT" href="/doc/electrical#dtvt">Kỹ thuật điện tử - Viễn thông</Nav.Item>

            <div className="panel"># Xây dựng</div>
            <Nav.Item eventKey="XDDD">Kỹ thuật xây dựng dân dụng</Nav.Item>
            <Nav.Item eventKey="XDGT">KT Xây dựng công trình GT</Nav.Item>
            <Nav.Item eventKey="XDCTT">KT xây dựng công trình thủy</Nav.Item>
            <Nav.Item eventKey="VLXD">KT vật liệu xây dựng</Nav.Item>
            <Nav.Item eventKey="CSHT">KT Cơ sở hạ tầng</Nav.Item>
            <Nav.Item eventKey="TDBD">KT Trắc địa bản đồ</Nav.Item>
            <Nav.Item eventKey="KT">Kiến trúc</Nav.Item>

            <div className="panel"># Địa chất và Dầu khí</div>
            <Nav.Item eventKey="KTDC">Kỹ thuật địa chất</Nav.Item>
            <Nav.Item eventKey="KTDK">Kỹ thuật dầu khí</Nav.Item>

            <div className="panel"># Khoa học ứng dụng</div>
            <Nav.Item eventKey="CKT">Cơ kỹ thuật</Nav.Item>
            <Nav.Item eventKey="VLKT">Vật lý kỹ thuật</Nav.Item>

            <div className="panel"># Công nghệ vật liệu</div>
            <Nav.Item eventKey="CNVL">Công nghệ vật liệu</Nav.Item>

            <div className="panel"># Quản lý công nghiệp</div>
            <Nav.Item eventKey="QLCN">Quản lý công nghiệp</Nav.Item>

            <div className="panel"># Môi trường và tài nguyên</div>
            <Nav.Item eventKey="KTMT">Kỹ thuật môi trường</Nav.Item>
            <Nav.Item eventKey="QLTNMT">Quản lý tài nguyên môi trường</Nav.Item>

            <div className="panel"># Kỹ thuật hóa học</div>
            <Nav.Item eventKey="KTHH">Kỹ thuật hóa học</Nav.Item>
            <Nav.Item eventKey="CNSH">Công nghệ sinh học</Nav.Item>
            <Nav.Item eventKey="CNTP">Công nghệ thực phẩm</Nav.Item>

            <div className="panel"># Trung tâm bảo dưỡng công nghiệp</div>
            <Nav.Item eventKey="BDCN">Bảo dưỡng công nghiệp</Nav.Item>

            <div className="panel"># Kỹ thuật giao thông</div>
            <Nav.Item eventKey="KTHK">Kỹ thuật hàng không</Nav.Item>
            <Nav.Item eventKey="KTTT">Kỹ thuật tàu thủy</Nav.Item>
            <Nav.Item eventKey="KTOT">Kỹ thuật ô tô</Nav.Item>

            <div className="panel">Tài liệu khác</div>
            <Nav.Item eventKey="solutions">Solutions</Nav.Item>
            <Nav.Item eventKey="products">Products</Nav.Item>
            <Nav.Item eventKey="about">About</Nav.Item>
        </Nav>
    );
};
export default function Sidenavbar() {
    const [active, setActive] = useState('home');
    return (
        <div className="sidebar">
            <Col md={4}>
                <FacultyNav active={active} onSelect={setActive} />
            </Col>
        </div>
    );
}