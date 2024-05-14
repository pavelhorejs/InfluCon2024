"use client";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import Revealx from "../reveals/Revealx";
const faqs = [
  {
    question: "Pro koho konference vlastně je? ",
    answer:
      "Pro všechny, kdo se pohybují v marketingu, zajímají je influenceři a nechtějí zůstat pozadu - ať už se samotnými influencery nějakou zkušenost mají, nebo ne. Program je postavený tak, aby zaujal začátečníky i zkušené CMO’s. Uvidíte a uslyšíte tu největší odborníky v oboru z pohledu značek, platforem a i influencerů samotných. ",
  },
  {
    question:
      "Mám vůbec chodit, i když s influencer marketing nemám zkušenosti?",
    answer:
      "Rozhodně! Influencer marketing patří k nejrychleji rostoucím odvětvím, a nikdy není pozdě se o něj začít zajímat. Pokud se v marketingu pohybujete, nebudete mít rozhodně problém se zorientovat - a určitě se vyplatí dorazit a zjistit, o čem to vlastně je. ",
  },
  {
    question: "Na základě čeho tvoříte program?",
    answer:
      "Kombinujeme zkušenosti z oboru a potřeby i přání lidí, kteří se v influencer marketingu pohybují, na různých stranách. Prostor pro přednášející neprodáváme, ale vybíráme je sami tak, aby byl program relevantní a atraktivní a pokryl všechno, co pokrýt má. Taky jsme sami objeli dost konferencí a poučili jsme se z těch, které na nás udělaly dojem i z těch, které zapadly. ",
  },
  {
    question: "V jakém jazyce je konference?",
    answer:
      "Konference bude česko-anglicky. Čeští speakeři mluví ve svém jazyce a anglicky mluvící zase v angličtině. Je  nám jasné, že pro naší cílovou skupinu to není problém.",
  },
  {
    question: "Občerstvení na konferenci bude? ",
    answer:
      "S tím můžete rozhodně počítat. Během coffee brakes i oběda vás bude čekat občerstvení včetně vege, vegan a bezlepkových variant.",
  },
  {
    question: "Je možné se ubytovat v hotelu Clarion",
    answer:
      "Ano, určitě to možné je. Hotel Clarion nabízí více jak 500 pokojů, takže pokud nejste z Prahy, můžeme bydlet přímo v místě konference.",
  },
  {
    question: "Co je v ceně vstupenky?",
    answer:
      "x přednášek profesionálů z celého světa | Catering, káva i nealko během celého dne | Videozáznamy všech přednášek ve vysoké kvalitě | Vstup na afterparty | Networking se seniorními marketéry z firem i agentur, freelancery a influencery ",
  },
  {
    question: "Jak si můžu pořídit vstupenku",
    answer:
      "Doporučujeme si vstupenku zakoupit přímo na této stránce našeho webu. Je možné zaplatit bankovním převodem na zálohovou fakturu, nebo online platební kartou. Ve všech případech dostanete po úhradě daňový doklad.",
  },
  {
    question: "Nakupuji více lístků, mohu nakupovat na jednom účtě?",
    answer:
      "Ne, každý účastník musí mít svůj vlastní účet. Vstupenky jsou vázané na uživatelský účet konkrétního účastníka. ",
  },
  {
    question: "Dostanu slevu při koupi více vstupenek?",
    answer:
      "Zájmu o hromadný nákup vstupenek si moc vážíme, ale přes to vám slevu nemůžeme nabídnout. ",
  },
  {
    question: "Můžu svou vstupenku přeprodat dál?",
    answer:
      "Ano, vaši vstupenku může využít někdo jiný. Změnu účastníka je ale nutné nahlásit nejpozději do 23.9.2024. Můžete to udělat po přihlášení do svého účtu, nebo mailem na adrese info@woo.cz",
  },
  {
    question: "Můžu svou vstupenku vrátit?",
    answer:
      "Vstupenku je možné vrátit do 23.9.2024 a získat tak 80 % částky zpět. Po tomto datu je jedině možné převést vstupenku v systému na někoho jiného.",
  },
];

export default function Example() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-2">
        <div className="mx-auto max-w-4xl divide-y divide-gray-200/10">
          <Revealx delay={0.2}>
            {" "}
            <h2 className="pb-[32px] lg:pb-[48px] text-center">
              Často kladené <br className="md:hidden" /> dotazy
            </h2>
          </Revealx>
          <dl className="space-y-6 divide-y divide-gray-500/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-[#34AF83] ">
                        <span className=" leading-7  text-white ">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-500">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
