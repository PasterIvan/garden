import React from "react";
import style from "./Gallery.module.css"
import page1 from "./img/Rectangle 7911.svg";
import page2 from "./img/Rectangle 7912.svg";
import page3 from "./img/Rectangle 7913.svg";

export const Gallery = () => {

    return (
        <div className={style.gallery}>
            <iframe width="100%" height="519px" src="https://www.youtube.com/embed/H2DkW7olpeM"
                    style={{borderRadius: "28px"}}
                    title="YouTube video player" frameBorder="0"
                   >
            </iframe>
            <div className={style.picture}>
                <img src={page1} alt=''/>
                <img src={page2} alt=''/>
                <img src={page3} alt=''/>
                <img src={page1} alt=''/>
            </div>
        </div>
    );
}