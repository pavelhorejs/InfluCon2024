"use client";

import { useTranslation } from "react-i18next";
import Revealx from "../reveals/Revealx";
import { use } from "react";
const Partners = () => {
  const { t } = useTranslation();
  return (
    <section className="max-w-7xl mx-auto px-2">
      <Revealx delay={0.2}>
        {" "}
        <h2 className="pb-[32px] lg:pb-[48px] text-center">
          {t("partnershdl")}
        </h2>
      </Revealx>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-20">
        <div className="flex justify-center md:justify-end items-center">
          <img width="150" src="/fajn.svg" alt="" />
        </div>
        <div className="flex justify-center md:justify-start items-center">
          {" "}
          <img width="240" src="/mam.png" alt="" />
        </div>
      </div>
    </section>
  );
};
export default Partners;
