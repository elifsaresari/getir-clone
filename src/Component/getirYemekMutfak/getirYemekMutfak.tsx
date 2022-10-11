import React, {Component, useEffect, useState} from "react";
import styles from "../getirYemekMutfak/getirYemekMutfak.module.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"


export interface GetirMutfakProps {
    getirList: { id: number, image: string, text: string }[]
}

const GetirMutfak: React.FC<GetirMutfakProps> = (props) => {

    const {getirList} = props
    const [bul, setBul] = useState(getirList.length);
    const search = () => {
        if (getirList.length > 3) {
            setBul(3)
        } else
            setBul(getirList.length)
    }

    useEffect(() => {
        search()
    }, [])


    const settings = {
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 3,
        autoplaySpeed: 3000,


    };
    return (
        <div  className={styles.wrapper}>
            <span>Mutfaklar</span>
            <Slider {...settings}>
                {getirList.map((item, index) => {
                    return (
                        <div key={item.image} className={styles.imgWrapper}>
                            <img className={styles.image} src={item.image}/>
                            <div  className={styles.imageText}>
                                <span>{item.text}</span>
                            </div>
                        </div>

                    )
                })}

            </Slider>
        </div>
    );

}

export default GetirMutfak