import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './home'
import SearchPage from './search'
import HotelDetails from './hotel-details'
import { SignInPage, SignUpPage } from './auth'
import Header from '@/components/layouts/header.layout'
import Footer from '@/components/layouts/footer.layout'

const Router = () => {
  return (
    <BrowserRouter>
        <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/search" element={<SearchPage/>} />
        <Route path="/hotel/:id" element={<HotelDetails/>} />

        <Route path="/signin" element={<SignInPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default Router
