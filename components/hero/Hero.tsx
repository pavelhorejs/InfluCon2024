"use client";
import { motion } from "framer-motion";
import Dayscounter from "@/components/days_counter/Dayscounter";
import Socials from "@/components/socials/socials_green/Socials";
import Styles from "/components/hero/styles.module.scss";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import bgPhoto from "/public/bg.webp";
import Link from "next/link";

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className={Styles.hero}>
      <Image
        src={bgPhoto}
        className={`${Styles.image} object-cover`}
        alt="Background Image"
        fill={true}
        quality={100}
        priority={true}
      />

      <div className="mt-5 justify-end md:mt-10 md:hidden lg:mt-28">
        <div className="flex gap-[64px]">
          <div className={Styles.greenCard2}>
            <div className={Styles.blackItemMobile}></div>
            <div className={Styles.greenItem1Mobile}></div>
            <div className={Styles.greenItem2Mobile}></div>
            <p className={Styles.mainText2}>07.10.2024</p>
            <p className="font-bold text-black">{t("homepage.Hero.place")}</p>
          </div>
        </div>
      </div>
      <div className={Styles.grid}>
        <div className="mt-[8px] md:mt-10 lg:mt-28">
          <div className={Styles.redCard}>
            <div className={Styles.redItem1}></div>
            <div className={Styles.redItem2}></div>
            <h1>{t("homepage.Hero.heroHeadline")}</h1>
          </div>

          <div className="mt-[8px] flex gap-[8px] lg:mt-[24px] lg:gap-[24px]">
            <Link href="#subscriber">
              <motion.button
                whileHover={{ scale: 0.97 }}
                transition={{ type: "spring" }}
                className="buttonGreen"
              >
                {t("homepage.Hero.Button1")}
              </motion.button>
            </Link>

            <a href="/contact">
              <motion.button
                whileHover={{ scale: 0.97 }}
                transition={{ type: "spring" }}
                className="buttonGreen"
              >
                {t("homepage.Hero.Button2")}
              </motion.button>
            </a>
          </div>
          <div className="mt-[48px]">
            <p>{t("homepage.Hero.socials")}</p>

            <div className="mt-2">
              <Socials />
            </div>
          </div>
        </div>

        <div className="mt-5 hidden justify-end md:mt-10 md:flex lg:mt-28">
          <div className="flex gap-[64px]">
            <img src="/arow.svg" className="mt-32" alt="arrow vector" />

            <div className={Styles.greenCard}>
              <div className={Styles.blackItem}></div>
              <div className={Styles.greenItem1}></div>
              <div className={Styles.greenItem2}></div>
              <p className={Styles.mainText}>
                1.10. <br />
                2025
              </p>
              <p className={Styles.offText}>{t("homepage.Hero.place")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
