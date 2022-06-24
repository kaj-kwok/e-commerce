import type { NextPage } from 'next'
import Layout from '../src/layout/layout'

const Home: NextPage = () => {
  return (
    <div className="w-screen dark:bg-primary-dark text-text-primary-light dark:text-text-primary-dark h-screen overflow-hidden">
      <Layout>
        <h1 className="text-3xl font-bold underline text-center">
          Hello world!
        </h1>
        <div className="text-lg">test</div>
      </Layout>
    </div>
  )
}

export default Home
