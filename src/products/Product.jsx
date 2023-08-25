import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Layout/Header";
import Navbar from "../components/Navbar";

export default function Product({ user }) {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((json) => setProduct(json))
      .catch((err) => console.error(err));
  }, [productId]);

  if (!product) {
    return <>
   </>;
  }

  return (
    <>
    <Header/>
    <br/>
    
    <br/>
    <br/>
    <div className="product-details">
      <div className="product-image">
        <img src={product.image} alt="" className="w-100 img-thumbnail" />
      </div>
      <div className="product-info">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
      </div>
    </div>
    </>
  );
}
