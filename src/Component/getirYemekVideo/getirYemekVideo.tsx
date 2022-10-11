import React, {Component, useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import styles from "../getirYemekVideo/getirYemekVideo.module.css";
import list from "../Lists/yemekList"
import {it} from "node:test";


export interface getirVideoProps {
    list: {id:number, video: string,poster:string }[]
}

const getirVideo: React.FC<getirVideoProps> = (props) => {

    const {list} = props


    const settings = {
        slidesToShow: 1,
        autoplay: true,



    };
    return (
        <div className={styles.wrapper}>

                {list.map((item, index) => {
                    return (
                        <div className={styles.imageWrapper}>
                            <video
                                className={styles.video} key={item.id} loop={true}  playsInline={true}  autoPlay={true} src={item.video}>
                                <source/>
                            </video>
                        </div>

                    )
                })}


        </div>
    );

}

export default getirVideo