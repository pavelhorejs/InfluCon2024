"use client";
import ReactFlipCard from "reactjs-flip-card";
import Link from "next/link";
import style from "/components/flip_card/flip1/Style.module.scss";
import Image from "next/image";
import { useTranslation } from "react-i18next";

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
              src="/who.png"
              alt="Front Image"
              style={contentStyle}
            />
          </div>
        }
        backComponent={
          <Image
            width={300}
            height={300}
            src="/who.png"
            alt="Front Image"
            style={contentStyle}
          />
        }
      />

      <div className="flex max-w-[300px] flex-col justify-between">
        <div className="flex items-center justify-between"> </div>
      </div>
    </div>
  );
};
export default Flipcard;
