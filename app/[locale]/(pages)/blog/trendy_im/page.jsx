"use client";
import styles from "/app/[locale]/(pages)/gdpr/gdpr.module.scss";
import Link from "next/link";
import Revealx from "/components/reveals/Revealx";
import { useTranslation } from "react-i18next";
const Page = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="max-w-6xl mx-auto mt-32 lg:mt-40 md:mt-480 pb-14 px-3">
        <Revealx delay={0.2}>
          {" "}
          <img src="/im_big.jpg" className="pb-[24px] lg:pb-[48px]" alt="" />
        </Revealx>
        <Revealx delay={0.4}>
          {" "}
          <h2 className="pb-[24px]">{t("Clanek1Headline")}</h2>
        </Revealx>
        <Revealx delay={0.6}>
          <p>
            {t("Clanek1P1")} <br /> <br />
            <span className={styles.bold}>
              {" "}
              {t("Clanek1SubHeadline2")}{" "}
            </span>{" "}
            <br /> {t("Clanek1Text2")} <br /> <br />
            <span className={styles.bold}>
              {" "}
              {t("Clanek1SubHeadline3")}
            </span>{" "}
            <br /> {t("Clanek1Text3")} <br /> <br />
            <span className={styles.bold}>{t("Clanek1SubHeadline4")}</span>{" "}
            <br />
            {t("Clanek1Text4")} <br /> <br />
            <span className={styles.bold}>{t("Clanek1SubHeadline5")}</span>{" "}
            <br />
            {t("Clanek1Text5")} <br /> <br />
            <span className={styles.bold}>{t("Clanek1SubHeadline6")}</span>{" "}
            <br />
            {t("Clanek1Text6")} <br /> <br />
            <span className={styles.bold}>{t("Clanek1SubHeadline7")}</span>{" "}
            <br /> {t("Clanek1Text7")} <br /> <br />
            <span className={styles.link}>
              <Link href="https://www.instagram.com/reel/Cvr4b5cvvfk/">
                https://www.instagram.com/reel/Cvr4b5cvvfk/
              </Link>
            </span>{" "}
            <br />
            <span className={styles.link}>
              <Link href="https://www.instagram.com/p/Cp47n5gjuqK/">
                https://www.instagram.com/p/Cp47n5gjuqK/
              </Link>
            </span>{" "}
            <br />
            <span className={styles.link}>
              <Link href="https://www.instagram.com/reel/Cp24K2GDQJf/">
                https://www.instagram.com/reel/Cp24K2GDQJf/
              </Link>
            </span>{" "}
            <br />
            <span className={styles.link}>
              <Link href="https://www.instagram.com/p/C0ermRnoyhO/">
                https://www.instagram.com/p/C0ermRnoyhO/
              </Link>{" "}
            </span>{" "}
            <br /> <br />
            {t("Clanek1Text8")}
          </p>
        </Revealx>
      </div>
    </>
  );
};
export default Page;
