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
                <img src={phone} alt=''/>
                <img src={whatsapp} alt=''/>
                <img src={telegram} alt=''/>
                <img src={vk} alt=''/>
                <img src={fb} alt=''/>
                <img src={instagram} alt=''/>
            </div>
    )
}