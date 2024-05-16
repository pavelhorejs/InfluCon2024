"use client";
import Flipcard1 from "/components/flip_card/flip1/Flipcard";
import Flipcard2 from "/components/flip_card/flip2/Flipcard";
import Flipcard3 from "/components/flip_card/flip3/Flipcard";
import Flipcard4 from "/components/flip_card/flip4/Flipcard";
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
          <h2 className="text-black pb-[32px] text-center lg:text-left">
            {t("speakerComponent")}
          </h2>
        </Revealx>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[16px] gap-y-[16px] pb-[32px] ">
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
