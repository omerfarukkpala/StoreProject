import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Fav({ user }) {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    setFavs(JSON.parse(localStorage.getItem("favs")) ?? []);
  }, []);

  // Favori ürünü çıkarma işlemi
  const removeFromFavs = (id) => {
    const updatedFavs = favs.filter((item) => item.id !== id);
    setFavs(updatedFavs);
    localStorage.setItem("favs", JSON.stringify(updatedFavs));
  };

  return (
    <>
      <h1>Favoriler</h1>

      <p>Toplam {favs.length} ürün favorilere eklenmiştir.</p>

      <div className="list-group">
        {favs.map((item) => (
          <div key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <Link to={`/products/product/${item.id}`} className="text-decoration-none">
              {item.title.toUpperCase()}
            </Link>
            <button className="btn btn-danger" onClick={() => removeFromFavs(item.id)}>
              Favorilerden Çıkar
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
