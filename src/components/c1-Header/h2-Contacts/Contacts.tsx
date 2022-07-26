import React from "react";
import phone from "./img/phone.svg";
import whatsapp from "./img/whatsapp.svg";
import telegram from "./img/telegram.svg";
import vk from "./img/vk.svg";
import fb from "./img/fb.svg";
import instagram from "./img/instagram.svg";
import style from "./Contacts.module.css"

export const Contacts = () => {
    return (
            <div className={style.contacts}>
                <img src={phone}/>
                <img src={whatsapp} />
                <img src={telegram} />
                <img src={vk} />
                <img src={fb} />
                <img src={instagram} />
            </div>
    )
}