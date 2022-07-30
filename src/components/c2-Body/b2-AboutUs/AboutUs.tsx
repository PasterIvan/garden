import React from "react";
import style from "./AboutUs.module.css"
import {Gallery} from "../b1-Main/m7-Gallery/Gallery";
import aboutUs from "./img/aboutUsNew.svg"

export const AboutUs = () => {
    return (
        <>
            <div className={style.aboutUs}>
                <div className={style.aboutUsHeader}>
                    <div className={style.aboutUsHeaderTitle}>О НАС</div>
                    <div className={style.aboutUsHeaderText}>Узнайте про нас подробнее</div>
                </div>
                <div className={style.aboutUsBody}>

                    <div className={style.aboutUsBodyPicture}>
                        <img src={aboutUs}/>
                    </div>

                    <div className={style.aboutUsBodyText}>
                        <p><b className={style.aboutUsBodyTextGreen}>Рамонский Родник</b> существует с 2003 года. За это время мы прошли
                            долгий путь. На данный момент «Рамонский Родник» – это фестиваль, в центре которого художественное
                            слово и смысл. Его главная задача – создавать пространство, где бережно хранятся классические
                            традиции авторской песни в самом широком понимании, как культурно-социального явления, – и где эти традиции
                            продолжаются современными авторами, работающими в самых разных жанрах. Здесь авторы, исполнители,
                            музыканты, организаторы мероприятий из разных городов и стран встречаются, обмениваются опытом, слушают
                            и слышат друг друга.</p>

                        <p>На фестивале работают <b>три сцены.</b></p>

                        <p>Сцена <b className={style.aboutUsBodyTextGreen}>«Исток»</b> посвящена творчеству людей, создававших песенно-поэтическую среду, в которой
                            росли и формировались современные авторы. С этой сцены можно услышать песни как Булата Окуджавы,
                            Александра Галича, Юрия Визбора, так и Бориса Гребенщикова, Александра Башлачева, Егора Летова – всех,
                            чьи имена стали вехами в истории авторской песни.</p>

                        <p>Основной репертуар сцены – программные мероприятия: знакомство не только с творчеством, но и
                            с биографией и личностью знаковых авторов, сборные тематические концерты. Здесь же проводится
                            Детский конкурс. Именно эта сцена призвана хранить традиции мира КСП не столько в жанровом
                            отношении, сколько в плане восприятия и осмысления окружающей жизни через художественное слово.</p>
                    </div>
                </div>
                <Gallery/>
            </div>
        </>
    )
}