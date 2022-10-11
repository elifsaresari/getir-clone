import React, {Component, useEffect, useState} from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import styles from "./content.module.css"
import GetirMutfak from "../getirYemekMutfak/getirYemekMutfak";
import MainSlogan from "../MainSlogan/mainSlogan";
import {text} from "stream/consumers";
import {Simulate} from "react-dom/test-utils";
import submit = Simulate.submit;
import RegisterCard from "../RegisterCard/registerCard";


export interface ContentSliderProps {
    list: { image: string }[]
    icon: string;
    text: string;

}

const ContentSlider: React.FC<ContentSliderProps> = (props) => {

    const {list, text, icon} = props


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
                                <img height={500} className={styles.image} key={item.image} src={item.image}/>

                            </div>

                        )
                    })}

                </Slider>
            </div>
            <div className={styles.wrapper} >
                <MainSlogan  header={text} icon={icon}/>
                <RegisterCard/>
            </div>
        </div>
    );

}

export default ContentSlider