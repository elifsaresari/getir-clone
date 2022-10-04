import styles from "../../Page/GetirSu/getirSu.module.css"
import Slogan from "../../Component/Slogan/slogan";
import List from "../../Component/Lists/getirSuList"

import getirSuList from "../../Component/Lists/getirSuCampaignList"
import SimpleSlider from "../../Component/Campaigns/campaign";
import ContentSlider from "../../Component/content";
import getirSuBgList from "../../Component/Lists/GetirSuBgList";

const GetirSu = () => {
    return (
        <div className={styles.getirSuMain}>
            <ContentSlider list={getirSuBgList}/>
            <SimpleSlider list={getirSuList}/>
            <Slogan list={List}></Slogan>
        </div>
    )
}

export default GetirSu;