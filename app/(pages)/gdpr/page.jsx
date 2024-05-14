import styles from "./gdpr.module.scss";
const Page = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto mt-40 md:mt-480 pb-14 px-3">
        <h2 className="pb-10">ZÁSADY OCHRANY OSOBNÍCH ÚDAJŮ</h2>
        <p>
          <span className={styles.bold}>1. Správce osobních údajů </span>
          <br /> 1.1. World of Online, s.r.o., se sídlem Voršilská 139/5, Nové
          Město (Praha 1), 110 00 Praha, IČ 060 63 071, spisová značka C 275458
          vedená u Městského soudu v Praze, prohlašuje, že veškeré osobní údaje
          zpracovávané na tomto webu jsou přísně důvěrné a nakládá s nimi v
          souladu s vnitrostátními právními předpisy i předpisy Evropské unie
          platnými v oblasti ochrany osobních údajů. <br /> <br /> Web
          shromažďuje, uchovává a využívá Vaše osobní zadané do kontaktní
          formuláře a pole pro odběr novinek v souladu s nařízením Evropského
          parlamentu a Rady (EU) 2016/679 ze dne 27. dubna 2016, o ochraně
          fyzických osob v souvislosti se zpracováním osobních údajů a o volném
          pohybu těchto údajů a o zrušení směrnice 95/46/ES.
          <br /> <br />
          1.2. Tyto zásady informují, jaké Vaše osobní údaje zpracováváme, za
          jakým účelem, po jakou dobu, kdo k Vašim osobním údajům bude mít
          přístup a jaká máte práva. <br /> <br />
          <span className={styles.bold}>
            {" "}
            2. Zpracovávané údaje <br />
          </span>
          2.1. Výše uvedené údaje primárně zpracováváme za účelem zajištění
          funkcionality webových stránek a konikace s klienty. <br /> <br />
          <span className={styles.bold}>
            3. Práva subjektu <br />
          </span>
          3.1. Jako subjekt údajů máte uvedená práva, která pro Vás z právních
          předpisů vyplývají a která můžete kdykoliv uplatnit. Jedná se o:{" "}
          <br /> a. právo na přístup k osobním údajům, <br /> b. právo na opravu
          nebo výmaz osobních údajů, <br />
          c. právo požadovat vysvětlení <br />
          d. právo obrátit se na Úřad pro ochranu osobních údajů <br />
          e. právo na přenositelnost údajů, <br />
          f. právo vznést námitku proti zpracování osobních údajů, <br />
          g. právo souhlas se zpracováním osobních údajů kdykoliv odvolat,
          <br />
          <br /> <span className={styles.bold}>4. Informace a otázky</span>{" "}
          <br /> Další informace o právech a povinnostech při ochraně osobních
          údajů můžete získat prostřednictvím e-mailu na{" "}
          <a className="underline" href="mailto:info@woo.cz">
            info@woo.cz.
          </a>{" "}
          <br /> <br />
          5.3. Tyto podmínky jsou účinné od 1.05.2024
        </p>
      </div>
    </>
  );
};
export default Page;
