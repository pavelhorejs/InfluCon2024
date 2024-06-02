"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Revealx from "/components/reveals/Revealx";

const Socials = () => {
  return (
    <>
      <div className="flex gap-4">
        <Link
          href="https://www.instagram.com/influconcz/"
          aria-label="Instagram icon"
        >
          <Revealx delay="1">
            <motion.img
              width={22}
              height={22}
              style={{ maxWidth: "100%", height: "auto" }}
              whileHover={{ scale: 0.95 }}
              src="/ig_black.svg"
              alt="instagram icon"
            />
          </Revealx>
        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=61560266676251"
          aria-label="Facebook icon"
        >
          <Revealx delay="1.2">
            <motion.img
              width={14}
              height={22}
              style={{ maxWidth: "100%", height: "auto" }}
              whileHover={{ scale: 0.95 }}
              src="/fb_black.svg"
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
              width={22}
              height={22}
              style={{ maxWidth: "100%", height: "auto" }}
              whileHover={{ scale: 0.95 }}
              src="/in_black.svg"
              alt="linkedin icon"
            />
          </Revealx>
        </Link>
      </div>
    </>
  );
};
export default Socials;
