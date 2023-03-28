const Stats = () => {
    return (
        <>
            <section className="c-section c-section--base">
                    <div className="c-section__stats">
                        <div className="c-section__item-1">
                            <span className="c-icon c-icon--card c-icon--card-clock"></span>
                            <div className="c-section__percent">89%</div>
                            <div className="c-section__subtext">Customers who have <br/> increased their productivity</div>
                        </div>
                        <div className="c-section__item-2">
                            <span className="c-icon c-icon--card c-icon--card-user"></span>
                            <div className="c-section__percent c-section__percent-blue">3123</div>
                            <div className="c-section__subtext c-section__subtext-blue">Users who have used our <br/> application</div>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default Stats;