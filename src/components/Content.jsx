import stats from './../assets/img/cloud/one-of-stats.svg'

const Content = () => {
    return (
        <>
            <section className="c-section c-section--base c-section--images c-section--bg">
                <div className="c-section__bg"></div>
                <div className="container">
                    <div className="c-section__content">
                        <div className="c-section__text">PLAN YOUR LIFE</div>
                        <h1 className="c-section__title"><span>Increase your</span> productivity</h1>
                        <p className="c-section__description">Brute laoreet efficiendi id his, ea illum nonumes
                            luptatum pro.
                            Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue
                            vituperata.</p>
                    </div>
                    <div className="c-section__actions">
                        <button type="submit" className="c-button c-button--play"></button>
                    </div>
                    <div className="c-section__stats">
                        <img src={stats} alt=""/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Content;