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
        <div className={styles.card} >
            <img src={image} />
            <span className={styles.cardHeader}>{header}</span>
            <span className={styles.cardText}>{text}</span>
        </div>

    )
}

export default Card