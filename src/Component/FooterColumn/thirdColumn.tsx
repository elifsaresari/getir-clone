import styles from './/column.module.css'
import List from "../Lists/thirdList";

const ThirdColumn = () => {
    return (
        <div className={styles.thirdColumn}>
            <div className={styles.ColumnHeader}>Yardıma mı ihtiyacınız var?</div>
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

export default ThirdColumn;