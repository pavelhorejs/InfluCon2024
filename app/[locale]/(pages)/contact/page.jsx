import { metadata } from "../../layout";
import Contact from "/components/pagesrepo/contact/Contact";

export const metadata = {
  title: "Kontaktujte nás pomocí kontaktního formuláře | InfluCon.cz",
  description:
    "Ozvěte se nám! Rádi vám pomůžeme najít odpovědi na všechny otázky o účasti na naší influencer marketing konferenci InfluCon. Neváhejte a kontaktujte nás.",
};

const Page = () => {
  return (
    <>
      <Contact />
    </>
  );
};
export default Page;
