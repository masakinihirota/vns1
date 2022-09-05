import { Layout } from '@/components/Layout'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Head>
        <title>Values Networking Service</title>
      </Head>

      <h1>
        Welcome to Values Networking Service!
        {/* Welcome to <a href="https://vns.blue/">Values Networking Service!</a> */}
      </h1>
    </Layout>
  )
}

export default Home
