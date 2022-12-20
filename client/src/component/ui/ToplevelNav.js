import React from "react";
import '../styles/ToplevelNav.css';
import { AiOutlineSearch } from 'react-icons/ai'

function ToplevelNav() {
    return (
        <div className='top-level-nav'>
            <a>BK</a>
            <div className='top-level-nav-header'>
                <a role = 'button'><AiOutlineSearch/></a>
            </div>
        </div>
    );
}

export default ToplevelNav;