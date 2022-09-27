import styles from "../../Component/Apply/apply.module.css"

const Apply = () => {
    return (

        <div className={styles.apply}>
            <div className={styles.applyBox}>
                <span className={styles.applyHeader}>Restoran sahibi misiniz?</span>
                <span className={styles.applyText}>GetirYemek restoran iş ortaklarından biri olun, işinizi daha az maliyetle büyütün, müşteri memnuniyetini artırın.</span>
            </div>
            <button className={styles.applyButton}>
                <span className={styles.buttonText}>Hemen Başvur</span>
            </button>
        </div>
    )
}

export default Apply;