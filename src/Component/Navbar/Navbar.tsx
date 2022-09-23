import styles from './Navbar.module.css'
import GetirSu from "../icons/getirsu";
import GetirYemek from "../icons/getiryemek";
import GetirBuyuk from "../icons/getirbuyuk";
import Getir from "../icons/getir";
import Language from "../icons/language";
import User from "../icons/user";
import AddUser from "../icons/adduser";
import {useState} from "react";
import {Routes, Route, Link, NavLink} from "react-router-dom";

const Navbar = () => {


    const [click, setClick] = useState(0);

    const handleClick = () => {
        setClick(0)

    }


    const handleYemekClick = () => {
        setClick(1)
    }


    const handleBuyukClick = () => {
        setClick(2)
    }


    const handleSuClick = () => {
        setClick(3)
    }
    return (
        <div className={styles.navbar + " " + styles.flexRow}>
            <div className={styles.navbarWrapper + " " + styles.flexRow}>
                <div className={styles.navbarMenu + " " + styles.flexRow}>
                    <NavLink to="/" onClick={handleClick}>
                        <Getir onClick={handleClick}
                               className={styles.nav_logo + " " + styles.getirLogo + " " + styles.navHeight}
                               color={click == 0 ? '#FFD300' : '#DBDBFFFF'}/>
                    </NavLink>

                    <NavLink to="/getiryemek" onClick={handleYemekClick}>
                        <GetirYemek
                            className={styles.nav_logo + " " + styles.getiryemekLogo + " " + styles.navHeight}
                            color={click == 1 ? '#FFD300' : '#DBDBFFFF'} baseColor={'#DBDBFFFF'}/>
                    </NavLink>

                    <NavLink to="/getirbuyuk" onClick={handleBuyukClick}>
                        <GetirBuyuk
                            className={styles.nav_logo + " " + styles.getirbuyukLogo + " " + styles.navHeight}
                            color={click == 2 ? '#FFD300' : '#DBDBFFFF'} baseColor={'#DBDBFFFF'}/>
                    </NavLink>

                    <NavLink to="/getirsu" onClick={handleSuClick}>
                        <GetirSu
                            className={styles.nav_logo + " " + styles.getirsuLogo + " " + styles.navHeight}
                            color={click == 3 ? '#FFD300' : '#DBDBFFFF'} baseColor={'#DBDBFFFF'}/>
                    </NavLink>
                </div>

                <div className={styles.navbarOption + " " + styles.flexRow}>
                    <button className={styles.language_button + " " + styles.flexRow}>
                        <div className={styles.language_div + " " + styles.navHeight}>
                            <Language color={"#DBDBFFFF"}
                                      className={styles.nav_logo + " " + styles.languagesLogo + " " + styles.navHeight}/>
                        </div>
                        <span>Türkçe(TR)</span>

                    </button>

                    <button className={styles.user_button + " " + styles.flexRow}>
                        <div className={styles.user_div + " " + styles.navHeight}>
                            <User color={"#DBDBFFFF"}
                                  className={styles.nav_logo + " " + styles.userLogo + " " + styles.navHeight}/>
                        </div>
                        <span>Giriş Yap</span>
                    </button>
                    <button className={styles.adduser_button + " " + styles.flexRow}>
                        <div className={styles.adduser_div + " " + styles.navHeight}>
                            <AddUser color={"#DBDBFFFF"}
                                     className={styles.nav_logo + " " + styles.adduserLogo + " " + styles.navHeight}/>
                        </div>
                        <span>Kayıt Ol</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar