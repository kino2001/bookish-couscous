import '@/styles/globals.css'
import Layout from '@/pages/layout';
import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css'

export default function App({ Component, pageProps }: AppProps) {
  return (    
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
