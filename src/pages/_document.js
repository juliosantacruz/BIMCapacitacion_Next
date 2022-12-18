import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  
  render() {
    return (
      <Html lang="es">
        <Head>
          <meta charSet="utf-8" />
          {/* <!-- SOCIALMEDIA TAG --> */}
          <meta property="og:title" content="BIMCapacitacion" />
          <meta property="og:type" content="text" />
          <meta
            property="og:url"
            content="https://www.bimcapacitacion.com/"
          />
          <meta
            property="og:image"
            content="https://www.bimcapacitacion.com/ImageRevitStructure.jpg"
          />

          <meta name="twitter:title" content="BIMCapacitacion" />
          <meta
            name="twitter:description"
            content="Cursos de Revit Autodesk para ti, Revit Arquitectura, Revit Estructura y Revit MEP"
          />
          <meta
            name="twitter:image"
            content="https://www.bimcapacitacion.com/ImageRevitStructure.jpg"
          />
          <meta name="twitter:card" content="summary_large_image" />
          {/* <!-- SOCIALMEDIA TAG --> */}

          <Script
            id="GA"
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-7GKX3LC9WK"
          ></Script>
          <Script
            id="GAOptions"
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
