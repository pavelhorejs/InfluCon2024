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
import Kaderavkova from "/components/flip_card/flip12/Flipcard";
import Dostal from "/components/flip_card/flip15/Flipcard";
import Hana from "/components/flip_card/flip13/Flipcard";
import Nova from "/components/flip_card/flip14/Flipcard";
import { motion } from "framer-motion";
import Link from "next/link";
import Revealx from "/components/reveals/Revealx";
import { useTranslation } from "react-i18next";
const Speakers = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="mt-28 lg:mt-40">
        <div className="bg-[#22FFAF] px-2">
          <div className="mx-auto max-w-7xl py-5 lg:py-14">
            <Revealx delay={0.2}>
              <h2 className="mt-5 pb-[24px] text-center text-black lg:mt-0 lg:text-left">
                {t("SpeakerPageHeadline")}
              </h2>
            </Revealx>
            <Revealx delay={0.4}>
              {" "}
              <p className="max-w-xl pb-[48px] text-center text-black lg:text-left">
                {t("SpeakerPageText")}
              </p>
            </Revealx>
            <div className="grid grid-cols-1 gap-x-[16px] gap-y-[32px] md:grid-cols-3 lg:grid-cols-4">
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
              <div className="flex justify-center">
                {" "}
                <BaraCard />{" "}
              </div>
              <div className="flex justify-center">
                {" "}
                <DenisaCard />{" "}
              </div>
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
                <Kaderavkova />
              </div>
              <div className="flex justify-center">
                {" "}
                <Hana />
              </div>
              <div className="flex justify-center">
                {" "}
                <Nova />
              </div>
              <div className="flex justify-center">
                {" "}
                <Dostal />
              </div>
              <div className="flex justify-center">
                {" "}
                <Flipcardwho />{" "}
              </div>
            </div>
            <Revealx delay={0.2}>
              {" "}
              <h2 className="font-3xl pb-5 pt-14 text-center text-black">
                {t("moreSoon")}
              </h2>
            </Revealx>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-2 py-[32px]">
        <Link href="/">
          <Revealx delay={0.2}>
            {" "}
            <motion.button
              whileHover={{ scale: 0.99 }}
              transition={{ type: "spring" }}
              className="button mx-auto h-[64px] max-w-[300px] md:max-w-full"
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
