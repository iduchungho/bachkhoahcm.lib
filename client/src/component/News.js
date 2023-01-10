import React from "react";
import './styles/News.css';
import { Loader } from "rsuite";

const News = () => {
    return (
        <div className="news-wallpaper">
            <div>
                <Loader center content="loading" />
            </div>
        </div>
    )
}

export default News;