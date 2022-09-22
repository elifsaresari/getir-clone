import React from 'react';
import './App.css';
import Index from "./Page";
import GetirYemek from "./Page/getiryemek"
import GetirBuyuk from "./Page/getirbuyuk"
import GetirSu from "./Page/getirsu"
import {Routes, Route, Link, NavLink} from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";


function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Index/>}/>
                <Route path="/getiryemek" element={<GetirYemek/>}/>
                <Route path="/getirbuyuk" element={<GetirBuyuk/>}/>
                <Route path="/getirsu" element={<GetirSu/>}/>
            </Routes>
        </>
    );

}

export default App;
