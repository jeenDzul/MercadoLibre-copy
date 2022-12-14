import { Provider } from 'react-redux'

import store from 'redux/store';
import { Suspense } from 'react';
import "../styles/_global.scss";
import Head from 'next/head';
import SEO from 'utilities/seo';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mercado Libre</title>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="keywords" content="ventas,productos,aticulos,credito,ahorro,promociones,descuentos" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={SEO.description} />
        <meta property="og:title" content={SEO.title} />
        <meta property="og:description" content={SEO.description} />
        <meta property="og:type" content="website" />

      </Head>
      <Suspense fallback={<div>Loading....</div>}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Suspense>
    </>
  );
}

export default MyApp
