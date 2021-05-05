import Head from 'next/head'
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div class="container">
      <Head>
        <title>Portfolio - Contact</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/main.css" />
      </Head>
      <Layout>
        <p>Contact</p>
      </Layout>
    </div>
  )
}
