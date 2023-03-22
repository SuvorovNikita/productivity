const Customers = ({company}) => {
    return (
        <>
            <section className="c-section c-section--base">
                <div className="container">
                    <div className="c-section__inner">
                        <div className="c-section__body">
                            {company.map((obj) => (
                                <div className="c-section__item" key={obj.id}>
                                    <img id={obj.id} src={obj.img} alt={obj.alt}/>
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