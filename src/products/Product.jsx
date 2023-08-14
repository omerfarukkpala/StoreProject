import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function Products() {
  const [last10Products, setLast10Products] = useState([]);
  const [showAlert, setShowAlert] = useState(false); // Duruma bağlı uyarı gösterimi

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((res) => setLast10Products(res));
  }, []);

  const addToFavs = () => {
    // Favorilere ekleme işlemleri burada gerçekleştirilebilir
    setShowAlert(true); // Uyarıyı göster
    setTimeout(() => {
      setShowAlert(false); // Uyarıyı gizle
    }, 2000); // 2 saniye sonra uyarıyı gizle
  };

  return (
    <>
      <h2>Ürünler:</h2>
      <div className="row row-cols-sm-3 row-cols-md-4">
        {last10Products.map((item) => (
          <div key={item.id} className="col mb-4">
            <ProductCard item={item} />
            <button className="btn btn-primary mt-2" onClick={addToFavs}>
              Favorilere Ekle
            </button>
          </div>
        ))}
      </div>
      {showAlert && (
        <div className="alert alert-success mt-3" role="alert">
          Ürün favorilere eklendi!
        </div>
      )}
    </>
  );
}
