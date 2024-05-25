import "./globals.scss";

import CookieBanner from "/components/cookies/CookieBanner";
import Navbar from "/components/navbar/Navbar";
import Footer from "/components/footer/Footer";
import { Montserrat } from "next/font/google";
import TranslationProvider from "/components/TranslationProvider";
import initTranslations from "../i18n";
const i18nNamespaces = ["default"];

export const metadata = {
  title: "Největší influencer marketing konference v Praze (ČR) | InfluCon.cz",
  description:
    "Největší influencer marketing konference v Česku. Poznejte roli influencerů v brand buildingu a zjistěte novinky od manažerů a odborníků z této oblasti.",
  robots: {
    index: true,
    googleBot: {
      index: true,
    },
  },
};

const montserrat = Montserrat({ subsets: ["latin"] });

export default async function RootLayout({ children, params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <html lang="en">
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
