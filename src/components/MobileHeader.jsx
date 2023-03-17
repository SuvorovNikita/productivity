import React, {useState} from "react";

import logo from "../assets/img/header/logo.svg";

const MobileHeader = ({menu, social}) => {

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
                                    <nav className="c-mobile-header__navigation">
                                        {menu.map(obj => <div key={obj.id} className="c-mobile-header__item">
                                            <a id={obj.id} href={obj.link}
                                               className="c-mobile-header__link">{obj.name}</a>
                                        </div>)}
                                    </nav>
                                    <div className="c-mobile-header__socials">
                                        {
                                            social.map(obj => <div key={obj.id} className="c-mobile-header__social">
                                                <a className="c-mobile-header__social-link" id={obj.id} href={obj.link}>
                                                    <img src={obj.src} alt={obj.alt}/>
                                                </a>
                                            </div>)
                                        }
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