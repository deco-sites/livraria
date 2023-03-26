import { asset, Head } from "$fresh/runtime.ts";

function GlobalTags() {
  return (
    <Head>
      {/* Icons */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={asset("/favicon.ico")}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={asset("/favicon.ico")}
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href={asset("/favicon.ico")}
      />

      {/* Web Manifest */}
      <link rel="manifest" href={asset("/site.webmanifest")} />
      <meta name="theme-color" content="#221E1F" />
      <meta name="msapplication-TileColor" content="#221E1F" />

      {
        /*
         * Include fonts
         * tip: It's always better copy fonts to the `/static/fonts` folder than serving from another
         * domain since DNS resolution times can really affect performance.
         */
      }

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @font-face {
            font-family: 'Open Sans';
            src: url(${asset("/fonts/OpenSans-Bold.woff2")}) format('woff2');
            font-weight: bold;
            font-style: normal;
            font-display: swap;
          }
          
          @font-face {
              font-family: 'Open Sans';
              src: url(${
            asset("/fonts/OpenSans-Regular.woff2")
          }) format('woff2');
              font-weight: normal;
              font-style: normal;
              font-display: swap;
          }
          
          @font-face {
              font-family: 'Open Sans';
              src: url(${
            asset("/fonts/OpenSans-SemiBold.woff2")
          }) format('woff2');
              font-weight: 600;
              font-style: normal;
              font-display: swap;
          }
          
          @font-face {
              font-family: 'Open Sans';
              src: url(${asset("/fonts/OpenSans-Light.woff2")}) format('woff2');
              font-weight: 300;
              font-style: normal;
              font-display: swap;
          }
          
          @font-face {
              font-family: 'Open Sans';
              src: url(${
            asset("/fonts/OpenSans-ExtraBoldItalic.woff2")
          }) format('woff2');
              font-weight: bold;
              font-style: italic;
              font-display: swap;
          }
          
          @font-face {
              font-family: 'Open Sans';
              src: url(${
            asset("/fonts/OpenSans-BoldItalic.woff2")
          }) format('woff2');
              font-weight: bold;
              font-style: italic;
              font-display: swap;
          }
          
          @font-face {
              font-family: 'Open Sans';
              src: url(${
            asset("/fonts/OpenSans-MediumItalic.woff2")
          }) format('woff2');
              font-weight: 500;
              font-style: italic;
              font-display: swap;
          }
          
          @font-face {
              font-family: 'Open Sans';
              src: url(${
            asset("/fonts/OpenSans-SemiBoldItalic.woff2")
          }) format('woff2');
              font-weight: 600;
              font-style: italic;
              font-display: swap;
          }
          
          @font-face {
              font-family: 'Open Sans';
              src: url(${
            asset("/fonts/OpenSans-LightItalic.woff2")
          }) format('woff2');
              font-weight: 300;
              font-style: italic;
              font-display: swap;
          }
          
          @font-face {
              font-family: 'Open Sans';
              src: url(${
            asset("/fonts/OpenSans-Medium.woff2")
          }) format('woff2');
              font-weight: 500;
              font-style: normal;
              font-display: swap;
          }
          
          @font-face {
              font-family: 'Open Sans';
              src: url(${
            asset("/fonts/OpenSans-Italic.woff2")
          }) format('woff2');
              font-weight: normal;
              font-style: italic;
              font-display: swap;
          }
          
          @font-face {
              font-family: 'Open Sans';
              src: url(${
            asset("/fonts/OpenSans-ExtraBold.woff2")
          }) format('woff2');
              font-weight: bold;
              font-style: normal;
              font-display: swap;
          }
      `,
        }}
      />
    </Head>
  );
}

export default GlobalTags;
