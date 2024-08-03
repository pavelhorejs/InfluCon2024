"use client";
import PetrCard from "/components/flip_card/flip1/Flipcard";
import AdamCard from "/components/flip_card/flip4/Flipcard";
import JanCard from "/components/flip_card/flip5/Flipcard";
import DenisaCard from "/components/flip_card/flip6/Flipcard";
import LukasCard from "/components/flip_card/flip8/Flipcard";
import BaraCard from "/components/flip_card/flip9/Flipcard";
import Doublefoto from "/components/flip_card/flip10/Flipcard";
import NikoCard from "/components/flip_card/flip11/Flipcard";
import Flipcardwho from "/components/flip_card/flipwho/Flipcard";
import { motion } from "framer-motion";
import Link from "next/link";
import Revealx from "/components/reveals/Revealx";
import { useTranslation } from "react-i18next";
const Speakers = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="mt-28 lg:mt-40 ">
        <div className="bg-[#22FFAF] px-2">
          <div className="max-w-7xl mx-auto py-5 lg:py-14">
            <Revealx delay={0.2}>
              <h2 className="text-black pb-[24px] text-center lg:text-left mt-5 lg:mt-0">
                {t("SpeakerPageHeadline")}
              </h2>
            </Revealx>
            <Revealx delay={0.4}>
              {" "}
              <p className="text-black max-w-xl pb-[48px] text-center lg:text-left">
                {t("SpeakerPageText")}
              </p>
            </Revealx>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-[16px] gap-y-[32px]">
              <div className="flex justify-center">
                <Doublefoto />
              </div>
              <div className="flex justify-center">
                <LukasCard />
              </div>
              <div className="flex justify-center">
                {" "}
                <NikoCard />{" "}
              </div>
              <div className="flex justify-center">
                <JanCard />
              </div>
              {/* <div className="flex justify-center">
                {" "}
                <BaraCard />{" "}
              </div>
              <div className="flex justify-center">
                {" "}
                <DenisaCard />{" "}
              </div> */}
              <div className="flex justify-center">
                {" "}
                <AdamCard />{" "}
              </div>
              <div className="flex justify-center">
                {" "}
                <PetrCard />
              </div>
              <div className="flex justify-center">
                {" "}
                <Flipcardwho />{" "}
              </div>
            </div>
            <Revealx delay={0.2}>
              {" "}
              <h2 className="pt-14 pb-5 font-3xl text-black text-center">
                {t("moreSoon")}
              </h2>
            </Revealx>
          </div>
        </div>
      </div>
      <div className="py-[32px] max-w-[1280px] mx-auto px-2">
        <Link href="/">
          <Revealx delay={0.2}>
            {" "}
            <motion.button
              whileHover={{ scale: 0.99 }}
              transition={{ type: "spring" }}
              className="button h-[64px] max-w-[300px] md:max-w-full mx-auto"
            >
              {t("Back")}
            </motion.button>
          </Revealx>
        </Link>
      </div>
    </>
  );
};
export default Speakers;
