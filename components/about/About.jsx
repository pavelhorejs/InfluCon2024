import Styles from "/components/about/styles.module.scss";
import Revealx from "../reveals/Revealx";
const About = () => {
  return (
    <div className="mt-28 lg:mt-[190px]">
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto px-2">
        <div className="flex flex-col items-center lg:items-start">
          <Revealx delay={0.2}>
            <h2 className="pb-[24px] text-center lg:text-start">
              Co je InfluCon?
            </h2>
          </Revealx>
          <Revealx delay={0.4}>
            {" "}
            <p className="max-w-lg text-center lg:text-start">
              Největší konference o influencer marketingu v Česku. Proč? Protože
              influenceři mají sílu pozvednout téměř jakoukoli značku – a jak to
              s nimi funguje, zajímá nejen vás. O svoje zkušenosti s rolí
              influencerů v brand buildingu se proto podělí největší
              profesionálové v oboru. <br /> <br /> Přihodí taky čísla,
              analytiky a výsledky, promluví o strategii a nevynecháme ani
              pohled největších mediálních platforem. <br /> <br /> Chcete víc?
              Celý čtvrtý blok dává prostor právě influencerům. Koneckonců, o
              nich to tady je. <br /> Tak co, uvidíme se?
            </p>
          </Revealx>
        </div>
        <div className="flex flex-col items-center mt-10 md:mt-0">
          {" "}
          <div className="flex flex-col gap-[24px] items-center lg:items-start">
            <Revealx delay={0.2}>
              {" "}
              <div className={Styles.redButton}>Brands</div>
            </Revealx>
            <Revealx delay={0.3}>
              {" "}
              <div className={Styles.greenButton}>Platforms</div>
            </Revealx>
            <Revealx delay={0.4}>
              {" "}
              <div className={Styles.greenButton}>Influencers</div>
            </Revealx>
            <Revealx delay={0.5}>
              {" "}
              <div className={Styles.greenButton}>Agencies</div>
            </Revealx>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
