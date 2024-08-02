"use client";
import { useTranslation } from "react-i18next";
import Revealx from "../reveals/Revealx";
import LazyLoad from "react-lazyload";
const Moderator = () => {
  const { t, i18n } = useTranslation();
  return (
    <Revealx delay={0.4}>
      <section className="flex flex-row flex-wrap justify-center gap-x-20 gap-y-[24px] max-w-6xl mx-auto px-2">
        <div className="video-div flex justify-center w-[450px]">
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
          <h2 className="pb-[16px] text-center lg:text-left">
            {t("tigranhdl")}
          </h2>
          <p className="max-w-lg text-center lg:text-left">
            {t("tigran")}
            <a href="https://www.instagram.com/tigran_hovakimyan/?hl=cs">
              <span className="underline greenhover">{t("tigran2")}</span>
            </a>
          </p>
        </div>
      </section>
    </Revealx>
  );
};
export default Moderator;
