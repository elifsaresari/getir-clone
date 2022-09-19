import styles from './navbar.module.css'
import getirsvg from '../../getirlogo.svg'
import getiryemeksvg from '../../getiryemeklogo.svg'
import getirbuyuksvg from '../../getirbuyuklogo.svg'
import getirsusvg from '../../getirsulogo.svg'
import languagesvg from '../../languagelogo.svg'
import usersvg from '../../userlogo.svg'
import addusersvg from '../../adduserlogo.svg'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarWrapper}>


                <div className={styles.navbarMenu}>
                    <img className={styles.nav_logo} id={styles.getir_logo} src={getirsvg}/>
                    <img className={styles.nav_logo} id={styles.getiryemek_logo} src={getiryemeksvg}/>
                    <img className={styles.nav_logo} id={styles.getirbuyuk_logo} src={getirbuyuksvg}/>
                    <img className={styles.nav_logo} id={styles.getirsu_logo} src={getirsusvg}/>
                </div>

                <div className={styles.navbarOption}>
                    <button className={styles.language_button}>
                        <div className={styles.language_div}>
                            <img className={styles.nav_logo} id={styles.languageslogo} src={languagesvg}/>
                        </div>
                        <span>Türkçe(TR)</span>

                    </button>
                    <button className={styles.user_button}>
                        <div className={styles.user_div}>
                            <img className={styles.nav_logo} id={styles.userlogo} src={usersvg}/>
                        </div>
                        <span>Giriş Yap</span>
                    </button>
                    <button className={styles.adduser_button}>
                        <div className={styles.adduser_div}>
                            <img className={styles.nav_logo} id={styles.adduserlogo} src={addusersvg}/>
                        </div>
                        <span>Kayıt Ol</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar