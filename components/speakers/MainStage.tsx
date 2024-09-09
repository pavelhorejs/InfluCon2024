import React from "react";
import { useTranslation } from "react-i18next";
import Petr from "/public/petr.webp";
import Hana from "/public/hana.webp";
import Adam from "/public/adam2.webp";
import Barbora from "/public/barobora.webp";
import Denisa from "/public/denisa.webp";
import JT from "/public/jt.webp";
import Lukas from "/public/lukas.webp";
import Anna from "/public/anna.webp";
import Niko from "/public/niko.webp";
import SmallBlock from "@/components/speakers/SmallBlock";
import VE from "/public/ve.webp";
import SpeakersMap from "@/components/speakers/SpeakersMap";
import DK from "/public/dk.webp";
import HP from "/public/hp.webp";

export default function MainStage() {
  const { t } = useTranslation();

  const speakers1 = [
    {
      name: "Petr Srna",
      position: "WOO - CEO",
      topic: t("topic.petr"),
      description: t("description.petr"),
      image: Petr,
    },
    {
      name: "Adam Rajnoha",
      position: "YORD - CEO",
      topic: t("topic.adam"),
      description: t("description.adam"),
      image: Adam,
    },
    {
      name: "Hana Kloučková",
      position: "CONFESS - CEO",
      topic: t("topic.hana"),
      description: t("description.hana"),
      image: Hana,
    },
  ];
  const speakers2 = [
    {
      name: "Tereza Law & Jan Los",
      position:
        "L'ORÉAL - Advocacy Director & Chief Marketing and Digital Officer",
      topic: t("topic.tj"),
      description: t("description.tj"),
      image: JT,
    },
    {
      name: "Lukáš Kratochvíl",
      position: "TESCO - LEADER OF DIGITAL CAMPAIGNS",
      topic: t("topic.lukas"),
      description: t("description.lukas"),
      image: Lukas,
    },
    {
      name: "Victoria Pierce & Eve Van Elst",
      position:
        "C&A - INFLUENCER MARKETING MANAGER & LEAD BRAND AND FASHION PR EUROPE",
      topic: t("topic.viktorie"),
      description: t("description.viktorie"),
      image: VE,
    },
    {
      name: "Barbora Sulovská",
      position: "NESTLÉ - BRAND MANAGER CHOCOLATE BARS",
      topic: t("topic.barbora"),
      description: t("description.barbora"),
      image: Barbora,
    },
    {
      name: "Denisa Žideková",
      position: "P&G - SR. BRAND MANAGER",
      topic: t("topic.denisa"),
      description: t("description.denisa"),
      image: Denisa,
    },
  ];

  const speakers3 = [
    {
      name: "Nikoloz Bolkvadze",
      position: "META - CLIENT PARTNER FOR CEE",
      topic: t("topic.niko"),
      description: t("description.niko"),
      image: Niko,
    },
    {
      name: "Tomáš Hodboď & Dominik Peroutka",
      position: "TV NOVA - HEAD OF SOCIAL MEDIA & INFLUENCER MARKETING MANAGER",
      topic: t("topic.td"),
      description: t("description.td"),
      image: HP,
    },
  ];
  const speakers4 = [
    {
      name: "Josef Dostál & Jan Koukal",
      position: t("kanista"),
      topic: t("topic.dk"),
      description: t("description.dk"),
      image: DK,
    },
    {
      name: "Anna Kadeřávková",
      position: t("anna.profese"),
      topic: t("topic.anna"),
      description: t("description.anna"),
      image: Anna,
    },
  ];

  return (
    <div>
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-4 lg:min-w-[900px]">
        <SmallBlock time="9:00 - 10:00" topic={t("welcome.cofee")} />
        <div className="w-full bg-[#F00065] px-[16px] py-[12px] md:px-[40px] md:pb-[64px] md:pt-[16px]">
          <div className="flex items-center gap-x-[32px]">
            <p className="text-[16px] font-bold md:text-[24px]">
              10:00 - 12:10
            </p>
            <p>|</p>
            <p className="text-[16px] md:text-[24px]">{t("block1")}</p>
          </div>
          <div className="w-full border-t border-white pb-[8px] md:pb-0" />
          <p className="text-[16px] font-bold md:text-[24px]">
            {t("block1-2")}
          </p>
          <SpeakersMap speakers={speakers1 as any} />

          <p className="mt-[4px] text-[16px] font-bold md:text-[24px]">
            {t("block2")}
          </p>
          <SpeakersMap speakers={speakers2 as any} />
        </div>

        <SmallBlock time="12:10 - 13:10" topic={t("lunch")} />

        <div className="w-full bg-[#F00065] px-[16px] py-[12px] md:px-[40px] md:pb-[64px] md:pt-[16px]">
          <div className="flex items-center gap-x-[32px]">
            <p className="text-[16px] font-bold md:text-[24px]">
              13:10 - 15:10
            </p>
            <p>|</p>
            <p className="text-[16px] md:text-[24px]">{t("block3")}</p>
          </div>
          <div className="w-full border-t border-white pb-[8px] md:pb-0" />
          <p className="mt-[4px] text-[16px] font-bold md:text-[24px]">
            {t("block3-4")}
          </p>
          <SpeakersMap speakers={speakers3 as any} />

          <p className="mt-[4px] text-[16px] font-bold md:text-[24px]">
            {t("block4")}
          </p>
          <SpeakersMap speakers={speakers4 as any} />
        </div>
      </div>
    </div>
  );
}
