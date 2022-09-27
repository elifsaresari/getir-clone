import styles from './Footer.module.css'
import FirstColumn from "../FooterColumn/firstColumn";
import SecondColumn from "../FooterColumn/secondColumn";
import ThirdColumn from "../FooterColumn/thirdColumn";
import FourthColumn from "../FooterColumn/fourthColumn";
import FifthColumn from "../FooterColumn/fifthColumn";
import Facebook from "../icons/facebook";
import Language from "../icons/language";
import Twitter from "../icons/twitter";
import Instagram from "../icons/instagram";


const Footer = () => {

    return (
        <div className={styles.mainFooter}>

            <div className={styles.footerFirst}>
                <FirstColumn></FirstColumn>
                <SecondColumn></SecondColumn>
                <ThirdColumn></ThirdColumn>
                <FourthColumn></FourthColumn>
                <FifthColumn></FifthColumn>
            </div>

            <div className={styles.footerSecond}>
                <div className={styles.copy}>
                    <span>© 2022 Getir</span>
                    <div className={styles.copyDot}></div>
                    <a href="https://e-sirket.mkk.com.tr/esir/Dashboard.jsp#/sirketbilgileri/18806">
                        <span>Bilgi Toplumu Hizmetleri</span>
                    </a>

                </div>

                <div className={styles.social}>

                    <button className={styles.facebookButton}>
                        <Facebook className={styles.facebookSvg}/>
                    </button>

                    <button className={styles.twitterButton}>
                        <Twitter className={styles.twitterSvg}/>
                    </button>

                    <button className={styles.ınstagramButton}>
                        <Instagram className={styles.ınstagramSvg}/>
                    </button>

                    <button className={styles.languageButton}>
                        <div className={styles.languageDiv}>
                            <Language color="#697488" className={styles.language}/>
                            <a>
                                <span className={styles.languageText}>Türkçe (TR)</span></a>
                        </div>
                    </button>

                </div>
            </div>
        </div>

    )
}

export default Footer;