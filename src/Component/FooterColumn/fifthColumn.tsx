import styles from "../FooterColumn/column.module.css"
import etbis from "../icons/etbis.png"

const FifthColumn = () => {
    return (
        <div  className={styles.fifthcolumn}>
            <a href="https://www.eticaret.gov.tr/siteprofil/A8C52359B2F14075B6829557FC4306B1/getircom" target="_blank"
              className={styles.etbisWrapper}>

                <img className={styles.etbis} src={etbis}/>

            </a>
        </div>
    )
}

export default FifthColumn;