/* eslint-disable @next/next/inline-script-id */
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';


declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}


export default function Document() {
  return (
    <Html lang='pt-br'>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CYYS64KNKJ"></script>
        <Script strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-CYYS64KNKJ');`}}></Script>  
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}