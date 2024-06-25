import Passwordrecovery from "/components/password_recovery/Passwordrecovery";
import { metadataCs, metadataEn } from "/app/metadata/cookies";

export async function generateMetadata({ params: { locale } }) {
  const metadata = locale === "cs" ? metadataCs : metadataEn;

  return {
    title: metadata.title,
  };
}

const Page = () => {
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <Passwordrecovery />
    </div>
  );
};

export default Page;
