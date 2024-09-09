"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Mam from "/public/mam.webp";
import Link from "next/link";
const Wroteaboutus = () => {
  const { t } = useTranslation();
  return (
    <section className="mx-auto max-w-7xl px-2">
      <h2 className="pb-[40px] text-center">{t("napsalionas")}</h2>
      <div className="mx-auto grid grid-cols-1 gap-[16px] md:grid-cols-3">
        <Link href="https://mam.cz/novinky/online-a-social/influencer-marketing/2024-05/konference-influcon-ukaze-roli-influenceru-pri-budovani-znacky/">
          <div className="image-box">
            <Image src={Mam}></Image>
          </div>
        </Link>
        <Link href="https://www.mediar.cz/kdo-v-influencer-marketingu-neco-znamena-bude-7-rijna-na-influconu/">
          <div className="image-box">
            <Image src={Mam}></Image>
          </div>
        </Link>
        <Link href="https://tv.nova.cz/clanek/572146-v-praze-se-bude-v-rijnu-konat-nejvetsi-konference-o-influencer-marketingu-influcon">
          <div className="image-box">
            <Image src={Mam}></Image>
          </div>
        </Link>
        <Link href="https://newsfeed.cz/v-praze-se-bude-v-rijnu-konat-nejvetsi-konference-o-influencer-marketingu-influcon/">
          <div className="image-box">
            <Image src={Mam}></Image>
          </div>
        </Link>
        <Link href="https://www.webtop100.cz/inspirace/podcast-webtop100-petr-srna-o-influconu">
          <div className="image-box">
            <Image src={Mam}></Image>
          </div>
        </Link>
        <Link href="https://mam.cz/novinky/komunita/akce/konference/2024-09/influcon-nejvetsi-konference-o-influencer-marketingu-bude-uz-v-rijnu/">
          <div className="image-box">
            <Image src={Mam}></Image>
          </div>
        </Link>
      </div>
    </section>
  );
};
export default Wroteaboutus;
