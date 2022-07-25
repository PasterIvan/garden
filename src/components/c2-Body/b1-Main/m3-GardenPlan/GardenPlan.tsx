import React from "react";
import style from "./GardenPlan.module.css"

export const GardenPlan = () => {
    return (
        <div className={style.plan}>
            <div className={style.header}>
                <div className={style.title}>
                    ПЛАН САДА
                </div>
                <div className={style.text}>
                    Парк разделен на 2 зоны : открытую, для активного отдыха и закрытую в тени садовых деревьев.
                </div>
            </div>
        </div>
    );
}
