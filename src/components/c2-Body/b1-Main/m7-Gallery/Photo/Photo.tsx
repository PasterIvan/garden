import React from "react";
import style from "./Photo.module.css"
import page1 from "../img/Rectangle 7911.svg"
import page2 from "../img/Rectangle 7912.svg"
import page3 from "../img/Rectangle 7913.svg"

export const Photo = () => {

    return (
        <div>
            <div className={style.picture}>
                <img src={page1}/>
                <img src={page2}/>
                <img src={page3}/>
                <img src={page1}/>
            </div>
        </div>
    );
}