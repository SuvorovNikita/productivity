import SliderSmall from "./slider/SliderSmall.jsx";
import React from "react";

const Testimonials = () => {
    return (
        <>
            <div className="c-section c-section--home c-section--bg-bold">
                <div className="container-small">
                    <div className="c-section__inner">
                        <div className="c-section__body">
                            <div className="c-section__content">
                                <div className="c-section__title">TESTIMONIALS</div>
                                <div className="c-section__subtitle">Customers's quotes</div>
                                <div className="c-section__context">Brute laoreet efficiendi id his, ea illum nonumes
                                    luptatum pro. Usu atqui laudem an.
                                </div>
                            </div>
                            <div className="c-section__slider">
                                <SliderSmall/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials