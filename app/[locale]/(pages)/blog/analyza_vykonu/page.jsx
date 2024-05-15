import styles from "/app/(pages)/gdpr/gdpr.module.scss";
import Link from "next/link";
const Page = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto mt-32 lg:mt-40 pb-14 px-3">
        <img src="/kampane_big.jpg" className="pb-[24px] lg:pb-[48px]" alt="" />
        <h2 className="pb-[24px]">
          Analýza výkonu 140 influencerských kampaní, které prošly agenturou WOO
        </h2>
        <p>
          Influencer marketing je dnes už celkem běžná součást online
          komunikace. Na rozdíl od jiných nástrojů je tu ale poměrně těžké
          předvídat výsledky. Nebo... není? Podívali jsme se na 140 kampaní za
          skoro 20 milionů Kč a zjistili, kde se pohybuje benchmark pro výkon
          influencerských kampaní na Instagramu a TikToku v Česku, na Slovensku
          a v Maďarsku. <br /> <br />
          <span className={styles.bold}>
            TikTok versus Instagram: Kde dostanete za svoje peníze víc?
          </span>{" "}
          <br />
          Srovnáním prošly dvě základní metriky - CPE a CPM. Ty jsou také
          nejčastěji měřeným KPI, na které se kampaně optimalizují, protože
          zvýšení povědomí a engagement jsou tím, co klienti od influencerských
          kampaní obvykle očekávají. Ve srovnávaných kampaních jsou influenceři
          různých velikostí a s různou silou zásahu, faktor kvality influencera
          ale ve výpočtu nezohledňujeme, respektive, víme, že se odráží v ceně
          influencera. <br /> <br /> Zatímco střední hodnota CPE je na TikToku
          3,41 Kč, Instagram je několikanásobně dražší, s CPE 15,7 Kč. Naopak
          medián ceny za tisíc zobrazení je u Instagramu o něco nižší, 316 Kč
          oproti 324 Kč na TikToku. Se střední hodnotou počítáme proto, že v
          našem vzorku nejsou kampaně z různých segmentů zastoupené ve stejném
          objemu a průměr by kvůli tomu vyšel zkreslený. <br /> <br />
          <img src="/tabulka.png" alt="" /> <br /> Při rozhodování o optimální
          platformě je ale dobré mít na paměti i rozdíly mezi Instagramem a
          TikTokem. Především v demografii. Instagram má v České republice podle
          dat v reklamních nástrojích Meta 3,35 milionů uživatelů, TikTok
          deklaruje 2,5 milionu. To je pořád o necelý milion a zhruba třetinu
          méně. <br /> <br /> Z věkového rozložení navíc vyplývá, že na
          Instagramu je šance zasáhnout i lidi, kteří se přehoupli přes 34 let.
          Což je nezanedbatelná kupní síla. A správně zvolený influencer se může
          dobře trefit i do na první pohled nevalných 16 % instagramového
          publika ve věku 35-44 let. Na druhou stranu, pokud cílíte na poměrně
          obvyklou skupinu 18-34, pak máte na TikToku jistý téměř 100% zásah.{" "}
          <br /> <br />{" "}
          <span className={styles.bold}>
            Věkové rozložení uživatelů Instagramu v ČR
          </span>{" "}
          <br /> Zdroj: Statista, 2023 <br /> <img src="/tabulka2.png" alt="" />{" "}
          <br /> <br />{" "}
          <span className={styles.bold}>
            Věkové rozložení uživatelů TikToku v ČR
          </span>{" "}
          <br /> Zdroj: Start.io, 2023
          <br /> <img src="/kolecko.png" className="w-[300px]" alt="" /> <br />
          <br />
          <span className={styles.bold}>
            A co segmenty? Hádáte správně, Beauty je nejdražší.
          </span>{" "}
          <br /> Když mezi sebou porovnáme ceny za imprese v jednotlivých
          segmentech, vyjde celkem jednoznačně jako nejdražší Beauty. Je to
          celkem logické, protože kosmetické značky jsou těmi, kdo influencery
          nejčastěji využívá a je tam tudíž největší poptávka ze strany
          zadavatelů. A zájem zvedá i cenu. Tomu odpovídá i zkušenost WOO, neboť
          dat z kampaní kosmetických značek bylo pro tuto analýzu k dispozici
          nejvíc. <br /> <br /> <br />
          <span className={styles.bold}>
            {" "}
            Průměrné CPM na Instagramu a TikToku podle segmentů:
          </span>
          <br /> <img src="/tabulka3.png" alt="" /> <br /> Nabízí se ještě
          otázka, co barterové spolupráce. Kdybychom je do výpočtu zahrnuli s
          nulovým nákladem, snížilo by se průměrné CPM v Beauty segmentu na 411,
          28 Kč. Přičemž barterů bylo v našem vzorku zhruba 10 %. <br /> <br />
          <span className={styles.bold}> Kolik influencerů je akorát?</span>
          <br />Z porovnání engagement rate vychází zajímavé zjištění - optimum
          je někde mezi dvěma a šesti influencery, u většího počtu už má
          engagement tendenci zase klesat. Proto je důležité influencery správně
          vybírat a nespoléhat jen na to, že stačí jich mít hodně. Nestačí.{" "}
          <br /> <br />{" "}
          <span className={styles.bold}>
            Jak tedy influencerskou kampaň - a svoje očekávání - nastavit?
          </span>{" "}
          <br /> Správný výběr založený na cílech kampaně a znalosti
          influencerského trhu je absolutní základ. Postřehy této analýzy mohou
          pomoci správně odhadnout výkonové cíle a poznat, jak si daná kampaň
          vede v porovnání s trhem. Ze zkušenosti WOO navíc vychází, že lepší
          výsledky mají ty kampaně, které dokážou zaujmout sdělením nebo formou,
          a nejsou jen pouhým doporučením produktu. I tady proto platí, že
          spolupráce s odborníky je nakonec ta nejlepší investice.
        </p>
      </div>
    </>
  );
};
export default Page;
