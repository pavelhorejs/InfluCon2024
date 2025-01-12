"use client";
import ReactFlipCard from "reactjs-flip-card";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Image, { StaticImageData } from "next/image";

type FlipcardProps = {
  name: string;
  company: string;
  linkedin: string;
  imageCz: StaticImageData;
  imageEn: StaticImageData;
};

const Flipcard = ({
  name,
  company,
  linkedin,
  imageCz,
  imageEn,
}: FlipcardProps) => {
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
              src={i18n.language === "en" ? imageEn : imageCz}
              alt="Front Image"
              style={contentStyle}
            />
          </div>
        }
        backComponent={
          <div className="bg-[#F00065] px-5 pt-5" style={contentStyle}>
            <div>
              <p className="">{t("petr")}</p>
            </div>
          </div>
        }
      />

      <div className="flex max-w-[300px] flex-col justify-between">
        <div className="flex items-center justify-between">
          <p className="pt-[8px] text-[22px] font-bold text-black">Petr Srna</p>
          <Link href="">
            <img src="/in_black.svg" className="w-5" alt="" />
          </Link>
        </div>
        <p className="text-[16px] font-normal text-black">
          CEO, World of Online
        </p>
      </div>
    </div>
  );
};
export default Flipcard;
