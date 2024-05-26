import Contact from "/components/pagesrepo/contact/Contact";
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
      <Contact />
    </>
  );
};

export default Page;
