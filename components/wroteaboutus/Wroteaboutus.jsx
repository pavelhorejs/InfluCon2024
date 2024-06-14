"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Mam from "/public/mam.webp";
import Link from "next/link";
const Wroteaboutus = () => {
  const { t } = useTranslation();
  return (
    <section className="max-w-7xl mx-auto px-2">
      <h2 className="text-center pb-[40px]">{t("napsalionas")}</h2>
      <div className="max-w-[500px] mx-auto">
        <Link href="https://mam.cz/novinky/online-a-social/influencer-marketing/2024-05/konference-influcon-ukaze-roli-influenceru-pri-budovani-znacky/">
          <div className="image-box">
            <Image src={Mam}></Image>
          </div>
        </Link>
      </div>
    </section>
  );
};
export default Wroteaboutus;
