"use client";
import { useTranslation } from "react-i18next";
import Revealx from "../reveals/Revealx";
import LazyLoad from "react-lazyload";
const Moderator = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Revealx delay={0.4}>
        <section className="flex flex-row justify-center gap-20 max-w-6xl mx-auto px-2">
          <div className="flex justify-center w-[450px]">
            <LazyLoad width={100} once>
              <video
                src="/tigran.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
              ></video>
            </LazyLoad>
          </div>
          <div className="flex flex-col items-start justify-center">
            <h2 className="pb-[24px]">Moderátor</h2>
            <p className="max-w-lg">
              {t("tigran")}
              <a href="https://www.instagram.com/tigran_hovakimyan/?hl=cs">
                <span className="underline greenhover">{t("tigran2")}</span>
              </a>
            </p>
          </div>
        </section>
      </Revealx>
    </div>
  );
};
export default Moderator;
