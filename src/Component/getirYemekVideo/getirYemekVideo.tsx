import React, {Component, useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import styles from "../getirYemekVideo/getirYemekVideo.module.css";
import list from "../Lists/yemekList"
import {it} from "node:test";
import MainSlogan from "../MainSlogan/mainSlogan";
import RegisterCard from "../RegisterCard/registerCard";


export interface getirVideoProps {
    list: { id: number, video: string, poster: string }[]
}

const GetirVideo: React.FC<getirVideoProps> = (props) => {

    const {list} = props


    const settings = {
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,

    };
    return (
        <div className={styles.mainWrapper} id="slider">
            <div className={styles.sliderWrapper}>
                <Slider className={styles.slider} {...settings}>
                    {list.map((item, index) => {
                        return (
                            <div className={styles.imageWrapper}>
                                <video
                                    className={styles.video} key={item.id} loop={true} playsInline={true}
                                    autoPlay={true}
                                    src={item.video}>
                                    <source/>
                                </video>
                            </div>

                        )
                    })}

                </Slider>
            </div>
            <div className={styles.wrapper}>
                <RegisterCard/>
            </div>
        </div>
    );

}

export default GetirVideo