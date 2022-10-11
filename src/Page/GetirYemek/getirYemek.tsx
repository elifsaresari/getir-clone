import Apply from "../../Component/Apply/apply"
import Slogan from "../../Component/Slogan/slogan";
import styles from "./getirYemek.module.css"
import List from "../../Component/Lists/getirYemekList"
import GetirVideo from "../../Component/getirYemekVideo/getirYemekVideo"
import getirYemekBgList from "../../Component/Lists/yemekList"
import GetirMutfak from "../../Component/getirYemekMutfak/getirYemekMutfak";
import getirMutfak from "../../Component/Lists/getirYemekImageList"

const GetirYemek = () => {
    return (
        <div className={styles.getirYemekMain}>
            <div id="testMutfak"><GetirMutfak getirList={getirMutfak}/></div>
            <Slogan list={List}></Slogan>
            <Apply></Apply>
        </div>
    )
}

export default GetirYemek;