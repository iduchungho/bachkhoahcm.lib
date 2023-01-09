import React from "react";
import '../styles/ToplevelNav.css';
import { BiSearch } from 'react-icons/bi';
import { IconButton } from "rsuite";
import { FiBookOpen } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { TiDocumentText } from 'react-icons/ti';
import { BiNews } from 'react-icons/bi';
import bkicon from '../../img/favicon.ico';
import { FACEBOOK, GITHUB } from "../utils/link.utils";

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
                <IconButton icon={<FiBookOpen />} appearance="subtle" circle className="ico-btn" href="/aboutus"/>
                <IconButton icon={<TiDocumentText />} appearance="subtle" circle className="ico-btn" href="/doc" />
                <IconButton icon={<BiNews/>} appearance="subtle" circle className="ico-btn" href="/news" />
                <IconButton icon={<AiFillGithub />} appearance="subtle" circle className="ico-btn" href={GITHUB}/>
                <IconButton icon={<FaDiscord />} appearance="subtle" circle className="ico-btn" />
                <IconButton icon={<BsFacebook />} appearance="subtle" circle className="ico-btn" href={FACEBOOK}/>
            </div>
        </div>
    );
}

export default ToplevelNav;