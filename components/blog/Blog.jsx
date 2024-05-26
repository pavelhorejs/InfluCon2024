"use client";
import Link from "next/link";
import Revealx from "/components/reveals/Revealx";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import imageIm from "/public/im.webp";
import imageOchrana from "/public/ochrana.webp";
import imageKampane from "/public/kampane.webp";

const Blog = () => {
  const { t } = useTranslation();
  return (
    <section className="max-w-7xl mx-auto px-2" id="blog">
      <Revealx delay={0.2}>
        {" "}
        <h2 className="pb-[32px] lg:pb-[48px] text-center">Blog</h2>
      </Revealx>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
        {" "}
        <Link href="/blog/trendy_im">
          {" "}
          <div>
            {" "}
            <Revealx delay="0.4">
              {" "}
              <div className="image-box">
                <Image src={imageIm} alt="blog cover" />
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
                <Image src={imageOchrana} alt="blog cover" />
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
                <Image src={imageKampane} alt="blog cover" />
                <img src="/kampane.jpg" alt="blog cover" />
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
export default Blog;
