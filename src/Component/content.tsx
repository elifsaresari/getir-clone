import React, {Component, useEffect, useState} from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import styles from "../Component/content.module.css"


export interface ContentSliderProps {
    list: { image: string }[]
}

const ContentSlider: React.FC<ContentSliderProps> = (props) => {

    const {list} = props


    const settings = {
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <div className={styles.wrapper}>
            <Slider  {...settings}>
                {list.map((item, index) => {
                    return (
                        <div className={styles.imageWrapper}>
                            <img height={500} className={styles.image} key={item.image} src={item.image}/>
                        </div>

                    )
                })}

            </Slider>
        </div>
    );

}

export default ContentSlider