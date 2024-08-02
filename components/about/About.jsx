"use client";
import Styles from "/components/about/styles.module.scss";
import Revealx from "../reveals/Revealx";
import { useTranslation } from "react-i18next";
import LazyLoad from "react-lazyload";
const About = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-28 lg:mt-[190px]">
      {" "}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 justify-items-center max-w-6xl mx-auto px-2">
        <div className="flex flex-col items-center lg:items-start justify-center ">
          <Revealx delay={0.2}>
            <h2 className="pb-[24px] text-center lg:text-left">
              {t("aboutHeadline")}
            </h2>
          </Revealx>
          <Revealx delay={0.4}>
            {" "}
            <p className="max-w-lg text-center lg:text-left">
              {t("aboutP")} <br /> <br />
            </p>
            <p className="max-w-lg text-center lg:text-left">
              {t("aboutP2")} <br /> <br />
            </p>
            <p className="max-w-lg text-center lg:text-left">{t("aboutP3")}</p>
          </Revealx>
        </div>
        <div className="flex flex-col items-center mt-10 md:mt-0">
          <LazyLoad height={200} once>
            <video
              src="/pozvanka.mp4"
              className=" h-[600px]"
              controls
              loop
            ></video>
          </LazyLoad>
        </div>
      </div>
    </div>
  );
};
export default About;
