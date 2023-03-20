import bitbucket from "./../assets/img/icon/bitbucket.svg"
import apple from "./../assets/img/icon/apple-watch.svg"
import facebook from "./../assets/img/icon/facebook.svg"
import atlassian from "./../assets/img/icon/atlassian.svg"
import audi from "./../assets/img/icon/audi.svg"


const Customers = () => {
    return (
        <>
            <section className="c-section c-section--base">
                <div className="container">
                    <div className="c-section__inner">
                        <div className="c-section__body">
                            <div className="c-section__item">
                                <img src={bitbucket} alt="bitbucket"/>
                            </div>
                            <div className="c-section__item">
                                <img src={apple} alt="apple"/>
                            </div>
                            <div className="c-section__item">
                                <img src={facebook} alt="facebook"/>
                            </div>
                            <div className="c-section__item">
                                <img src={atlassian} alt="atlassian"/>
                            </div>
                            <div className="c-section__item">
                                <img src={audi} alt="audi"/>
                            </div>
                        </div>
                        </div>
                </div>
            </section>
        </>
    )
}

export default Customers;