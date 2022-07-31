import React from "react";
import style from "./AboutUs.module.css"
import {Gallery} from "../b1-Main/m7-Gallery/Gallery";
import aboutUs from "./img/aboutUsNew.svg"

export const AboutUs = () => {
    return (
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

                    <p>
                        Творческая резиденция <b className={style.aboutUsBodyTextGreen}>«Хутор Степной»</b> - это 46
                        га земли в экологически чистом и богатом на исторические объекты и культурные события Рамонском
                        районе Воронежской области.
                    </p>

                    <p>Резиденция работает в 4 направлениях:</p>
                    <p><b>— cпортивное.</b>
                        <br></br>Развитие и популяризация активного отдыха. Велопрогулки: разработаны 5 веломаршрутов,
                        общей протяженностью более 50 км. Каждый веломаршрут ведет к природному или историческому
                        памятнику,
                        находящемуся в окружении Хутора Степной. Построены площадки с уличными тренажерами, в т.ч. для
                        людей с ОВЗ.
                        Универсальное спортивное поле для занятий коллективными видами спорта: волейбол, футбол,
                        баскетбол.


                    </p>
                    <p><b>— cобытийное.</b>
                        <br></br>Организация и проведение массовых мероприятий и фестивалей.
                        Фестиваль Авторской песни <b className={style.aboutUsBodyTextGreen}>«Рамонский родник»</b>,
                        календарных праздников. На территории <b className={style.aboutUsBodyTextGreen}>«Хутор
                            Степной»</b> есть фестивальная поляна со сценой и живым амфитеатром.
                    </p>

                    <p><b>— культурно-познавательное.</b>
                        <br></br>Создание города мастеров, возрождение народных промыслов и культурных традиций.
                    </p>

                    <p><b>Реализация проекта <b className={style.aboutUsBodyTextGreen}>«Старый сад на новый лад»</b></b>.
                        <br></br>Создание садово-парковой зоны как места массового отдыха горожан,
                        восстановление традиций закладки общественных садов с исконно русскими сортами
                        плодово-ягодных
                        культур, популяризация приемов и способов декоративного садоводства.
                    </p>

                </div>
            </div>
            <Gallery/>
        </div>
    )
}