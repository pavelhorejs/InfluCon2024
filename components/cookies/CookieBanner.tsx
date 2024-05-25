"use client";
import { motion } from "framer-motion";
import { getLocalStorage, setLocalStorage } from "../../lib/storageHelper";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Styles from "/components/cookies/styles.module.scss";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(undefined);
  const { t } = useTranslation();

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    if (storedCookieConsent !== null) {
      setCookieConsent(storedCookieConsent === "true");
    } else {
      setCookieConsent(null);
    }
  }, []);

  useEffect(() => {
    if (cookieConsent !== undefined && cookieConsent !== null) {
      const newValue = cookieConsent ? "granted" : "denied";

      window.gtag("consent", "update", {
        analytics_storage: newValue,
        ad_storage: newValue,
      });

      setLocalStorage("cookie_consent", cookieConsent.toString());
    }
  }, [cookieConsent]);

  if (cookieConsent === undefined) {
    return null;
  }

  return (
    <div
      className={`${Styles.cookieBanner} ${
        cookieConsent !== null ? Styles.hidden : Styles.flex
      }`}
    >
      <div className={Styles.textWrapper}>
        <h3>{t("cookieBannerHdl")}</h3>
        <p>{t("cookieBanner")}</p>
      </div>

      <div className={Styles.buttonWrapper}>
        <motion.button
          whileHover={{ scale: 0.99 }}
          onClick={() => setCookieConsent(true)}
          className={Styles.cookieButtonGreen}
        >
          {t("cookieBannerButton")}
        </motion.button>
        <motion.button
          whileHover={{ scale: 0.99 }}
          onClick={() => setCookieConsent(false)}
          className={Styles.cookieButton}
        >
          {t("cookieBannerButton2")}
        </motion.button>
      </div>
    </div>
  );
}
