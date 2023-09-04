import { useEffect, useState, useContext } from 'react'
import Navbar from './components/Navbar'
import SiteRoutes from './SiteRoutes'
import { SiteContext } from './context/SiteContext'
import Footer from './components/Footer'
import ThemeIcon from './components/ThemeIcon'
import Header from './components/Layout/Header'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'


function App() {
  
  const {user, handleLogin, handleLogout} = useContext(SiteContext)
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <SiteRoutes />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App
