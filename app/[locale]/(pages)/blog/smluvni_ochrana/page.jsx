"use client";
import styles from "/components/pagesrepo/gdpr/gdpr.module.scss";
import Revealx from "/components/reveals/Revealx";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import imageOchranaBig from "/public/ochrana_big.webp";
import imageOchranaBigMobile from "/public/Ochrana_mobile_big.jpg";
import { useState, useEffect } from "react";
const Page = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);
  return (
    <>
      <div className="max-w-6xl mx-auto mt-32 lg:mt-40 pb-14 px-3">
        <Revealx delay={0.2}>
          <Image
            src={isMobile ? imageOchranaBigMobile : imageOchranaBig}
            className="pb-[24px] lg:pb-[48px]"
            alt="blog cover"
          />
        </Revealx>
        <Revealx delay={0.4}>
          {" "}
          <h2 className="pb-[24px]">{t("Clanek2Headline")}</h2>
        </Revealx>
        <Revealx delay={0.6}>
          {" "}
          <p>
            {t("Clanek2P1")} <br /> <br />
            {t("Clanek2P2")}
            <br />
            <br />
            {t("Clanek2P3")} <br /> <br />
            <span className={styles.greenText}>
              {t("Clanek2P4")}
            </span> <br /> <br />
            {t("Clanek2P5")}
            <br /> <br />
            {t("Clanek2P6")} <br /> <br />
            <span className={styles.greenText}>
              {t("Clanek2P7")}
            </span> <br /> <br />
            {t("Clanek2P8")}
            <br /> <br />
            {t("Clanek2P9")}
            <br /> <br />
            <span className={styles.greenText}>{t("Clanek2P10")}</span>
            <br /> <br />
            {t("Clanek2P11")} <br /> <br />
            <span className={styles.greenText}>{t("Clanek2P12")}</span>
            <br /> <br />
            {t("Clanek2P13")}
            <br /> <br />
            {t("Clanek2P14")} <br /> <br />
            {t("Clanek2P15")}
            <br /> <br />
            {t("Clanek2P16")}
          </p>
        </Revealx>
      </div>
    </>
  );
};
export default Page;
