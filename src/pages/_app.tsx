import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from '@/components/Navigation/Navbar'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'
import Breadcrumbs from '@/components/Navigation/Breadcrumbs/Breadcrumbs'
import Page from '@/components/Page'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="content">
      <Head>
      <link href='https://fonts.googleapis.com/css?family=Noto Sans' rel='stylesheet' />
      <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
      </Head>
      <Navbar />
      <Breadcrumbs />
      <Page>
        <Component {...pageProps} />
      </Page>
      <Footer />
      <Toaster />
    </div>
  );
}
