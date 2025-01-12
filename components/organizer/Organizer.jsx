"use client";
import styles from "/components/organizer/styles.module.scss";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import LazyLoad from "react-lazyload";
export const Organizer = () => {
  const { t } = useTranslation();
  return (
    <section className={`${styles.container} mt-[64px] lg:mt-[120px]`}>
      <h2> {t("Organizer")}</h2>
      <div className="grid grid-cols-1 gap-x-[16px] lg:grid-cols-2">
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
        <div className="flex flex-col items-center justify-center pl-0 lg:items-start lg:pl-10">
          <div className={styles.blackItem1}></div>
          <div className={styles.blackItem2}></div>
          <div className={styles.greenItem1}></div>

          <p className="mt-8 text-center text-3xl font-bold text-black lg:mt-0 lg:text-left">
            World of Online
          </p>

          <p className="text-center lg:text-left">{t("OrganizerText")}</p>
          <div className="flex w-full justify-center lg:justify-end">
            <Link href="https://woo.cz/">
              <img src="/woo_logo.svg" className="mt-5 w-32 md:mt-0" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
