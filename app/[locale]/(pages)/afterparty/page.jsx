"use client";
import { useTranslation } from "react-i18next";
import Revealx from "/components/reveals/Revealx";
import Image from "next/image";
import Afterparty from "/public/afterparty.webp";
import Countdown from "/components/afterparty/Countdown";

const Page = () => {
  const { t, i18n } = useTranslation();
  const timeTillDate = "10/07/2024 20:00";
  return (
    <>
      <Revealx delay={0.2}>
        <div className="relative mx-auto mt-32 max-w-6xl px-3 pb-20 lg:mt-40">
          <div className="relative">
            <Image className="blur-sm" src={Afterparty} alt="Afterparty" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Countdown timeTillDate={timeTillDate} />
              <p>{t("moreinfosoon")}</p>
            </div>
          </div>
        </div>
      </Revealx>
    </>
  );
};
export default Page;
