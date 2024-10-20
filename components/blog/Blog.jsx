"use client";
import Link from "next/link";
import Revealx from "/components/reveals/Revealx";
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
      <Revealx delay={0.2}>
        {" "}
        <h2 className="pb-[32px] text-center lg:pb-[48px]">Blog</h2>
      </Revealx>
      <div className="grid grid-cols-1 gap-[24px] md:grid-cols-3">
        {" "}
        <Link href="/blog/trendy_im">
          {" "}
          <div>
            {" "}
            <Revealx delay="0.4">
              {" "}
              <div className="image-box">
                <Image
                  src={isMobile ? imageImMobile : imageIm}
                  alt="blog cover"
                />
              </div>
            </Revealx>
            <Revealx delay="0.4">
              {" "}
              <p className="mt-[8px] font-bold">{t("Blog")}</p>
            </Revealx>
          </div>
        </Link>
        <Link href="/blog/smluvni_ochrana">
          {" "}
          <div>
            {" "}
            <Revealx delay="0.2">
              {" "}
              <div className="image-box">
                <Image
                  src={isMobile ? imageOchranaMobile : imageOchrana}
                  alt="blog cover"
                />
              </div>
            </Revealx>
            <Revealx delay="0.4">
              {" "}
              <p className="mt-[8px] font-bold">{t("Blog2")}</p>
            </Revealx>
          </div>
        </Link>
        <Link href="/blog/analyza_vykonu">
          {" "}
          <div>
            {" "}
            <Revealx delay="0.4">
              {" "}
              <div className="image-box">
                <Image
                  src={isMobile ? imageKampaneMobile : imageKampane}
                  alt="blog cover"
                />
              </div>
            </Revealx>
            <Revealx delay="0.4">
              {" "}
              <p className="mt-[8px] font-bold">{t("Blog3")}</p>
            </Revealx>
          </div>
        </Link>
      </div>
    </section>
  );
};
