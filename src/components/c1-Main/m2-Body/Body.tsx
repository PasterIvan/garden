import React from "react";
import {Info} from "./b1-Info/Info";
import style from "./Body.module.css"
import {GardenPlan} from "./b2-GardenPlan/GardenPlan";
import {Cards} from "./b3-Cards/Cards";
import {Gardener} from "./b4-Gardener/Gardener";

export const Body = () => {
    return (
        <div className={style.body}>
            <Info/>
            <GardenPlan/>
            <Cards/>
            <Gardener/>
        </div>
    )
}