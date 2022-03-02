import type { AppProps } from "next/app";
import "../styles/globals.css";

import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <Head>
        <link rel="icon" type="image/jpeg" href="/assests/avatar.jpeg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
