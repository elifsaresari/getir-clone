import Apply from "../../Component/Apply/apply"
import Slogan from "../../Component/Slogan/slogan";
import styles from "./getirYemek.module.css"
import List from  "../../Component/Lists/getirYemekList"
import ContentSlider from "../../Component/content";
import getirYemekList from "../../Component/Lists/GetirYemekBgList";
const GetirYemek = () => {
    return (
        <div className={styles.getirYemekMain}>
            <ContentSlider list={getirYemekList}/>
            <Slogan list={List}></Slogan>
            <Apply></Apply>
        </div>
    )
}

export default GetirYemek;