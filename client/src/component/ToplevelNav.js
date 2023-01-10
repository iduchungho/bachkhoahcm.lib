//for react modules
import React, { useState } from "react";
import './styles/ToplevelNav.css';

// for rsuite components
import { Avatar, Button, Divider, Form, IconButton, Input, InputGroup, Modal } from "rsuite";

// for icon styles
import { BiSearch } from 'react-icons/bi';
import { FiBookOpen } from 'react-icons/fi';
import { TiDocumentText } from 'react-icons/ti';
import { BiNews } from 'react-icons/bi';
import bkicon from '../img/favicon.ico';
// import { AiFillGithub } from 'react-icons/ai';
// import { FaDiscord } from 'react-icons/fa';
// import { BsFacebook } from 'react-icons/bs';
import UserIcon from '@rsuite/icons/legacy/User';
import SearchIcon from '@rsuite/icons/Search';

//utils import
// import { FACEBOOK, GITHUB } from "./utils/link.utils";

function LoginBox({openLogin, onCloseLogin}) {
    return (
        <Modal open={openLogin} onClose={onCloseLogin} className="login-form">
            <Modal.Header>
                <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form fluid>
                    <div className="sp-title">Đăng nhập</div>
                    <div className="sp-sub-title">Nhanh chóng và dễ dàng</div>
                    <Divider />
                    <Form.Group controlId="email">
                        <Form.ControlLabel>Email</Form.ControlLabel>
                        <Form.Control name="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.ControlLabel>Password</Form.ControlLabel>
                        <Form.Control name="password" type="password" autoComplete="off" placeholder="Password" />
                    </Form.Group>
                    <Button appearance="primary" className="login-btn2">Đăng nhập</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <a href="/">Quên mật khẩu</a>
                <Divider />
                <Button color="green" appearance="primary" className="create-account">Tạo tài khoản mới</Button>
            </Modal.Footer>
        </Modal>
    )
}

function SearchBox({ openSearch, onCloseSearch }) {
    return (
        <Modal open={openSearch} onClose={onCloseSearch}>
            <Modal.Header>
                <Modal.Title>Search</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputGroup size="lg" inside >
                    <Input placeholder="Search" />
                    <InputGroup.Button>
                        <SearchIcon />
                    </InputGroup.Button>
                </InputGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onCloseSearch} appearance="primary">
                    Ok
                </Button>
                <Button onClick={onCloseSearch} appearance="subtle">
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

function ToplevelNav() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [openLogin, setOpenLogin] = useState(false);
    const handleOpenLogin = () => setOpenLogin(true);
    const handleCloseLogin = () => setOpenLogin(false);

    const LoginOrUser = (props) => {
        if (props === true)
            return (
                <div className="login-btn">
                    <Button appearance="primary" size="sm" onClick={handleOpenLogin}>Đăng nhập</Button>
                </div>
            )
        else
            return (<Avatar circle className="user-avt" size="md"><UserIcon className="user-ico" /></Avatar>)
    }

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
                <IconButton icon={<BiSearch />} appearance="subtle" circle className="ico-btn" onClick={handleOpen} />
                <IconButton icon={<FiBookOpen />} appearance="subtle" circle className="ico-btn" href="/aboutus" />
                <IconButton icon={<TiDocumentText />} appearance="subtle" circle className="ico-btn" href="/doc" />
                <IconButton icon={<BiNews />} appearance="subtle" circle className="ico-btn" href="/news" />
                {/* <IconButton icon={<AiFillGithub />} appearance="subtle" circle className="ico-btn" href={GITHUB}/>
                <IconButton icon={<FaDiscord />} appearance="subtle" circle className="ico-btn" />
                <IconButton icon={<BsFacebook />} appearance="subtle" circle className="ico-btn" href={FACEBOOK}/> */}
            </div>

            <SearchBox openSearch={open} onCloseSearch={handleClose}/>

            {   //set false when user clicks on login button
                LoginOrUser(true)
            }

            <LoginBox openLogin={openLogin} onCloseLogin={handleCloseLogin}/>

        </div>
    );
}

export default ToplevelNav;