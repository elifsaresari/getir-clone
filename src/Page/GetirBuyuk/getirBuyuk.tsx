import List from "../../Component/Lists/getirBuyukList"
import Slogan from "../../Component/Slogan/slogan";
import GetirDownload from "../../Component/GetirDowloand/getirDownload";
import SimpleSlider from "../../Component/Campaigns/campaign";
import getirBuyukList from "../../Component/Lists/getirBuyukCampaignList";
import getirYemekList from "../../Component/Lists/geirBuyukBgList";
import ContentSlider from "../../Component/Content/content";
import Image from "../../Component/Image/image";
import imageList from "../../Component/Lists/imageList";
import styles from "../GetirBuyuk/getirBuyuk.module.css"
import image from "../../Component/icons/getirBuyuk.svg"



const GetirBuyuk = () => {
    return (
        <div className={styles.getirBuyukMain} id="getirBuyuk">
            <ContentSlider list={getirYemekList} icon={image} text={"Uygun fiyatlarla kapınızda!"}/>
            <Image imageList={imageList}/>
            <SimpleSlider list={getirBuyukList}/>
            <GetirDownload text={"Market ihtiyaçlarınızı kapınıza kadar getirelim."}></GetirDownload>
            <Slogan list={List}></Slogan>

        </div>
    )
}

export default GetirBuyuk;