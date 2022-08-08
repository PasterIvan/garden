import React from "react";
import style from "./Window.module.css"

export const Window = () => {

    return (
        <div className={style.border}>
            <div className={style.body}>
                <div>1200р</div>
                <form className={style.form}>
                    <input placeholder={'Ваше имя'}/>
                    <input placeholder={'Номер вашего телефона'}/>
                    <input placeholder={'E-mail для обратной связи'}/>
                    <button>Оплатить</button>
                </form>
                <div className={style.text1}>
                    Нажимая кнопку «Отправить» вы соглашаетесь с <a href={'#'}>Политикой конфиденциальности</a>
                </div>
            </div>
            <div className={style.additional}>
                <div style={{width: "100%"}}>Саженцы/семена растений покупаются за счет средств </div>
                <div className={style.text2}>Президентский фонд культурных инициатив , вы оплачиваете латунную табличку, на которой будет написана информация о растении и Вас, как владельца посадки, а так же годовой уход за вашим растением, что составляет 1200 рублей.
                </div>
            </div>
        </div>
    );
}