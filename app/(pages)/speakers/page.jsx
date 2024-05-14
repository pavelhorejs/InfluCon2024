"use client";
import Flipcard1 from "/components/flip_card/flip1/Flipcard";
import Flipcard2 from "/components/flip_card/flip2/Flipcard";
import Flipcard3 from "/components/flip_card/flip3/Flipcard";
import Flipcard4 from "/components/flip_card/flip4/Flipcard";
import { motion } from "framer-motion";
import Link from "next/link";
import Revealx from "../../../components/reveals/Revealx";

const Page = () => {
  return (
    <>
      <div className="mt-20 lg:mt-40 ">
        <div className="bg-[#22FFAF] px-2">
          <div className="max-w-7xl mx-auto py-5 lg:py-14">
            <Revealx delay={0.2}>
              <h2 className="text-black pb-[24px]">Letošní speakeři</h2>
            </Revealx>
            <Revealx delay={0.4}>
              {" "}
              <p className="text-black max-w-xl pb-[48px]">
                Seznamte se s profíky, kteří jsou (nejen) v influencer
                marketingu jako doma. Přijďte si poslechnout o všem, co už
                zkusili za vás – a jak to fungovalo.
              </p>
            </Revealx>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-[16px] gap-y-[32px]">
              <Flipcard1 />
              <Flipcard2 />
              <Flipcard3 />
              <Flipcard4 />
            </div>
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
              className="button h-[64px]"
            >
              Zpět
            </motion.button>
          </Revealx>
        </Link>
      </div>
    </>
  );
};
export default Page;
