import Button from "/components/buttons/button/Button";
import Dayscounter from "/components/days_counter/Dayscounter";
import Socials from "/components/socials/socials_green/Socials";
import Styles from "/components/hero/styles.module.scss";
import Revealx from "../reveals/Revealx";

const Hero = () => {
  return (
    <div className="bgWrap pt-32 lg:pt-20 px-2">
      <div className="md:hidden justify-end mt-5 md:mt-10 lg:mt-28">
        <div className="flex gap-[64px]">
          <div className={Styles.greenCard2}>
            <div className={Styles.blackItemMobile}></div>
            <div className={Styles.greenItem1Mobile}></div>
            <div className={Styles.greenItem2Mobile}></div>
            <p className={Styles.mainText2}>07.10.2024</p>
            <p className={Styles.offText2}>Hotel Clarion, Praha</p>
          </div>
        </div>
      </div>
      <div className={Styles.grid}>
        {" "}
        <div className="mt-[8px] md:mt-10 lg:mt-28">
          <Revealx>
            <div className={Styles.redCard}>
              <div className={Styles.redItem1}></div>
              <div className={Styles.redItem2}></div>
              <h1>
                Zjistěte, jak influencer marketing posouvá značky. <br /> Včetně
                té vaší.{" "}
              </h1>
            </div>
          </Revealx>
          <div className="flex gap-[8px] lg:gap-[24px] mt-[8px] lg:mt-[24px]">
            {" "}
            <Revealx delay={0.2}>
              {" "}
              <a href="#tickets">
                <Button text="Koupit lístky" />
              </a>
            </Revealx>
            <Revealx delay={0.4}>
              {" "}
              <a href="/contact">
                <Button text="Chci být partner" />
              </a>
            </Revealx>
          </div>
          <div className="mt-[48px]">
            <Revealx delay={1}>
              {" "}
              <p>Sledujte nás online</p>
            </Revealx>
            <div className="mt-2">
              <Socials />
            </div>
          </div>
        </div>
        <Revealx delay={0.6}>
          {" "}
          <div className="hidden md:flex justify-end mt-5 md:mt-10 lg:mt-28">
            <div className="flex gap-[64px]  ">
              <Revealx delay={1.3}>
                {" "}
                <img src="/arow.svg" className="mt-32 " alt="arrow vector" />
              </Revealx>
              <div className={Styles.greenCard}>
                <div className={Styles.blackItem}></div>
                <div className={Styles.greenItem1}></div>
                <div className={Styles.greenItem2}></div>
                <p className={Styles.mainText}>
                  07 <br />
                  10 <br />
                  2024
                </p>
                <p className={Styles.offText}>Hotel Clarion, Praha</p>

                <div className="mt-10">
                  <Dayscounter />
                </div>
              </div>
            </div>
          </div>
        </Revealx>
      </div>
    </div>
  );
};
export default Hero;
