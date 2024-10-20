import "./globals.scss";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Sticky from "@/components/sticky_ticket/Sticky";
import { Montserrat } from "next/font/google";
import TranslationProvider from "@/components/TranslationProvider";
import initTranslations from "../i18n";
import { metadataCs, metadataEn } from "@/app/metadata/metadata";
import Script from "next/script";
import Consent from "@/components/cookies/Consent";
import { getCookie } from "cookies-next";
const i18nNamespaces = ["default"];
const montserrat = Montserrat({ subsets: ["latin"] });
import opengraphImage from "/public/opengraph-image.jpg";

export async function generateMetadata({ params: { locale } }) {
  const metadata = locale === "cs" ? metadataCs : metadataEn;

  return {
    metadataBase: new URL("https://www.influcon.cz"),
    title: metadata.title,
    description: metadata.description,

    openGraph: {
      title: metadata.title,
      description: metadata.description,
      images: [
        {
          url: opengraphImage.src,
        },
      ],
      url: "https://www.influcon.cz",
      type: "website",
    },
  };
}

export default async function RootLayout({ children, params: { locale } }) {
  const { resources } = await initTranslations(locale, i18nNamespaces);
  const consent = getCookie("localConsent");
  return (
    <html lang={locale}>
      <head>
        <meta
          name="image"
          property="og:image"
          content="/opengraph-image.jpg"
        ></meta>
        <Script
          id="gtag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}

              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied',
                'personalization_storage': 'denied',
              });

              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KKTPGCGL');`,
          }}
        />
        {consent === "true" && (
          <Script
            id="consupd"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            gtag('consent', 'update', {
              'ad_storage': 'granted',
              'ad_user_data': 'granted',
              'ad_personalization': 'granted',
              'analytics_storage': 'granted',
              'personalization_storage': 'granted',
            });
          `,
            }}
          />
        )}
      </head>
      <body className={montserrat.className}>
        <TranslationProvider
          resources={resources}
          locale={locale}
          namespaces={i18nNamespaces}
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            {/* <Sticky /> */}
            <div className="flex-1">{children}</div>
            <Consent />
            <Footer />
          </div>
        </TranslationProvider>
      </body>
    </html>
  );
}
