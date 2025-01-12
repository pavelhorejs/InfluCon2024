"use client";
import { motion } from "framer-motion";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import Flipcard from "../flip_card/Flipcard";

import zuzka from "@/public/anna.webp";

export const Speakers = () => {
  const { t } = useTranslation();

  const SPEAKERS = [
    {
      name: "Petr Srnaddd",
      company: "World of Online",
      linkedin: "dfdsfasdf",
      imageCz: zuzka,
      imageEn: zuzka,
    },
    {
      name: "Petr Srndfda",
      company: "World of Online",
      linkedin: "fdasfasdfasdfasdfsadf",
      imageCz: zuzka,
      imageEn: zuzka,
    },
    {
      name: "Petr Srndfdfdfsaa",
      company: "World of Online",
      linkedin: "fadsfasdfasdfasdfas",
      imageCz: zuzka,
      imageEn: zuzka,
    },
    {
      name: "Petr Srdfasdfsdna",
      company: "World of Online",
      linkedin: "fdfasfasd",
      imageCz: zuzka,
      imageEn: zuzka,
    },
  ];

  return (
    <section className="bg-[#22FFAF] py-[64px]">
      <div className="mx-auto max-w-7xl px-2">
        <h2 className="pb-[32px] text-center font-black text-black lg:pb-[32px] lg:text-left">
          {t("speakerComponent")}
        </h2>
        <div className="grid grid-cols-1 gap-x-[16px] pb-[64px] lg:grid-cols-4">
          {SPEAKERS.map((speaker) => (
            <div key={speaker.name}>
              {speaker.linkedin}
              <Flipcard
                name={speaker.name}
                company={speaker.company}
                linkedin={speaker.linkedin}
                imageCz={speaker.imageCz}
                imageEn={speaker.imageEn}
              />
            </div>
          ))}
        </div>

        <Link href="/speakers">
          <motion.button
            whileHover={{ scale: 0.99 }}
            transition={{ type: "spring" }}
            className="button mx-auto h-[64px] max-w-[300px] md:max-w-full"
          >
            {t("viceButton")}
          </motion.button>
        </Link>
      </div>
    </section>
  );
};
