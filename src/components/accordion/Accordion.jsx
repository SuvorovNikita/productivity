import {useState} from "react";

const Accordion = ({items}) => {
    return (
        <>
            {items.map((item, index) => {
                const [isOpen, setIsOpen] = useState(false);
                return (
                    <div key={index}>
                        <div onClick={() => setIsOpen(!isOpen)}>{item.title}</div>
                        {isOpen && <div>{item.content}</div>}
                    </div>
                );
            })}
        </>
    );
}
export default Accordion;