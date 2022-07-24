import React from "react";
import {Icons} from "./Icons/Icons";
import {Text} from "./Text/Text"
import style from "./Info.module.css"

export const Info = () => {
    return (
        <div className={style.info}>
            <Text/>
            <Icons/>
        </div>
    )
}