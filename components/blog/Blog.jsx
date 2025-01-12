"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import imageIm from "/public/im.webp";
import imageImMobile from "/public/IM_mobile.jpg";
import imageOchrana from "/public/ochrana.webp";
import imageOchranaMobile from "/public/Ochrana_mobile.jpg";
import imageKampane from "/public/kampane.webp";
import imageKampaneMobile from "/public/Kampane_mobile.jpg";
import { useState, useEffect } from "react";

export const Blog = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <section
      className="mx-auto max-w-7xl px-2 py-[64px] lg:py-[128px]"
      id="blog"
    >
      <h2 className="pb-[32px] text-center lg:pb-[48px]">Blog</h2>

      <div className="grid grid-cols-1 gap-[24px] md:grid-cols-3">
        <Link href="/blog/trendy_im">
          <div>
            <div className="image-box">
              <Image
                src={isMobile ? imageImMobile : imageIm}
                alt="blog cover"
              />
            </div>

            <p className="mt-[8px] font-bold">{t("Blog")}</p>
          </div>
        </Link>
        <Link href="/blog/smluvni_ochrana">
          <div>
            <div className="image-box">
              <Image
                src={isMobile ? imageOchranaMobile : imageOchrana}
                alt="blog cover"
              />
            </div>

            <p className="mt-[8px] font-bold">{t("Blog2")}</p>
          </div>
        </Link>
        <Link href="/blog/analyza_vykonu">
          <div>
            <div className="image-box">
              <Image
                src={isMobile ? imageKampaneMobile : imageKampane}
                alt="blog cover"
              />
            </div>

            <p className="mt-[8px] font-bold">{t("Blog3")}</p>
          </div>
        </Link>
      </div>
    </section>
  );
};
