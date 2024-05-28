"use client";
import styles from "/components/pagesrepo/gdpr/gdpr.module.scss";
import { useTranslation } from "react-i18next";

const Gdpr = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="max-w-6xl mx-auto mt-32 lg:mt-40 md:mt-480 pb-14 px-3">
        <h2 className="pb-[24px]">{t("gdprHdl")}</h2>
        <p>{t("gdprP1")}</p>
        <br />
        <p>{t("gdprP2")}</p>
        <br />
        <p>
          {t("gdprP3")} <br />
          {t("gdprP3_1")} <br />
          {t("gdprP3_2")}
          <br />
          {t("gdprP3_3")} <br />
          {t("gdprP3_4")}
          {t("gdprP3_5")}
        </p>
        <br />
        <p>{t("gdprP4")}</p> <br />
        <p>
          {t("gdprP5")}
          <br />
          {t("gdprP5_1")}
        </p>{" "}
        <br />
        <p>
          {t("gdprP6")}
          <br />
          {t("gdprP6_1")} <br />
          {t("gdprP6_2")} <br />
          {t("gdprP6_3")} <br />
          {t("gdprP6_4")}
        </p>
        <br />
        <p>
          {t("gdprP7")}
          <br />
          {t("gdprP7_1")}
        </p>
        <br />
        <p>
          {t("gdprP8")}
          <br />
          {t("gdprP8_1")}
          <br />
          {t("gdprP8_2")}
          <br />
          {t("gdprP8_3")}
          <br />
          {t("gdprP8_4")}
        </p>
        <br />
        <p>
          {t("gdprP9")}
          <br />
          {t("gdprP9_1")}
        </p>
        <br />
        <p>
          {t("gdprP10")}
          <br />
          {t("gdprP10_1")}
        </p>
        <br />
        <p>
          {t("gdprP11")}
          <br />
          {t("gdprP11_1")}
        </p>
        <br />
        <p>{t("gdprP11_2")}</p>
        <br />
        <p>
          {t("gdprP12")}
          <br />
          {t("gdprP12_1")}
        </p>
        <br />
        <p>{t("gdprP12_2")}</p> <br />
        <p>
          {" "}
          {t("gdprP12_3")}
          <br /> {t("gdprP12_4")}
          <br /> {t("gdprP12_5")}
          <br /> {t("gdprP12_6")}
          <br /> {t("gdprP12_7")}
          <br /> {t("gdprP12_8")}
          <br /> {t("gdprP12_9")}
        </p>{" "}
        <br />
        <p>{t("gdprP12_10")}</p> <br />
        <p>
          {t("gdprP13")}
          <br />
          {t("gdprP13_1")}
        </p>
        <br />
        <p>
          {t("gdprP14")}
          <br />
          {t("gdprP14_1")} <br /> <br /> {t("gdprP14_2")}
        </p>
      </div>
    </>
  );
};
export default Gdpr;
