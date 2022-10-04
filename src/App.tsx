import "./App.css"
import React from 'react';
import Index from "./Page/Getir";
import GetirYemek from "./Page/GetirYemek/getirYemek"
import GetirBuyuk from "./Page/GetirBuyuk/getirBuyuk";
import GetirSu from "./Page/GetirSu/getirSu"
import {Routes, Route, Link, NavLink} from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";


function App() {
    return (
        <div className='app'>
            <Navbar/>
            <div className='anaMain'>
                <Routes>

                    <Route path="/" element={<Index/>}/>
                    <Route path="/getiryemek" element={<GetirYemek/>}/>
                    <Route path="/getirbuyuk" element={<GetirBuyuk/>}/>
                    <Route path="/getirsu" element={<GetirSu/>}/>

                </Routes>
            </div>
            <Footer/>
        </div>
    );

}

export default App;
