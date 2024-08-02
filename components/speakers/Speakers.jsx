"use client";
import LukasCard from "/components/flip_card/flip8/Flipcard";
import JanCard from "/components/flip_card/flip5/Flipcard";
import AdamCard from "/components/flip_card/flip4/Flipcard";
import Doublefoto from "/components/flip_card/flip10/Flipcard";
import { motion } from "framer-motion";
import Link from "next/link";
import Revealx from "/components/reveals/Revealx";
import { useTranslation } from "react-i18next";
const Speakers = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#22FFAF] py-10">
      {" "}
      <div className="max-w-7xl mx-auto px-2">
        <Revealx delay={0.2}>
          {" "}
          <h2 className="text-black pb-[32px] text-center">
            {t("speakerComponent")}
          </h2>
        </Revealx>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[16px] gap-y-[16px] pb-[32px] ">
          <div className="flex justify-center">
            <Doublefoto />
          </div>
          <div className="flex justify-center">
            <LukasCard />
          </div>
          <div className="flex justify-center">
            {" "}
            <AdamCard />{" "}
          </div>
          <div className="flex justify-center">
            {" "}
            <JanCard />
          </div>
        </div>{" "}
        <Link href="/speakers">
          <Revealx delay={0.2}>
            <motion.button
              whileHover={{ scale: 0.99 }}
              transition={{ type: "spring" }}
              className="button h-[64px] max-w-[300px] md:max-w-full mx-auto"
            >
              {t("viceButton")}
            </motion.button>
          </Revealx>
        </Link>
      </div>
    </div>
  );
};
export default Speakers;
