import React from "react";

import style from "./Icon.module.css";

type IconInfo = {
  id: number;
  logo: string;
  text: string;
};
type IconsInfo = {
  icons: IconInfo[];
};

export const IconInfoToMain: React.FC<IconsInfo> = ({ icons }) => {
  return (
    <>
      {icons.map((icon) => {
        return (
          <div key={icon.id} className={style.icon}>
            <img src={icon.logo} alt="" />
            <div className={style.text}>{icon.text}</div>
          </div>
        );
      })}
    </>
  );
};
