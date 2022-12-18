import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'


class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          
          <meta charSet="utf-8" />
           
          <Script id="GA" async src="https://www.googletagmanager.com/gtag/js?id=G-7GKX3LC9WK"></Script>
          <Script id="GAOptions"
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7GKX3LC9WK');
            `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
