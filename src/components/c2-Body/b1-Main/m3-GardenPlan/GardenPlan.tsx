import React from "react";
import style from "./GardenPlan.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../store/store";
import {changeThemeAC} from "../../../../bll/zonesReducer";
import SuperRadio from "./Radio/SuperRadio";
import plan from "./img/planNew.svg"
import {themes, zones, ZonesType} from "../../../../store/state";


export const GardenPlan = () => {

    const theme = useSelector<AppStoreType, string>(state => state.theme.startTheme);

    const dispatch = useDispatch()

    const onChangeCallback = (zone: ZonesType) => {
        dispatch(changeThemeAC(zone))
    }

    const zoneTexts = zones.filter(z => z.idZone === theme)[0]

    return (
        <div className={style.plan}>
            <div className={style.column}>
                <div style={{
                    width: '100%',
                    display: "flex",
                    flexDirection: 'column',
                    justifyContent: "space-between",
                    marginRight: "24px",
                    padding: "24px 0"
                }}>
                    <div className={style.header}>
                        <div className={style.headerTitle}>
                            ПЛАН САДА
                        </div>
                        <div className={style.headerText}>
                            Парк разделен на 2 зоны : открытую, для активного отдыха и закрытую в тени садовых деревьев.
                        </div>
                    </div>
                    <div className={style.buttons}>

                    <span className={style['buttons-' + theme]}>
                        <SuperRadio
                            className={style['button-' + theme]}
                            options={themes}
                            value={theme}
                            onChangeOption={onChangeCallback}
                        />
                    </span>

                        <div className={style['buttonsInfo-' + theme]}>
                            {zoneTexts.textButton}
                        </div>
                    </div>
                </div>
                <div className={style['planBody-' + theme]}>
                    <div className={style.planBodyInfo}>
                        <div className={style.planBodyTitle}>{zoneTexts.title}</div>
                        <div className={style.planBodyText}>{zoneTexts.text}</div>
                    </div>
                </div>
            </div>
            <div className={style.picture}>
                <img src= {plan} />
            </div>
        </div>
    );
}
