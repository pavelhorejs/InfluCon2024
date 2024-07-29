"use client";

import { useTranslation } from "react-i18next";
import Revealx from "../reveals/Revealx";
const Zastita = () => {
  const { t } = useTranslation();
  return (
    <section className="max-w-7xl mx-auto px-2">
      <Revealx delay={0.3}>
        {" "}
        <h2 className="text-center">{t("zastita")}</h2>
      </Revealx>
      <div className="grid grid-cols-2 gap-y-5 lg:gap-y-20 gap-x-1 lg:gap-x-20">
        <div className="flex justify-center md:justify-end items-center">
          {" "}
          <Revealx delay={0.6}>
            {" "}
            <img className="w-[100px] lg:w-[270px]" src="/aka.svg" alt="" />
          </Revealx>
        </div>
        <div className="flex justify-center md:justify-start items-center">
          {" "}
          <Revealx delay={0.6}>
            {" "}
            <img
              className="w-[100px] lg:w-[270px]"
              src="/ferfluencer.png"
              alt=""
            />
          </Revealx>
        </div>
      </div>
    </section>
  );
};
export default Zastita;
