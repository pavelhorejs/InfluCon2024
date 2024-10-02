"use client";
import { useTranslation } from "react-i18next";
import Revealx from "@/components/reveals/Revealx";
import Image from "next/image";
import Afterparty from "/public/afterparty.webp";
import Form from "@/components/form/Form";

import Link from "next/link";

const Page = () => {
  const { t, i18n } = useTranslation();

  const partners = [
    {
      href: "https://cz.cans.com/",
      src: "/cans.png",
      width: 130,
      height: 150,
      alt: "Cans logo",
    },
    {
      href: "https://tv.nova.cz/",
      src: "/nova.png",
      width: 130,
      height: 130,
      alt: "Nova TV logo",
    },
    {
      href: "https://www.expres.cz/",
      src: "/expres.png",
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
      href: "https://www.prazdroj.cz/",
      src: "/pp.svg",
      width: 120,
      height: 150,
      alt: "Plzensky Prazdroj logo",
    },
    {
      href: "https://ecomail.cz/",
      src: "/ecomail.png",
      width: 170,
      height: 170,
      alt: "ecomail logo",
    },
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
      href: "https://www.roxy.cz/club/",
      src: "/roxy.svg",
      width: 130,
      height: 130,
      alt: "loreal logo",
    },
  ];

  return (
    <>
      <Revealx delay={0.2}>
        <div className="relative mx-auto mt-32 max-w-6xl px-3 pb-20 lg:mt-40">
          <div className="relative pb-[40px]">
            <Image className="blur-sm" src={Afterparty} alt="Afterparty" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-[40px]">
              <h2 className="-mt-10 text-center text-4xl lg:text-7xl">
                7.10.2024 20:00
              </h2>

              <Image
                className="w-[200px] lg:w-[500px]"
                src="/roxy.svg"
                width={350}
                height={200}
                alt="Afterparty"
              />
            </div>
          </div>
          <h2 className="pb-[16px] text-center">{t("afterparty.program")}</h2>
          <p className="mx-auto max-w-[600px] pb-[40px] text-center">
            {t("afterparty.program2")}
          </p>
          <h2 className="pb-[16px] text-center">INFLUCON STAGE</h2>
          <div className="redGlow redCard mb-[40px] grid grid-cols-1 justify-items-center gap-y-[16px] bg-[#F00065] px-9 py-9 pb-[40px] hover:bg-[#D6005A] lg:grid-cols-5">
            <div className="redItem1"></div>
            <div className="redItem2"></div>
            <div className="flex flex-col items-center gap-[4px]">
              <h3 className="pb-5 text-3xl font-bold">20:00 - 21:45</h3>
              <div className="flex items-center gap-[8px]">
                {" "}
                <Link href="https://www.instagram.com/jameswing/">
                  <Image src="/ig_white.svg" width={20} height={20} alt="" />
                </Link>
                <p className="">Gadjo.cz & James Wing</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-[4px]">
              <h3 className="pb-5 text-3xl font-bold">22:00 - 23:30</h3>
              <div className="flex items-center gap-[8px]">
                {" "}
                <Link href="https://www.instagram.com/malalatadjs/?hl=cs">
                  <Image src="/ig_white.svg" width={20} height={20} alt="" />
                </Link>
                <p>Malalata</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-[4px]">
              <h3 className="pb-5 text-3xl font-bold">23:45 - 1:00</h3>
              <div className="flex items-center gap-[8px]">
                {" "}
                <Link href="https://www.instagram.com/soulkatemusic/">
                  <Image src="/ig_white.svg" width={20} height={20} alt="" />
                </Link>
                <p>SoulKate</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-[4px]">
              <h3 className="pb-5 text-3xl font-bold">1:00 - 2:00</h3>
              <div className="flex items-center gap-[8px]">
                {" "}
                <Link href="https://www.instagram.com/soulkatemusic/">
                  <Image src="/ig_white.svg" width={20} height={20} alt="" />
                </Link>
                <p>Barbara</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-[4px]">
              <h3 className="pb-5 text-3xl font-bold">2:00 - 3:00</h3>
              <div className="flex items-center gap-[8px]">
                {" "}
                <Link href="https://www.instagram.com/_pollarys_/">
                  <Image src="/ig_white.svg" width={20} height={20} alt="" />
                </Link>
                <p>Pollarys</p>
              </div>
            </div>
          </div>
          <h2 className="pb-[16px] text-center">BUZZ STAGE</h2>
          <div className="redGlow redCard mb-[40px] grid grid-cols-1 justify-items-center gap-y-[16px] bg-[#F00065] px-9 py-9 pb-[40px] hover:bg-[#D6005A] lg:grid-cols-2">
            <div className="redItem1"></div>
            <div className="redItem2"></div>
            <div className="flex flex-col items-center gap-[4px]">
              <h3 className="pb-5 text-4xl font-bold">20:00 - 22:00</h3>
              <div className="flex items-center gap-[8px]">
                {" "}
                <Link href="https://www.instagram.com/kayteerocks/">
                  <Image src="/ig_white.svg" width={20} height={20} alt="" />
                </Link>
                <p>Katy</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-[4px]">
              <h3 className="pb-5 text-4xl font-bold">22:00 - 00:00</h3>
              <div className="flex items-center gap-[8px]">
                {" "}
                <Link href="https://www.instagram.com/iandotc/">
                  <Image src="/ig_white.svg" width={20} height={20} alt="" />
                </Link>
                <p>Ian.C</p>
              </div>
            </div>
          </div>
          <h2 className="mt-[80px] pb-[16px] text-center">
            {t("partneriEventu")}
          </h2>
          <div className="mx-auto grid max-w-3xl grid-cols-4 gap-x-10 gap-y-5 pb-[80px] lg:gap-x-20 lg:gap-y-[32px]">
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
          <p className="mx-auto max-w-[600px] pb-[16px] text-center">
            {t("afterparty.program3")}{" "}
          </p>
          <div className="mx-auto max-w-[500px] pb-[32px]">
            <Revealx delay={0.6}>
              <Form />
            </Revealx>
          </div>
          <p className="mx-auto max-w-[600px] text-center">
            {t("afterparty.program4")}{" "}
            <a
              href={
                i18n.language === "cs"
                  ? "https://goout.net/cs/listky/influcon-2024/xdxy/"
                  : "https://goout.net/en/listky/influcon-2024/xdxy/"
              }
              className="underline hover:text-[#22FFAF]"
            >
              {t("afterparty.program6")}
            </a>
          </p>
        </div>
      </Revealx>
    </>
  );
};
export default Page;
