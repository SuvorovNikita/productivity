const Customers = ({company}) => {
    return (
        <>
            <section className="c-section c-section--base">
                <div className="container">
                    <div className="c-section__inner">
                        <div className="c-section__body">
                            {company.map((obj, i) => (
                                <div className="c-section__item" key={i}>
                                    <img src={obj.img} alt={obj.alt}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Customers;