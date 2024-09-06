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
                  ? "/Dostal_Koukal_eng.jpg"
                  : "/Dostal_Koukal_cz.jpg"
              }
              alt="Front Image"
              style={contentStyle}
            />
          </div>
        }
        backComponent={
          <div className="bg-[#F00065] px-5 pt-5" style={contentStyle}>
            <div>
              <p>"{t("koukal.dostal")}</p>
            </div>
          </div>
        }
      />

      <div className="flex max-w-[300px] flex-col justify-between">
        <div className="flex items-center justify-between">
          {" "}
          <p className={style.name2}>
            Josef Dostál{" "}
            <span className="pl-1 text-[14px] font-normal">
              Rychlostní kanoista
            </span>
          </p>
          <Link href="" className="invisible">
            <img src="/in_black.svg" className="w-5" alt="" />
          </Link>
        </div>
        <div className="-mt-3 flex items-center justify-between">
          {" "}
          <p className={style.name2}>
            Jan Koukal
            <span className="pl-2 text-[14px] font-normal">CEO Sportegy</span>
          </p>
          <Link href="https://cz.linkedin.com/in/jan-koukal-sport">
            <img src="/in_black.svg" className="w-5" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Flipcard;
