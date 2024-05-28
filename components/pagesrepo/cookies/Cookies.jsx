"use client";
import styles from "/components/pagesrepo/gdpr/gdpr.module.scss";
import { useTranslation } from "react-i18next";
const Cookies = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="max-w-6xl mx-auto mt-32 lg:mt-48 pb-14 px-3">
        <h2 className="pb-[24px]">{t("CookiesHeadline")}</h2>
        <p>
          {t("subHeadline")} <br /> <br />
          <span className={styles.bold}>
            {t("cookiesP1")} <br />
          </span>
          {t("cookiesP1Text")}
          <span className={styles.bold}>
            {" "}
            <br /> <br />
            {t("cookiesP2")} <br />
          </span>
          {t("cookiesP2Text")}
          <span className={styles.bold}>
            {" "}
            <br /> <br />
            {t("cookiesP3")} <br />
          </span>
          {t("cookiesP3Text")} <br /> <br />
          <span className={styles.bold}>
            {t("cookiesP4")} <br />
          </span>
          {t("cookiesP4Text")}
          <br /> <br />
          <span className={styles.bold}>
            {t("cookiesP5")} <br />
          </span>
          <span className={styles.bold}>
            {t("cookiesP5_1")} <br />
          </span>
          {t("cookiesP5_1Text")} <br />
          <span className={styles.bold}>
            {t("cookiesP5_2")} <br />
          </span>
          {t("cookiesP5_2Text")}. <br />
          <span className={styles.bold}>
            {t("cookiesP5_3")} <br />
          </span>
          {t("cookiesP5_3Text")} <br />
          <span className={styles.bold}>{t("cookiesP5_4")}</span>
          <br />
          {t("cookiesP5_4Text")} <br /> <br />
          <span className={styles.bold}>{t("cookiesP6")}</span>
          <br /> _ga_CSPYF2X5LT <br />
          _ga
          <br /> _fbp <br /> _gcl_au <br /> NEXT_LOCACE
          <br /> <br />
          <span className={styles.bold}>
            {t("cookiesP7")} <br />
          </span>
          {t("cookiesP7_Text")} <br /> <br />
          <span className={styles.bold}>{t("cookiesP8")}</span> <br />
          {t("cookiesP8_Text")} <br /> <br />
          <span className={styles.bold}>{t("cookiesP9")}</span> <br />
          {t("cookiesP9_Text")}
          <br />
          <br />
          <a className="underline" href="mailto:info@woo.cz">
            info@woo.cz
          </a>
        </p>
      </div>
    </>
  );
};
export default Cookies;
