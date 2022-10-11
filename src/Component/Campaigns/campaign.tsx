import React, {Component, useEffect, useState} from "react";
import styles from "../Campaigns/campaign.module.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"


export interface SimpleSliderProps {
    list: { image: string }[]
}

const SimpleSlider: React.FC<SimpleSliderProps> = (props) => {

    const {list} = props
    const [bul, setBul] = useState(list.length);
    const search = () => {
        if (list.length > 3) {
            setBul(3)
        } else
            setBul(list.length)
    }

    useEffect(() => {
        search()
    }, [])


    const settings = {
        infinite: true,
        slidesToShow: bul,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,




    };
    return (
        <div id="test123" className={styles.wrapper}>
            <span >Kampanyalar</span>
            <Slider className={styles.imageWrapper} {...settings}>
                {list.map((item, index) => {
                    return (
                        <div className={styles.imgWrapper}>
                            <img key={item.image} className={styles.image} src={item.image}/>
                        </div>

                    )
                })}

            </Slider>
        </div>
    );

}

export default SimpleSlider