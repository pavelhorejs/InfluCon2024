"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Socials = () => {
  return (
    <>
      <div className="flex gap-4">
        <Link
          href="https://www.instagram.com/influconcz/"
          aria-label="Instagram icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img
            width={20}
            height={20}
            style={{ maxWidth: "100%", height: "auto" }}
            whileHover={{ scale: 0.95 }}
            src="/ig_white.svg"
            alt="instagram icon"
          />
        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=61560266676251"
          aria-label="Facebook icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img
            width={20}
            height={20}
            style={{ maxWidth: "100%", height: "auto" }}
            whileHover={{ scale: 0.95 }}
            src="/fb_white.svg"
            alt="facebook icon"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/showcase/104046570"
          aria-label="LinkedIn icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img
            width={20}
            height={20}
            style={{ maxWidth: "100%", height: "auto" }}
            whileHover={{ scale: 0.95 }}
            src="/in_white.svg"
            alt="linkedin icon"
          />
        </Link>
      </div>
    </>
  );
};
export default Socials;
