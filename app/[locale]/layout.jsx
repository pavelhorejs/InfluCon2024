import "./globals.scss";
import CookieBanner from "/components/cookies/CookieBanner";
import Navbar from "/components/navbar/Navbar";
import Footer from "/components/footer/Footer";
import { Montserrat } from "next/font/google";
import TranslationProvider from "/components/TranslationProvider";
import initTranslations from "../i18n";
import openGraphImage from "/public/og.webp";
import { metadataCs, metadataEn } from "/app/metadata/metadata";

const i18nNamespaces = ["default"];
const montserrat = Montserrat({ subsets: ["latin"] });

export async function generateMetadata({ params: { locale } }) {
  const metadata = locale === "cs" ? metadataCs : metadataEn;

  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      title: metadata.openGraph.title,
      description: metadata.openGraph.description,
      url: metadata.openGraph.url,
      type: metadata.openGraph.type,
      images: openGraphImage,
    },
  };
}

export default async function RootLayout({ children, params: { locale } }) {
  const { resources, t } = await initTranslations(locale, i18nNamespaces);

  return (
    <html lang="cs">
      <TranslationProvider
        resources={resources}
        locale={locale}
        namespaces={i18nNamespaces}
      >
        <body className={montserrat.className}>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1">{children}</div>
            <CookieBanner />
            <Footer />
          </div>
        </body>
      </TranslationProvider>
    </html>
  );
}
