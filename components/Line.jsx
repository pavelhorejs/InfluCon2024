"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const Line = () => {
  return (
    <motion.div
      initial={{ opacity: "0" }}
      transition={{ delay: "1" }}
      animate={{ opacity: "1" }}
      className="absolute top-20 left-[50vw]"
    >
      <Image
        width={161}
        height={119}
        style={{ maxWidth: "100%", height: "auto" }}
        src="/line.svg"
        alt="linka"
      />
    </motion.div>
  );
};
export default Line;
