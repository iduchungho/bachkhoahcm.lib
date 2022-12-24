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
                    <li className="c__title">General</li>
                    <li>
                        <a href = '/doc/cse' className="f__name">Khoa học và kỹ thuật máy tính</a>
                        <ul>
                            <li><a href="/doc/cse#cs">Khoa học máy tính</a></li>
                            <li><a href="/doc/cse#ce">Kỹ thuật máy tính</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href='/doc/cse' className="f__name">Khoa cơ khí</a>
                        <ul>
                            <li><a href="/doc/cse#cs">Kỹ thuật cơ khí</a></li>
                            <li><a href="/doc/cse#ce">Kỹ thuật cơ điện tử</a></li>
                            <li><a href="/doc/cse#ce">Kỹ thuật nhiệt lạnh</a></li>
                            <li><a href="/doc/cse#ce">Kỹ thuật dệt may</a></li>
                            <li><a href="/doc/cse#ce">Quản lý chuỗi cung ứng</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href='/doc/cse' className="f__name">Khoa kỹ thuật hóa học</a>
                        <ul>
                            <li><a href="/doc/cse#cs">Công nghệ thực phẩm</a></li>
                            <li><a href="/doc/cse#ce">Kỹ thuật Hóa học</a></li>
                            <li><a href="/doc">Công nghệ sinh học</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href='/doc/cse' className="f__name">Khoa kỹ thuật xây dựng</a>
                        <ul>
                            <li><a href="/doc/">Kiến trúc</a></li>
                            <li><a href="/doc/cse#cs">Kỹ thuật xây dựng dân dụng</a></li>
                            <li><a href="/doc/cse#ce">Kỹ thuật xây dựng công trình giao thông</a></li>
                            <li><a href="/doc/">Kỹ thuật Cơ sở hạ tầng</a></li>
                            <li><a href="/doc/">Kỹ thuật Trắc địa bản đồ</a></li>
                            <li><a href="/doc/">Kỹ thuật vật liệu xây dựng</a></li>
                            <li><a href="/doc/">Kỹ thuật xây dựng công trình thủy</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href='/doc/cse' className="f__name">Điện - Điện tử</a>
                        <ul>
                            <li><a href="/doc/cse#cs">Kỹ thuật điều khiển và tự động hóa</a></li>
                            <li><a href="/doc/cse#ce">Kỹ thuật Điện</a></li>
                            <li><a href="/doc">Kỹ thuật điện tử - viễn thông</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href='/doc/cse' className="f__name">Địa chất và dầu khí</a>
                        <ul>
                            <li><a href="/doc/cse#cs">Kỹ thuật địa chất</a></li>
                            <li><a href="/doc/cse#ce">Kỹ thuật dầu khí</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href='/doc/cse' className="f__name">Tài nguyên và môi trường</a>
                        <ul>
                            <li><a href="/doc/cse#cs">Kỹ thuật môi trường</a></li>
                            <li><a href="/doc/cse#ce">Quản lý tài nguyên môi trường</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href='/doc/cse' className="f__name">Khoa học ứng dụng</a>
                        <ul>
                            <li><a href="/doc/cse#cs">Vật lý kỹ thuật</a></li>
                            <li><a href="/doc/cse#ce">Cơ kỹ thuật</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href='/doc/cse' className="f__name">Kỹ thuật giao thông</a>
                        <ul>
                            <li><a href="/doc/cse#cs">Kỹ thuật hàng không</a></li>
                            <li><a href="/doc/cse#ce">Kỹ thuật tàu thủy</a></li>
                            <li><a href="/doc/cse#ce">Kỹ thuật Ô tô</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href='/doc/cse' className="f__name">Trung tâm bảo dưỡng công nghiệp</a>
                        <ul>
                            <li><a href="/doc/cse#cs">Bảo dưỡng công nghiệp</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href='/doc/cse' className="f__name">Quản lý công nghiệp</a>
                        <ul>
                            <li><a href="/doc/cse#cs">Quản lý công nghiệp</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href='/doc/cse' className="f__name">Công nghệ vật liệu</a>
                        <ul>
                            <li><a href="/doc/cse#cs">Công nghệ vật liệu</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href='/doc/cse' className="f__name">Tài liệu khác</a>
                        <ul>
                            <li><a href="/doc/cse#cs">Công nghệ vật liệu</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    );
}