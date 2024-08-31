import React from "react";
import Petr from "/public/petr.webp";
import Hana from "/public/hana.webp";
import Adam from "/public/adam2.webp";
import Barbora from "/public/barobora.webp";
import Denisa from "/public/denisa.webp";
import JT from "/public/jt.webp";
import Lukas from "/public/lukas_cz.webp";
import Victoria from "/public/doublefoto.webp";
import Anna from "/public/anna.webp";
import Niko from "/public/niko.webp";
import JK from "/public/jankoukal.webp";
import Peroutka from "/public/peroutka.webp";
import SmallBlock from "@/components/speakers/SmallBlock";
import Who from "/public/who.webp";
import SpeakersMap from "@/components/speakers/SpeakersMap";

export default function MainStage() {
  const speakers1 = [
    {
      name: "Petr Srna",
      position: "WOO - CEO",
      topic: "TÉMA - Co očekávat od influencer marketingu v roce 2025?",
      description:
        "Petr založil agenturu WOO před sedmi lety a stál u zrodu influencer marketingu v Česku. Jeho přednáška prozradí, co očekávat od influencer marketingu v roce 2025. A kam se dostaneme v roce 2050. Padnou i zajímavé statistiky a benchmark metrik v rámci influencer marketingu založené na vyhodnocení více než 1000 kampaní ve WOO za posledních 7 let.",
      image: Petr,
    },
    {
      name: "Adam Ranjnoha",
      position: "YORD - CEO",
      topic: "TÉMA - Je budoucnost influencerů v těch virtuálních?",
      description:
        "Adam spoluzaložil studio Yord před 6 lety a dnes ho řídí z pozice CEO. Má strategické zkušenosti z oblasti VR a AR a podnikatelské know-how v oblasti XR, které pochází ze spolupráce se značkami Apple, Adidas, Niantic a Deloitte. Poslední počin studia Yord byla digitalizace Václava Laurina, spoluzakladatele automobilky Škoda, do podoby meta člověka. Znát můžete i virtuální influencerku Bejby Blue, která uspořádala první virtuální koncert.",
      image: Adam,
    },
    {
      name: "Hana Kloučková",
      position: "CONFESS - CEO",
      topic:
        "TÉMA - Influencer vs. klasická reklama! Jak rezonují v podvědomí?",
      description:
        "Hanka řídí výzkumnou a inovativní agenturu Confess již 22 let. Pro konferenci Influcon vytváří jedinečný neurotest, kde vyhodnocuje podvědomé reakce lidí na reklamu s influencery a srovnává je s. reakcí na klasické reklamní video. Je to první neurotest v Česku a na Slovensku tohoto druhu na toto téma. Někteří influenceři nás možná iritují, ale jak ovlivňují naše nákupní chování? Některé máme naopak rádi, ale zvyšují v nás skutečně chuť nakupovat?",
      image: Hana,
    },
  ];
  const speakers2 = [
    {
      name: "Tereza Law & Jan Los",
      position:
        "L'ORÉAL - Advocacy Director & Chief Marketing and Digital Officer",
      topic:
        "TÉMA - Jak přemýšlí o influencer marketingu jeden z největších zadavatelů v ČR?",
      description:
        "Terka je zodpovědná za propagaci a PR v divizi spotřebního zboží L´Oréal pro Česko, Slovensko a Maďarsko.. Honza, zastává pozici Chief Marketing & Digital Officer. Terka je ve společnosti téměř 12 let a Honza už 8 let. Nasdílí s vámi smýšlení jednoho z největších zadavatelů v influencer marketingu v Česku. Dotknou se i tématu marketingového budgetu a jeho rozložení v rámci influencer marketingu. Jak kampaně vyhodnocují a co jim investice do influencer marketingu přináší?",
      image: JT,
    },
    {
      name: "Lukáš Kratochvíl",
      position: "YTESCO - LEADER OF DIGITAL CAMPAIGNS",
      topic: "TÉMA - Co mohou změnit influenceři v retailu?",
      description:
        "Lukáš je aktuálně Leader of Digital Campaigns pro Tesco ČR. Pamatujete na Mistrovství světa v ledním hokeji? Tesco bylo jeho oficiálním sponzorem a zrovna když se konalo v Česku. S influencery Tesco pracuje necelý rok a Lukáš nám ukáže jak vypadalo TESCO bez influencerů a jak vypadá dnes s nimi. Je tam vůbec nějaký rozdíl? A přináší to největšímu retailovému hráči nějaké výsledky?",
      image: Lukas,
    },
    {
      name: "Victoria Pierce & Eve Van Elst",
      position:
        "C&A - INFLUENCER MARKETING MANAGER & LEAD BRAND AND FASHION PR EUROPE",
      topic: "TÉMA - Jak vést influencerské kampaně v 17 zemích Evropy?",
      description:
        "Jak Eve popisuje na svém LI , již 17 let ukazuje Evropě krásu značky C&A, v současné době jako Lead Brand & Fashion PR pro Evropu. Victoria je Influencer Marketing Manager a je součástí C&A krásných 5 let. Naši zahraniční hosté budou mluvit o přístupu k influencer marketingu v 17 zemích Evropy. Jak udržet konzistenci značky i přes značné kulturní rozdíly? A jak se řídí stovky influencerů ve fashion odvětví, ve kterém je po influencerech stále větší hlad? Co jim funguje a co už nikdy nechtějí opakovat?",
      image: Victoria,
    },
    {
      name: "Barbora Sulovská",
      position: "NESTLÉ - BRAND MANAGER CHOCOLATE BARS",
      topic: "TÉMA - Jak zdvojnásobit market share tradiční značky?",
      description:
        "Banány v čokoládě jsou tradiční značkou, kterou znají i naše babičky. A takové značky jsou náchylné ke změnám. Jak odkomunikovat revoluční novinku? A co když tou novinkou je změna barvy čokolády? A proč se kvůli tomu musí nejznámější moderátor Česka ostříhat? Asi si říkáte : “Co je tohle za kampaň?” Jsou to BANÁNY BÍLÉ a marketshare se díky této kampani zdvojnásobil. Nevěříte? Poslouchejte.",
      image: Barbora,
    },
    {
      name: "Denisa Žideková",
      position: "P&G - SR. BRAND MANAGER",
      topic: "TÉMA - Dá se vybudovat silnější značka díky influencerů?",
      description:
        "Denisa je Sr. Brand Manager v Procter & Gamble pro značku Oral B. Má desetiletou praxi v marketingu značek jako jsou GSK, Mattoni 1873 a Mars. A nám přišla odhalit, jak společnost Procter & Gamble buduje svou značku prostřednictvím Brand Building Frameworku. Ten pomáhá vytvářet vítězné strategie i za pomoci influencerů. Slibujeme skvělé prezentační skills. Denisa je totiž boží!",
      image: Denisa,
    },
  ];
  const speakers3 = [
    {
      name: "Nikoloz Bolkvadze",
      position: "META - CLIENT PARTNER FOR CEE",
      topic: "TÉMA - Jak o influencerech přemýšlí META?",
      description:
        "Niko pracuje pro společnost Meta téměř 5 let. Na konferenci bude mluvit na téma “Language of Reels”. Zároveň vnímá Influcon jako místo, kde může odkomunikovat téma “Snižování dosahu influencer postů po boostingu” , se kterým se často v rámci exekuce influencer kampaní setkáváme. Být či nebýt? Asi tak je to pro nás hluboká otázka. Takže NIko…Boostovat či neboostovat?",
      image: Niko,
    },
    {
      name: "Tomáš Hodboď & Dominik Peroutka",
      position: "TV NOVA - HEAD OF SOCIAL MEDIA & INFLUENCER MARKETING MANAGER",
      topic: "TÉMA - Jak se rodí influenceři?",
      description:
        "Představte si továrnu na influencery. Ano, tou dnes mohou být televize. Tomáš a Dominik prozradí kolik procent influencerů na českém trhu pochází právě z programů komerčních televizí. Jaký je životní cyklus influencerů v největší české komerční televizi? Na základě čeho vybírají influencery do jejich projektů a jak následně rozvíjí vzájemnou spolupráci? A jak se takoví influenceři vyrábí? Slibujeme televizi a bez reklam!",
      image: Who,
    },
  ];
  const speakers4 = [
    {
      name: "Josef Dostál & Jan Koukal",
      position: "RYCHLOSTNÍ KANOISTA & MANAGER SPORTEGY",
      topic: "TÉMA - Jsou sportovci influenceři?",
      description:
        "Zlatý hřeb Influconu je tady. Náš čerstvý medailista je především sportovec. V dnešní době je příjem z reklamy pro sportovce klíčový. Často ale nemohou v metrikách konkurovat tradičním influencerům. Honzu Koukala, jeho manažera tohle trápí. Dokáže nám Pepa s Honzou vysvětlit, že vyšší CPM může zvýšit hodnotu značky? Přemýšlíme nad sportovci v našich kampaních správně? Mají sbírat lajky nebo medaile? A jak je můžeme zapojit?",
      image: Who,
    },
    {
      name: "Anna Kadeřávková",
      position: "HEREČKA A INFLUENCERKA",
      topic: "TÉMA - Jak najít společnou řeč?",
      description:
        "Ach ti influenceři..říkáme si často. Ale co si influenceři myslí o nás? Můžeme udělat něco proto, abychom měli oboustranně výhodné spolupráce? Nemáme na influencery přehnané nároky? Máme k nim přistupovat jako k lidem, nebo jako k mediatypu? A jsme všichni na jedné lodi, nebo tady existují dvě strany? Pojďme zjistit co můžeme všichni dělat lépe.",
      image: Anna,
    },
  ];
  return (
    <div>
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-4">
        <SmallBlock
          time="9:00 - 10:00"
          topic="Welcome coffee break a registrace"
        />
        <div className="w-full bg-[#F00065] px-[16px] py-[12px] md:px-[40px] md:pb-[64px] md:pt-[16px]">
          <div className="flex items-center gap-x-[32px]">
            <p className="text-[16px] font-bold md:text-[24px]">
              10:00 - 12:10
            </p>
            <p className="hidden md:block">|</p>
            <p className="text-[16px] md:text-[24px]">1. a 2. blok</p>
          </div>
          <div className="w-full border-t border-white pb-[8px] md:pb-0" />
          <p className="text-[16px] font-bold md:text-[24px]">
            <span className="font-bold">1. blok</span> - Influencer marketing
            očima agentur
          </p>
          <SpeakersMap speakers={speakers1 as any} />

          <p className="mt-[4px] text-[16px] font-bold md:text-[24px]">
            <span className="font-bold">2. blok</span> - Influencer marketing
            očima značek
          </p>
          <SpeakersMap speakers={speakers2 as any} />
        </div>

        <SmallBlock time="12:10 - 13:10" topic="Oběd" />

        <div className="w-full bg-[#F00065] px-[16px] py-[12px] md:px-[40px] md:pb-[64px] md:pt-[16px]">
          <div className="flex items-center gap-x-[32px]">
            <p className="text-[16px] font-bold md:text-[24px]">
              13:10 - 15:10
            </p>
            <p className="hidden md:block">|</p>
            <p className="text-[16px] md:text-[24px]">3. a 4. blok</p>
          </div>
          <div className="w-full border-t border-white pb-[8px] md:pb-0" />
          <p className="mt-[4px] text-[16px] font-bold md:text-[24px]">
            <span className="font-bold">3. blok</span> - Influencer marketing
            očima platforem
          </p>
          <SpeakersMap speakers={speakers3 as any} />

          <p className="mt-[4px] text-[16px] font-bold md:text-[24px]">
            <span className="font-bold">4. blok</span> - Influencer marketing
            očima influencerů
          </p>
          <SpeakersMap speakers={speakers4 as any} />
        </div>
      </div>
    </div>
  );
}
