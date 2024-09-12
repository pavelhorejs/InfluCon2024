"use client";

import { useTranslation } from "react-i18next";
import Revealx from "../reveals/Revealx";
import Image from "next/image";
import Link from "next/link";

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
        <div className="mx-auto grid max-w-3xl grid-cols-5 gap-x-10 gap-y-5 lg:gap-x-20 lg:gap-y-20">
          <div className="flex items-center justify-center md:justify-center">
            <Revealx delay={0.5}>
              <Link href="https://www.woo.cz/">
                <Image width={130} height={130} src="/woo.svg" alt="woo logo" />
              </Link>
            </Revealx>
          </div>
          <div className="flex items-center justify-center md:justify-center">
            <Revealx delay={0.5}>
              <Link href="https://www.heroesofonline.cz">
                <Image width={130} height={130} src="/hoo.svg" alt="hoo logo" />
              </Link>
            </Revealx>
          </div>
          <div className="flex items-center justify-center md:justify-center">
            <Revealx delay={0.5}>
              <Link href="https://www.loreal.com/cs-cz/czech-republic/">
                <Image
                  width={130}
                  height={130}
                  src="/Loreal.svg"
                  alt="loreal logo"
                />
              </Link>
            </Revealx>
          </div>
          <div className="flex items-center justify-center md:justify-center">
            <Revealx delay={0.5}>
              <Link href="https://www.oxotea.cz/">
                <Image
                  width={130}
                  height={130}
                  src="/OXO_bila.png"
                  alt="loreal logo"
                />
              </Link>
            </Revealx>
          </div>
          <div className="flex items-center justify-center md:justify-center">
            <Revealx delay={0.5}>
              <Link href="https://www.vonage.com/">
                <Image
                  width={170}
                  height={170}
                  src="/vonage.svg"
                  alt="vonage logo"
                />
              </Link>
            </Revealx>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-[100px] max-w-3xl px-2">
        <Revealx delay={0.5}>
          {" "}
          <h2 className="pb-[32px] text-center lg:pb-[48px]">
            {t("partnershdl")}
          </h2>
        </Revealx>
        <div className="grid grid-cols-4 gap-x-5 gap-y-5 lg:gap-x-20 lg:gap-y-20">
          <div className="flex items-center justify-center md:justify-center">
            {" "}
            <Revealx delay={0.5}>
              {" "}
              <Link href="https://tv.nova.cz/">
                <Image width={130} height={130} src="/nova.png" alt="" />
              </Link>
            </Revealx>
          </div>
          <div className="flex items-center justify-center md:justify-center">
            <Revealx delay={0.5}>
              {" "}
              <Link href="https://fajnradio.cz/">
                <Image width={85} height={850} src="/fajn.svg" alt="" />
              </Link>
            </Revealx>
          </div>
          <div className="flex items-center justify-center md:justify-center">
            {" "}
            <Revealx delay={0.5}>
              <Link href="https://www.mam.cz/">
                {" "}
                <Image width={130} height={130} src="/mam.png" alt="" />
              </Link>
            </Revealx>
          </div>
          <div className="flex items-center justify-center md:justify-center">
            {" "}
            <Revealx delay={0.5}>
              <Link href="https://www.newsfeed.cz/">
                <Image width={130} height={130} src="/newsfeed.svg" alt="" />
              </Link>
            </Revealx>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-[100px] max-w-3xl px-2">
        <Revealx delay={0.5}>
          {" "}
          <h2 className="-mb-[30px] text-center">{t("zastita")}</h2>
        </Revealx>
        <div className="grid grid-cols-2 gap-x-1 gap-y-5 lg:gap-x-20 lg:gap-y-20">
          <div className="flex items-center justify-center md:justify-end">
            {" "}
            <Revealx delay={0.5}>
              <Link href="https://www.aka.cz/">
                <Image width={200} height={150} src="/aka.svg" alt="" />
              </Link>
            </Revealx>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            {" "}
            <Revealx delay={0.5}>
              {" "}
              <Link href="https://ferovyinfluencer.cz/">
                <Image width={200} height={150} src="/ferfluencer.png" alt="" />
              </Link>
            </Revealx>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-[40px]">
        <Revealx delay={0.5}>
          {" "}
          <h2 className="pb-[32px] text-center lg:pb-[48px]">
            {t("spolupracujeme")}
          </h2>
        </Revealx>
        <div className="grid grid-cols-2 gap-x-1 gap-y-5 lg:gap-x-20 lg:gap-y-20">
          {" "}
          <div className="flex items-center justify-center md:justify-end">
            {" "}
            <Revealx delay={0.5}>
              <Link href="https://www.webtop100.cz/">
                <Image width={150} height={150} src="/webtop.png" alt="" />
              </Link>
            </Revealx>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            {" "}
            <Revealx delay={0.5}>
              {" "}
              <Image width={150} height={150} src="/mikeon.png" alt="" />
            </Revealx>
          </div>
        </div>
      </div>
    </>
  );
};
export default Partners;
