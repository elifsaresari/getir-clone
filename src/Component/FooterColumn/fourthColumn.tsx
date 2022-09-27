import styles from './/column.module.css'
import List from "../Lists/thirdList";

const FourthColumn = () => {
    return (

        <div className={styles.fourthColumn}>
            <div className={styles.ColumnHeader}>İş Ortağımız Olun</div>
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

export default FourthColumn;