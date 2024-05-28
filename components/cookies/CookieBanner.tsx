"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Script from "next/script";
import Styles from "/components/cookies/styles.module.scss";
import { getLocalStorage, setLocalStorage } from "../../lib/storageHelper";
import { motion } from "framer-motion";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    // Load Google Tag Manager script with initial configuration (no cookies)
    loadGoogleTagManagerScript(false);

    // Retrieve stored consent
    const storedCookieConsent = getLocalStorage("cookie_consent", null);
    if (storedCookieConsent !== null) {
      setCookieConsent(storedCookieConsent === "true");
    }
  }, []);

  const loadGoogleTagManagerScript = (useCookies: boolean) => {
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtm.js?id=GTM-KKTPGCGL${
      useCookies ? "&gtm_cookies_win=x" : ""
    }`;
    script.async = true;
    document.body.appendChild(script);
  };

  useEffect(() => {
    if (cookieConsent !== null) {
      const newValue = cookieConsent ? "granted" : "denied";

      // Update Google Tag Manager consent settings
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("consent", "update", {
          analytics_storage: newValue,
          ad_storage: newValue,
        });
      }

      // Store consent preference
      setLocalStorage("cookie_consent", cookieConsent.toString());
    }
  }, [cookieConsent]);

  const handleCookieConsent = (consent: boolean) => {
    // Set cookie consent and trigger GTM update
    setCookieConsent(consent);
  };

  return (
    <>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KKTPGCGL"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      {cookieConsent === null && (
        <div className={`${Styles.cookieBanner} ${Styles.flex}`}>
          <div className={Styles.textWrapper}>
            <h3>{t("cookieBannerHdl")}</h3>
            <p>{t("cookieBanner")}</p>
          </div>
          <div className={Styles.buttonWrapper}>
            <motion.button
              whileHover={{ scale: 0.99 }}
              onClick={() => handleCookieConsent(true)}
              className={Styles.cookieButtonGreen}
            >
              {t("cookieBannerButton")}
            </motion.button>
            <motion.button
              whileHover={{ scale: 0.99 }}
              onClick={() => handleCookieConsent(false)}
              className={Styles.cookieButton}
            >
              {t("cookieBannerButton2")}
            </motion.button>
          </div>
        </div>
      )}

      {cookieConsent !== null && (
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;
              })(window,document,'script','dataLayer','GTM-KKTPGCGL');
            `,
          }}
        />
      )}
    </>
  );
}
