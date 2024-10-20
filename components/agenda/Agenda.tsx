"use client";
import Revealx from "../reveals/Revealx";
import { useTranslation } from "react-i18next";
import { useState, ChangeEvent } from "react";
import MainStage from "@/components/speakers/MainStage";
import InfluStage from "@/components/speakers/InfluStage";

export const Agenda = () => {
  const [selectedOption, setSelectedOption] = useState("mainStage");

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const { t } = useTranslation();
  return (
    <section
      className="mx-auto flex max-w-7xl flex-col items-center px-2 py-[64px] lg:py-[124px]"
      id="agenda"
    >
      <Revealx delay={0.2}>
        <h2 className="mb-[16px] text-center">{t("programComponent")}</h2>
      </Revealx>
      <Revealx delay={0.2}>
        <p className="pb-[32px] text-center">{t("tojeoc")}</p>
      </Revealx>

      <div className="mb-[32px] inline-flex" role="group">
        <label
          className={`px-4 py-2 text-sm font-medium ${
            selectedOption === "mainStage"
              ? "bg-[#F00065] text-white"
              : "border border-[#F00065] text-white hover:bg-[#F00065]"
          } `}
        >
          <input
            type="radio"
            value="mainStage"
            checked={selectedOption === "mainStage"}
            onChange={handleOptionChange}
            className="hidden"
          />
          Hlavní Stage
        </label>
        <label
          className={`px-4 py-2 text-sm font-medium ${
            selectedOption === "empty"
              ? "bg-[#F00065] text-white"
              : "border border-[#F00065] text-white hover:bg-[#F00065]"
          }`}
        >
          <input
            type="radio"
            value="empty"
            checked={selectedOption === "empty"}
            onChange={handleOptionChange}
            className="hidden"
          />
          Influ Stage
        </label>
      </div>
      {selectedOption === "mainStage" ? <MainStage /> : <InfluStage />}
    </section>
  );
};
