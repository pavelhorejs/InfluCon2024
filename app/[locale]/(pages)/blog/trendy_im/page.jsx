"use client";
import styles from "/components/pagesrepo/gdpr/gdpr.module.scss";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import imageImBig from "/public/im_big.webp";
import imageImBigMobile from "/public/IM_mobile_big.jpg";
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
      <div className="md:mt-480 mx-auto mt-32 max-w-6xl px-3 pb-14 lg:mt-40">
        <Image
          src={isMobile ? imageImBigMobile : imageImBig}
          className="pb-[24px] lg:pb-[48px]"
          alt="blog cover"
        />

        <h2 className="pb-[24px]">{t("Clanek1Headline")}</h2>

        <p>
          {t("Clanek1P1")} <br /> <br />
          <span className={styles.bold}> {t("Clanek1SubHeadline2")} </span>{" "}
          <br /> {t("Clanek1Text2")} <br /> <br />
          <span className={styles.bold}> {t("Clanek1SubHeadline3")}</span>{" "}
          <br /> {t("Clanek1Text3")} <br /> <br />
          <span className={styles.bold}>{t("Clanek1SubHeadline4")}</span> <br />
          {t("Clanek1Text4")} <br /> <br />
          <span className={styles.bold}>{t("Clanek1SubHeadline5")}</span> <br />
          {t("Clanek1Text5")} <br /> <br />
          <span className={styles.bold}>{t("Clanek1SubHeadline6")}</span> <br />
          {t("Clanek1Text6")} <br /> <br />
          <span className={styles.bold}>
            {t("Clanek1SubHeadline7")}
          </span> <br /> {t("Clanek1Text7")} <br /> <br />
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
      </div>
    </>
  );
};
export default Page;
