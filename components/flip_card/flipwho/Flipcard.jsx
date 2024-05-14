"use client";
import ReactFlipCard from "reactjs-flip-card";
import Link from "next/link";
import style from "/components/flip_card/flip1/Style.module.scss";

const Flipcard = () => {
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
            <img src="who.png" alt="Front Image" style={contentStyle} />
          </div>
        }
        backComponent={
          <div className="bg-[#F00065] px-5 pt-5" style={contentStyle}>
            <div></div>
          </div>
        }
      />

      <div className="flex flex-col justify-between max-w-[300px]">
        <div className="flex justify-between items-center">
          {" "}
          <Link href="">
            {/* <img src="/in_black.svg" className="w-5" alt="" /> */}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Flipcard;
