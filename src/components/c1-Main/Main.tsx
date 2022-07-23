import React from "react";
import { Body } from "./Body/Body";
import {Header} from "./Header/Header";
import {Footer} from "../../general/g3-Footer/Footer";

export const Main = () => {
    return (
        <div>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}