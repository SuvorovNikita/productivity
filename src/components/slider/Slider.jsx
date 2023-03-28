import React from "react";

import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";

import {Navigation, Pagination} from "swiper";

const Slider = () => {


    return (
        <>
            <div className="c-section__inner-slider">
                <Swiper
                    navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next",
                    }}
                    rewind={true}
                    pagination={{
                        clickable: true,
                        el: '.swiper-pagination',
                        type: 'bullets',
                    }}
                    modules={[Navigation, Pagination]}
                    className="Swiper">
                    <SwiperSlide>
                        <div className="c-section__body-slider">
                            <div className="c-section__slider-img"></div>
                            <div className="c-section__slider-content">
                                <div className="c-section__slider-title">How to start planning</div>
                                <div className="c-section__slider-subtitle">Quidam vocibus eum ne, erat consectetuer
                                    voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret
                                    persecuti. Natum petentium principes mei ea. Tota everti periculis vis ei, quas
                                    tibique pro at, eos ut decore ...
                                </div>
                                <div className="c-section__slider-actions">
                                    <div
                                        className="c-button c-button--base c-button--base-blue c-button--base-lg mr-10">Read
                                        now
                                    </div>
                                    <div className="c-button c-button--base c-button--base-white c-button--base-xl">Add
                                        to your bookmarks
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="c-section__body-slider">
                            <div className="c-section__slider-img"></div>
                            <div className="c-section__slider-content">
                                <div className="c-section__slider-title">How to start planning</div>
                                <div className="c-section__slider-subtitle">Quidam vocibus eum ne, erat consectetuer
                                    voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret
                                    persecuti. Natum petentium principes mei ea. Tota everti periculis vis ei, quas
                                    tibique pro at, eos ut decore ...
                                </div>
                                <div className="c-section__slider-actions">
                                    <div
                                        className="c-button c-button--base c-button--base-blue c-button--base-lg mr-10">Read
                                        now
                                    </div>
                                    <div className="c-button c-button--base c-button--base-white c-button--base-xl">Add
                                        to your bookmarks
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="c-section__body-slider">
                            <div className="c-section__slider-img"></div>
                            <div className="c-section__slider-content">
                                <div className="c-section__slider-title">How to start planning</div>
                                <div className="c-section__slider-subtitle">Quidam vocibus eum ne, erat consectetuer
                                    voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret
                                    persecuti. Natum petentium principes mei ea. Tota everti periculis vis ei, quas
                                    tibique pro at, eos ut decore ...
                                </div>
                                <div className="c-section__slider-actions">
                                    <div
                                        className="c-button c-button--base c-button--base-blue c-button--base-lg mr-10">Read
                                        now
                                    </div>
                                    <div className="c-button c-button--base c-button--base-white c-button--base-xl">Add
                                        to your bookmarks
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-pagination"></div>

            </div>

        </>
    );
};

export default Slider;