import React from "react";
import './styles/Aboutus.css';

export default function AboutUs(){
    return(
        <div className="aboutus-paper">
            <div className="abus-ctn">
                <div className="abus-wallpaper">
                    Chào mừng tới thư viện <br/> tài liệu Bách Khoa
                </div>
                <div className="abus-txt">
                    Xin chào các bạn, đây là một dự án nhỏ dành riêng cho Trường đại học Bách Khoa - ĐHQG HCM <br/>
                    với hy vọng là nơi chia sẻ tài liệu học tập các môn đại cương, chuyên ngành một cách hiệu quả <br/>
                    Hy vọng dự án nhỏ này sẽ giúp ít cho các bạn tìm được nguồn tài liệu thích hợp cũng như là nơi để <br/>
                    chia sẻ các nguồn tài liệu bổ ích để giúp các bạn đạt thành tích cao trong việc học của mình.

                </div>
            </div>
        </div>
    );
}