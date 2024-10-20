"use client";
import styles from "/components/organizer/styles.module.scss";
import Revealx from "../reveals/Revealx";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import LazyLoad from "react-lazyload";
export const Organizer = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.container}>
      <Revealx delay={0.1}>
        <h2> {t("Organizer")}</h2>
      </Revealx>
      <div className="grid grid-cols-1 gap-x-[16px] lg:grid-cols-2">
        <Revealx>
          {" "}
          <div className="flex justify-center">
            <LazyLoad height={200} once>
              <video
                src="/reel.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
              ></video>
            </LazyLoad>
          </div>
        </Revealx>
        <div className="flex flex-col items-center justify-center pl-0 lg:items-start lg:pl-10">
          <div className={styles.blackItem1}></div>
          <div className={styles.blackItem2}></div>
          <div className={styles.greenItem1}></div>

          <Revealx delay={0.5}>
            {" "}
            <p className="mt-8 text-center text-3xl font-bold text-black lg:mt-0 lg:text-left">
              World of Online
            </p>
          </Revealx>
          <Revealx delay={0.6}>
            {" "}
            <p className="text-center lg:text-left">{t("OrganizerText")}</p>
          </Revealx>
          <div className="flex w-full justify-center lg:justify-end">
            <Revealx delay={0.4}>
              {" "}
              <Link href="https://woo.cz/">
                {" "}
                <img src="/woo_logo.svg" className="mt-5 w-32 md:mt-0" alt="" />
              </Link>
            </Revealx>
          </div>
        </div>
      </div>
    </section>
  );
};
