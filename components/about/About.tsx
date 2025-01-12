"use client";

import { useTranslation } from "react-i18next";
import LazyLoad from "react-lazyload";

export const About = () => {
  const { t } = useTranslation();

  return (
    <div className="py-[64px] lg:py-[140px]">
      <div className="mx-auto max-w-7xl grid-cols-2 gap-x-[80px] px-2 text-center lg:grid">
        <LazyLoad height={200} once>
          <video
            src="/mood-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls={true}
          ></video>
        </LazyLoad>

        <div>
          <h2 className="pb-[24px] lg:text-left">{t("aboutHeadline")}</h2>
          <p className="lg:text-left">{t("aboutP")}</p>
        </div>
      </div>
    </div>
  );
};
