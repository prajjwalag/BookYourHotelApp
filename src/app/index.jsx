import Footer from '@/components/layouts/footer.layout'
import Header from '@/components/layouts/header.layout'
import Home from './home'
import React from 'react'
import HotelDetails from './hotel-details'
import { SignInPage, SignUpPage } from './auth'
import SearchPage from './search'

const App = () => {
  return (
    <div>
      <Header/>
      {/* <Home/> */}
      {/* <HotelDetails/> */}
      {/* <SignInPage/> */}
      {/* <SignUpPage/> */}
      <SearchPage/>
      <Footer/>

    </div>
  )
}

export default App
