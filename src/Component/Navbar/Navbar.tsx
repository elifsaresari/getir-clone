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


    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    const [clickYemek, setClickYemek] = useState(false);

    const handleYemekClick = () => {
        setClickYemek(!clickYemek);
    }

    const [clickBuyuk, setClickBuyuk] = useState(false);

    const handleBuyukClick = () => {
        setClickBuyuk(!clickBuyuk);
    }

    const [clickSu, setClickSu] = useState(false);

    const handleSuClick = () => {
        setClickSu(!clickSu);
    }
    return (
        <div className={styles.navbar + " " + styles.flexRow}>
            <div className={styles.navbarWrapper + " " + styles.flexRow}>
                <div className={styles.navbarMenu + " " + styles.flexRow}>
                    <NavLink to="/">
                        <Getir onClick={handleClick}
                               className={styles.nav_logo + " " + styles.getirLogo + " " + styles.navHeight}
                               color={click ? '#DBDBFFFF' : '#FFD300'}/>
                    </NavLink>
                    <NavLink to="/getiryemek">
                        <GetirYemek onClick={handleYemekClick}
                                    className={styles.nav_logo + " " + styles.getiryemekLogo + " " + styles.navHeight}
                                    color={clickYemek ? '#FFD300' : '#DBDBFFFF'} baseColor={'#DBDBFFFF'}/>
                    </NavLink>
                    <NavLink to="/getirbuyuk">
                        <GetirBuyuk onClick={handleBuyukClick}
                                    className={styles.nav_logo + " " + styles.getirbuyukLogo + " " + styles.navHeight}
                                    color={clickBuyuk ? '#FFD300' : '#DBDBFFFF'} baseColor={'#DBDBFFFF'}/>
                    </NavLink>

                    <NavLink to="/getirsu">
                        <GetirSu onClick={handleSuClick}
                                 className={styles.nav_logo + " " + styles.getirsuLogo + " " + styles.navHeight}
                                 color={clickSu ? '#FFD300' : '#DBDBFFFF'} baseColor={'#DBDBFFFF'}/>
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