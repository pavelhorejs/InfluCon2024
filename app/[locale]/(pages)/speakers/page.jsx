import { SpeakersPage } from "@/components/pagesrepo/speakers/Speakers";
import { metadataCs, metadataEn } from "@/app/metadata/speakers";

export async function generateMetadata({ params: { locale } }) {
  const metadata = locale === "cs" ? metadataCs : metadataEn;

  return {
    title: metadata.title,
  };
}

export const Page = () => {
  return <SpeakersPage />;
};

export default Page;
