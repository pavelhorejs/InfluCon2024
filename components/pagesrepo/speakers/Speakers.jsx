"use client";
import Flipcard1 from "/components/flip_card/flip1/Flipcard";
import Flipcard2 from "/components/flip_card/flip2/Flipcard";
import Flipcard3 from "/components/flip_card/flip3/Flipcard";
import Flipcard4 from "/components/flip_card/flip4/Flipcard";
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
                <Flipcard1 />
              </div>
              <div className="flex justify-center">
                <Flipcard2 />
              </div>
              <div className="flex justify-center">
                {" "}
                <Flipcard3 />
              </div>
              <div className="flex justify-center">
                {" "}
                <Flipcard4 />
              </div>
              <div className="flex justify-center">
                {" "}
                <Flipcardwho />
              </div>
              <div className="flex justify-center">
                {" "}
                <Flipcardwho />
              </div>
              <div className="flex justify-center">
                {" "}
                <Flipcardwho />
              </div>
              <div className="flex justify-center">
                {" "}
                <Flipcardwho />
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
