import type { AppProps } from "next/app";
import "../styles/globals.css";

// import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      /> */}

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
      {/* <NextSeo
        title="All About Graham"
        titleTemplate="All About Graham"
        defaultTitle="All About Graham"
        description="I'm Graham and this is my portfolio!"
        openGraph={{
          url: "https://www.anurag.tech/",
          title: "All About Graham",
          description:
            "I'm Graham and this is my portfolio!",
          images: [
            {
              url: "https://res.cloudinary.com/ddum5vpp3/image/upload/v1643532760/og-image_dwcwhp.png",
              width: 800,
              height: 420,
              alt: "Anurag | Frontend Developer",
            },
          ],
        }}
        twitter={{
          handle: "@gmoneybarcode",
          site: "@gmoneybarcode",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Frontend Developer, Web Developer, web development, web developer, DIY, open source",
          },
        ]}
      /> */}
      <Head>
        <link rel="icon" type="image/jpeg" href="/assests/avatar.jpeg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
