"use client";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import Revealx from "../reveals/Revealx";
import { useState } from "react";
import Button from "../buttons/button/Button";
import { useTranslation } from "react-i18next";

const faqs_en = [
  {
    question: "For whom is the conference meant to be?",
    answer:
      "For anyone who works in marketing, is interested in influencers and doesn't want to stay behind. Whether you have a direct experience with influencers or not. The programme is put together in order to be interesting for both the beginners and experienced CMO’s. You’ll see and hear the greatest experts in the field seen from the point of view of the brands, platforms and influencers themselves.",
  },
  {
    question:
      "Should I even bother if I don’t have any experience with influencer marketing?",
    answer:
      "Definitely! Influencer marketing is one of the fastest growing marketing sectors and it is never late to start digging in. If you work in marketing, you won’t have any problem finding your footing here. And it really pays off to come and find out what the buzz is all about.",
  },
  {
    question: "How did you draw up the lineup?",
    answer:
      "We combine our experiences from the field with the needs and wishes of those who associate themselves with influencer marketing, on various sides. We don’t sell the speaker slots, we carefully curate the lineup to make sure the programme is relevant and attractive and cover everything that needs to be covered. We have also been to enough conferences to learn our lesson from those that left an impact and those that did not.",
  },
  {
    question: "What is the spoken language of the conference?",
    answer:
      "The conference will be both Czech and English, with Czechs speaking Czech and foreigners using English. We believe our audience will have no trouble handling this.",
  },
  {
    question: "How about refreshments?",
    answer:
      "You can bet the food and drinks will be there. An assortment of options including vegetarian, vegan and gluten free will be available during coffee breaks and lunch break.",
  },
  // {
  //   question: "Is it possible to find accommodations in a Clarion hotel?",
  //   answer:
  //     "Yes it is. Clarion hotel offers more than 500 rooms, so if you are not from Prague, you can book a spot directly at a place of the conference.",
  // },
  {
    question: "What is included in the ticket price?",
    answer:
      "The ticket for this year’s conference costs 3 990 Kč incl VAT and includes: Talks of from all over the world | Catering, coffee and soft drinks all day long | High quality video recordings of all the talks | Free afterparty entry | Networking with senior marketers, agencies, freelancers and influencers",
  },
  {
    question: "How do I buy the ticket?",
    answer:
      "Ticket can be purchased through the GoOut portal, to which you will be redirected by clicking the 'Buy ticket' button.",
  },

  {
    question: "Can I get a discount if I buy more tickets?",
    answer:
      "We really appreciate your interest but we can’t offer any discount at this point.",
  },
  {
    question: "Can I resell my ticket?",
    answer:
      "Yes, your ticket can used by someone else. Please, notify us about the change of the attendee’s name until 23.9.2024. You can do it using contact form or via e-mail - just send us a note to info@woo.cz",
  },
  // {
  //   question: "How can I view the recording after the event ends?",
  //   answer:
  //     "The recording of the entire event will be available after the event ends upon logging into your user account. The recording will be accessible to those who have purchased either a standard ticket or a live stream.",
  // },
  {
    question: "Is it possible to buy a ticket on an invoice?",
    answer:
      "Yes, if you want to issue an invoice, please select the 'Invoice' option during payment.",
  },
];

const faqs_cs = [
  {
    question: "Pro koho je konference určena?",
    answer:
      "Pro všechny, kdo se pohybují v marketingu, zajímají se o influencery a nechtějí zůstat pozadu - ať už mají zkušenosti s influencery nebo ne. Program je navržen tak, aby zaujal začátečníky i zkušené CMO’s. Uvidíte a uslyšíte ty největší odborníky v oboru z pohledu značek, platforem a dokonce i samotných influencerů.",
  },
  {
    question:
      "Mám vůbec chodit, i když nemám zkušenosti s influencer marketingem?",
    answer:
      "Rozhodně! Influencer marketing patří k nejrychleji rostoucím odvětvím, a nikdy není pozdě začít se o něj zajímat. Pokud se v marketingu pohybujete, nebudete mít problém se zorientovat - a určitě se vyplatí dorazit a zjistit, o čem to vlastně je.",
  },
  {
    question: "Na základě čeho tvoříte program?",
    answer:
      "Kombinujeme zkušenosti z oboru a potřeby i přání lidí, kteří se v influencer marketingu pohybují, na různých stranách. Prostor pro přednášející neprodáváme, ale vybíráme je sami tak, aby byl program relevantní a atraktivní a pokryl všechno, co pokrýt má. Taky jsme sami objeli dost konferencí a poučili jsme se z těch, které na nás udělaly dojem i z těch, které zapadly.",
  },
  {
    question: "V jakém jazyce je konference?",
    answer:
      "Konference bude česko-anglicky. Čeští speakři mluví ve svém jazyce a anglicky mluvící zase v angličtině. Je nám jasné, že pro naší cílovou skupinu to není problém.",
  },
  {
    question: "Bude na konferenci občerstvení?",
    answer:
      "S tím můžete rozhodně počítat. Během coffee breaků i oběda vás čeká občerstvení včetně veganských a bezlepkových variant.",
  },
  // {
  //   question: "Je možné se ubytovat v hotelu Clarion?",
  //   answer:
  //     "Ano, určitě to je možné. Hotel Clarion nabízí více než 500 pokojů, takže pokud nejste z Prahy, můžete bydlet přímo v místě konference.",
  // },
  {
    question: "Co je v ceně vstupenky?",
    answer:
      "Přednášky profesionálů z celého světa, catering, káva a nealkoholické nápoje během celého dne, videozáznamy všech přednášek ve vysoké kvalitě, vstup na afterparty, networking se seniorními marketéry z firem i agentur, freelancery a influencery.",
  },
  {
    question: "Jak si mohu pořídit vstupenku?",
    answer:
      "Vstupenku si můžete zakoupit přes portál GoOut, na který budete přesměrování po kliknutím na tlačítko 'Koupit lístek'.",
  },
  {
    question: "Dostanu slevu při koupi více vstupenek?",
    answer:
      "Zájmu o hromadný nákup vstupenek si moc vážíme, ale přes to vám slevu nemůžeme nabídnout.",
  },
  {
    question: "Můžu svou vstupenku přeprodat dál?",
    answer:
      "Ano, vaši vstupenku může využít někdo jiný. Změnu účastníka je ale nutné nahlásit nejpozději do 23.9.2024. Můžete to udělat pomocí kontaktního formuláře nebo mailem na adrese info@woo.cz.",
  },
  // {
  //   question: "Jak si mohu po skončení akce zhlédnout záznam?",
  //   answer:
  //     "Záznam z celé akce bude po ukončení dostupný po přihlášení do uživatelského účtu. Záznam uvidí ti, kteří si zakoupili jak klasickou vstupenku, tak živý přenos.",
  // },
  {
    question: "Je možné koupit vstupenku na fakturu?",
    answer:
      "Ano, v případě, že chcete vystavit fakturu, zvolte možnost 'Faktura' při platbě.",
  },
];

export default function FaqComponent() {
  const { t, i18n } = useTranslation();
  const faqs = i18n.language === "cs" ? faqs_cs : faqs_en;

  return (
    <>
      <div className="mx-auto max-w-7xl px-2">
        <div className="mx-auto max-w-4xl divide-y divide-gray-200/10">
          <dl className="space-y-6 divide-y divide-gray-500/10">
            {faqs.map((faq, index) => (
              <Disclosure as="div" key={index} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left font-bold text-[#34AF83]">
                        <span className="leading-7 text-white">
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
                      <p className="text-base leading-7 text-gray-300">
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
    </>
  );
}
