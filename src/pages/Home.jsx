import { Products } from "../products";
import Header from "../components/Layout/Header";
import Hero from "../components/Hero/Hero";
import Cart from "../components/Cart/Cart";
import Navbar from "../components/Navbar";


export default function Home() {
  
  return (
    <>
        
      <Header/>
      <Hero/>
      <Cart/>
      <Products/>
    </>
  )
}