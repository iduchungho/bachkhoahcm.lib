import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Divider } from "rsuite";

export default function MechanicalComponent(){
    const location = useLocation();
    // console.log(location);

    useEffect(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location])
    return(
        <div>
            <div className='markdown'>
                <h1 className='page-heading'>Khoa Cơ Khí</h1>
                <p>Tài liệu đại cương, tài liệu chuyên ngành ...</p>
                <Divider />
            </div>
        </div>
    );
}