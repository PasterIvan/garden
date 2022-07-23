import {Footer} from "./g3-Footer/Footer";
import React from "react";
import {Route, Routes} from "react-router-dom";
import {AboutUs} from "../components/c2-AboutUs/AboutUs";
import {Concurs} from "../components/c3-Concurs/Concurs";
import {AboutFestival} from "../components/c4-AboutFestival/AboutFestival";
import {MenuWithLogo} from "./g1-Menu/MenuWithLogo";

export const General = () => {
    return (
        <>
            <MenuWithLogo/>
            <Routes>
                <Route path='/about_us' element={<AboutUs/>}/>
                <Route path='/concurs' element={<Concurs/>}/>
                <Route path='/about_festival' element={<AboutFestival/>}/>
            </Routes>
            <Footer/>
        </>
    )
}