import styles from "../../Page/GetirSu/getirSu.module.css"
import Slogan from "../../Component/Slogan/slogan";
import List from "../../Component/Lists/getirSuList"
import image from "../../Component/icons/getirSu.svg"
import getirSuList from "../../Component/Lists/getirSuCampaignList"
import SimpleSlider from "../../Component/Campaigns/campaign";
import ContentSlider from "../../Component/Content/content";
import getirSuBgList from "../../Component/Lists/GetirSuBgList";

const GetirSu = () => {
    return (
        <div className={styles.getirSuMain} id="getirSu">
            <ContentSlider list={getirSuBgList} icon={image} text={"Gece gündüz kapınıza gelen su"}/>
            <div id="test1234"><SimpleSlider list={getirSuList}/></div>
            <Slogan list={List}></Slogan>
        </div>
    )
}

export default GetirSu;