import logo from "../assets/img/header/logo.svg";
import facebook from "../assets/img/social/facebook.svg";
import telegram from "../assets/img/social/telegramm.svg";
import twitter from "../assets/img/social/twitter.svg";
import medium from "../assets/img/social/medium.svg";
import React, {useState} from "react";

const MobileHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <section className="c-mobile-header">
                <div className="c-mobile-header__inner">
                    <div className="container">
                        <div className="c-mobile-header__top">
                            <div className="c-mobile-header__logo">
                                <img src={logo} alt="logo"/>
                            </div>
                            <div className="c-mobile-header__toggle" onClick={toggleMenu}>
                                <span className="c-icon c-icon--menu">{isOpen ? 'close' : 'open'}</span>
                            </div>
                        </div>
                            <div className={`c-mobile-header__body ${isOpen ? "is-open" : ""}`}>
                                <div className="container">
                                    <div className="c-mobile-header__flex">
                                        <div className="c-mobile-header__navigation">
                                            <div className="c-mobile-header__item">
                                                <a href="" className="c-mobile-header__link">Home</a>
                                            </div>
                                            <div className="c-mobile-header__item">
                                                <a href="" className="c-mobile-header__link">Blog</a>
                                            </div>
                                            <div className="c-mobile-header__item">
                                                <a href="" className="c-mobile-header__link">Features</a>
                                            </div>
                                            <div className="c-mobile-header__item">
                                                <a href="" className="c-mobile-header__link">Pricing</a>
                                            </div>
                                            <div className="c-mobile-header-header__item">
                                                <a href="" className="c-mobile-header__link">Documentation</a>
                                            </div>
                                        </div>
                                        <div className="c-mobile-header__socials">
                                            <div className="c-mobile-header__social">
                                                <a className="c-mobile-header__social-link" href="">
                                                    <img src={facebook} alt="facebook"/>
                                                </a>
                                            </div>
                                            <div className="c-mobile-header__social">
                                                <a className="c-mobile-header__social-link" href="">
                                                    <img src={telegram} alt="telegram"/>
                                                </a>
                                            </div>
                                            <div className="c-mobile-header__social">
                                                <a className="c-mobile-header__social-link is-active" href="">
                                                    <img src={twitter} alt="twitter"/>
                                                </a>
                                            </div>
                                            <div className="c-mobile-header__social">
                                                <a className="c-mobile-header__social-link" href="">
                                                    <img src={medium} alt="medium"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="c-mobile-header__action">
                                            <a className="c-button c-button--base c-button--base-blue c-button--base-small">Get
                                                started</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MobileHeader;