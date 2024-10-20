"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Revealx from "../reveals/Revealx";
import { useTranslation } from "react-i18next";

export const Cooperation = () => {
  const { t } = useTranslation();
  return (
    <section
      className="mx-auto flex max-w-6xl flex-col items-center justify-center px-2 pb-[64px] lg:pb-[128px]"
      id="partnership"
    >
      <Revealx delay={0.3}>
        <h2 className="pb-[24px] text-center">{t("CooperationComponent")}</h2>
      </Revealx>
      <Revealx delay={0.4}>
        <p className="max-w-lg pb-[24px] text-center">
          {t("CooperationComponent2")}
        </p>
      </Revealx>
      <div className="flex justify-center">
        <Revealx delay={0.6}>
          <div className="">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 0.97 }}
                transition={{ type: "spring" }}
                className="button"
              >
                {t("Button4")}
              </motion.button>
            </Link>
          </div>
        </Revealx>
      </div>
    </section>
  );
};
