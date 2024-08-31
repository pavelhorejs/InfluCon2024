import Newpassword from "/components/password_recovery/new_password/Newpassword";
import { metadataCs, metadataEn } from "/app/metadata/cookies";

export async function generateMetadata({ params: { locale } }) {
  const metadata = locale === "cs" ? metadataCs : metadataEn;

  return {
    title: metadata.title,
  };
}

const Page = () => {
  return (
    <div className="flex h-[80vh] items-center justify-center">
      <Newpassword />
    </div>
  );
};

export default Page;
