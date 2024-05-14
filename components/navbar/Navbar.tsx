"use client";
import React, { useState, useEffect } from "react";
import Styles from "./navbar.module.scss";
import { delay, motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
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
    <nav className=" ">
      <div
        className={`${Styles.navbar} ${
          isMobile && burgerMenuActive ? Styles.active : ""
        }`}
      >
        <div className={Styles.navigation}>
          {burgerMenuActive ? (
            <Link href="/">
              <img src="/logo_2.svg" alt="logo" width={150} />
            </Link>
          ) : (
            <Link href="/">
              <img src="/logo.svg" alt="logo" width={150} />
            </Link>
          )}

          {!isMobile && (
            <div className="flex gap-10">
              <div
                className={`flex gap-5 ${isMobile ? Styles.mobileMenu : ""}`}
              >
                <Link className={Styles.navigaceText} href="/speakers">
                  Speakři
                </Link>
                <a className={Styles.navigaceText} href="/#agenda">
                  Program
                </a>
                <Link className={Styles.navigaceText} href="/#tickets">
                  Vstupenky
                </Link>
                <Link className={Styles.navigaceText} href="/dashboard">
                  Online stream
                </Link>
                <Link className={Styles.navigaceText} href="/contact">
                  Kontakt
                </Link>
              </div>
              <p>CZ | EN</p>
              <Link href="/dashboard">
                <motion.img
                  whileHover={{ scale: 0.95 }}
                  src="/login.svg"
                  width={17}
                  alt=""
                />
              </Link>
            </div>
          )}
          {isMobile && (
            <div
              className={Styles.burgerMenuContainer}
              onClick={() => toggleBurgerMenu()}
            >
              <div className={Styles.burgerMenuTrigger}></div>
              <div className={Styles.burgerMenu}></div>
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
                <a href="/speakers">Speakři</a>
              </motion.li>
              <motion.li variants={listItemVariants}>
                <Link href="/#agenda">Program</Link>
              </motion.li>
              <motion.li variants={listItemVariants}>
                <a href="/#tickets">Vstupenky</a>
              </motion.li>
              <motion.li variants={listItemVariants}>
                <a href="/dashboard">Login</a>
              </motion.li>
              <motion.li variants={listItemVariants}>
                <a href="/dashboard">Live stream</a>
              </motion.li>
              <motion.li variants={listItemVariants}>
                <a href="/contact">Kontakt</a>
              </motion.li>
            </motion.ul>

            <div className="absolute bottom-5 ">
              <div className="flex gap-4">
                <Link href="">
                  {" "}
                  <img src="/ig_white.svg" alt="" />
                </Link>
                <Link href="">
                  <img src="/fb_white.svg" alt="" />
                </Link>
                <Link href="">
                  {" "}
                  <img src="/in_white.svg" alt="" />
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
