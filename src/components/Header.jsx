import React, {useState} from "react";

import logo from "../assets/img/header/logo.svg"
import facebook from "../assets/img/social/facebook.svg"
import telegram from "../assets/img/social/telegramm.svg"
import twitter from "../assets/img/social/twitter.svg"
import medium from "../assets/img/social/medium.svg"

import MobileHeader from "./MobileHeader.jsx";

const Header = () => {


    return (
        <>
            <header className="c-header">
                <div className="container">
                    <div className="c-header__inner">
                        <div className="c-header__logo">
                            <img src={logo} alt="logo"/>
                        </div>
                        <nav className="c-header__navigation">
                            <div className="c-header__item">
                                <a href="#" className="c-header__menu-link is-active">Home</a>
                            </div>
                            <div className="c-header__item">
                                <a href="#" className="c-header__menu-link">Blog</a>
                            </div>
                            <div className="c-header__item">
                                <a href="#" className="c-header__menu-link">Features</a>
                            </div>
                            <div className="c-header__item">
                                <a href="#" className="c-header__menu-link">Pricing</a>
                            </div>
                            <div className="c-header__item">
                                <a href="#" className="c-header__menu-link">Documentation</a>
                            </div>
                        </nav>
                        <div className="c-header__socials">
                            <div className="c-header__social">
                                <a className="c-header__social-link" href="">
                                    <img src={facebook} alt="facebook"/>
                                </a>
                            </div>
                            <div className="c-header__social">
                                <a className="c-header__social-link" href="">
                                    <img src={telegram} alt="telegram"/>
                                </a>
                            </div>
                            <div className="c-header__social">
                                <a className="c-header__social-link is-active" href="">
                                    <img src={twitter} alt="twitter"/>
                                </a>
                            </div>
                            <div className="c-header__social">
                                <a className="c-header__social-link" href="">
                                    <img src={medium} alt="medium"/>
                                </a>
                            </div>
                        </div>
                        <div className="c-header__action">
                            <a className="c-button c-button--base c-button--base-blue c-button--base-small">Get
                                started</a>
                        </div>
                    </div>
                </div>
            </header>
            <MobileHeader/>
        </>
    )
}

export default Header;