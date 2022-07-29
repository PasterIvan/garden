import React from "react";
import style from "./Gallery.module.css"
import {Photo} from "./Photo/Photo";

export const Gallery = () => {

    return (
        <div className={style.gallery}>
            <iframe width="100%" height="519px" src="https://www.youtube.com/embed/evSn0cGIxfs"
                    style={{borderRadius: "28px"}}
                    title="YouTube video player" frameBorder="0"
                   >
            </iframe>
            <Photo/>
        </div>
    );
}