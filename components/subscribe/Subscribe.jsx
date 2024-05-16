"use client";
import Subscriber from "/components/subscriber/Subscriber";
import Revealx from "../reveals/Revealx";
import { useTranslation } from "react-i18next";

const Subscribe = () => {
  const { t } = useTranslation();
  return (
    <section className="max-w-7xl mx-auto px-2">
      <Revealx delay={0.2}>
        <h2 className="text-center pb-[32px] lg:pb-[48px]">
          {t("SubsribeComponent")}
        </h2>
      </Revealx>
      <Revealx delay={0.4}>
        <Subscriber />
      </Revealx>
    </section>
  );
};
export default Subscribe;
