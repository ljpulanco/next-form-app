import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Apple Touch Icons for iOS */}
        <link rel="apple-touch-icon" href="/icons/ios/120.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/icons/ios/120.png" />

        {/* Meta Tags for iOS Web App */}
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
