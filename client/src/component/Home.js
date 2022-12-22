import React from "react";
import './styles/Home.css';
import img from '../img/bk.png';
// import ToplevelNav from './ui/ToplevelNav'
import { Button } from "rsuite";
// import { FaDiscord } from 'react-icons/fa';
// import { BsFacebook } from 'react-icons/bs';
export default function HomeComponent() {
    return (
        <div className="wallpaper">
            {/* <ToplevelNav/> */}
            <div className="home-page">
                <div className="home-ctn">
                    <div className="home-txt">
                        <h1 className="title">Thư Viện Tài Liệu <br /> Bách Khoa</h1>
                        <p className="sub-title">Một nơi chia sẻ tài liệu học tập,
                            đại cương và chuyên ngành của tất cả các khoa trong Trường đại học Bách khoa - ĐHQGHCM
                        </p>
                        <div className="btn-section">
                            <Button appearance="primary" href="/doc">Tài liệu</Button>
                            <Button appearance="ghost" className="btn_1" href="/aboutus">Về chúng tôi</Button>
                        </div>
                    </div>
                    <div className="home-logo">
                        <img
                            className="logo"
                            alt='logo'
                            src={img}
                        />
                    </div>
                    {/* <div className="home-social">
                        <div className="h-icon"><FaDiscord /></div>
                        <div className="h-icon"><BsFacebook /></div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}