import React from "react";

import { HeaderMenu } from "./h1-Menu/HeaderMenu";
import { Contacts } from "./h2-Contacts/Contacts";
import style from "./Header.module.css";

export const Header: React.FC = () => {
  return (
    <div className={style.flower}>
      <header>
        <HeaderMenu />
        <Contacts />
      </header>
    </div>
  );
};
