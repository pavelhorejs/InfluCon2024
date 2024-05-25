"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Script from "next/script";
import Styles from "/components/cookies/styles.module.scss";
import { getLocalStorage, setLocalStorage } from "../../lib/storageHelper";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);
    if (storedCookieConsent !== null) {
      setCookieConsent(storedCookieConsent === "true");
    }
  }, []);

  useEffect(() => {
    if (cookieConsent !== null) {
      const newValue = cookieConsent ? "granted" : "denied";
      setLocalStorage("cookie_consent", cookieConsent.toString());

      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("consent", "update", {
          analytics_storage: newValue,
          ad_storage: newValue,
        });
      }
    }
  }, [cookieConsent]);

  if (cookieConsent !== null) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=GTM-KKTPGCGL`}
      />
      <Script
        id="ga-default-consent"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
            });

            gtag('config', 'GTM-KKTPGCGL', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

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
    </>
  );
}
