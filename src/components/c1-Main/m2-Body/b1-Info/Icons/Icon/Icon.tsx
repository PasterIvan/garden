import React from "react";
import style from "./Icon.module.css"

type Icon = {
    id: number
    logo: string
    text: string
}
type Icons = {
    icons: Icon[]
}

export const Icon: React.FC<Icons> = ({icons}) => {

    return (
        <div>
            {icons.map(icon => {
                return (
                    <div key={icon.id} className={style.icon}>
                        <div>
                            <img src={icon.logo}/>
                        </div>
                        <div className={style.text}>{icon.text}</div>
                    </div>
                )
            })}
        </div>


    )
}