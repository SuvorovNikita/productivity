import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import avatar from "../../assets/img/slider/avatar.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import {Pagination} from "swiper";
const SliderSmall = () => {

    return (
        <>
            <Swiper
                rewind={true}
                modules={[Pagination]}
                pagination={{
                    clickable: true,
                    el: ".swiper-pagination-2"
                }}
                className="swiper-container-2">
                <SwiperSlide>
                    <div className="c-card c-card--slider-card">
                        <div className="c-card__body">
                            <div className="c-card__text">Quidam vocibus eum ne, erat consectetuer
                                voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel
                                diceret persecuti.
                            </div>
                            <div className="c-card__avatar">
                                <img src={avatar} alt="avatar"/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="c-card c-card--slider-card">
                        <div className="c-card__body">
                            <div className="c-card__text">Quidam vocibus eum ne, erat consectetuer
                                voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel
                                diceret persecuti.
                            </div>
                            <div className="c-card__avatar">
                                <img src={avatar} alt="avatar"/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="c-card c-card--slider-card">
                        <div className="c-card__body">
                            <div className="c-card__text">Quidam vocibus eum ne, erat consectetuer
                                voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel
                                diceret persecuti.
                            </div>
                            <div className="c-card__avatar">
                                <img src={avatar} alt="avatar"/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="c-card c-card--slider-card">
                        <div className="c-card__body">
                            <div className="c-card__text">Quidam vocibus eum ne, erat consectetuer
                                voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel
                                diceret persecuti.
                            </div>
                            <div className="c-card__avatar">
                                <img src={avatar} alt="avatar"/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="c-card c-card--slider-card">
                        <div className="c-card__body">
                            <div className="c-card__text">Quidam vocibus eum ne, erat consectetuer
                                voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel
                                diceret persecuti.
                            </div>
                            <div className="c-card__avatar">
                                <img src={avatar} alt="avatar"/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="c-card c-card--slider-card">
                        <div className="c-card__body">
                            <div className="c-card__text">Quidam vocibus eum ne, erat consectetuer
                                voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel
                                diceret persecuti.
                            </div>
                            <div className="c-card__avatar">
                                <img src={avatar} alt="avatar"/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="c-card c-card--slider-card">
                        <div className="c-card__body">
                            <div className="c-card__text">Quidam vocibus eum ne, erat consectetuer
                                voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel
                                diceret persecuti.
                            </div>
                            <div className="c-card__avatar">
                                <img src={avatar} alt="avatar"/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="c-card c-card--slider-card">
                        <div className="c-card__body">
                            <div className="c-card__text">Quidam vocibus eum ne, erat consectetuer
                                voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel
                                diceret persecuti.
                            </div>
                            <div className="c-card__avatar">
                                <img src={avatar} alt="avatar"/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="c-card c-card--slider-card">
                        <div className="c-card__body">
                            <div className="c-card__text">Quidam vocibus eum ne, erat consectetuer
                                voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel
                                diceret persecuti.
                            </div>
                            <div className="c-card__avatar">
                                <img src={avatar} alt="avatar"/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-pagination-2"></div>
        </>
    );
};

export default SliderSmall;