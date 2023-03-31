import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import img1 from "../../assets/img/slider/img-1.png"
import img2 from "../../assets/img/slider/img-2.png"
import img3 from "../../assets/img/slider/img-3.png"

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
                        el: ".swiper-pagination-1"
                    }}
                    modules={[Navigation, Pagination]}
                    className="swiper-container-1">
                    <SwiperSlide>
                        <div className="c-section__body-slider">
                            <div className="c-section__slider-wrapper">
                                <div className="c-section__slider-img">
                                    <img className="c-section__slider-img-1" src={img1} alt=""/>
                                    <div className="c-button c-button--play-2"></div>
                                </div>
                                <div className="c-section__slider-small-images">
                                    <div className="c-section__slider-images-1">
                                        <img src={img2} alt=""/>
                                    </div>
                                    <div className="c-section__slider-images-2">
                                        <img src={img3} alt=""/>
                                    </div>
                                </div>
                            </div>
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
                            <div className="c-section__slider-wrapper">
                                <div className="c-section__slider-img">
                                    <img className="c-section__slider-img-1" src={img1} alt=""/>
                                    <div className="c-button c-button--play-2"></div>
                                </div>
                                <div className="c-section__slider-small-images">
                                    <div className="c-section__slider-images-1">
                                        <img src={img2} alt=""/>
                                    </div>
                                    <div className="c-section__slider-images-2">
                                        <img src={img3} alt=""/>
                                    </div>
                                </div>
                            </div>
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
                            <div className="c-section__slider-wrapper">
                                <div className="c-section__slider-img">
                                    <img className="c-section__slider-img-1" src={img1} alt=""/>
                                    <div className="c-button c-button--play-2"></div>
                                </div>
                                <div className="c-section__slider-small-images">
                                    <div className="c-section__slider-images-1">
                                        <img src={img2} alt=""/>
                                    </div>
                                    <div className="c-section__slider-images-2">
                                        <img src={img3} alt=""/>
                                    </div>
                                </div>
                            </div>
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
                <div className="swiper-pagination-1"></div>
            </div>

        </>
    );
};

export default Slider;