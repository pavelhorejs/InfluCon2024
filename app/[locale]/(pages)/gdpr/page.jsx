import Gdpr from "/components/pagesrepo/gdpr/Gdpr";
import { metadataCs, metadataEn } from "/app/metadata/gdpr";

export async function generateMetadata({ params: { locale } }) {
  const metadata = locale === "cs" ? metadataCs : metadataEn;

  return {
    title: metadata.title,
  };
}

const Page = () => {
  return (
    <>
      <Gdpr />
    </>
  );
};

export default Page;
