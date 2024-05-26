import Cookies from "/components/pagesrepo/cookies/Cookies";
import { metadataCs, metadataEn } from "/app/metadata/cookies";

export async function generateMetadata({ params: { locale } }) {
  const metadata = locale === "cs" ? metadataCs : metadataEn;

  return {
    title: metadata.title,
  };
}

const Page = () => {
  return (
    <>
      <Cookies />
    </>
  );
};

export default Page;
