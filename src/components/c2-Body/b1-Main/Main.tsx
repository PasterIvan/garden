import React from "react";
import {Picture} from "./m1-Picture/Picture";
import style from "./Main.module.css";
import {Info} from "./m2-Info/Info";
import {GardenPlan} from "./m3-GardenPlan/GardenPlan";
import {Cards} from "./m4-Cards/Cards";
import {Gardener} from "./m5-Gardener/Gardener";

export const Main = () => {
    return (
        <div className={style.main}>
           <Picture/>
            <Info/>
            {/*<GardenPlan/>*/}
            {/*<Cards/>*/}
            {/*<Gardener/>*/}
        </div>
    )
}