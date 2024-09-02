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
              src={i18n.language === "en" ? "/nova_eng.jpg" : "/nova_cz.jpg"}
              alt="Front Image"
              style={contentStyle}
            />
          </div>
        }
        backComponent={
          <div className="bg-[#F00065] px-5 pt-5" style={contentStyle}>
            <div>
              <p className="text-[12px]">{t("description.td")}</p>
            </div>
          </div>
        }
      />

      <div className="flex max-w-[300px] flex-col justify-between">
        <div className="flex items-center justify-between">
          {" "}
          <p className={style.name2}>
            Tomáš Hodboď{" "}
            <span className="pl-3 text-base font-normal">TV Nova</span>
          </p>
          <Link href="https://www.linkedin.com/in/tomhodbod/">
            <img src="/in_black.svg" className="w-5" alt="" />
          </Link>
        </div>
        <div className="-mt-3 flex items-center justify-between">
          {" "}
          <p className={style.name2}>
            Dominik Peroutka{" "}
            <span className="pl-3 text-base font-normal">TV Nova</span>
          </p>
          <Link href="https://www.linkedin.com/in/dominik-peroutka-99a658301">
            <img src="/in_black.svg" className="w-5" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Flipcard;
