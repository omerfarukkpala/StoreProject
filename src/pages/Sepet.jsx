import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Layout/Header";

export default function Sepet({ user }) {
  const [sepets, setSepets] = useState([]);
  const aboutContainerStyle = {
    marginLeft: "-0.50cm",
  };

  useEffect(() => {
    setSepets(JSON.parse(localStorage.getItem("sepets")) ?? []);
  }, []);

  // Favori ürünü çıkarma işlemi
  const removeFromSepets = (id) => {
    const updatedSepets = sepets.filter((item) => item.id !== id);
    setSepets(updatedSepets);
    localStorage.setItem("sepets", JSON.stringify(updatedSepets));
  };

  return (
    <>
    <Header/>
    <br/>
    <br/>
    <br/>
    <br/>
    <h1>Sepet</h1>
      <div className="list-group">
        {sepets.map((item) => (
          <div key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <Link to={`/products/product/${item.id}`} className="text-decoration-none">
              {item.title.toUpperCase()}
            </Link>
            
            <button className="btn btn-danger" onClick={() => removeFromSepets(item.id)}>
              Sepetten  Çıkar
            </button>
            
          </div>
          
        ))}
      </div>
    </>
  );
}
