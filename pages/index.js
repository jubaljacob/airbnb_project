import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Jubal Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Header />
      <Banner />


      {/* Banner */}
      

      
    </div>
  )
}
