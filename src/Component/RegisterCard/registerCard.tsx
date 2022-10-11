import styles from "../RegisterCard/registerCard.module.css"

const RegisterCard = () => {
    return (

        <div className={styles.formBox}>
            <h6 className="header"> Giriş Yap veya Kayıt Ol</h6>

            <form>
                <div className={styles.input}>
                    <div className={styles.country}>
                        <input className={styles.countryInput} type="tel" placeholder={"90"}/>
                        <div className={styles.arrow}></div>
                    </div>
                    <input type="tel" placeholder={"Telefon Numarası"}/>

                </div>
            </form>
        </div>
    )
}


export default RegisterCard