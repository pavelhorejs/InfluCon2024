"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import styles from "/components/footer/Footer.module.scss";
import Socials from "@/components/socials/socials_black/Socials";
import Woo from "@/components/woo/Woo";
import footerLogo from "/public/logo_3.svg";

type FooterMenuItem = {
  href: string;
  translationKey: string;
};

const generalMenuItems: FooterMenuItem[] = [
  { href: "/speakers", translationKey: "Footer.FooterSpeakers" },
  { href: "/#subscriber", translationKey: "Footer.FooterVstupenky" },
  { href: "/#blog", translationKey: "Footer.FooterBlog" },
  { href: "/contact", translationKey: "Footer.FooterKontakt" },
];

const otherMenuItems: FooterMenuItem[] = [
  { href: "/terms", translationKey: "Footer.FooterTerms" },
  { href: "/cookies", translationKey: "Footer.FooterCookies" },
  { href: "/gdpr", translationKey: "Footer.FooterGdpr" },
];

export const Footer = () => {
  const { t } = useTranslation();

  const renderMenuItem = ({ href, translationKey }: FooterMenuItem) => (
    <Link key={href} href={href}>
      <span className={styles.navigaceText}>{t(translationKey)}</span>
    </Link>
  );

  return (
    <footer className="bg-[#22FFAF]">
      <div className={styles.container}>
        <div className="flex flex-col items-center md:items-start">
          <Link href="/">
            <Image src={footerLogo} width={225} alt="footer logo" />
          </Link>
          <div className="mt-[24px]">
            <p className="pb-[8px]">{t("Footer.Organiser")}</p>
            <Woo />
          </div>

          <div className="mt-[24px] flex flex-col justify-center md:justify-start">
            <p className="pb-[11px]">{t("socials")}</p>
            <div className="flex w-full justify-center md:justify-start">
              <Socials />
            </div>
          </div>
        </div>

        <nav className="flex flex-col gap-[10px]">
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
        <nav className="flex flex-col gap-[10px]">
          <h6>{t("Footer.FooterObecne")}</h6>
          {generalMenuItems.map(renderMenuItem)}
        </nav>

        <nav className="flex flex-col gap-[10px]">
          <h6>{t("Footer.FooterOstatni")}</h6>
          {otherMenuItems.map(renderMenuItem)}
        </nav>
      </div>
      <div>
        <p className="pb-1 text-center text-sm text-gray-600">
          Copyright © {new Date().getFullYear()} InfluCon
        </p>
      </div>
    </footer>
  );
};
