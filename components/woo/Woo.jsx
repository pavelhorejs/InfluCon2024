"use client";
import Link from "next/link";
import Image from "next/image";
import WooLogo from "/public/woo_logo.svg";
import { motion } from "framer-motion";
const Woo = () => {
  return (
    <motion.div whileHover={{ scale: 0.95 }} transition={{ type: "spring" }}>
      <Link href="https://woo.cz/">
        <Image src={WooLogo} width={120} alt="World of Online logo" />
      </Link>
    </motion.div>
  );
};
export default Woo;
