import Card from "../Card/card"
import styles from "../Slogan/slogan.module.css"
import React from "react";


export interface SloganProps {
    list:{image:string,text:string,header:string}[]

}

const Slogan: React.FC<SloganProps> = (props) => {
    const {list} = props
    return (
        <div className={styles.sloganMain}>
            {list.map(( item, index) => {
                return (

                    <Card key={item.image} image={item.image} header={item.header}
                          text={item.text}
                          className={styles.sloganBox}></Card>


                )
            })}
        </div>
    )

}

export default Slogan