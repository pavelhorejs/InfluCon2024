"use client";
import Form from "/components/form/Form";
import Socials from "/components/socials/socials_white/Socials";
import { useTranslation } from "react-i18next";
import Revealx from "/components/reveals/Revealx";
import Link from "next/link";
const Contact = () => {
  const { t } = useTranslation();
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-y-10 max-w-7xl mx-auto">
      <div className="mx-2">
        <Revealx delay={0.2}>
          {" "}
          <h2 className="pb-[24px] mt-10 lg:mt-0">{t("ContactHeadline")}</h2>
        </Revealx>
        <Revealx delay={0.4}>
          <p className="max-w-md pb-[16px]">{t("ContactText")}</p>
        </Revealx>
        <Revealx delay={0.6}>
          <p className="text-lg font-bold pb-1 ">Email</p>
          <Link className="hover:text-[#F00065]" href="mailto:info@woo.cz">
            info@woo.cz
          </Link>
        </Revealx>
        <Revealx delay={0.8}>
          {" "}
          <p className="text-lg font-bold pb-2 mt-[16px]">{t("socials")}</p>
        </Revealx>
        <div className="pb-[24px] ">
          <Socials />
        </div>
        <Revealx delay={0.8}>
          <div>
            <p className="font-bold text-lg pb-[8px]">{t("zodpovednosti")}</p>
            <div className="pb-[8px]">
              {" "}
              <Link href="https://www.linkedin.com/in/petrsrna/">
                <span className="font-bold text-[#22FFAF] hover:text-[#F00065]">
                  Petr Srna
                </span>{" "}
                | {t("partneri")}
              </Link>{" "}
              <br />
              <Link href="mailto:petr.srna@woo.cz">petr.srna@woo.cz</Link>
            </div>
            <div className="pb-[8px]">
              <Link href="https://www.linkedin.com/in/nicolatošnarová/">
                <span className="font-bold text-[#22FFAF] hover:text-[#F00065]">
                  Nicola Tošnarová
                </span>{" "}
                | {t("organizace")}
              </Link>{" "}
              <br />
              <Link href="mailto:nicola.tosnarova@woo.cz">
                nicola.tosnarova@woo.cz
              </Link>
            </div>
            <div className="pb-[8px]">
              {" "}
              <Link href="https://www.linkedin.com/in/david-zamecnik-19773356/">
                {" "}
                <span className="font-bold text-[#22FFAF] hover:text-[#F00065]">
                  David Zámečník
                </span>{" "}
                | {t("speakeri")}
              </Link>{" "}
              <br />
              <Link href="mailto:david.zamecnik@woo.cz">
                david.zamecnik@woo.cz
              </Link>
            </div>
            <Link href="https://www.linkedin.com/in/natálie-bartoňová-7497192b3/">
              {" "}
              <span className="font-bold text-[#22FFAF] hover:text-[#F00065]">
                Natálka Bartoňová
              </span>{" "}
              | {t("after")}
            </Link>{" "}
            <br />
            <Link href="mailto:backoffice@woo.cz">backoffice@woo.cz</Link>
          </div>
        </Revealx>
      </div>
      <div className="mx-2 max-w-[500px]">
        <Revealx delay={0.6}>
          <Form />
        </Revealx>
      </div>
    </section>
  );
};
export default Contact;
