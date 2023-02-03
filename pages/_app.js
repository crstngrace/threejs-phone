import Head from 'next/head';
import { AppContextProvider } from '../context/app-context';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='description' content='The best phones in town' />
        <link
          rel='icon'
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/favicon.ico`}
        />
      </Head>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </>
  );
}

export default MyApp;
