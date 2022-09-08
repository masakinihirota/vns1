import * as React from 'react'
import type { NextPage } from 'next'
import { Books } from '../components_test/maps'

// mapの使い方
const Home: NextPage = () => {
  const titles = ['タイトル1', 'タイトル2', 'タイトル3']

  return <Books titles={titles}></Books>
}

export default Home
