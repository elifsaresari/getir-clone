import styles from './/column.module.css'
import List from '../Lists/appStoreList'

const FirstColumn = () => {
    return (
        <div className={styles.firstColumn}>
            <div className={styles.ColumnHeader}>Getir'i indirin!</div>

            <div className={styles.ColumnMain}>
                {List.map((item, index) => {
                    return (

                        <img key={item.icon} className={styles.listItem} src={item.icon}/>

                    )
                })}

            </div>
        </div>
    )
}

export default FirstColumn;