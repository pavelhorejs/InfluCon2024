"use client";
import styles from "/components/pagesrepo/gdpr/gdpr.module.scss";
import { useTranslation } from "react-i18next";

const Gdpr = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="max-w-6xl mx-auto mt-32 lg:mt-40 md:mt-480 pb-14 px-3">
        <h2 className="pb-[24px]">
          {t("termsHdl")} <br />
          {t("termsHdl_2")}
        </h2>
        <p>{t("termsP1")}</p> <br />
        <p>{t("termsP2")}</p> <br />
        <p>{t("termsP3")}</p> <br />
        <p>{t("termsP4")}</p>
        <br />
        <p>
          {t("termsP5")} <br />
          {t("termsP6")} <br />
          {t("termsP7")} <br />
          {t("termsP8")} <br />
          {t("termsP9")} <br />
        </p>
        <br />
        <p>{t("termsP10")} </p>
        <p>
          {t("termsP10_2")} <br /> <br />
          {t("termsP10_3")}
          <br />
          {t("termsP10_4")}
          <br />
          {t("termsP10_5")}
          <br />
          {t("termsP10_6")}
          <br />
          {t("termsP10_7")}
          <br /> <br />
          {t("termsP10_8")}
        </p>
        <br />
        <p>
          {t("termsP11")} <br />
          {t("termsP11_1")}
          <br /> <br />
          {t("termsP11_2")}
          <br />
          {t("termsP11_3")} <br />
          <br />
          {t("termsP11_4")} <br /> <br />
          {t("termsP11_5")} <br /> <br />
          {t("termsP11_6")} <br /> <br /> {t("termsP11_7")}
        </p>
        <br />
        <p>{t("termsP12")}</p>
        <p>{t("termsP12_1")}</p>
        <br />
        <p>{t("termsP12_2")}</p>
        <br />
        <p>{t("termsP12_3")}</p>
        <br />
        <p>
          {t("termsP13")}
          <br />
          {t("termsP13_1")} <br /> <br />
          {t("termsP13_2")} <br /> <br />
          {t("termsP13_3")}
        </p>
        <br />
        <p>
          {t("termsP14")}
          <br />
          {t("termsP14_1")}
          <br /> <br />
          {t("termsP14_2")}
        </p>
        <br /> <br />
        <p>
          {t("termsP15")} <br />
          {t("termsP15_1")} <br /> <br />
          {t("termsP15_2")}
          <br />
          <br /> {t("termsP15_3")}
          <br /> <br />
          {t("termsP15_4")} <br /> <br />
          {t("termsP15_5")}
        </p>
      </div>
    </>
  );
};
export default Gdpr;
