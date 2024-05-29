'use client'
import React, { useEffect, useState } from 'react';
import Styles from "/components/cookies/styles.module.scss";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { setCookie, hasCookie } from 'cookies-next';

function Consent() {
  const [consent, setConsent] = useState(true);
  const { t } = useTranslation();
  
  useEffect(() => {
    setConsent(hasCookie('localConsent'));
  }, []);

  const acceptCookie = () => {
    setConsent(true);
    setCookie('localConsent', 'true', { maxAge: 60 * 60 * 24 * 365 });
    gtag('consent', 'update', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted',
      personalization_storage: 'granted',
    });
  };

  const denyCookie = () => {
    setConsent(true);
    setCookie('localConsent', 'false', { maxAge: 60 * 60 * 24 * 365 });
  };
  if (consent === true) {
    return null;
  }
  return (
    <div
      className={`${Styles.cookieBanner} ${Styles.flex} ${
        consent ? 'hidden' : ''
      }`}
    >
              <div className={Styles.textWrapper}>
            <h3>{t("cookieBannerHdl")}</h3>
            <p>{t("cookieBanner")}</p>
          </div>

          <div className={Styles.buttonWrapper}>
            <motion.button
              whileHover={{ scale: 0.99 }}
              onClick={() => {
                acceptCookie();
              }}
              className={Styles.cookieButtonGreen}
            >
              {t("cookieBannerButton")}
            </motion.button>
            <motion.button
              whileHover={{ scale: 0.99 }}
          onClick={(e) => denyCookie()}
              className={Styles.cookieButton}
            >
              {t("cookieBannerButton2")}
            </motion.button>
          </div>

    </div>
  );
}

export default Consent;