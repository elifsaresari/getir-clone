import styles from "../../Page/GetirBuyuk/getirBuyuk.module.css"
import List from "../../Component/Lists/getirBuyukList"
import Slogan from "../../Component/Slogan/slogan";
import GetirDownload from "../../Component/GetirDowloand/getirDownload";
import SimpleSlider from "../../Component/Campaigns/campaign";
import getirBuyukList from "../../Component/Lists/getirBuyukCampaignList";

const GetirBuyuk = () => {
    return (
        <div className={styles.getirBuyukMain}>
            <SimpleSlider list={getirBuyukList}/>
            <GetirDownload text={"Market ihtiyaçlarınızı kapınıza kadar getirelim."}></GetirDownload>
            <Slogan list={List}></Slogan>

        </div>
    )
}

export default GetirBuyuk;