"use client";

import { useTranslation } from "react-i18next";
import Revealx from "../reveals/Revealx";
import Image from "next/image";
import Link from "next/link";

const partners = [
  {
    href: "https://www.woo.cz/",
    src: "/woo.svg",
    width: 130,
    height: 130,
    alt: "woo logo",
  },
  {
    href: "https://www.heroesofonline.cz",
    src: "/hoo.svg",
    width: 130,
    height: 130,
    alt: "hoo logo",
  },
  {
    href: "https://www.loreal.com/cs-cz/czech-republic/",
    src: "/Loreal.svg",
    width: 130,
    height: 130,
    alt: "loreal logo",
  },
  {
    href: "https://www.vonage.com/",
    src: "/vonage.svg",
    width: 190,
    height: 170,
    alt: "vonage logo",
  },
  {
    href: "https://www.clovekvtisni.cz/",
    src: "/clovek.svg",
    width: 170,
    height: 170,
    alt: "vonage logo",
  },
  {
    href: "https://www.trendyol.com/",
    src: "/trendyol.svg",
    width: 170,
    height: 170,
    alt: "vonage logo",
  },
  {
    href: "https://www.buzzsneakers.cz/",
    src: "/Buzz_bila.png",
    width: 170,
    height: 170,
    alt: "buzz logo",
  },
  {
    href: "https://ecomail.cz/",
    src: "/ecomail.png",
    width: 170,
    height: 170,
    alt: "ecomail logo",
  },
];

const partnersHdl = [
  {
    href: "https://tv.nova.cz/",
    src: "/nova.png",
    width: 130,
    height: 130,
    alt: "Nova TV logo",
  },
  {
    href: "https://fajnradio.cz/",
    src: "/fajn.svg",
    width: 85,
    height: 85,
    alt: "Fajn Radio logo",
  },
  {
    href: "https://www.mam.cz/",
    src: "/mam.png",
    width: 130,
    height: 130,
    alt: "MAM logo",
  },
  {
    href: "https://www.newsfeed.cz/",
    src: "/newsfeed.svg",
    width: 130,
    height: 130,
    alt: "Newsfeed logo",
  },
  {
    href: "https://www.antiyoutuber.cz/",
    src: "/antiyoutuber.png",
    width: 130,
    height: 130,
    alt: "Newsfeed logo",
  },
  {
    href: "https://www.expres.cz/",
    src: "/expres.png",
    width: 130,
    height: 130,
    alt: "Newsfeed logo",
  },
  {
    href: "https://www.idnes.cz/",
    src: "/idnes.png",
    width: 130,
    height: 130,
    alt: "Newsfeed logo",
  },
  {
    href: "https://ocko.tv/",
    src: "/ocko.png",
    width: 130,
    height: 130,
    alt: "Newsfeed logo",
  },
];

const partnersZastita = [
  {
    href: "https://www.aka.cz/",
    src: "/aka.svg",
    width: 200,
    height: 150,
    alt: "AKA logo",
  },
  {
    href: "https://ferovyinfluencer.cz/",
    src: "/ferfluencer.png",
    width: 200,
    height: 150,
    alt: "Ferovy Influencer logo",
  },
];

const partnersSpolupraca = [
  {
    href: "https://www.webtop100.cz/",
    src: "/webtop.png",
    width: 150,
    height: 150,
    alt: "Webtop 100 logo",
  },
  {
    href: "#",
    src: "/mikeon.png",
    width: 140,
    height: 150,
    alt: "Mikeon logo",
  },
  {
    href: "https://cz.cans.com/",
    src: "/cans.png",
    width: 130,
    height: 150,
    alt: "Cans logo",
  },
  {
    href: "https://www.fotospin.cz/",
    src: "/fotospin.png",
    width: 120,
    height: 150,
    alt: "Fotospin logo",
  },
  {
    href: "https://www.tullamoredew.com/cs-cz/",
    src: "/tulla.png",
    width: 120,
    height: 150,
    alt: "Tullamore Dew logo",
  },
  {
    href: "https://www.merch4u.cz/en",
    src: "/merch.svg",
    width: 120,
    height: 150,
    alt: "Zullamore Dew logo",
  },
  {
    href: "https://www.oxclubprague.com/",
    src: "/ox.svg",
    width: 120,
    height: 150,
    alt: "Roxy club logo",
  },
  {
    href: "https://www.prazdroj.cz/",
    src: "/pp.svg",
    width: 120,
    height: 150,
    alt: "Plzensky Prazdroj logo",
  },
];

const Partners = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="mx-auto max-w-7xl px-2">
        <Revealx delay={0.5}>
          {" "}
          <h2 className="pb-[32px] text-center lg:pb-[48px]">
            {t("komercniParneri")}
          </h2>
        </Revealx>
        <div className="mx-auto grid max-w-3xl grid-cols-4 gap-x-10 gap-y-5 lg:gap-x-20 lg:gap-y-[32px]">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center md:justify-center"
            >
              <Revealx delay={0.5}>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={partner.href}
                >
                  <Image
                    width={partner.width}
                    height={partner.height}
                    src={partner.src}
                    alt={partner.alt}
                  />
                </Link>
              </Revealx>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-[100px] max-w-3xl px-2">
        <Revealx delay={0.5}>
          {" "}
          <h2 className="pb-[32px] text-center lg:pb-[48px]">
            {t("partnershdl")}
          </h2>
        </Revealx>
        <div className="mx-auto grid max-w-3xl grid-cols-4 gap-x-10 gap-y-5 lg:gap-x-20 lg:gap-y-[32px]">
          {partnersHdl.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center md:justify-center"
            >
              <Revealx delay={0.5}>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={partner.href}
                >
                  <Image
                    width={partner.width}
                    height={partner.height}
                    src={partner.src}
                    alt={partner.alt}
                  />
                </Link>
              </Revealx>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-[100px] max-w-3xl px-2">
        <Revealx delay={0.5}>
          {" "}
          <h2 className="-mb-[30px] text-center">{t("zastita")}</h2>
        </Revealx>
        <div className="grid grid-cols-2 gap-x-1 gap-y-5 lg:gap-x-20 lg:gap-y-20">
          {partnersZastita.map((partner, index) => (
            <div
              key={index}
              className={`flex items-center justify-center ${
                index === 0 ? "md:justify-end" : "md:justify-start"
              }`}
            >
              <Revealx delay={0.5}>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={partner.href}
                >
                  <Image
                    width={partner.width}
                    height={partner.height}
                    src={partner.src}
                    alt={partner.alt}
                  />
                </Link>
              </Revealx>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-[40px]">
        <Revealx delay={0.5}>
          {" "}
          <h2 className="pb-[32px] text-center lg:pb-[48px]">
            {t("spolupracujeme")}
          </h2>
        </Revealx>
        <div className="mx-auto grid max-w-3xl grid-cols-4 gap-x-10 gap-y-5 lg:gap-x-20 lg:gap-y-[32px]">
          {partnersSpolupraca.map((partner, index) => (
            <div key={index} className={`flex items-center justify-center`}>
              <Revealx delay={0.5}>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={partner.href}
                >
                  <Image
                    width={partner.width}
                    height={partner.height}
                    src={partner.src}
                    alt={partner.alt}
                  />
                </Link>
              </Revealx>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Partners;
