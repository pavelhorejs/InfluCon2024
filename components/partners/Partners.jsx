"use client";

import { useTranslation } from "react-i18next";
import Revealx from "../reveals/Revealx";
import Image from "next/image";
import Link from "next/link";

const Partners = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="max-w-7xl mx-auto px-2">
        <Revealx delay={0.5}>
          {" "}
          <h2 className="pb-[32px] lg:pb-[48px] text-center">
            {t("komercniParneri")}
          </h2>
        </Revealx>
        <div className="grid grid-cols-3 max-w-xl mx-auto gap-y-5 lg:gap-y-20 gap-x-10 lg:gap-x-20">
          <div className="flex justify-center md:justify-center items-center">
            <Revealx delay={0.5}>
              <Link href="https://www.woo.cz/">
                <Image width={130} height={130} src="/woo.svg" alt="woo logo" />
              </Link>
            </Revealx>
          </div>
          <div className="flex justify-center md:justify-center items-center">
            <Revealx delay={0.5}>
              <Image width={130} height={130} src="/hoo.svg" alt="hoo logo" />
            </Revealx>
          </div>
          <div className="flex justify-center md:justify-center items-center">
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
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-2 mt-[100px]">
        <Revealx delay={0.5}>
          {" "}
          <h2 className="pb-[32px] lg:pb-[48px] text-center">
            {t("partnershdl")}
          </h2>
        </Revealx>
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-y-5 lg:gap-y-20 gap-x-1 lg:gap-x-20">
          <div className="flex justify-center md:justify-center items-center">
            {" "}
            <Revealx delay={0.5}>
              {" "}
              <Link href="https://tv.nova.cz/">
                <Image width={130} height={130} src="/nova.svg" alt="" />
              </Link>
            </Revealx>
          </div>
          <div className="flex justify-center md:justify-center items-center">
            <Revealx delay={0.5}>
              {" "}
              <Link href="https://fajnradio.cz/">
                <Image width={95} height={130} src="/fajn.svg" alt="" />
              </Link>
            </Revealx>
          </div>
          <div className="flex justify-center md:justify-center items-center">
            {" "}
            <Revealx delay={0.5}>
              <Image width={130} height={130} src="/mam.png" alt="" />
            </Revealx>
          </div>
          <div className="flex justify-center md:justify-center items-center">
            {" "}
            <Revealx delay={0.5}>
              <Link href="https://www.newsfeed.cz/">
                <Image width={130} height={130} src="/newsfeed.svg" alt="" />
              </Link>
            </Revealx>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-2 mt-[100px]">
        <Revealx delay={0.5}>
          {" "}
          <h2 className="text-center -mb-[30px]">{t("zastita")}</h2>
        </Revealx>
        <div className="grid grid-cols-2 gap-y-5 lg:gap-y-20 gap-x-1 lg:gap-x-20">
          <div className="flex justify-center md:justify-end items-center">
            {" "}
            <Revealx delay={0.5}>
              <Link href="https://www.aka.cz/">
                <Image width={200} height={150} src="/aka.svg" alt="" />
              </Link>
            </Revealx>
          </div>
          <div className="flex justify-center md:justify-start items-center">
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
          <h2 className="pb-[32px] lg:pb-[48px] text-center">
            {t("spolupracujeme")}
          </h2>
        </Revealx>
        <div className="grid grid-cols-2 gap-y-5 lg:gap-y-20 gap-x-1 lg:gap-x-20">
          {" "}
          <div className="flex justify-center md:justify-end items-center">
            {" "}
            <Revealx delay={0.5}>
              <Link href="https://www.webtop100.cz/">
                <Image width={150} height={150} src="/webtop.png" alt="" />
              </Link>
            </Revealx>
          </div>
          <div className="flex justify-center md:justify-start items-center">
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
