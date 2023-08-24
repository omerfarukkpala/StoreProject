import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Sepet({ user }) {
  const [sepets, setSepets] = useState([]);

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
      <h1>Sepet</h1>

      <p>Toplam {sepets.length} ürün sepete eklenmiştir.</p>

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
