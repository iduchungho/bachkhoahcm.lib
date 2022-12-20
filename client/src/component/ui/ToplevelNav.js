import React from "react";
import '../styles/ToplevelNav.css';
import { BiSearch } from 'react-icons/bi';
import { IconButton } from "rsuite";
import { FiBookOpen } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import { RxComponent1 } from 'react-icons/rx';
import { FaDiscord } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import bkicon from '../../img/favicon.ico';

function ToplevelNav() {
    return (
        <div className='top-level-nav'>
            <img
                className="logo-ico"
                alt = 'bkico'
                src={bkicon}
            />
            <div className='top-level-nav-header'>
                <IconButton icon={<BiSearch />} appearance="subtle" circle className="ico-btn" />
                <IconButton icon={<FiBookOpen />} appearance="subtle" circle className="ico-btn" />
                <IconButton icon={<RxComponent1 />} appearance="subtle" circle className="ico-btn" />
                <IconButton icon={<AiFillGithub />} appearance="subtle" circle className="ico-btn" />
                <IconButton icon={<FaDiscord />} appearance="subtle" circle className="ico-btn" />
                <IconButton icon={<BsFacebook />} appearance="subtle" circle className="ico-btn" />
            </div>
        </div>
    );
}

export default ToplevelNav;