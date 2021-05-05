import Head from 'next/head'
import Layout from '../components/Layout';
import CV from '../components/Resume';

export default function Resume() {
  return (
    <div class="container">
      <Head>
        <title>Portfolio - Resume</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/main.css" />
      </Head>
      <Layout>
        <CV/>
      </Layout>
    </div>
  )
}
