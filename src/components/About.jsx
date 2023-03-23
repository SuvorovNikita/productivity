import cloud1 from "../assets/img/cloud/clouds-obaut-1.svg"
import cloud2 from "../assets/img/cloud/clouds-obaut-2.svg"

const About = () => {
    return (
        <>
            <section className="c-section c-section--base" id="about">
                <div className="c-section__hero">
                    <div className="c-section__images">
                        <div className="c-section__cloud-1">
                            <img src={cloud1} alt="clouds-about-1.svg"/>
                        </div>
                        <div className="c-section__cloud-2">
                            <img src={cloud2} alt="clouds-about-2.svg"/>
                        </div>
                    </div>
                    <div className="container-small">
                        <div className="c-section__header">
                            <div className="c-section__text-3">ABOUT US</div>
                            <h2 className="c-section__title-2">Read about our app</h2>
                        </div>
                        <div className="c-card c-card--base">
                            <div className="c-card__body">
                                <div className="c-card__inner">
                                    <div className="c-card__circle">
                                        <span className="c-icon c-icon--card c-icon--card-overview"></span>
                                    </div>
                                    <div className="c-card__title">Overview</div>
                                    <p className="c-card__text">Brute laoreet efficiendi id his, ea illum nonumes
                                        luptatum pro.</p>
                                </div>
                                <div className="c-section__line"></div>
                                <div className="c-card__inner">
                                    <div className="c-card__circle">
                                        <span className="c-icon c-icon--card c-icon--card-file"></span>
                                    </div>
                                    <div className="c-card__title">Files</div>
                                    <p className="c-card__text">No vim nulla vitae intellegat. Ei enim error ius,
                                        solet
                                        atomorum conceptam ex has..</p>
                                </div>
                                <div className="c-section__line"></div>
                                <div className="c-card__inner">
                                    <div className="c-card__circle">
                                        <span className="c-icon c-icon--card c-icon--card-chat"></span>
                                    </div>
                                    <div className="c-card__title">Meeting chats</div>
                                    <p className="c-card__text">Vim ne tacimates neglegentur. Erat diceret omittam
                                        at
                                        est.</p>
                                </div>
                                <div className="c-section__line"></div>
                                <div className="c-card__inner">
                                    <div className="c-card__circle">
                                        <span className="c-icon c-icon--card c-icon--card-save"></span>
                                    </div>
                                    <div className="c-card__title">Save events</div>
                                    <p className="c-card__text">Nisl idque mel ea, nominati voluptatum.</p>
                                </div>
                            </div>
                            <div className="c-section__actions-3">
                                <div
                                    className="c-button c-button--base c-button--base-red c-button--base-small">Read
                                    more
                                </div>
                                <div className="c-section__line-small"></div>
                                <div className="c-section__text-4">or</div>
                                <div className="c-section__line-small"></div>
                                <div
                                    className="c-button c-button--base c-button--base-blue c-button--base-small">Get
                                    started
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;