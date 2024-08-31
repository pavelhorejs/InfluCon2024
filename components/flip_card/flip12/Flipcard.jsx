"use client";
import ReactFlipCard from "reactjs-flip-card";
import Link from "next/link";
import style from "/components/flip_card/flip1/Style.module.scss";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const Flipcard = () => {
  const { t, i18n } = useTranslation();
  const containerStyle = {
    width: "300px",
    height: "300px",
  };

  const cardStyle = {
    color: "white",
    width: "300px",
    height: "300px",
  };

  const contentStyle = {
    width: "300px",
    height: "300px",
  };
  return (
    <div>
      <ReactFlipCard
        containerStyle={containerStyle}
        frontStyle={cardStyle}
        backStyle={cardStyle}
        frontComponent={
          <div style={contentStyle}>
            <Image
              width={300}
              height={300}
              src={
                i18n.language === "en"
                  ? "/kaderavkova_eng.webp"
                  : "/kaderavkova_cz.webp"
              }
              alt="Front Image"
              style={contentStyle}
            />
          </div>
        }
        backComponent={
          <div className="bg-[#F00065] px-5 pt-5" style={contentStyle}>
            <div>
              <p className="">{t("kaderavkova")}</p>
            </div>
          </div>
        }
      />

      <div className="flex max-w-[300px] flex-col justify-between">
        <div className="flex items-center justify-between">
          {" "}
          <p className={style.name}>Anna Kadeřávková</p>
          <Link href="https://www.linkedin.com/in/anna-kade%C5%99%C3%A1vkov%C3%A1-677922a3/">
            <img src="/in_black.svg" className="w-5" alt="" />
          </Link>
        </div>
        <p className={style.company}>Herečka & Influencerka </p>
      </div>
    </div>
  );
};
export default Flipcard;
