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
                    <InputText/>
                    <InputText/>
                    <InputText/>
                    <Button>Оплатить</Button>
                </form>
                <div className={style.text1}>
                    Нажимая кнопку «Отправить» вы соглашаетесь с Политикой конфиденциальности
                </div>
            </div>
            <div className={style.additional}>
                <div>Заказать садовника</div>
                <div className={style.text2}>Растёт в кедрово-широколиственных и других хвойно-лиственных, иногда — в лиственных лесах, обычно в
                    прогалинах, опушках, вырубках и старых гарях, чаще
                </div>
            </div>
        </div>
    );
}