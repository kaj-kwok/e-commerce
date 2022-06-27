import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <div className='flex justify-center my-10'>
        <video autoPlay muted loop className="h-full">
          <source src='pexels-koolshooters-8533114.mp4' />
        </video>
      </div>
      <section>
        <div></div>
        <div></div>
      </section>
    </div>
  )
}

export default Home

///../public/pexels-koolshooters-8533114.mp4