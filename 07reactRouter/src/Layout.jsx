import React from 'react'
import Footer from './componants/Footer/Footer'
import Header from './componants/Header/header'
import { Outlet } from 'react-router-dom'
import UserContextProvider from './connectContext/UserContextProvider'
function Layout() {
  return (
   <UserContextProvider>
   <Header/>
   <Outlet/>
   <Footer/>
   </UserContextProvider>
  )
}

export default Layout
