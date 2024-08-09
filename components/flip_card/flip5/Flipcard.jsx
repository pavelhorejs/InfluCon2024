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
              src={i18n.language === "en" ? "/double2_en.webp" : "/double2.jpg"}
              alt="Front Image"
              style={contentStyle}
            />
          </div>
        }
        backComponent={
          <div className="bg-[#F00065] px-5 pt-5" style={contentStyle}>
            <div>
              <p className="text-[14px] noWrap">{t("janLos")}</p>
            </div>
          </div>
        }
      />

      <div className="flex flex-col justify-between max-w-[300px]">
        <div className="flex justify-between items-center">
          {" "}
          <p className={style.name2}>
            Jan Los <span className="font-normal text-base pl-3">L'Oréal</span>
          </p>
          <Link href="https://www.linkedin.com/in/losage/">
            <img src="/in_black.svg" className="w-5" alt="" />
          </Link>
        </div>
        <div className="flex justify-between items-center -mt-3">
          {" "}
          <p className={style.name2}>
            Tereza Law{" "}
            <span className="font-normal text-base pl-3">L'Oréal</span>
          </p>
          <Link href="https://www.linkedin.com/in/tereza-law-418bb9213/">
            <img src="/in_black.svg" className="w-5" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Flipcard;
