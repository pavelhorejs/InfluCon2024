import Dashboard from "/components/pagesrepo/dashboard/Dashboard";
import { metadataCs, metadataEn } from "/app/metadata/contact";

export async function generateMetadata({ params: { locale } }) {
  const metadata = locale === "cs" ? metadataCs : metadataEn;

  return {
    title: metadata.title,
  };
}

const Page = () => {
  return (
    <>
      <Dashboard />
    </>
  );
};

export default Page;
