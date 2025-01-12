"use client";

import { RenderSpeakers } from "@/components/speakers/RenderSpeakers";
import { motion } from "framer-motion";
import Link from "next/link";

import { useTranslation } from "react-i18next";

export const SpeakersPage = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className="mt-28 lg:mt-40">
        <div className="bg-[#22FFAF] px-2">
          <div className="mx-auto max-w-7xl py-5 lg:py-14">
            <h2 className="mt-5 pb-[24px] text-center text-black lg:mt-0 lg:text-left">
              {t("SpeakerPageHeadline")}
            </h2>

            <p className="max-w-xl pb-[48px] text-center text-black lg:text-left">
              {t("SpeakerPageText")}
            </p>

            <RenderSpeakers />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-2 py-[32px]">
        <Link href="/">
          <motion.button
            whileHover={{ scale: 0.99 }}
            transition={{ type: "spring" }}
            className="button mx-auto h-[64px] max-w-[300px] md:max-w-full"
          >
            {t("Back")}
          </motion.button>
        </Link>
      </div>
    </section>
  );
};
