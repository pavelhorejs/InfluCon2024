"use client";
import ReactFlipCard from "reactjs-flip-card";
import Link from "next/link";
import style from "/components/flip_card/flip1/Style.module.scss";
import { useTranslation } from "react-i18next";
import Image from "next/image";
const Flipcard = () => {
  const { t } = useTranslation();
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
              src="/doublefoto.png"
              alt="Front Image"
              style={contentStyle}
            />
          </div>
        }
        backComponent={
          <div className="bg-[#F00065] px-5 pt-5" style={contentStyle}>
            <div>
              <p className="">{t("oneBrand")}</p>
            </div>
          </div>
        }
      />

      <div className="flex flex-col justify-between max-w-[300px]">
        <div className="flex justify-between items-center">
          {" "}
          <p className={style.name2}>Victoria Pearce</p>
          <Link href="https://www.linkedin.com/in/victoria-pearce-6a60911a3/">
            <img src="/in_black.svg" className="w-5" alt="" />
          </Link>
        </div>
        <div className="flex justify-between items-center -mt-3">
          {" "}
          <p className={style.name2}>Eva Van Elst</p>
          <Link href="https://www.linkedin.com/in/evavanelst/">
            <img src="/in_black.svg" className="w-5" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Flipcard;
