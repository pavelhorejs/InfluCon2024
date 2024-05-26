"use client";
import styles from "/components/pagesrepo/gdpr/gdpr.module.scss";
import Revealx from "/components/reveals/Revealx";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import imageKampaneBig from "/public/kampane_big.webp";

const Page = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="max-w-6xl mx-auto mt-32 lg:mt-40 pb-14 px-3">
        <Revealx delay={0.2}>
          <Image
            src={imageKampaneBig}
            className="pb-[24px] lg:pb-[48px]"
            alt="blog cover"
          />
        </Revealx>
        <Revealx delay={0.4}>
          {" "}
          <h2 className="pb-[24px]">{t("Clanek3Headline")}</h2>
        </Revealx>
        <Revealx delay={0.6}>
          {" "}
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
            <br /> <img src="/kolecko.png" className="w-[300px]" alt="" />{" "}
            <br />
            <br />
            <span className={styles.bold}>{t("Clanek3P5")}</span> <br />{" "}
            {t("Clanek3P5Text")} <br /> <br /> <br />
            <span className={styles.bold}> {t("Clanek3P6")}</span>
            <br /> <img src="/tabulka3.png" alt="" /> <br />{" "}
            {t("Clanek3P6Text")} <br /> <br />
            <span className={styles.bold}> {t("Clanek3P7")}</span>
            <br />
            {t("Clanek3P7Text")} <br /> <br />{" "}
            <span className={styles.bold}>{t("Clanek3P8")}</span> <br />{" "}
            {t("Clanek3P8Text")}
          </p>
        </Revealx>
      </div>
    </>
  );
};
export default Page;
