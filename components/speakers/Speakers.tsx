"use client";
import { motion } from "framer-motion";

import Link from "next/link";
import Revealx from "@/components/reveals/Revealx";
import { useTranslation } from "react-i18next";
import SpeakersMap from "./SpeakersMap";
import { RenderSpeakers } from "./RenderSpeakers";

export const Speakers = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-[#22FFAF] py-[64px]">
      <div className="mx-auto max-w-7xl px-2">
        <Revealx delay={0.2}>
          <h2 className="pb-[32px] text-center text-black">
            {t("speakerComponent")}
          </h2>
        </Revealx>
        <RenderSpeakers />
        <Link href="/speakers">
          <Revealx delay={0.2}>
            <motion.button
              whileHover={{ scale: 0.99 }}
              transition={{ type: "spring" }}
              className="button mx-auto h-[64px] max-w-[300px] md:max-w-full"
            >
              {t("viceButton")}
            </motion.button>
          </Revealx>
        </Link>
      </div>
    </section>
  );
};
