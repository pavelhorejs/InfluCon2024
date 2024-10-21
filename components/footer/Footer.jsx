"use client";
import Link from "next/link";
import styles from "/components/footer/Footer.module.scss";
import Socials from "/components/socials/socials_black/Socials";
import Woo from "/components/woo/Woo";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import footerLogo from "/public/logo_3.svg";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.bgBlue}>
      <div className={styles.container}>
        <div className="flex flex-col items-center md:items-start">
          <Link href="/">
            <Image src={footerLogo} width={225} alt="footer logo" />
          </Link>
          <div className="mt-[24px]">
            <p className="pb-[8px]">{t("Organiser")}</p>
            <Woo />
          </div>

          <div className="mt-[24px] flex flex-col justify-center md:justify-start">
            <p className="pb-3">{t("socials")}</p>
            <div className="flex w-full justify-center md:justify-start">
              {" "}
              <Socials />
            </div>
          </div>
        </div>

        <nav className={styles.menuSection}>
          {/* <h6>{t("adresakonference")}</h6>
          <p>
            Clarion Congress Hotel Prague <br />
            Freyova 945/33 <br />
            190 00 Praha 9 - Vysočany
          </p>
          <h6 className="mt-4">{t("adresaafter")}</h6>
          <p>
            OX CLUB <br />
            Francouzská 75/4 <br />
            120 00 Praha 2 - Vinohrady
          </p> */}
        </nav>
        <nav className={styles.menuSection}>
          <h6>{t("FooterObecne")}</h6>
          <Link href="/speakers">
            <span className={styles.navigaceText}>{t("FooterSpeakers")}</span>
          </Link>
          <Link href="/#tickets">
            <span className={styles.navigaceText}>{t("FooterVstupenky")}</span>
          </Link>
          <Link href="/#blog">
            <span className={styles.navigaceText}>{t("FooterBlog")}</span>
          </Link>
          <a href="/contact">
            <span className={styles.navigaceText}>{t("FooterKontakt")}</span>
          </a>
        </nav>

        <nav className={styles.menuSection}>
          <h6>{t("FooterOstatni")}</h6>
          <Link href="/terms">
            <span className={styles.navigaceText}>{t("FooterTerms")}</span>
          </Link>
          <Link href="/cookies">
            <span className={styles.navigaceText}>{t("FooterCookies")}</span>
          </Link>
          <Link href="/gdpr">
            <span className={styles.navigaceText}>{t("FooterGdpr")}</span>
          </Link>
        </nav>
      </div>
      <div>
        <p className="pb-1 text-center text-sm text-gray-600">
          Copyright © 2024 InfluCon
        </p>
      </div>
    </footer>
  );
};
export default Footer;
