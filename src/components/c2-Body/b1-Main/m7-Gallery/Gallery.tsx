import React from "react";
import style from "./Gallery.module.css"
import page1 from "./img/Rectangle 7911.svg"
import page2 from "./img/Rectangle 7912.svg"
import page3 from "./img/Rectangle 7913.svg"

export const Gallery = () => {

    return (
        <div className={style.gallery}>
            <div className={style.video}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/evSn0cGIxfs"
                        style={{borderRadius: "28px"}}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>

                </iframe>
            </div>
            <div className={style.picture}>
                <img src={page1}
                     className={style.round}/>
                <img src={page2}
                     className={style.round}/>
                <img src={page3}
                     className={style.round}/>
                <img src={page1}
                     className={style.round}/>
            </div>
        </div>
    );
}