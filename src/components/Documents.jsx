import Accordion from "./accordion/Accordion.jsx";

const Documents = ({items}) => {
    return (
        <>
            <section className="c-section c-section--base" id="documentation">
                <div className="container">
                    <Accordion items={items}/>
                </div>
            </section>
        </>
    )
}

export default Documents