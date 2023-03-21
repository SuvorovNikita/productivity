import monitor from '../assets/img/bg/monitor.svg'
import phone from '../assets/img/bg/phone.svg'
import calc from '../assets/img/bg/calc.svg'


const Manage = () => {
    return (
        <>
            <section className="c-section c-section--base c-section--bg">
                <div className="container-small">
                    <div className="c-section__body-2">
                        <div className="c-section__inner-flow">
                            <div className="c-section__content-2">
                                <div className="c-section__text-2">DESKTOP AND MOBILE APP</div>
                                <h2 className="c-section__subtitle">Plan <span>and</span> manage</h2>
                                <p className="c-section__description-2">Brute laoreet efficiendi id his, ea illum
                                    nonumes
                                    luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus
                                    congue vituperata. Solum patrioque no sea. Mea ex malis mollis oporteat. Eum an
                                    expetenda consequat.</p>
                                <div className="c-section__actions-2">
                                    <a href="#"
                                       className="c-button c-button--base c-button--base-blue-shadow c-button--base-medium">
                                        View video <span className="c-icon c-icon--play c-icon--play-left"></span>
                                    </a>
                                    <a href="#" className="c-button c-button--base c-button--base-border c-button--base-medium">See features</a>
                                </div>
                            </div>
                            <div className="c-section__images">
                                <div className="c-section__monitor">
                                    <img src={monitor} alt=""/>
                                </div>
                                <div className="c-section__phone">
                                    <img src={phone} alt=""/>
                                </div>
                                <div className="c-section__calc">
                                    <img src={calc} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Manage;