import Footer from '@/components/layouts/footer.layout'
import Header from '@/components/layouts/header.layout'
import Home from './home'
import React from 'react'
import HotelDetails from './hotel-details'

const App = () => {
  return (
    <div>
      <Header/>
      {/* <Home/> */}
      <HotelDetails/>
      <Footer/>

    </div>
  )
}

export default App
