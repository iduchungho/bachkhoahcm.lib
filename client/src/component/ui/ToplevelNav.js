import React from "react";
import '../styles/ToplevelNav.css';
import { BiSearch } from 'react-icons/bi';
import { IconButton } from "rsuite";
import { FiBookOpen } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { TiDocumentText } from 'react-icons/ti';
import bkicon from '../../img/favicon.ico';

function ToplevelNav() {
    return (
        <div className='top-level-nav'>
            <a href="/">
                <img
                    className="logo-ico"
                    alt='bkico'
                    src={bkicon}
                />
            </a>
            <div className='top-level-nav-header'>
                <IconButton icon={<BiSearch />} appearance="subtle" circle className="ico-btn" />
                <IconButton icon={<FiBookOpen />} appearance="subtle" circle className="ico-btn" />
                <IconButton icon={<TiDocumentText />} appearance="subtle" circle className="ico-btn" href="/component/doc" />
                <IconButton icon={<AiFillGithub />} appearance="subtle" circle className="ico-btn" />
                <IconButton icon={<FaDiscord />} appearance="subtle" circle className="ico-btn" />
                <IconButton icon={<BsFacebook />} appearance="subtle" circle className="ico-btn" />
            </div>
        </div>
    );
}

export default ToplevelNav;