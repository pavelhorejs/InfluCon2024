"use client";
import { useEffect, useState } from "react";
import styles from "./StickyBanner.module.scss";
import Button from "../../components/buttons/button/Button";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Link from "next/link";

const StickyBanner = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
    const triggerHeight = viewportHeight * 0.3;

    if (scrollPosition > triggerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.banner} ${
        isVisible ? styles.visible : styles.hidden
      }`}
    >
      <div className="flex justify-between items-center px-[5vw]">
        <div className="flex items-center gap-[24px]">
          {" "}
          <p className="text-4xl font-bold">!</p>
          <p className="text-xl font-bold">{t("stickyHdl")}</p>
        </div>

        <Link href="https://goout.net/cs/listky/influcon-2024/xdxy/">
          <motion.button
            whileHover={{ scale: 0.97 }}
            transition={{ type: "spring" }}
            className="buttonGreen"
          >
            {t("Button3")}
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default StickyBanner;
