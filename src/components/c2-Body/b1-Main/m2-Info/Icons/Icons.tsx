import React from "react";
import {IconInfoToMain} from "./Icon/IconInfo";
import logo1 from './img/logo1.svg'
import logo2 from './img/logo2.svg'
import logo3 from './img/logo3.svg'
import logo4 from './img/logo4.svg'
import logo5 from './img/logo5.svg'
import logo6 from './img/logo6.svg'
import style from './Icons.module.css'

export const Icons = () => {

    let icons = [
            {id: 1, logo: logo1, text: 'Спортивная площадка'},
            {id: 2, logo: logo2, text: 'Веломаршруты'},
            {id: 3, logo: logo3, text: 'Кемпинг'},
            {id: 4, logo: logo4, text: 'Базы отыха, пункты проката'},
            {id: 5, logo: logo5, text: 'Фестиваль'},
            {id: 6, logo: logo6, text: 'Аренда палаток'}
        ]

    return (
        <div className={style.icons}>
            <IconInfoToMain icons={icons} />
        </div>
    )
}