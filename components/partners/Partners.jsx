"use client";

import { useTranslation } from "react-i18next";
import Revealx from "../reveals/Revealx";
import { use } from "react";
const Partners = () => {
  const { t } = useTranslation();
  return (
    <section className="max-w-7xl mx-auto px-2">
      <Revealx delay={0.3}>
        {" "}
        <h2 className="pb-[32px] lg:pb-[48px] text-center">
          {t("partnershdl")}
        </h2>
      </Revealx>
      <div className="grid grid-cols-3 gap-y-5 lg:gap-y-20 gap-x-1 lg:gap-x-20">
        <div className="flex justify-center md:justify-center items-center">
          {" "}
          <Revealx delay={0.6}>
            {" "}
            <img className="w-[100px] lg:w-[270px]" src="/nova.png" alt="" />
          </Revealx>
        </div>
        <div className="flex justify-center md:justify-center items-center">
          <Revealx delay={0.4}>
            {" "}
            <img className="w-[100px] lg:w-[240px]" src="/fajn.svg" alt="" />
          </Revealx>
        </div>
        <div className="flex justify-center md:justify-center items-center">
          {" "}
          <Revealx delay={0.6}>
            {" "}
            <img className="w-[100px] lg:w-[340px]" src="/mam.png" alt="" />
          </Revealx>
        </div>
      </div>
    </section>
  );
};
export default Partners;
