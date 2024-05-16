"use client";
import styles from "/components/organizer/styles.module.scss";
import Revealx from "../reveals/Revealx";
import Link from "next/link";
import { useTranslation } from "react-i18next";
const Organizer = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.container}>
      <Revealx delay={0.1}>
        <h2> {t("Organizer")}</h2>
      </Revealx>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[16px]">
        <Revealx>
          {" "}
          <div className="flex justify-center">
            <video
              src="/reel.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
            ></video>
          </div>
        </Revealx>
        <div className="flex flex-col justify-center items-center lg:items-start pl-0 lg:pl-10">
          <div className={styles.blackItem1}></div>
          <div className={styles.blackItem2}></div>
          <div className={styles.greenItem1}></div>

          <Revealx delay={0.5}>
            {" "}
            <p className="text-black text-3xl font-bold text-center lg:text-left mt-8 lg:mt-0">
              World of Online
            </p>
          </Revealx>
          <Revealx delay={0.6}>
            {" "}
            <p className="text-center lg:text-left">{t("OrganizerText")}</p>
          </Revealx>
          <div className="flex justify-center lg:justify-end w-full ">
            <Revealx delay={0.4}>
              {" "}
              <Link href="https://woo.cz/">
                {" "}
                <img src="/woo_logo.svg" className="w-32 mt-5 md:mt-0" alt="" />
              </Link>
            </Revealx>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Organizer;
