"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";

const DATA = [
  {
    link: "/WroteAboutUs/0.jpg",
    alt: "Web top 100 podcast",
    href: "https://www.webtop100.cz/inspirace/podcast-webtop100-petr-srna-o-influconu",
  },
  {
    link: "/WroteAboutUs/1.jpg",
    alt: "MAM Influcon článek",
    href: "https://mam.cz/novinky/komunita/akce/konference/2024-09/influcon-nejvetsi-konference-o-influencer-marketingu-bude-uz-v-rijnu/",
  },
  {
    link: "/WroteAboutUs/2.jpg",
    alt: "Mediář článek",
    href: "https://www.mediar.cz/kdo-v-influencer-marketingu-neco-znamena-bude-7-rijna-na-influconu/",
  },
  {
    link: "/WroteAboutUs/3.jpg",
    alt: "TV nova článek",
    href: "https://tv.nova.cz/clanek/572146-v-praze-se-bude-v-rijnu-konat-nejvetsi-konference-o-influencer-marketingu-influcon",
  },
  {
    link: "/WroteAboutUs/4.jpg",
    alt: "Newsfeed článek",
    href: "https://newsfeed.cz/v-praze-se-bude-v-rijnu-konat-nejvetsi-konference-o-influencer-marketingu-influcon/",
  },
  {
    link: "/WroteAboutUs/5.jpg",
    alt: "Mam článek",
    href: "https://mam.cz/novinky/online-a-social/influencer-marketing/2024-05/konference-influcon-ukaze-roli-influenceru-pri-budovani-znacky/",
  },
];

export const Wroteaboutus = () => {
  const { t } = useTranslation();

  return (
    <section className="mx-auto max-w-7xl px-2 py-[64px] lg:py-[128px]">
      <h2 className="pb-[40px] text-center">{t("napsalionas")}</h2>
      <div className="mx-auto grid grid-cols-1 gap-[16px] md:grid-cols-3">
        {DATA.map((item, index) => (
          <Link key={index} href={item.href} target="_blank">
            <div className="image-box">
              <Image width={1200} height={600} alt={item.alt} src={item.link} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
