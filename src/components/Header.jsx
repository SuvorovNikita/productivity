import React, {useState} from "react";
import {Link} from 'react-scroll';

import MobileHeader from "./MobileHeader.jsx";

import logo from "../assets/img/header/logo.svg"

const Header = ({social, menu}) => {
    const [activeLink, setActiveLink] = useState(1);

    return (
        <>
            <header className="c-header">
                <div className="container">
                    <div className="c-header__inner" >
                        <div className="c-header__logo">
                            <img src={logo} alt="logo"/>
                        </div>
                        <nav className="c-header__navigation">
                            {menu.map(obj => <div key={obj.id} className="c-header__item">
                                <Link
                                    smooth={true}
                                    to={obj.link}
                                    id={obj.id}
                                    className={`c-header__menu-link ${activeLink === obj.id ? 'is-active' : ''}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActiveLink(obj.id);
                                    }}>{obj.name}
                                </Link>
                            </div>)}
                        </nav>
                        <div className="c-header__socials">
                            {
                                social.map(obj => <div key={obj.id} className="c-header__social">
                                    <Link id={obj.id} className="c-header__social-link" href={obj.link}>
                                        <img src={obj.src} alt={obj.alt}/>
                                    </Link>
                                </div>)
                            }
                        </div>
                        <div className="c-header__action">
                            <a href="#" className="c-button c-button--base c-button--base-blue c-button--base-small">Get
                                started</a>
                        </div>
                    </div>
                </div>
            </header>
            <MobileHeader social={social} menu={menu}/>
        </>
    )
}

export default Header;