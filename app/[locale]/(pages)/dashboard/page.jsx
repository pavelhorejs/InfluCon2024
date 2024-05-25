import Dashboard from "/components/pagesrepo/dashboard/Dashboard";

export const metadata = {
  title: "Vstupenky na největší influencer marketing konferenci | InfluCon.cz",
  description:
    "V ceně vstupenek máte přednášky od marketingových odborníků, videozáznamy přednášek a seznámíte se z marketéry z firem a agentur, freelancery i influencery.",
};
const Page = () => {
  return (
    <>
      <Dashboard />
    </>
  );
};

export default Page;
