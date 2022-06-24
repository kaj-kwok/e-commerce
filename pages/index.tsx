import type { NextPage } from 'next'
import Layout from '../src/layout/layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline text-center">
        Hello world!
      </h1>
      <div className="text-lg">test</div>
    </Layout>
  )
}

export default Home
