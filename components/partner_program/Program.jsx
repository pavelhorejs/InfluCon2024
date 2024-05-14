import Button_red from "/components/buttons/button_red/Button_red";
import styles from "/components/partner_program/styles.module.scss";
import Link from "next/link";
import Revealx from "../reveals/Revealx";
const Program = () => {
  return (
    <section
      className="flex flex-col justify-center items-center max-w-6xl mx-auto px-2"
      id="partnership"
    >
      {" "}
      <Revealx delay={0.2}>
        <h2 className="text-center pb-[24px]">Chcete s námi spolupracovat?</h2>
      </Revealx>
      <Revealx delay={0.4}>
        {" "}
        <p className="max-w-lg text-center pb-[24px]">
          Rádi uvítáme další firmy a osobnosti, které se chtějí prezentovat jako
          lídři influencer marketingu a mají k tomuto tématu co říct. Neváhejte
          nás kontaktovat; ochotně s vámi probereme možnosti partnerství.
        </p>
      </Revealx>
      <div className="flex justify-center">
        {" "}
        <Revealx delay={0.6}>
          {" "}
          <div className="">
            <Link href="/contact">
              <Button_red text="Chci být partner" />
            </Link>
          </div>
        </Revealx>
      </div>
    </section>
  );
};
export default Program;
