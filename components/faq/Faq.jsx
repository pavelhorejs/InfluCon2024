"use client";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import Revealx from "../reveals/Revealx";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { motion } from "framer-motion";

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
];

export default function FaqComponent() {
  const { t, i18n } = useTranslation();
  const faqs = i18n.language === "cs" ? faqs_cs : faqs_en;

  return (
    <section id="faq">
      <div className="mx-auto max-w-7xl px-2">
        {" "}
        <div className="mx-auto max-w-4xl divide-y divide-gray-200/10">
          <Revealx delay={0.2}>
            <h2 className="pb-[32px] lg:pb-[48px] text-center">
              {t("Faq")} <br className="md:hidden" /> {t("Faq2")}
            </h2>
          </Revealx>{" "}
          <Revealx delay={0.4}>
            <dl className="space-y-6 divide-y divide-gray-500/10">
              {faqs.map((faq, index) => (
                <Disclosure as="div" key={index} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start font-bold justify-between text-left text-[#34AF83]">
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
          </Revealx>
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/faq">
            <Revealx dealy={0.6}>
              {" "}
              <motion.button
                whileHover={{ scale: 0.97 }}
                transition={{ type: "spring" }}
                className="buttonGreen"
              >
                {t("FaqButton")}
              </motion.button>
            </Revealx>
          </Link>
        </div>
      </div>
    </section>
  );
}
