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
import VE from "/public/ve.webp";
import Map from "@/components/recording/Map";
import DK from "/public/dk.webp";
import HP from "/public/hp.webp";
import Link from "next/link";

export default function MainStageRecording() {
  const { t } = useTranslation();

  const speakers1 = [
    {
      name: "Petr Srna",
      position: "WOO - CEO",
      topic: t("topic.petr"),
      description: t("description.petr"),
      image: Petr,
      link: "https://youtu.be/mXL1xwQKt5g?si=3vAU25J-0IUob6tj",
    },
    {
      name: "Adam Rajnoha",
      position: "YORD - CEO",
      topic: t("topic.adam"),
      description: t("description.adam"),
      image: Adam,
      link: "https://youtu.be/FAUgraV9ei4?si=oRasRoMnzDlI41QQ",
    },
    {
      name: "Hana Kloučková",
      position: "CONFESS - CEO",
      topic: t("topic.hana"),
      description: t("description.hana"),
      image: Hana,
      link: "https://youtu.be/-99frzks2Mw?si=T2PocqK8uwxwn3uJ",
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
      link: "https://youtu.be/YYzdCJzd7dA?si=x65Gt5cjbOUEWoGI",
    },
    {
      name: "Lukáš Kratochvíl",
      position: "TESCO - LEADER OF DIGITAL CAMPAIGNS",
      topic: t("topic.lukas"),
      description: t("description.lukas"),
      image: Lukas,
      link: "https://youtu.be/bJiGA-dr6Ng?si=0wPVQdAWoeJOv2oY",
    },
    {
      name: "Victoria Pearce & Eva Van Elst",
      position:
        "C&A - INFLUENCER MARKETING MANAGER & LEAD BRAND AND FASHION PR EUROPE",
      topic: t("topic.viktorie"),
      description: t("description.viktorie"),
      image: VE,
      link: "https://youtu.be/MDOiiT-EpEw?si=Zcdf71d2YXiAEiah",
    },
    {
      name: "Barbora Sulovská",
      position: "NESTLÉ - BRAND MANAGER CHOCOLATE BARS",
      topic: t("topic.barbora"),
      description: t("description.barbora"),
      image: Barbora,
      link: "https://youtu.be/XEzPA1rUGyI?si=kaZnTfOfKKkOoeh3",
    },
    {
      name: "Denisa Žideková",
      position: "P&G - SR. BRAND MANAGER",
      topic: t("topic.denisa"),
      description: t("description.denisa"),
      image: Denisa,
      link: "https://youtu.be/80PpZlNHQFU?si=PSgaCwGtiukgK-Lg",
    },
  ];

  const speakers3 = [
    {
      name: "Nikoloz Bolkvadze",
      position: "META - CLIENT PARTNER FOR CEE",
      topic: t("topic.niko"),
      description: t("description.niko"),
      image: Niko,
      link: "https://youtu.be/eVjY2b-0IWk?si=iaiu-CnCMD3pDPzu",
    },
    {
      name: "Tomáš Hodboď & Dominik Peroutka",
      position: "TV NOVA - HEAD OF SOCIAL MEDIA & INFLUENCER MARKETING MANAGER",
      topic: t("topic.td"),
      description: t("description.td"),
      image: HP,
      link: "https://youtu.be/I4aLeZrczjo?si=7OPtNua_W9OJCdah",
    },
  ];
  const speakers4 = [
    {
      name: "Anna Kadeřávková",
      position: t("anna.profese"),
      topic: t("topic.anna"),
      description: t("description.anna"),
      image: Anna,
      link: "https://youtu.be/G_csDMUZtcI?si=H2GJrxh1SKXijIMQ",
    },
    {
      name: "Josef Dostál & Jan Koukal",
      position: t("kanista"),
      topic: t("topic.dk"),
      description: t("description.dk"),
      image: DK,
      link: "https://youtu.be/5ZQLEp5ngt8?si=daZkiV01_34myHLw",
    },
  ];

  return (
    <div>
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-4 lg:min-w-[900px]">
        <div className="w-full bg-[#F00065] px-[16px] py-[12px] md:px-[40px] md:pb-[64px] md:pt-[16px]">
          <p className="text-[16px] font-bold md:text-[24px]">
            {t("block1-2")}
          </p>
          <Map speakers={speakers1 as any} />

          <p className="mt-[4px] text-[16px] font-bold md:text-[24px]">
            {t("block2")}
          </p>
          <Map speakers={speakers2 as any} />

          <p className="mt-[4px] text-[16px] font-bold md:text-[24px]">
            {t("block3-4")}
          </p>
          <Map speakers={speakers3 as any} />

          <p className="mt-[4px] text-[16px] font-bold md:text-[24px]">
            {t("block4")}
          </p>

          <Map speakers={speakers4 as any} />
          <Link href="https://youtu.be/KZZ9WGUapJA?si=evSxmYNkweOq4Red">
            <div className="mt-[40px] bg-black bg-opacity-20 px-[16px] py-[16px] hover:opacity-80">
              <p className="mt-[4px] text-[16px] font-bold md:text-[24px]">
                {t("block5")}
              </p>
              <p className="text-[19px]">14:35 - 15:20</p>
              <p>
                <span className="font-bold">{t("panellast.moderator")}:</span>{" "}
                Tigran Hovakimyan a Petr Srna{" "}
              </p>
              <p>
                <span className="font-bold"> {t("panellast.guests")}:</span>{" "}
                Hana Kloučková, Anna Kadeřávková, Jan Los{" "}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
