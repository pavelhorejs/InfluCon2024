"use client";
import { useTranslation } from "react-i18next";

import LazyLoad from "react-lazyload";
const Moderator = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="mx-auto flex max-w-6xl flex-row flex-wrap justify-center gap-x-20 gap-y-[24px] px-2">
      <div className="video-div flex w-[450px] justify-center">
        <LazyLoad width={100} once>
          <video
            src={i18n.language === "en" ? "/tigran_en.mp4" : "/tigran_cz.mp4"}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
          ></video>
        </LazyLoad>
      </div>
      <div className="text-div flex flex-col justify-center">
        <h2 className="pb-[16px] text-center lg:text-left">{t("tigranhdl")}</h2>
        <p className="max-w-lg text-center lg:text-left">
          {t("tigran")}
          <a href="https://www.instagram.com/tigran_hovakimyan/?hl=cs">
            <span className="greenhover underline">{t("tigran2")}</span>
          </a>
        </p>
      </div>
    </section>
  );
};
export default Moderator;
