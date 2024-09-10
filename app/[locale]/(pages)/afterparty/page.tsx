"use client";
import { useTranslation } from "react-i18next";
import Revealx from "@/components/reveals/Revealx";
import Image from "next/image";
import Afterparty from "/public/afterparty.webp";
import Countdown from "@/components/afterparty/Countdown";
import Link from "next/link";

const Page = () => {
  const { t, i18n } = useTranslation();
  const timeTillDate = "10/07/2024 20:00";
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
              {/* <Countdown timeTillDate={timeTillDate} /> */}
            </div>
          </div>
          <h2 className="pb-[16px] text-center">{t("afterparty.program")}</h2>
          <p className="mx-auto max-w-[600px] pb-[40px] text-center">
            {t("afterparty.program2")}
          </p>
          <h2 className="pb-[16px] text-center">Line up</h2>
          <div className="redGlow redCard mb-[40px] grid grid-cols-1 justify-items-center gap-y-[16px] bg-[#F00065] px-9 py-9 pb-[40px] hover:bg-[#D6005A] lg:grid-cols-4">
            <div className="redItem1"></div>
            <div className="redItem2"></div>
            <div className="flex flex-col items-center gap-[4px]">
              <h3 className="pb-5 text-4xl font-bold">20:00-22:00</h3>
              <div className="flex items-center gap-[8px]">
                {" "}
                <Link href="https://www.instagram.com/jakub_wolf/">
                  <Image src="/ig_white.svg" width={20} height={20} alt="" />
                </Link>
                <p>Wolf</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-[4px]">
              <h3 className="pb-5 text-4xl font-bold">22:00-23:00</h3>
              <div className="flex items-center gap-[8px]">
                {" "}
                <Link href="https://www.instagram.com/dj_theresia/">
                  <Image src="/ig_white.svg" width={20} height={20} alt="" />
                </Link>
                <p>Theresia</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-[4px]">
              <h3 className="pb-5 text-4xl font-bold">23:00-24:00</h3>
              <div className="flex items-center gap-[8px]">
                {" "}
                <Link href="https://www.instagram.com/saxofrancis/">
                  <Image src="/ig_white.svg" width={20} height={20} alt="" />
                </Link>
                <p>SaxoFrancis</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-[4px]">
              <h3 className="pb-5 text-4xl font-bold">24:00-03:00</h3>
              <div className="flex items-center gap-[8px]">
                {" "}
                <Link href="https://www.instagram.com/djteekay__/">
                  <Image src="/ig_white.svg" width={20} height={20} alt="" />
                </Link>
                <p>DJ Teekay</p>
              </div>
            </div>
          </div>
          <p className="mx-auto max-w-[600px] pb-[16px] text-center">
            {t("afterparty.program3")}{" "}
            <a
              href="mailto:info@woo.cz"
              className="underline hover:text-[#22FFAF]"
            >
              info@woo.cz.
            </a>
          </p>
          <p className="mx-auto max-w-[600px] text-center">
            {t("afterparty.program4")}{" "}
            <a
              href="https://goout.net/cs/listky/influcon-2024/xdxy/"
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
