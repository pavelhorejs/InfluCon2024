"use client";

import Revealx from "../reveals/Revealx";
import { useTranslation } from "react-i18next";
import LazyLoad from "react-lazyload";

export const About = () => {
  const { t } = useTranslation();

  return (
    <div className="py-[64px] lg:py-[128px]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 justify-items-center gap-y-10 px-2 lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center lg:items-start">
          <Revealx delay={0.2}>
            <h2 className="pb-[24px] text-center lg:text-left">
              {t("aboutHeadline")}
            </h2>
          </Revealx>
          <Revealx delay={0.4}>
            <p className="max-w-lg text-center lg:text-left">
              {t("aboutP")} <br /> <br />
            </p>
            <p className="max-w-lg text-center lg:text-left">
              {t("aboutP2")} <br /> <br />
            </p>
          </Revealx>
        </div>
        <div className="mt-10 flex flex-col items-center md:mt-0">
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
        </div>
      </div>
    </div>
  );
};
