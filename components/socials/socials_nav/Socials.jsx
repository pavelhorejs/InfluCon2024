import Revealhide from "/components/reveals/Revealhide";
import { motion } from "framer-motion";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="flex gap-6 z-50">
      <Revealhide delay={1.3}>
        <Link href="https://www.instagram.com/world_of_online/">
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
        <Link href="https://www.facebook.com/worldofonlineagency">
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
        <Link href="https://www.linkedin.com/company/worldofonline/">
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
