import React from "react";
import List from '../Lists/appStoreList'
import styles from "../../Component/GetirDowloand/getirDownload.module.css"
import phoneLanding from "../../Component/icons/phoneLanding.png"


export interface GetirDownloadProps {
    text: string
}

const GetirDownload: React.FC<GetirDownloadProps> = (props: GetirDownloadProps) => {
    const {text}=props

    return(
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <h2 className={styles.getirHeader}>Getir'i indirin!</h2>
                <span className={styles.text}>{text}</span>
                <div className={styles.store}>
                    {List.map((item, index) => {
                        return (

                            <img key={item.icon} className={styles.listItem} src={item.icon}/>

                        )
                    })}

                </div>
            </div>
            <div>
                <img className={styles.phoneLanding} src={phoneLanding} />
            </div>
        </div>
    )
}


export default GetirDownload