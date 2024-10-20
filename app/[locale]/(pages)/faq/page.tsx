"use client";
import FaqComponent from "@/components/faq/Faq2";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { motion } from "framer-motion";
import Revealx from "@/components/reveals/Revealx";

export default function Page() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="md:mt-480 mx-auto mt-32 max-w-6xl px-3 pb-14 lg:mt-40">
        <Revealx delay={0.2}>
          {" "}
          <h2 className="pb-[24px] text-center">
            {t("Faq")} {t("Faq2")}
          </h2>
        </Revealx>
        <Revealx delay={0.4}>
          {" "}
          <FaqComponent />
        </Revealx>
        <div className="mt-[48px] flex justify-center">
          <Revealx delay={0.2}>
            {" "}
            <Link href="/#faq">
              <motion.button
                whileHover={{ scale: 0.97 }}
                transition={{ type: "spring" }}
                className="buttonGreen"
              >
                {t("Back")}
              </motion.button>
            </Link>
          </Revealx>
        </div>
      </div>
    </>
  );
}
