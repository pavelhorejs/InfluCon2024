"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Revealx from "../reveals/Revealx";
import { useTranslation } from "react-i18next";
const Program = () => {
  const { t } = useTranslation();
  return (
    <section
      className="flex flex-col justify-center items-center max-w-6xl mx-auto px-2"
      id="partnership"
    >
      {" "}
      <Revealx delay={0.3}>
        <h2 className="text-center pb-[24px]">{t("CooperationComponent")}</h2>
      </Revealx>
      <Revealx delay={0.4}>
        {" "}
        <p className="max-w-lg text-center pb-[24px]">
          {t("CooperationComponent2")}
        </p>
      </Revealx>
      <div className="flex justify-center">
        {" "}
        <Revealx delay={0.6}>
          {" "}
          <div className="">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 0.97 }}
                transition={{ type: "spring" }}
                className="button"
              >
                {t("Button4")}
              </motion.button>
            </Link>
          </div>
        </Revealx>
      </div>
    </section>
  );
};
export default Program;
