import styles from "../Getir/index.module.css"
import Slogan from "../../Component/Slogan/slogan"
import GetirDownload from "../../Component/GetirDowloand/getirDownload";
import List from  "../../Component/Lists/iconList"
import GetirList from "../../Component/Lists/getirCampaignList"
import SimpleSlider from "../../Component/Campaigns/campaign";


const Index = () => {
    return (
        <div className={styles.getirMain}>
            <SimpleSlider list={GetirList}/>
            <GetirDownload  text={"İstediğiniz ürünleri dakikalar içinde kapınıza getirelim."}></GetirDownload>
           <Slogan list={List} ></Slogan>

        </div>
    )
}
export default Index;