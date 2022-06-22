import React from 'react'
import PageTitle from '../../Shared/PageTitle/PageTitle'
import Banner from '../Banner/Banner'
import Best from '../Categories/Best'
import New from '../Categories/New'
import Recent from '../Categories/Recent'
import Upcoming from '../Categories/Upcoming'

const Home = () => {
  // rendering home component here
  return (
    <section className='min-h-screen pt-[88px] md:px-3 lg:px-0'>
      <PageTitle title={'Home'} />
      <Banner />
      <Best />
      <New />
      <Upcoming />
      <Recent />
    </section>
  )
}

export default Home
