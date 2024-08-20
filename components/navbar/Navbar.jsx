"use client";
import React, { useState, useEffect } from "react";
import Styles from "./navbar.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import LanguageChanger from "/components/LanguageChanger";

const Navbar = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 910);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const toggleBurgerMenu = () => {
    setBurgerMenuActive(!burgerMenuActive);
  };

  const motionVariants = {
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        ease: "easeOut",
        type: "spring",
      },
    },
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1, // non-zero duration
        duration: 0.55, // non-zero duration
      },
    },
  };

  const listItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
    closed: {
      y: 100,
      opacity: 0,
      transition: {
        duration: 0.35, // non-zero duration
      },
    },
  };

  return (
    <nav>
      <div
        className={`${Styles.navbar} ${
          isMobile && burgerMenuActive ? Styles.active : ""
        }`}
      >
        <div className={Styles.navigation}>
          {burgerMenuActive ? (
            <Link href="/">
              <motion.img
                whileHover={{ scale: 0.97 }}
                transition={{ type: "spring" }}
                src="/logo_2.svg"
                alt="logo"
                width={160}
                height={150}
              />
            </Link>
          ) : (
            <Link href="/">
              <motion.img
                whileHover={{ scale: 0.97 }}
                transition={{ type: "spring" }}
                src="/logo.png"
                alt="logo"
                width={isMobile ? 180 : 250}
                height={200}
              />
            </Link>
          )}

          {!isMobile && (
            <div className="flex gap-10">
              <div
                className={`flex gap-5 ${isMobile ? Styles.mobileMenu : ""}`}
              >
                <Link className={Styles.navigaceText} href="/speakers">
                  {t("NavItem1")}
                </Link>
                <a className={Styles.navigaceText} href="/#agenda">
                  {t("NavItem2")}
                </a>
                <Link className={Styles.navigaceText} href="/#tickets">
                  {t("NavItem3")}
                </Link>
                <Link className={Styles.navigaceText} href="/#faq">
                  Q&A
                </Link>
                <Link className={Styles.navigaceText} href="/afterparty">
                  Afterparty
                </Link>
                <Link className={Styles.navigaceText} href="/contact">
                  {t("NavItem5")}
                </Link>
              </div>
              <LanguageChanger />
            </div>
          )}
          {isMobile && (
            <div className="flex gap-5">
              {" "}
              <LanguageChanger />
              <div
                className={Styles.burgerMenuContainer}
                onClick={() => toggleBurgerMenu()}
              >
                <div className={Styles.burgerMenuTrigger}></div>
                <div className={Styles.burgerMenu}></div>
              </div>
            </div>
          )}
        </div>
        {isMobile && burgerMenuActive && (
          <div className={Styles.mobileMenu}>
            <motion.ul
              variants={motionVariants}
              initial="closed"
              animate={burgerMenuActive ? "open" : "closed"}
              exit="closed"
            >
              <motion.li variants={listItemVariants}>
                <a href="/speakers"> {t("NavItem1")}</a>
              </motion.li>
              <motion.li variants={listItemVariants}>
                <Link href="/#agenda"> {t("NavItem2")}</Link>
              </motion.li>
              <motion.li variants={listItemVariants}>
                <a href="https://goout.net/cs/listky/influcon-2024/xdxy/">
                  {" "}
                  {t("NavItem3")}
                </a>
              </motion.li>

              <motion.li variants={listItemVariants}>
                <a href="/afterparty">Afterparty</a>
              </motion.li>
              <motion.li variants={listItemVariants}>
                <a href="/#faq">Q&A</a>
              </motion.li>
              <motion.li variants={listItemVariants}>
                <a href="/dashboard"> {t("NavItem4")}</a>
              </motion.li>
              <motion.li variants={listItemVariants}>
                <a href="/contact"> {t("NavItem5")}</a>
              </motion.li>
            </motion.ul>

            <div className="absolute bottom-5 ">
              <div className="flex gap-4">
                <Link href="https://www.instagram.com/world_of_online/">
                  {" "}
                  <img src="/ig_white.svg" alt="instagram icon" />
                </Link>
                <Link href="https://www.facebook.com/worldofonlineagency">
                  <img src="/fb_white.svg" alt="facebook icon" />
                </Link>
                <Link href="https://www.linkedin.com/company/worldofonline/">
                  {" "}
                  <img src="/in_white.svg" alt="linked in icon" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
