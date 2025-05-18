import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../Menu/Menu'
import Footer from '../Footer/Footer'
import FooterLST from '../Footer/FooterLST'

const Layout = () => {
  return (
   <>
    <Menu/>
    <Outlet/>
    <FooterLST/>
   </>
  )
}

export default Layout