import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"


import Header from "../components/Layout/Header";


export default function Products() {
  const [last10Products, setLast10Products] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=12")
      .then(res => res.json())
      .then(res => setLast10Products(res))
  }, [])

  return (
    <>
    <Header/>
    <br/>
    <h2>Urunler:</h2>
      <div className="row row-cols-sm-3 row-cols-md-4">
        {last10Products.map(item => <ProductCard key={item.id} item={item} />)}
      </div>
    </>
  )
}