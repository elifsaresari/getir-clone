import Card from "../Card/card"
import styles from "../Slogan/slogan.module.css"


const Slogan = () => {
    return (

        <div className={styles.sloganMain}>
            <Card image={"icon/getirKampanya.svg"} header={"Her siparişinize bir kampanya"}
                  text={"Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz."}
                  className={'sloganBox'}></Card>


            <Card image={"icon/getirKapi.svg"} header={"Dakikalar içinde kapınızda"}
                  text={"Getir’le siparişiniz dakikalar içinde kapınıza gelir."}
                  className={"sloganBox"}></Card>

            <Card image={"icon/getirCesit.svg"} header={"Binlerce çeşit mutluluk"}
                  text={"Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz."}
                  className={'sloganBox'}></Card>

        </div>
    )
}

export default Slogan