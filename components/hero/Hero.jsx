"use client";
import { motion } from "framer-motion";
import Dayscounter from "/components/days_counter/Dayscounter";
import Socials from "/components/socials/socials_green/Socials";
import Styles from "/components/hero/styles.module.scss";
import Revealx from "../reveals/Revealx";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import bgPhoto from "/public/bg.webp";
import Link from "next/link";

const Hero = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={Styles.hero}>
      <Image
        src={bgPhoto}
        className={Styles.image}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority={true}
      />

      <div className="md:hidden justify-end mt-5 md:mt-10 lg:mt-28">
        <div className="flex gap-[64px]">
          <div className={Styles.greenCard2}>
            <div className={Styles.blackItemMobile}></div>
            <div className={Styles.greenItem1Mobile}></div>
            <div className={Styles.greenItem2Mobile}></div>
            <p className={Styles.mainText2}>07.10.2024</p>
            <p className="text-black font-bold">{t("place")}</p>
            <Dayscounter />
          </div>
        </div>
      </div>
      <div className={Styles.grid}>
        {" "}
        <div className="mt-[8px] md:mt-10 lg:mt-28">
          <Revealx>
            <div className={Styles.redCard}>
              <div className={Styles.redItem1}></div>
              <div className={Styles.redItem2}></div>
              <h1>{t("heroHeadline")}</h1>
            </div>
          </Revealx>
          <div className="flex gap-[8px] lg:gap-[24px] mt-[8px] lg:mt-[24px]">
            {" "}
            <Revealx delay={0.2}>
              {" "}
              <Link
                href={
                  i18n.language === "cs"
                    ? "https://goout.net/cs/listky/influcon-2024/xdxy/"
                    : "https://goout.net/en/listky/influcon-2024/xdxy/"
                }
              >
                <motion.button
                  whileHover={{ scale: 0.97 }}
                  transition={{ type: "spring" }}
                  className="buttonGreen"
                >
                  {t("Button1")}
                </motion.button>
              </Link>
            </Revealx>
            <Revealx delay={0.4}>
              {" "}
              <a href="/contact">
                <motion.button
                  whileHover={{ scale: 0.97 }}
                  transition={{ type: "spring" }}
                  className="buttonGreen"
                >
                  {t("Button2")}
                </motion.button>
              </a>
            </Revealx>
          </div>
          <div className="mt-[48px]">
            <Revealx delay={1}>
              {" "}
              <p>{t("socials")}</p>
            </Revealx>
            <div className="mt-2">
              <Socials />
            </div>
          </div>
        </div>
        <Revealx delay={0.6}>
          {" "}
          <div className="hidden md:flex justify-end mt-5 md:mt-10 lg:mt-28">
            <div className="flex gap-[64px]  ">
              <Revealx delay={1.3}>
                {" "}
                <img src="/arow.svg" className="mt-32 " alt="arrow vector" />
              </Revealx>
              <div className={Styles.greenCard}>
                <div className={Styles.blackItem}></div>
                <div className={Styles.greenItem1}></div>
                <div className={Styles.greenItem2}></div>
                <p className={Styles.mainText}>
                  07 <br />
                  10 <br />
                  2024
                </p>
                <p className={Styles.offText}>{t("place")}</p>
                <div className="mt-10">
                  <Dayscounter />
                </div>
              </div>
            </div>
          </div>
        </Revealx>
      </div>
    </div>
  );
};
export default Hero;
