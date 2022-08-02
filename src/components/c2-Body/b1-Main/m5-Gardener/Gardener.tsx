import React from "react";
import style from "./Gardener.module.css"
import {Window} from "./Window/Window";

export const Gardener = () => {

    return (
        <div className={style.gardener}>
            <div className={style.header}>
                <div className={style.title}>Годовой уход за деревом</div>
                <div className={style.text}>Растёт в кедрово-широколиственных и других хвойно-лиственных, иногда — в лиственных лесах, обычно в прогалинах, опушках, вырубках и старых гарях, чаще</div>
            </div>
            <Window/>
        </div>
    );
}