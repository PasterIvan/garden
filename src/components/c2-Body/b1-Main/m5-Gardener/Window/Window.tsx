import React from "react";
import InputText from "../../../../../common/InputText/InputText";
import Button from "../../../../../common/Button/Button";
import style from "./Window.module.css"

export const Window = () => {

    return (
        <div className={style.border}>
            <div className={style.body}>
                <div>1200р</div>
                <form className={style.form}>
                    <InputText placeholder={'Ваше имя'}/>
                    <InputText placeholder={'Номер вашего телефона'}/>
                    <InputText placeholder={'E-mail для обратной связи'}/>
                    <Button>Оплатить</Button>
                </form>
                <div className={style.text1}>
                    Нажимая кнопку «Отправить» вы соглашаетесь с <a href={'#'} color={'#FFFFFF'}>Политикой конфиденциальности</a>
                </div>
            </div>
            <div className={style.additional}>
                <div>Саженцы/семена растений покупаются за счет средств </div>
                <div className={style.text2}>Президентский фонд культурных инициатив , вы оплачиваете латунную табличку, на которой будет написана информация о растении и Вас, как владельца посадки, а так же годовой уход за вашим растением, что составляет 1200 рублей.
                </div>
            </div>
        </div>
    );
}