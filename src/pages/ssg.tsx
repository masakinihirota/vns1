import Link from 'next/link'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { Layout } from '../components/Layout'
import { supabase } from '../utils/supabase'
import { Test } from '../types/types'

// ssgの使い方
export const getStaticProps: GetStaticProps = async () => {
  console.log('getStaticProps/ssg invoked test')
  const { data: test } = await supabase
    .from('test')
    .select('*')
    .order('id', { ascending: false })

  return { props: { test: test } }
}

type StaticProps = {
  // tasksはここで定義されている
  test: Test[]
}

const Ssg: NextPage<StaticProps> = ({ test }) => {
  // console.log('中身')
  // console.log(test, '調査')

  const router = useRouter()
  return (
    <Layout title="SSG">
      <p className="mb-3 text-blue-500">SSG</p>
      <ul className="mb-3">
        {test.map((test) => {
          return (
            <li key={test.id}>
              <p className="text-lg font-extrabold">{test.name}</p>
            </li>
          )
        })}
      </ul>
      <Link href="/" prefetch={false}>
        <a className="my-3 text-xs"> Link to top</a>
      </Link>
      <Link href="/ssr" prefetch={false}>
        <a className="my-3 text-xs"> Link to ssr</a>
      </Link>
      <button className="mb-3 text-xs" onClick={() => router.push('/ssr')}>
        Route to ssr
      </button>
    </Layout>
  )
}

export default Ssg
