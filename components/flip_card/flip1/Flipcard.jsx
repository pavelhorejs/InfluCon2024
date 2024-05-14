"use client";
import ReactFlipCard from "reactjs-flip-card";
import Link from "next/link";
import style from "/components/flip_card/flip1/Style.module.scss";

const Flipcard = () => {
  const containerStyle = {
    width: "100%",
    height: "310px",
  };

  const cardStyle = {
    color: "white",
    width: "100%",
    height: "100%",
  };

  const contentStyle = {
    width: "100%",
    height: "100%",
  };
  return (
    <div>
      <ReactFlipCard
        containerStyle={containerStyle}
        frontStyle={cardStyle}
        backStyle={cardStyle}
        frontComponent={
          <div style={contentStyle}>
            <img src="petr.png" alt="Front Image" style={contentStyle} />
          </div>
        }
        backComponent={
          <div className="bg-[#F00065] px-5 pt-5" style={contentStyle}>
            <div>
              <p className="">Bude doplněno</p>
            </div>
          </div>
        }
      />

      <div className="flex flex-col justify-between">
        <div className="flex justify-between items-center">
          {" "}
          <p className={style.name}>Petr Srna</p>
          <Link href="https://www.linkedin.com/in/petrsrna/">
            <img src="/in_black.svg" className="w-5" alt="" />
          </Link>
        </div>
        <p className={style.company}>CEO | World of Online</p>
      </div>
    </div>
  );
};
export default Flipcard;
