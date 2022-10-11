import styles from './Navbar.module.css'
import GetirSu from "../icons/getirsu";
import GetirYemek from "../icons/getiryemek";
import GetirBuyuk from "../icons/getirbuyuk";
import Getir from "../icons/getir";
import Language from "../icons/language";
import User from "../icons/user";
import Adduser from "../icons/adduser";
import {Routes, Route, Link, NavLink, useLocation} from "react-router-dom";
import {useState} from "react";

const Navbar = () => {

    const location = useLocation()


    return (
        <div className={styles.wrapper}>
            <div className={styles.navbar + " " + styles.flexRow}>
                <div className={styles.navbarWrapper + " " + styles.flexRow}>
                    <div className={styles.navbarMenu + " " + styles.flexRow}>
                        <NavLink className={styles.bg+" "+(location.pathname===('/') ? styles.bgActive: styles.bgNone)} to="/">
                            <Getir
                                className={styles.navLogo + " " + styles.getirLogo + " " + styles.navHeight}
                                color={location.pathname===('/') ? '#FFD300' : '#DBDBFFFF'}/>
                        </NavLink>

                        <NavLink className={styles.bg+" "+(location.pathname.startsWith("/getiryemek") ? styles.bgActive: styles.bgNone)}  to="/getiryemek">
                            <GetirYemek
                                className={styles.navLogo + " " + styles.getiryemekLogo + " " + styles.navHeight}
                                color={location.pathname.startsWith("/getiryemek") ? '#FFD300' : '#DBDBFFFF'}
                                baseColor={'#DBDBFFFF'}/>
                        </NavLink>

                        <NavLink className={styles.bg+" "+(location.pathname.startsWith("/getirbuyuk") ? styles.bgActive: styles.bgNone)} to="/getirbuyuk">
                            <GetirBuyuk
                                className={styles.navLogo + " " + styles.getirbuyukLogo + " " + styles.navHeight}
                                color={location.pathname.startsWith("/getirbuyuk") ? '#FFD300' : '#DBDBFFFF'}
                                baseColor={'#DBDBFFFF'}/>
                        </NavLink>

                        <NavLink className={styles.bg+" "+(location.pathname.startsWith("/getirsu") ? styles.bgActive: styles.bgNone)} to="/getirsu">
                            <GetirSu
                                className={styles.navLogo + " " + styles.getirsuLogo + " " + styles.navHeight}
                                color={location.pathname.startsWith("/getirsu") ? '#FFD300' : '#DBDBFFFF'}
                                baseColor={'#DBDBFFFF'}/>
                        </NavLink>
                    </div>

                    <div className={styles.navbarOption + " " + styles.flexRow}>
                        <button className={styles.language_button + " " + styles.flexRow}>
                            <div className={styles.language_div + " " + styles.navHeight}>
                                <Language color={"#DBDBFFFF"}
                                          className={styles.navLogo + " " + styles.languagesLogo + " " + styles.navHeight}/>
                            </div>
                            <span>Türkçe(TR)</span>

                        </button>

                        <button className={styles.user_button + " " + styles.flexRow}>
                            <div className={styles.user_div + " " + styles.navHeight}>
                                <User color={"#DBDBFFFF"}
                                      className={styles.navLogo + " " + styles.userLogo + " " + styles.navHeight}/>
                            </div>
                            <span>Giriş Yap</span>
                        </button>
                        <button className={styles.adduser_button + " " + styles.flexRow}>
                            <div className={styles.adduser_div + " " + styles.navHeight}>
                                <Adduser color={"#DBDBFFFF"}
                                         className={styles.navLogo + " " + styles.adduserLogo + " " + styles.navHeight}/>
                            </div>
                            <span>Kayıt Ol</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;