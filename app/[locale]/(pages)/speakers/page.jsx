import Speakers from "/components/pagesrepo/speakers/Speakers";
export const metadata = {
  title: "Seznamte se s našimi odborníky na influencer marketing | InfluCon.cz",
  description:
    "Zúčastněte se naší konference InfluCon a a poznejte odborníky, profesionály, CEO, manažery z oboru a influencery, kteří ví, co funguje v influencer marketingu.",
};
const Page = () => {
  return (
    <>
      <Speakers />
    </>
  );
};
export default Page;
