import React from "react";

import logo from "../assets/img/header/logo.svg"


import MobileHeader from "./MobileHeader.jsx";
const Header = ({social, menu}) => {
    return (
        <>
            <header className="c-header">
                <div className="container">
                    <div className="c-header__inner">
                        <div className="c-header__logo">
                            <img src={logo} alt="logo"/>
                        </div>
                        <nav className="c-header__navigation">
                            {menu.map(obj => <div key={obj.id} className="c-header__item">
                                <a href={obj.link} id={obj.id} className="c-header__menu-link">{obj.name}</a>
                            </div>)}
                        </nav>
                        <div className="c-header__socials">
                            {
                                social.map(obj => <div key={obj.id} className="c-header__social">
                                    <a id={obj.id} className="c-header__social-link" href={obj.link}>
                                        <img src={obj.src} alt={obj.alt}/>
                                    </a>
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