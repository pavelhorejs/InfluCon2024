"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import NetImage from "@/public/net.png";

export const Cooperation = () => {
  const { t } = useTranslation();
  return (
    <section className="relative bg-[#181818]">
      <Image
        src={NetImage}
        alt="Net"
        className="object-cover opacity-50"
        fill
      />
      <section
        className="mx-auto flex max-w-6xl flex-col items-center justify-center px-2 pb-[64px] lg:py-[90px]"
        id="partnership"
      >
        <h2 className="pb-[24px] text-center lg:max-w-[690px]">
          {t("CooperationComponent")}
        </h2>

        <p className="max-w-lg pb-[24px] text-center">
          {t("CooperationComponent2")}
        </p>

        <div className="flex justify-center">
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
        </div>
      </section>
    </section>
  );
};
