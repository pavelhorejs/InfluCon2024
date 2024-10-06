import Revealhide from "/components/reveals/Revealhide";
import { motion } from "framer-motion";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="z-50 flex gap-6">
      <Revealhide delay={1.3}>
        <Link
          href="https://www.instagram.com/influconcz/"
          aria-label="Instagram icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <motion.img
            width={41}
            height={41}
            style={{ maxWidth: "100%", height: "auto" }}
            whileHover={{ scale: 0.85 }}
            src="/ig.svg"
            alt=""
          />
        </Link>
      </Revealhide>

      <Revealhide delay={1.6}>
        <Link
          href="https://www.facebook.com/profile.php?id=61560266676251"
          aria-label="Facebook icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <motion.img
            width={41}
            height={41}
            style={{ maxWidth: "100%", height: "auto" }}
            whileHover={{ scale: 0.85 }}
            src="/fb.svg"
            alt=""
          />
        </Link>
      </Revealhide>

      <Revealhide delay={1.9}>
        <Link
          href="https://www.linkedin.com/showcase/104046570"
          aria-label="LinkedIn icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <motion.img
            width={41}
            height={41}
            style={{ maxWidth: "100%", height: "auto" }}
            whileHover={{ scale: 0.85 }}
            src="/in.svg"
            alt=""
          />
        </Link>
      </Revealhide>
    </div>
  );
};
export default Socials;
