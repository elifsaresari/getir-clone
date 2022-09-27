import styles from './/column.module.css'
import List from "../Lists/secondList";
import {Route, Link} from "react-router-dom";

const SecondColumn = () => {
    return (
        <div className={styles.secondColumn}>
            <div className={styles.ColumnHeader}>Getir'i keşfedin!</div>
            <div className={styles.ColumnMain}>
                {List.map((item, index) => {
                    return (

                        <div key={item.name} className={styles.listItem}> {item.name}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default SecondColumn;