import styles from "../Getir/index.module.css"
import Slogan from "../../Component/Slogan/slogan"
import GetirDownload from "../../Component/GetirDowloand/getirDownload";
import List from "../../Component/Lists/iconList"
import GetirList from "../../Component/Lists/getirCampaignList"
import SimpleSlider from "../../Component/Campaigns/campaign";
import imageList2 from "../../Component/Lists/imageList2";
import Image from "../../Component/Image/image";
import getirList from "../../Component/Lists/getirBgList";
import ContentSlider from "../../Component/Content/content";
import img from "../../Component/icons/bimutluluk.svg"
import MainSlogan from "../../Component/MainSlogan/mainSlogan";


const Index = () => {
    return (
        <div className={styles.getirMain} id="getir">

            <ContentSlider list={getirList} icon={img} text={"Dakikalar içinde kapınızda"}/>
            <Image imageList={imageList2}/>
            <SimpleSlider list={GetirList}/>

            <GetirDownload text={"İstediğiniz ürünleri dakikalar içinde kapınıza getirelim."}></GetirDownload>
            <Slogan list={List}></Slogan>

        </div>
    )
}
export default Index;