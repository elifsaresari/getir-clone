import React from "react";
import styles from "./card.module.css"

export interface CardProps {
    image: string
    header: string
    text: string
    className: string
}

const Card: React.FC<CardProps> = (props: CardProps) => {
    const {image,header,text,className}=props

    return(
        <div className={styles.sloganBox} >
            <img src={image} />
            <span className={styles.sloganHeader}>{header}</span>
            <span className={styles.sloganText}>{text}</span>
        </div>

    )
}

export default Card