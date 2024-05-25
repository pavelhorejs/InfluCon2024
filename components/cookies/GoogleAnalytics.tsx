"use client";

import Script from "next/script";

export default function GoogleAnalytics({
  GA_MEASUREMENT_ID,
}: {
  GA_MEASUREMENT_ID: string;
}) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('consent', 'default', {
      'analytics_storage': 'denied',
      'ad_storage': 'denied'
    });
    
    gtag('config', '${GA_MEASUREMENT_ID}', {
      page_path: window.location.pathname,
    });
                `,
        }}
      />
    </>
  );
}
