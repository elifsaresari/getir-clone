import Apply from "../../Component/Apply/apply"
import Slogan from "../../Component/Slogan/slogan";
import styles from "./getirYemek.module.css"
const GetirYemek = () => {
    return (
        <div className={styles.getirYemekMain}>
            <h1>Getir Yemek</h1>
            <Slogan></Slogan>
            <Apply></Apply>
        </div>
    )
}

export default GetirYemek;