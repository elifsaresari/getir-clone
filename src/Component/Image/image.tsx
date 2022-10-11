import React from "react";
import styles from "../../Component/Image/image.module.css"

export interface ImageProps {
    imageList: { id: number, image: string, imageName: string }[]
}

const Image: React.FC<ImageProps> = (props, context) => {
    const {imageList} = props

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                {imageList.map((item, index) => {
                    return (
                        <div className={styles.buttonWrapper}>
                            <button className={styles.button}>
                                <img className={styles.image} src={item.image} alt=""/>
                                <span className={styles.imageText}>{item.imageName}</span>
                            </button>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Image