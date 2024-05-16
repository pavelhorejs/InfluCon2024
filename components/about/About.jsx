"use client";
import Styles from "/components/about/styles.module.scss";
import Revealx from "../reveals/Revealx";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-28 lg:mt-[190px]">
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto px-2">
        <div className="flex flex-col items-center lg:items-start">
          <Revealx delay={0.2}>
            <h2 className="pb-[24px] text-center lg:text-start">
              {t("aboutHeadline")}
            </h2>
          </Revealx>
          <Revealx delay={0.4}>
            {" "}
            <p className="max-w-lg text-center lg:text-start">
              {t("aboutP")} <br /> <br />
            </p>
            <p className="max-w-lg text-center lg:text-start">
              {t("aboutP2")} <br /> <br />
            </p>
            <p className="max-w-lg text-center lg:text-start">{t("aboutP3")}</p>
          </Revealx>
        </div>
        <div className="flex flex-col items-center mt-10 md:mt-0">
          {" "}
          <div className="flex flex-col gap-[24px] items-center lg:items-start">
            <Revealx delay={0.4}>
              {" "}
              <div className={Styles.redButton}>Influencers</div>
            </Revealx>
            <Revealx delay={0.3}>
              {" "}
              <div className={Styles.greenButton}>Platforms</div>
            </Revealx>

            <Revealx delay={0.5}>
              {" "}
              <div className={Styles.greenButton}>Agencies</div>
            </Revealx>
            <Revealx delay={0.2}>
              {" "}
              <div className={Styles.greenButton}>Brands</div>
            </Revealx>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
