"use client";
import FaqComponent from "@/components/faq/Faq2";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="md:mt-480 mx-auto mt-32 max-w-6xl px-3 pb-14 lg:mt-40">
        <h2 className="pb-[24px] text-center">
          {t("Faq")} {t("Faq2")}
        </h2>
        <FaqComponent />
        <div className="mt-[48px] flex justify-center">
          <Link href="/#faq">
            <motion.button
              whileHover={{ scale: 0.97 }}
              transition={{ type: "spring" }}
              className="buttonGreen"
            >
              {t("Back")}
            </motion.button>
          </Link>
        </div>
      </div>
    </>
  );
}
