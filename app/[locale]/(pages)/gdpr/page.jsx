"use client";
import styles from "./gdpr.module.scss";
import { useTranslation } from "react-i18next";

const Page = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="max-w-6xl mx-auto mt-32 lg:mt-40 md:mt-480 pb-14 px-3">
        <h2 className="pb-[24px]">{t("gdprHeadline")}</h2>
        <p>
          <span className={styles.bold}>{t("gdprP1")}</span>
          <br /> {t("gdprP1a")} <br /> <br /> {t("gdprP1b")}
          <br /> <br />
          {t("gdprP1_2")} <br /> <br />
          <span className={styles.bold}>
            {" "}
            {t("gdprP2")} <br />
          </span>
          {t("gdprP2_Text")} <br /> <br />
          <span className={styles.bold}>
            {t("gdprP3")} <br />
          </span>
          {t("gdprP3_1")}
          <br />
          {t("gdprP3_1a")} <br />
          {t("gdprP3_1b")} <br />
          {t("gdprP3_1c")} <br />
          {t("gdprP3_1d")}
          <br />
          {t("gdprP3_1e")} <br />
          {t("gdprP3_1f")} <br />
          {t("gdprP3_1g")}
          <br />
          <br /> <span className={styles.bold}>{t("gdprP4")}</span> <br />{" "}
          {t("gdprP4_text")}
          <a className="underline" href="mailto:info@woo.cz">
            info@woo.cz.
          </a>{" "}
          <br /> <br />
          {t("gdprP5")}
        </p>
      </div>
    </>
  );
};
export default Page;
