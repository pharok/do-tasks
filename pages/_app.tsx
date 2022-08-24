import '../common/media/styles/global.css';
import type {AppProps} from 'next/app';
import {ThemeProvider} from 'next-themes';
import Layout from '@/components/Layout/Layout';

export default function MyApp({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
