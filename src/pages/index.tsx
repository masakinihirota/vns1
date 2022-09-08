import Link from 'next/link'
import { Layout } from '../components/Layout'
import type { NextPage } from 'next'
import Head from 'next/head'

const User = (props: { name: string | null | undefined }) => {
  return <h2>Hello {props.name}</h2>
}

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
      <br />
      <User name="John Doe!" />
      <Link href="/ssg" prefetch={false}>
        <a className="my-3 text-xs"> Link to ssg</a>
      </Link>
      <Link href="/__view_map">
        <a>http://localhost:3000/__view_map</a>
      </Link>
      <br />
      <Link href="/__view_button">
        <a>http://localhost:3000/__view_button</a>
      </Link>
      <br />
    </Layout>
  )
}

export default Home
