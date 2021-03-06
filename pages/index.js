import Head from 'next/head'
import Layout from '../components/Layout';
import Carousel from '../components/Carousel';

export default function Home() {
  return (
    <div class="container">
      <Head>
        <title>Portfolio - Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/main.css" />
      </Head>
      <Layout>
        <Carousel/>
      </Layout>
    </div>
  )
}
