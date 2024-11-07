import React from "react";

import Map from "@/components/recording/Map";
import Zuzka from "/public/zuzka.webp";
import Niko from "/public/niko.webp";
import TerezaLaw from "/public/terezalaw.webp";

import Hejlova from "/public/hejlova.webp";
import Kotek from "/public/kotek.webp";
import Vesely from "/public/vesely.webp";

import Bubenicek from "/public/bubenicek.webp";
import Fryc from "/public/fryc.webp";
import Bartova from "/public/bartova.png";
import SD from "/public/sd.jpg";
import Jacova from "/public/jacova.webp";
import Panel from "/public/panel.webp";
import { useTranslation } from "react-i18next";

export default function InfluStageRecording() {
  const { t } = useTranslation();
  const speakers1 = [
    {
      name: "doc. PhDr. Denisa Hejlová, Ph.D.",
      position: t("hejlova.position"),
      topic: t("hejlova.tema"),
      description: t("hejlova"),
      image: Hejlova,
      link: "https://youtu.be/_H99errRqas?si=0kFP3NZYloQjEXfk",
    },
    {
      name: "Ivo Veselý",
      position: t("vesely.position"),
      topic: t("vesely.tema"),
      description: t("vesely"),
      image: Vesely,
      link: "https://youtu.be/Ic_rMFMlawA?si=IFeBY_8ssJg-gc0V",
    },
    {
      name: "Honza Kotek",
      position: "PEPPERMINT DIGITAL - CEO",
      topic: t("kotek.tema"),
      description: t("kotek"),
      image: Kotek,
      link: "https://youtu.be/9-ByHSHwUxk?si=5FUhyYzQY4QTjgBO",
    },
  ];
  const speakers2 = [
    {
      name: "Nikoloz Bolkvadze",
      position: "META - CLIENT PARTNER FOR CEE",
      topic: t("bolkvadze2.tema"),
      description: t("bolkvadze2"),
      image: Niko,
      link: "https://youtu.be/ldfwIpt9p-A?si=hlOYF0LK5wQcskJp",
    },
    {
      name: "Markéta Bartová",
      position: t("bartova.pozice"),
      topic: t("bartova.tema"),
      description: t("bartova"),
      image: Bartova,
      link: "https://youtu.be/692zNPmnDoM?si=0q6nHs57R0JWnuxp",
    },
  ];
  const speakers3 = [
    {
      name: "Martin Fryč",
      position: "WOO - OPPORTUNITY MANAGER",
      topic: t("fryc.tema"),
      description: t("fryc"),
      image: Fryc,
      link: "https://youtu.be/q-6TFmwFGwg?si=lecdpIJiy2TgRG5J",
    },
    {
      name: "Jana Jáčová",
      position: t("jacova.position"),
      topic: t("jacova.tema"),
      description: t("jacova"),
      image: Jacova,
      link: "https://youtu.be/464g4CZ_1L4?si=zkcQLhaZjuWVUhzV",
    },
    {
      name: "Adam Kajumi & Niko Bolkvadze & Tereza Law & Martin Fryč",
      position: t("panel.position"),
      topic: t("panel.tema"),
      description: t("panel"),
      image: Panel,
      link: "https://youtu.be/ADjkwRXPCyk?si=pGVtpmiWzTdQrBmB",
    },
  ];
  const speakers4 = [
    {
      name: "Tereza Law",
      position: "L'ORÉAL - ADVOCACY DIRECTOR",
      topic: t("law2.tema"),
      description: t("law2"),
      image: TerezaLaw,
      link: "https://youtu.be/VxpOPDmaSa8?si=2jS9iP4X9e6XWYq0",
    },
    {
      name: "Zuzana Bílkovská",
      position: "HEROES OF ONLINE - INFLUENCER'S QUEEN",
      topic: t("bilkovska.tema"),
      description: t("bilkovska"),
      image: Zuzka,
      link: "https://youtu.be/d1JBZjkMaOo?si=87dN1Saz1KaCy7hl",
    },
    {
      name: "Mike Bubeníček",
      position: "ETNETERA MOTION - CEO",
      topic: t("bubenicek.tema"),
      description: t("bubenicek"),
      image: Bubenicek,
      link: "https://youtu.be/peSkeqUYuf8?si=aUmYHsXvgydgmaXW",
    },
    {
      name: "Kristýna Sýkorová & Ivan Dzido",
      position: t("sd.pozice"),
      topic: t("sd.tema"),
      description: t("sd"),
      image: SD,
      link: "https://youtu.be/Ha5UuGTJ6bg?si=2u5nJAZsBHa_7AgX",
    },
  ];
  return (
    <div
      className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-4"
      id="influ"
    >
      <div className="w-full bg-[#F00065] px-[16px] py-[12px] md:px-[40px] md:pb-[64px] md:pt-[16px] lg:min-w-[900px]">
        <p className="mt-[4px] text-[16px] font-bold md:text-[24px]">
          <span className="font-bold">{t("influ.program")}</span>
        </p>
        <Map speakers={speakers1 as any} />

        <p className="mt-[4px] text-[16px] font-bold md:text-[24px]">
          <span className="font-bold">{t("workshop.program")}</span>
        </p>
        <Map speakers={speakers3 as any} />

        <p className="mt-[4px] text-[16px] font-bold md:text-[24px]">
          <span className="font-bold">{t("block3.program")}</span>
        </p>
        <Map speakers={speakers4 as any} />

        <p className="mt-[4px] text-[16px] font-bold md:text-[24px]">
          <span className="font-bold">{t("block4.program")}</span>
        </p>
        <Map speakers={speakers2 as any} />
      </div>
    </div>
  );
}
