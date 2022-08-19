import React from "react";

import { Picture } from "./m1-Picture/Picture";
import { Info } from "./m2-Info/Info";
import { GardenPlan } from "./m3-GardenPlan/GardenPlan";
import { Cards } from "./m4-Cards/Cards";
import { Gardener } from "./m5-Gardener/Gardener";
import { Festival } from "./m6-Festival/Festival";
import { Gallery } from "./m7-Gallery/Gallery";
import style from "./Main.module.css";

export const Main: React.FC = () => {
  return (
    <div className={style.main}>
      <Picture />
      <Info />
      <GardenPlan />
      <Cards />
      <Gardener />
      <Festival />
      <Gallery />
    </div>
  );
};
