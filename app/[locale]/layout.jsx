import "./globals.scss";
import GoogleAnalytics from "/components/GoogleAnalytics";
import Navbar from "../../components/navbar/Navbar";
import Footer from "/components/footer/Footer";
import CookieBanner from "../../components/CookieBanner";
import { Montserrat } from "next/font/google";
import TranslationProvider from "/components/TranslationProvider";
import initTranslations from "../i18n";
const i18nNamespaces = ["default"];

export const metadata = {
  title: "InfluCon 2024",
  description:
    "Zjistěte, jak influencer marketing posouvá značky. Včetně té vaší.",
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
            <GoogleAnalytics GA_MEASUREMENT_ID="G-2NXZDKNBYP" />
            <div className="flex-grow">
              <Navbar />
              {children}
            </div>
            <CookieBanner />
            <Footer />
          </div>
        </body>
      </TranslationProvider>
    </html>
  );
}
