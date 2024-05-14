"use client";
import Flipcard1 from "/components/flip_card/flip1/Flipcard";
import Flipcard2 from "/components/flip_card/flip2/Flipcard";
import Flipcard3 from "/components/flip_card/flip3/Flipcard";
import Flipcard4 from "/components/flip_card/flip4/Flipcard";
import { motion } from "framer-motion";
import Link from "next/link";
import Revealx from "../reveals/Revealx";
const Speakers = () => {
  return (
    <div className="bg-[#22FFAF] py-10">
      {" "}
      <div className="max-w-7xl mx-auto px-2">
        <Revealx delay={0.2}>
          {" "}
          <h2 className="text-black pb-[32px]">Letošní speakeři</h2>
        </Revealx>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[16px] gap-y-[16px] pb-[32px] ">
          <Flipcard1 />
          <Flipcard2 />
          <Flipcard3 />
          <Flipcard4 />
        </div>
        <Revealx delay={0.2}>
          {" "}
          <Link href="/speakers">
            <motion.button
              whileHover={{ scale: 0.99 }}
              transition={{ type: "spring" }}
              className="button h-[64px]"
            >
              Více
            </motion.button>
          </Link>
        </Revealx>
      </div>
    </div>
  );
};
export default Speakers;
