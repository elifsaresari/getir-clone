import React from "react";
import styles from "../MainSlogan/mainSlogan.module.css"

export interface MainSloganProps{
    header:string;
    icon:string;

}

const MainSlogan:React.FC<MainSloganProps>=(props)=>{
    const {header,icon}=props

    return(
        <div className={styles.wrapper}>
            <img  className="icon1" src={icon} alt=""/>
            <h1>{header}</h1>
        </div>
    )

}

export default MainSlogan