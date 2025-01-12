"use client";
import styles from "/components/pagesrepo/gdpr/gdpr.module.scss";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import imageKampaneBig from "/public/kampane_big.webp";
import imageKampaneBigMobile from "/public/Kampane_mobile_big.jpg";
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
      <div className="mx-auto mt-32 max-w-6xl px-3 pb-14 lg:mt-40">
        <Image
          src={isMobile ? imageKampaneBigMobile : imageKampaneBig}
          className="pb-[24px] lg:pb-[48px]"
          alt="blog cover"
        />{" "}
        <h2 className="pb-[24px]">{t("Clanek3Headline")}</h2>{" "}
        <p>
          {t("Clanek3P1")}
          <br /> <br />
          <span className={styles.bold}>{t("Clanek3P2")}</span> <br />
          {t("Clanek3P2Text")} <br /> <br />
          {t("Clanek3P2Text2")} <br /> <br />
          <img src="/tabulka.png" alt="" /> <br />
          {t("Clanek3P2Text3")} <br /> <br />
          {t("Clanek3P2Text4")} <br /> <br />{" "}
          <span className={styles.bold}>{t("Clanek3P3")}</span> <br />{" "}
          {t("Clanek3P3_2")}
          <br /> <img src="/tabulka2.png" alt="" /> <br /> <br />{" "}
          <span className={styles.bold}>{t("Clanek3P4")}</span> <br />{" "}
          {t("Clanek3P4_2")}
          <br /> <img src="/kolecko.png" className="w-[300px]" alt="" /> <br />
          <br />
          <span className={styles.bold}>{t("Clanek3P5")}</span> <br />{" "}
          {t("Clanek3P5Text")} <br /> <br /> <br />
          <span className={styles.bold}> {t("Clanek3P6")}</span>
          <br /> <img src="/tabulka3.png" alt="" /> <br /> {t("Clanek3P6Text")}{" "}
          <br /> <br />
          <span className={styles.bold}> {t("Clanek3P7")}</span>
          <br />
          {t("Clanek3P7Text")} <br /> <br />{" "}
          <span className={styles.bold}>{t("Clanek3P8")}</span> <br />{" "}
          {t("Clanek3P8Text")}
        </p>
      </div>
    </>
  );
};
export default Page;
