import styles from "../Register/register.module.css"
import {useState} from "react";
import ReactFlagsSelect from "react-flags-select";
import {text} from "stream/consumers";
import {Form} from "react-router-dom";

const RegisterNew = () => {

    const [selected, setSelected] = useState('TR');

    const flags = {
        US: '+1',
        GB: '+5',
        FR: '+70',
        DE: '+30',
        IT: '+11',
        TR: '+90',
    }


    return (

        <div className={styles.formBox}>

            <form>
                <div className={styles.input}>
                    <div className={styles.telefon}>
                        <div className={styles.country}>
                            <ReactFlagsSelect
                                countries={Object.keys(flags)}
                                customLabels={flags}
                                selected={selected}
                                onSelect={code => setSelected(code)}
                            />
                            <input className={styles.countryInput} type="tel" placeholder={"90"}/>
                            <div className={styles.arrow}></div>
                        </div>
                        <div
                            className="h-elliiki rounded  relative group block cursor-pointer border-gray-200  border-2 group-focus-within:text-purple-600 group-hover:border-anaTema-1 ">
                            <input required name="tel"
                                   className="h-11 px-4 mt-1 border-gray-200 rounded w-full transition-colors group-hover:border-anaTema-1  group-focus-within:text-purple-600 focus:fill-anaTema-1 outline-none peer text-sm pt-2"/>
                            <span
                                className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:border-b-graylight-2 peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">Telefon Numarası</span>
                        </div>


                    </div>
                    <div
                        className="h-elliiki rounded  relative group block cursor-pointer border-gray-200  border-2 group-focus-within:text-purple-600 group-hover:border-anaTema-1 ">


                        <input required name="name"
                               className="h-11 px-4 mt-1 border-gray-200 rounded w-full transition-colors group-hover:border-anaTema-1  group-focus-within:text-purple-600 focus:fill-anaTema-1 outline-none peer text-sm pt-2"/>
                        <span
                            className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:border-b-graylight-2 peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">Ad Soyad</span>

                    </div>

                    <div
                        className="h-elliiki rounded  relative group block cursor-pointer border-gray-200  border-2 group-focus-within:text-purple-600 group-hover:border-anaTema-1 ">


                        <input required name="eposta"
                               className="h-11 px-4 mt-1 border-gray-200 rounded w-full transition-colors group-hover:border-anaTema-1  group-focus-within:text-purple-600 focus:fill-anaTema-1 outline-none peer text-sm pt-2"/>
                        <span
                            className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:border-b-graylight-2 peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">E-Posta</span>

                    </div>

                    <div>
                        <input className={styles.checkBox} type="checkbox"/>
                        <div className={styles.check}></div>
                        <span className={styles.checkbox}>Getir’in bana özel kampanya, tanıtım ve fırsatlarından haberdar olmak istiyorum.</span>
                    </div>
                    <div>
                        <span className={styles.metin} data-testid="text"
                        >Kişisel verilerinize dair Aydınlatma Metni için <a className={styles.aMetni}
                            href="https://agreements.getir.com/privacy_notice_100_TR_tr_1.html"
                            target="_blank">tıklayınız</a>.

Üye olmakla, <a className={styles.aMetni} href="https://agreements.getir.com/tcs2282022_200_TR_tr_4.html" target="_blank">Kullanım Koşulları</a> hükümlerini kabul etmektesiniz.</span>
                    </div>


                </div>

            </form>
        </div>
    )
}


export default RegisterNew