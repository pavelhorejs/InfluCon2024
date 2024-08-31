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
import JK from "/public/jankoukal.webp";
import Peroutka from "/public/peroutka.webp";
import SpeakersMap from "@/components/speakers/SpeakersMap";
import SmallBlock from "@/components/speakers/SmallBlock";
import Zuzka from "/public/zuzka.webp";
import Martin from "/public/martin.webp";
import Who from "/public/who.webp";
import Niko from "/public/niko.webp";
import TerezaLaw from "/public/terezalaw.webp";

export default function MainStage() {
  const speakers1 = [
    {
      name: "Denisa Hejlová",
      position: "UNIVERZITA KARLOVA - AKADEMIČKA",
      topic: "TÉMA: JAKÉ DOPADY MŮŽE MÍT KOMUNIKACE?",
      description:
        "Doc. PhDr. Denisa Hejlová, Ph.D. je vědkyně a pedagožka působící na Fakultě sociálních věd Univerzity Karlovy. Přinese nám pohled z akademického světa. Co říkají data o dopadu influencerské komunikace na sledující? A je to vůbec téma, které bychom jako influenceři měli řešit?",
      image: Who,
    },
    {
      name: "Ivo Veselý",
      position: "INFLUENCER MARKETING FREELANCER",
      topic: "TÉMA: Jak se vyhnout “hejtu” za spolupráci?",
      description:
        "Ivo je Influencer Marketing Freelancer a v influencer marketingu působí již 9 let. Podílel se na vzniku etického kodexu Férový Influencer. Na konferenci si zabrouzdá v influencerském rybníčku a podívá se na zoubek legislativě. Konečně zjistíme, jak to dělat správně!",
      image: Who,
    },
    {
      name: "Honza Kotek",
      position: "CEO - PEPPERMINT DIGITAL",
      topic: "TÉMA: Proč být “Férový influencer”?",
      description:
        "Honza v marketingu a reklamním světě pracuje již 24 let.Nyní má na starosti hnutí Férový influencer. Proč se skupina odborníků schází každý měsíc nad influencer marketingem? A jakou roli v tom můžeme hrát my všichni? Můžeme i my kultivovat influencerské prostředí tak, aby do něj teklo více peněz?",
      image: Who,
    },
  ];
  const speakers2 = [
    {
      name: "Nikoloz Bolkvadze",
      position: "META - CLIENT PARTNER FOR CEE",
      topic: "TÉMA: Language of Reels",
      description:
        "Niko pracuje pro společnost Meta téměř 5 let. Na konferenci bude mluvit na téma “Language of Reels”. Zároveň vnímá Influcon jako místo, kde může odkomunikovat téma “Snižování dosahu influencer postů po boostingu” , se kterým se často v rámci exekuce influencer kampaní setkáváme. Být či nebýt? Asi tak je to pro nás hluboká otázka. Takže NIko…Boostovat či neboostovat?",
      image: Niko,
    },
    {
      name: "Daniel Vojtěch",
      position: "CONTENT CREATOR",
      topic: "TÉMA: Točím, proto jsem.",
      description:
        "Dan je zkušeným contenťákem. Je to právě on, kdo točí ty šílený Red Bull videa. Proto si s ním v praxi natočíte reelsko. Využijme jeho zkušenosti. Můžeme se ptát a budeme společně s ním i tvořit. Tohle si užijeme!",
      image: Who,
    },
  ];
  const speakers3 = [
    {
      name: "Martin Fryč",
      position: "OPPORTUNITY MANAGER - WOO",
      topic: "TÉMA: Kolik si mám říct za spolupráci?",
      description:
        "Martin si nenechá utéct žádnou obchodní příležitost a má v evropském influencer marketingu přehled na trhu. Kolik si berou ti největší influenceři a kolik si máme říkat my? Kdo se podceňuje a kdo naopak přeceňuje? A není to málo? Není!",
      image: Martin,
    },
    {
      name: "Připravujeme",
      position: "",
      topic: "TÉMA: Jak monetizovat obsah?",
      description:
        "Jaké jsou všechny možnosti monetizace obsahu na sociálních sítích?",
      image: Who,
    },
    {
      name: "Připravujeme",
      position: "",
      topic: "TÉMA: Jak se vyhnout finančáku?",
      description:
        "V tomto tématu se dozvíte, jak být tzv. “full-time” influencer. Jak se vede živnost? Jak neskončit na finančáku a správně platit daně? Jak to nedělat a nebo naopak, jak to dělat správně, abychom neměli problém se zákonem?",
      image: Who,
    },
  ];
  const speakers4 = [
    {
      name: "Tereza Law",
      position: "L'ORÉAL - ADVOCACY DIRECTOR",
      topic: "TÉMA: Jak se dostat k těm největším značkám?",
      description:
        "Terka je zodpovědná za propagaci a PR v divizi spotřebního zboží L'Oréal pro Česko, Slovensko a Maďarsko. Pro firmu pracuje téměř 12 let. Nasdílí s vámi smýšlení jednoho z největších zadavatelů v influencer marketingu. Podle čeho si influencery vybírají a jak se tam můžu dostat?",
      image: TerezaLaw,
    },
    {
      name: "Zuzana Bílkovská",
      position: "HEROES OF ONLINE",
      topic: "TÉMA: Má smysl si předcházet agentury?",
      description:
        "Zuzka rozjíždí startup Heroes of Online. Je to zkušená Influencer Specialistka a na konferenci bude mluvit o udržování dobrých vztahů s agenturou. Podle čeho si dělají Influencer Specilisté research a kdo může za to, že mě agentura osloví? Cože? On existuje i black list influencerů?",
      image: Zuzka,
    },
    {
      name: "Mike Bubeníček",
      position: "CEO - ETNETERA MOTION",
      topic: "TÉMA: Může mi AI zjednodušit život?",
      description:
        "Michal je CEO v kreativní digitální agentuře a také autor podcastu Mike:ON. V přednášce se dozvíte, jak využít nástroje umělé inteligence v influencer marketingu, jak být díky AI více efektivní, a jak vám to může usnadnit život v práci, ale i mimo ní.",
      image: Who,
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
          <div className="flex flex-col items-center gap-x-[32px] md:flex-row">
            <p className="text-[24px] font-bold md:text-[40px]">
              10:00 - 12:10
            </p>
            <p className="hidden md:block">|</p>
            <p className="text-[16px] md:text-[24px]">1. a 2. blok</p>
          </div>
          <div className="w-full border-t border-white pb-[8px] md:pb-0" />
          <p className="mt-[4px] text-[16px] font-bold md:text-[24px]">
            <span className="font-bold">1. blok</span> - Férový influencer
            marketing 5 přešlapů, kterým se budeš chtít vyhnout
          </p>
          <SpeakersMap speakers={speakers1 as any} />

          <p className="mt-[4px] text-[24px]">
            <span className="font-bold">2. blok</span> - Workshop
          </p>
          <SpeakersMap speakers={speakers2 as any} />
        </div>

        <SmallBlock time="12:10 - 13:10" topic="Oběd" />

        <div className="w-full bg-[#F00065] px-[16px] py-[12px] md:px-[40px] md:pb-[64px] md:pt-[16px]">
          <div className="flex items-center gap-x-[32px]">
            <p className="text-[24px] font-bold md:text-[40px]">
              13:10 - 15:10
            </p>
            <p className="text-[24px]">|</p>
            <p className="text-[16px] md:text-[24px]">3. a 4. blok</p>
          </div>
          <div className="w-full border-t border-white pb-[8px] md:pb-0" />
          <p className="mt-[4px] text-[16px] font-bold md:text-[24px]">
            <span className="font-bold">3. blok</span> - Monetizace a cenotvorba
          </p>
          <SpeakersMap speakers={speakers3 as any} />

          <p className="mt-[4px] text-[16px] font-bold md:text-[24px]">
            <span className="font-bold">4. blok</span> - Jak se prosadit
          </p>
          <SpeakersMap speakers={speakers4 as any} />
        </div>
      </div>
    </div>
  );
}
