"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { getLocalStorage, setLocalStorage } from "../lib/storageHelper";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(null);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);
    if (storedCookieConsent === null) {
      setCookieConsent(null);
    } else {
      setCookieConsent(storedCookieConsent === "true");
    }
  }, []);

  useEffect(() => {
    if (cookieConsent !== null) {
      const newValue = cookieConsent ? "granted" : "denied";

      window.gtag("consent", "update", {
        analytics_storage: newValue,
      });

      setLocalStorage("cookie_consent", cookieConsent);
    }
  }, [cookieConsent]);
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className={`flex justify-center items-center gap-5 ${
        cookieConsent != null ? "hidden" : "flex"
      } px-0 `}
    >
      <div className="cookieBar flex items-center justify-between px-4 py-8 no-sides">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-y-10 gap-x-10">
          <div className="flex justify-center items-center">
            <p className="text-sm max-w-xl text-center md:text-left text-black">
              {t("cookieBanner")}
            </p>
          </div>

          <div className="flex flex-col gap-y-[16px] justify-center">
            {" "}
            <motion.button
              whileHover={{ scale: 0.99 }}
              onClick={() => setCookieConsent(true)}
              className="button"
            >
              {t("cookieBannerButton")}
            </motion.button>
            <motion.button
              whileHover={{ scale: 0.99 }}
              onClick={() => setCookieConsent(false)}
              className="text-black"
            >
              {t("cookieBannerButton2")}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
