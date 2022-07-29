import React from "react";
import {Icons} from "./Icons/Icons";
import {Text} from "./Text/Text"
import style from "./Info.module.css"

export const Info = () => {
    return (
        <div style={{width: '100%',
        backgroundColor: 'white',
            padding: "130px 0 111px 0"}}>
            <div className={style.info}>
                <Text/>
                <Icons/>
            </div>
        </div>
    )
}