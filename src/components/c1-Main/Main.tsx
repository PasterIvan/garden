import React from "react";
import { Body } from "./m2-Body/Body";
import {Header} from "./m1-Header/Header";
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