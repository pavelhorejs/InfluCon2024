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
            <img src="linda.jpg" alt="Front Image" style={contentStyle} />
          </div>
        }
        backComponent={
          <div className="bg-[#F00065] px-5 pt-5" style={contentStyle}>
            <div>
              <p className="">
                Linda z TT vám ukáže, jak zapojit influencery do TikTok trendů z
                pohledu značky a jak žádný neprošvihnout. Nabídky na moderování
                dětských oslav a maturitních plesů prosí do zpráv, tak se těšte.
              </p>
            </div>
          </div>
        }
      />

      <div className="flex flex-col justify-between max-w-[300px]">
        <div className="flex justify-between items-center">
          {" "}
          <p className={style.name}>Linda Matásková</p>
          <Link href="https://www.linkedin.com/in/lindamat%C3%A1skov%C3%A1/">
            <img src="/in_black.svg" className="w-5" alt="" />
          </Link>
        </div>
        <p className={style.company}>TiKTok, Community Manager </p>
      </div>
    </div>
  );
};
export default Flipcard;
