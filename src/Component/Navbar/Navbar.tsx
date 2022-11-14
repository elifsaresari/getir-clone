import styles from './Navbar.module.css'
import GetirSu from "../icons/getirsu";
import GetirYemek from "../icons/getiryemek";
import GetirBuyuk from "../icons/getirbuyuk";
import Getir from "../icons/getir";
import Language from "../icons/language";
import User from "../icons/user";
import Adduser from "../icons/adduser";
import {NavLink, useLocation} from "react-router-dom";
import React, {useState} from "react";
import Modal from "react-modal"
import cross from "../icons/cross.png"
import ModalRegister from "../ModalRegister/modalRegister";
import RegisterNew from "../Register/register";


const Navbar = () => {

    const customStyles = {
        content: {
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,

        },
    };


    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [open, setOpen] = useState(false);

    const handleDeneme = () => {
        handleShow();
        setOpen(false);

    }
    const handleKayit = () => {
        handleClose();
        setOpen(true);

    }

    const [openB, setOpenB] = React.useState(false);


    const location = useLocation()


    return (
        <div className={styles.wrapper}>
            <div className={styles.navbar + " " + styles.flexRow}>
                <div className={styles.navbarWrapper + " " + styles.flexRow}>
                    <div className={styles.navbarMenu + " " + styles.flexRow}>
                        <NavLink
                            className={styles.bg + " " + (location.pathname === ('/') ? styles.bgActive : styles.bgNone)}
                            to="/">
                            <Getir
                                className={styles.navLogo + " " + styles.getirLogo + " " + styles.navHeight}
                                color={location.pathname === ('/') ? '#FFD300' : '#DBDBFFFF'}/>
                        </NavLink>

                        <NavLink
                            className={styles.bg + " " + (location.pathname.startsWith("/getiryemek") ? styles.bgActive : styles.bgNone)}
                            to="/getiryemek">


                            <GetirYemek

                                className={styles.navLogo + " " + styles.getiryemekLogo + " " + styles.navHeight}
                                color={location.pathname.startsWith("/getiryemek") ? '#FFD300' : '#DBDBFFFF'}
                                baseColor={'#DBDBFFFF'}/>


                        </NavLink>

                        <NavLink
                            className={styles.bg + " " + (location.pathname.startsWith("/getirbuyuk") ? styles.bgActive : styles.bgNone)}
                            to="/getirbuyuk">
                            <GetirBuyuk
                                className={styles.navLogo + " " + styles.getirbuyukLogo + " " + styles.navHeight}
                                color={location.pathname.startsWith("/getirbuyuk") ? '#FFD300' : '#DBDBFFFF'}
                                baseColor={'#DBDBFFFF'}/>
                        </NavLink>

                        <NavLink
                            className={styles.bg + " " + (location.pathname.startsWith("/getirsu") ? styles.bgActive : styles.bgNone)}
                            to="/getirsu">
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
                            <span className={styles.btnspan}>Türkçe(TR)</span>

                        </button>

                        <button onClick={handleShow} className={styles.user_button + " " + styles.flexRow}>
                            <div className={styles.user_div + " " + styles.navHeight}>
                                <User color={"#DBDBFFFF"}
                                      className={styles.navLogo + " " + styles.userLogo + " " + styles.navHeight}/>
                            </div>
                            <span className={styles.btnspan}>Giriş Yap</span>
                        </button>
                        <Modal isOpen={show}
                               shouldCloseOnEsc={true}
                               className={styles.modal}
                               contentLabel="Example Modal">
                            <div className={styles.modalNavbar}>
                                <h6 className={styles.modalHeader}>Giriş yap veya kayıt ol</h6>
                                <img width={16} height={16} className={styles.exitBtn} onClick={handleClose}
                                     src={cross} alt=""/>
                            </div>
                            <div className={styles.modalDiv}>
                                <ModalRegister/>
                                <span className={styles.kvkkSpan}>Kişisel verilerinize dair Aydınlatma Metni için <a
                                    className={styles.kvkk} target="_blank"
                                    href="https://getir.com/yardim/kvkk/">tıklayınız</a></span>
                            </div>
                            <div className={styles.registerDiv}>
                                    <span className={styles.registerSpan}>Hala kayıt olmadınız mı? <button
                                        onClick={handleKayit}><span className={styles.deneme}>Kayıt Ol</span></button>
                                     <Modal isOpen={open}
                                            onRequestClose={() => setOpen(false)}
                                            shouldCloseOnOverlayClick={false}
                                            shouldCloseOnEsc={true}
                                            className={styles.modalİki}


                                            contentLabel="Example Modal">
                            <div className={styles.modalNavbar}>
                                <h6 className={styles.modalHeader}>Giriş yap veya kayıt ol</h6>
                                <img width={16} height={16} className={styles.exitBtn} onClick={handleClose}
                                     src={cross} alt=""/>
                            </div>
                            <div className={styles.modalDiv}>
                                <ModalRegister/>
                                <span className={styles.kvkkSpan}>Kişisel verilerinize dair Aydınlatma Metni için <a
                                    className={styles.kvkk} target="_blank"
                                    href="https://getir.com/yardim/kvkk/">tıklayınız</a></span>
                            </div>
                            <div className={styles.registerDiv}>
                                    <span className={styles.registerSpan}>Hala kayıt olmadınız mı? <a
                                        className={styles.kvkk} href="">Kayıt Ol</a></span>
                            </div>
                        </Modal></span>
                            </div>
                        </Modal>


                        <button onClick={() => setOpen(true)} className={styles.adduser_button + " " + styles.flexRow}>
                            <div className={styles.adduser_div + " " + styles.navHeight}>
                                <Adduser color={"#DBDBFFFF"}
                                         className={styles.navLogo + " " + styles.adduserLogo + " " + styles.navHeight}/>
                            </div>
                            <span className={styles.btnspan}>Kayıt Ol</span>
                        </button>

                        <Modal isOpen={open}
                               onRequestClose={() => setOpen(false)}
                               shouldCloseOnOverlayClick={false}
                               shouldCloseOnEsc={true}
                               className={styles.modalİki}


                               contentLabel="Example Modal">

                            <img width={16} height={16} className={styles.exitBtnK} onClick={() => setOpen(false)}
                                 src={cross}
                                 alt=""/>
                            <div className={styles.modalDiv}>
                                <RegisterNew/>

                                <span> Getir'e üyeyseniz <button onClick={handleDeneme}><span className={styles.deneme}>Giriş Yap</span></button>
                                     <Modal isOpen={show}
                                            shouldCloseOnEsc={true}
                                            className={styles.modal}
                                            contentLabel="Example Modal">
                            <div className={styles.modalNavbar}>
                                <h6 className={styles.modalHeader}>Giriş yap veya kayıt ol</h6>
                                <img width={16} height={16} className={styles.exitBtn} onClick={handleClose}
                                     src={cross} alt=""/>
                            </div>
                            <div className={styles.modalDiv}>
                                <ModalRegister/>
                                <span className={styles.kvkkSpan}>Kişisel verilerinize dair Aydınlatma Metni için <a
                                    className={styles.kvkk} target="_blank"
                                    href="https://getir.com/yardim/kvkk/">tıklayınız</a></span>
                            </div>
                            <div className={styles.registerDiv}>
                                    <span className={styles.registerSpan}>Hala kayıt olmadınız mı? <a
                                        className={styles.kvkk} href="">Kayıt Ol</a></span>
                            </div>
                        </Modal></span>

                            </div>
                        </Modal>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;