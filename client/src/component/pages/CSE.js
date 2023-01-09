import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Divider } from "rsuite";
import { BreadcrumbPage } from "../utils/page.utils";
import './styles/CSE.css';


export default function CSE(){
    const location = useLocation();


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
                <table className="course-table" id="c-tb">
                    <tr>
                        <th>Tên môn học</th>
                        <th>MSMH</th>
                        <th>Tín chỉ</th>
                    </tr>
                    <tr>
                        <td>Giải tích 1</td>
                        <td>MT1003</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>Giải tích 2</td>
                        <td>MT1005</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>Đại số tuyến tính</td>
                        <td>MT1007</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>Xác suất và thống kê</td>
                        <td>MT2013</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>Nhập môn điện toán</td>
                        <td>CO1005</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>Vật lý 1</td>
                        <td>PH1003</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>Hóa đại cương</td>
                        <td>CH1003</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>Thí nghiệm vật lý</td>
                        <td>PH1007</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Cấu trúc rời rạc cho khoa học máy tính</td>
                        <td>CO1007</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>Mô hình hóa toán học</td>
                        <td>CO2011</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>Pháp luật Việt Nam đại cương</td>
                        <td>SP1007</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Triết học Mác Lênin</td>
                        <td>SP1031</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>Kinh tế chính trị Mác - Lênin</td>
                        <td>SP1033</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Chủ nghĩa xã hội khoa học</td>
                        <td>SP1035</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Lịch sử Đảng Cộng Sản Việt Nam</td>
                        <td>SP1037</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Tư tưởng Hồ Chí Minh</td>
                        <td>SP1039</td>
                        <td>2</td>
                    </tr>
                </table>
            </div>
            <h4 id='ce' className="cs-title">Kỹ thuật máy tính</h4>
            <h5 className="cs-title">Các môn bắt buộc</h5>
            <div className="subject-content">
                <table className="course-table" id="c-tb">
                    <tr>
                        <th>Tên môn học</th>
                        <th>MSMH</th>
                        <th>Tín chỉ</th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Berglunds snabbköp</td>
                        <td>Christina Berglund</td>
                        <td>Sweden</td>
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                    </tr>
                    <tr>
                        <td>Ernst Handel</td>
                        <td>Roland Mendel</td>
                        <td>Austria</td>
                    </tr>
                    <tr>
                        <td>Island Trading</td>
                        <td>Helen Bennett</td>
                        <td>UK</td>
                    </tr>
                    <tr>
                        <td>Königlich Essen</td>
                        <td>Philip Cramer</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Laughing Bacchus Winecellars</td>
                        <td>Yoshi Tannamuri</td>
                        <td>Canada</td>
                    </tr>
                    <tr>
                        <td>Magazzini Alimentari Riuniti</td>
                        <td>Giovanni Rovelli</td>
                        <td>Italy</td>
                    </tr>
                    <tr>
                        <td>North/South</td>
                        <td>Simon Crowther</td>
                        <td>UK</td>
                    </tr>
                    <tr>
                        <td>Paris spécialités</td>
                        <td>Marie Bertrand</td>
                        <td>France</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}