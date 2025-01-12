"use client";
import { Subscriber } from "@/components/subscriber/Subscriber";
import { useTranslation } from "react-i18next";

export const Subscribe = () => {
  const { t } = useTranslation();
  return (
    <section
      className="mx-auto mt-[32px] max-w-7xl px-2 pb-[128px]"
      id="subscriber"
    >
      <h2 className="pb-[32px] text-center lg:pb-[48px]">
        {t("SubsribeComponent")}
      </h2>
      <Subscriber />
    </section>
  );
};
