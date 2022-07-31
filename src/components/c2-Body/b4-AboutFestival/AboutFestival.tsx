import React from "react";
import style from "./AboutFestival.module.css";

export const AboutFestival = () => {
    return (
        <div className={style.aboutFestival}>
            <div className={style.aboutFestivalHeader}>
                <div className={style.aboutFestivalHeaderTitle}>О ФЕСТИВАЛЕ</div>
                <div className={style.aboutFestivalHeaderText}>Узнайте про фестиваль подробнее</div>
            </div>
            <div className={style.aboutFestivalVideo}>
                <iframe width="100%" height="519px" src="https://www.youtube.com/embed/evSn0cGIxfs"
                        title="YouTube video player" frameBorder="0"
                >
                </iframe>
            </div>
            <div className={style.aboutFestivalBody}>
                <div className={style.aboutFestivalBodyText}>
                    <p>
                        <b className={style.aboutFestivalBodyTextGreen}>Рамонский Родник</b> существует с 2003 года. За
                        это
                        время мы прошли долгий путь. На данный момент «Рамонский Родник» – это фестиваль, в центре
                        которого
                        художественное слово и смысл. Его главная задача – создавать пространство, где бережно хранятся
                        классические традиции авторской песни в самом широком понимании, как культурно-социального
                        явления,
                        – и где эти традиции продолжаются современными авторами, работающими в самых разных жанрах.
                        Здесь
                        авторы, исполнители, музыканты, организаторы мероприятий из разных городов и стран встречаются,
                        обмениваются опытом, слушают и слышат друг друга.
                    </p>
                    <p>
                        На фестивале работают <b>три сцены.</b>
                    </p>
                    <p>
                        Сцена <b className={style.aboutFestivalBodyTextGreen}>«Исток»</b> посвящена творчеству людей,
                        создававших песенно-поэтическую среду, в которой росли и формировались современные авторы. С
                        этой
                        сцены можно услышать песни как Булата Окуджавы, Александра Галича, Юрия Визбора, так и Бориса
                        Гребенщикова, Александра Башлачева, Егора Летова – всех, чьи имена стали вехами в истории
                        авторской
                        песни.
                    </p>
                    <p>
                        Основной репертуар сцены – программные мероприятия: знакомство не только с творчеством, но и с
                        биографией и личностью знаковых авторов, сборные тематические концерты. Здесь же проводится
                        Детский
                        конкурс. Именно эта сцена призвана хранить традиции мира КСП не столько в жанровом отношении,
                        сколько в плане восприятия и осмысления окружающей жизни через художественное слово.
                    </p>
                    <p>
                        Сцена <b className={style.aboutFestivalBodyTextGreen}>«Водопад»</b> – место, где «бьется нерв»
                        настоящего времени. Здесь выступают молодые современные авторы в широчайшем диапазоне жанров,
                        стилей
                        и направлений. Именно здесь можно познакомиться с новаторскими подходами к поэзии и музыке,
                        узнать
                        новые имена, приобщиться к творческому осмыслению остросоциальных вопросов и, конечно, пополнить
                        свой список любимых авторов.
                    </p>
                    <p>
                        <b className={style.aboutFestivalBodyTextGreen}>Главная сцена</b>, как следует из ее названия,
                        предназначена для ключевых мероприятий. Здесь проводится сборный концерт открытия, проходят
                        сольные
                        концерты почетных гостей. Здесь же состоится самое важное и волнующее событие – конкурсный
                        концерт,
                        смысловое ядро «Рамонского Родника», выполняющее нашу фундаментальную задачу: стимулировать
                        творческий рост и развитие талантливых авторов/исполнителей, дать им обратную связь и
                        возможность
                        освоиться в мире современной авторской песни.
                    </p>
                    <p>
                        И конечно, здесь же происходит награждение по итогам детского конкурса, а также заключительный
                        концерт и церемония награждения финалистов конкурса фестиваля «Рамонский Родник».
                    </p>
                </div>
            </div>

        </div>
    )
}