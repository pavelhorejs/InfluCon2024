import React from "react";

import SpeakersMap from "@/components/speakers/SpeakersMap";
import SmallBlock from "@/components/speakers/SmallBlock";
import Zuzka from "/public/zuzka.webp";
import Who from "/public/who.webp";
import Niko from "/public/niko.webp";
import TerezaLaw from "/public/terezalaw.webp";

import Hejlova from "/public/hejlova.webp";
import Kotek from "/public/kotek.webp";
import Vesely from "/public/vesely.webp";

import Bubenicek from "/public/bubenicek.webp";
import Fryc from "/public/fryc.webp";
import Vojtech from "/public/vojtech.webp";

import Jacova from "/public/jacova.webp";
import Panel from "/public/panel.webp";
import { useTranslation } from "react-i18next";

export default function MainStage() {
  const { t } = useTranslation();
  const speakers1 = [
    {
      name: "doc. PhDr. Denisa Hejlová, Ph.D.",
      position: t("hejlova.position"),
      topic: t("hejlova.tema"),
      description: t("hejlova"),
      image: Hejlova,
    },
    {
      name: "Ivo Veselý",
      position: t("vesely.position"),
      topic: t("vesely.tema"),
      description: t("vesely"),
      image: Vesely,
    },
    {
      name: "Honza Kotek",
      position: "PEPPERMINT DIGITAL - CEO",
      topic: t("kotek.tema"),
      description: t("kotek"),
      image: Kotek,
    },
  ];
  const speakers2 = [
    {
      name: "Nikoloz Bolkvadze",
      position: "META - CLIENT PARTNER FOR CEE",
      topic: t("bolkvadze2.tema"),
      description: t("bolkvadze2"),
      image: Niko,
    },
    {
      name: "Daniel Vojtěch",
      position: "CONTENT CREATOR",
      topic: t("vojtech.tema"),
      description: t("vojtech"),
      image: Vojtech,
    },
  ];
  const speakers3 = [
    {
      name: "Martin Fryč",
      position: "WOO - OPPORTUNITY MANAGER",
      topic: t("fryc.tema"),
      description: t("fryc"),
      image: Fryc,
    },
    {
      name: "Jana Jáčová",
      position: t("jacova.position"),
      topic: t("jacova.tema"),
      description: t("jacova"),
      image: Jacova,
    },
    {
      name: "Martin Fryč & Tereza Law & Anna Kadeřávková",
      position: t("panel.position"),
      topic: t("panel.tema"),
      description: t("panel"),
      image: Panel,
    },
  ];
  const speakers4 = [
    {
      name: "Tereza Law",
      position: "L'ORÉAL - ADVOCACY DIRECTOR",
      topic: t("law2.tema"),
      description: t("law2"),
      image: TerezaLaw,
    },
    {
      name: "Zuzana Bílkovská",
      position: "HEROES OF ONLINE - INFLUENCER'S QUEEN",
      topic: t("bilkovska.tema"),
      description: t("bilkovska"),
      image: Zuzka,
    },
    {
      name: "Mike Bubeníček",
      position: "ETNETERA MOTION - CEO",
      topic: t("bubenicek.tema"),
      description: t("bubenicek"),
      image: Bubenicek,
    },
  ];
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-4">
      <SmallBlock time="9:00 - 10:00" topic={t("welcome.cofee")} />

      <div className="w-full bg-[#F00065] px-[16px] py-[12px] md:px-[40px] md:pb-[64px] md:pt-[16px] lg:min-w-[900px]">
        <div className="flex gap-x-[32px] md:flex-row">
          <p className="text-[16px] font-bold md:text-[24px]">10:00 - 12:10</p>
          <p>|</p>
          <p className="text-[16px] md:text-[24px]">{t("block1")}</p>
        </div>
        <div className="w-full border-t border-white pb-[8px] md:pb-0" />
        <p className="mt-[4px] text-[16px] font-bold md:text-[24px]">
          <span className="font-bold">{t("influ.program")}</span>
        </p>
        <SpeakersMap speakers={speakers1 as any} />

        <p className="mt-[4px] text-[24px]">
          <span className="font-bold">{t("workshop.program")}</span>
        </p>
        <SpeakersMap speakers={speakers3 as any} />
      </div>

      <SmallBlock time="12:10 - 13:10" topic={t("lunch")} />

      <div className="w-full bg-[#F00065] px-[16px] py-[12px] md:px-[40px] md:pb-[64px] md:pt-[16px]">
        <div className="flex items-center gap-x-[32px]">
          <p className="text-[16px] font-bold md:text-[24px]">13:10 - 15:10</p>
          <p className="text-[24px]">|</p>
          <p className="text-[16px] md:text-[24px]">{t("block3")}</p>
        </div>
        <div className="w-full border-t border-white pb-[8px] md:pb-0" />
        <p className="mt-[4px] text-[16px] font-bold md:text-[24px]">
          <span className="font-bold">{t("block3.program")}</span>
        </p>
        <SpeakersMap speakers={speakers4 as any} />

        <p className="mt-[4px] text-[16px] font-bold md:text-[24px]">
          <span className="font-bold">{t("block4.program")}</span>
        </p>
        <SpeakersMap speakers={speakers2 as any} />
      </div>
    </div>
  );
}
