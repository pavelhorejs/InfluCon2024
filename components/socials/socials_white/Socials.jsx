"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Revealx from "/components/reveals/Revealx";

const Socials = () => {
  return (
    <>
      <div className="flex gap-4">
        <Link
          href="https://www.instagram.com/world_of_online/"
          aria-label="Instagram icon"
        >
          <Revealx delay="1">
            <motion.img
              width={20}
              height={20}
              style={{ maxWidth: "100%", height: "auto" }}
              whileHover={{ scale: 0.95 }}
              src="/ig_white.svg"
              alt="instagram icon"
            />
          </Revealx>
        </Link>
        <Link
          href="https://www.facebook.com/worldofonlineagency"
          aria-label="Facebook icon"
        >
          <Revealx delay="1.2">
            <motion.img
              width={20}
              height={20}
              style={{ maxWidth: "100%", height: "auto" }}
              whileHover={{ scale: 0.95 }}
              src="/fb_white.svg"
              alt="facebook icon"
            />
          </Revealx>
        </Link>
        <Link
          href="https://www.linkedin.com/company/worldofonline/"
          aria-label="LinkedIn icon"
        >
          <Revealx delay="1.4">
            <motion.img
              width={20}
              height={20}
              style={{ maxWidth: "100%", height: "auto" }}
              whileHover={{ scale: 0.95 }}
              src="/in_white.svg"
              alt="linkedin icon"
            />
          </Revealx>
        </Link>
      </div>
    </>
  );
};
export default Socials;
