"use client";
import { Subscriber } from "@/components/subscriber/Subscriber";
import Revealx from "../reveals/Revealx";
import { useTranslation } from "react-i18next";

export const Subscribe = () => {
  const { t } = useTranslation();
  return (
    <section className="mx-auto max-w-7xl px-2 py-[64px]" id="subscriber">
      <Revealx delay={0.2}>
        <h2 className="pb-[32px] text-center lg:pb-[48px]">
          {t("SubsribeComponent")}
        </h2>
      </Revealx>
      <Revealx delay={0.4}>
        <Subscriber />
      </Revealx>
    </section>
  );
};
