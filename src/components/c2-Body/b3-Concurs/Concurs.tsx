import React from "react";
import style from "./Concurs.module.css";
import aboutConcurs from "./img/aboutConcurs.svg";
import page1 from "../b1-Main/m7-Gallery/img/Rectangle 7911.svg";
import page2 from "../b1-Main/m7-Gallery/img/Rectangle 7912.svg";
import page3 from "../b1-Main/m7-Gallery/img/Rectangle 7913.svg";
import {HeaderBlock} from "../../common/HeaderBlock";

export const Concurs = () => {
    return (
        <div className={style.aboutConcurs}>
            <HeaderBlock title={'КОНКУРС'}
                         text={'Ознакомьтесь с работами финалистов'}/>
            <div className={style.aboutConcursBody}>

                <div className={style.aboutConcursBodyPicture}>
                    <img src={aboutConcurs} alt=''/>
                </div>

                <div className={style.aboutConcursBodyText}>
                    <p>Всего в 40 км от Воронежа раскинулось скрытое от многих глаз волшебное место.</p>

                    <p>Место, которое должно стать притягивающим магнитом для любителей тихого отдыха на природе,
                        активных видов спорта, приверженцев здорового образа жизни, и любителей песни под гитару у
                        костра.</p>

                    <p>40 лет назад последний житель Хутора Степной его покинул. Но память земли жива, и среди
                        остовов старых деревенских домов и погребов растет и плодоносит Старый сад.
                        Наша задача возродить Старый сад на новый лад.</p>

                    <p>Мы приглашаем всех желающих принять участие в КОНКУРСЕ ландшафтного дизайна и стать родителем
                        и основателем уникального сенсорного сада на Хуторе Степном.</p>

                    <p>От тебя и твоей команды мы ждем интересные работы, творческий взгляд на имеющие насаждения,
                        строгие рамки ТЗ.
                        Победитель совместно с командой проекта и волнтерами примет участие в реализации проекта.
                        Получит премию — 50 000 рублей. Всех финалистов жду поощрительные призы.
                    </p>
                </div>
                <iframe width="100%" height="519px" src="https://www.youtube.com/embed/AMy9lDbXEK8"
                        style={{borderRadius: "28px", margin: "0 auto"}}
                        title="YouTube video player" frameBorder="0"
                >
                </iframe>

            </div>
            <div className={style.aboutConcursGallery}>
                <img src={page1} alt=''/>
                <img src={page2} alt=''/>
                <img src={page3} alt=''/>
                <img src={page1} alt=''/>
                <img src={page2} alt=''/>
                <img src={page3} alt=''/>
                <img src={page1} alt=''/>
                <img src={page2} alt=''/>
                <img src={page3} alt=''/>
                <img src={page1} alt=''/>
                <img src={page2} alt=''/>
                <img src={page3} alt=''/>
            </div>
        </div>
    )
}