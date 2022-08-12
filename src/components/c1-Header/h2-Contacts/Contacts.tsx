import React from "react";
import phone from "./img/phone.svg";
import whatsapp from "./img/whatsapp.svg";
import telegram from "./img/telegram.svg";
import vk from "./img/vk.svg";
import fb from "./img/fb.svg";
import style from "./Contacts.module.css"

export const Contacts = () => {
    return (
            <div className={style.contacts}>
                <img src={phone} alt=''/>
                <img src={whatsapp} alt=''/>
                <img src={telegram} alt=''/>
                <a href={'https://vk.com/chistya_tropa'} target="blank"><img src={vk} alt=''/></a>
                <a href={'https://www.facebook.com/groups/3073725332841329'} target="blank"><img src={fb} alt=''/></a>
            </div>
    )
}