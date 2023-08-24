import { useContext } from "react";
import { Link } from "react-router-dom";
import { SiteContext } from "../context/SiteContext";

export default function ProductCard({ item }) {
  const productUrl = `/products/product/${item.id}`;
  const { user } = useContext(SiteContext);

  function handleClick(product) {
    let localSepets = JSON.parse(localStorage.getItem("sepets")) ?? [];
    const itemIndex = localSepets.findIndex(localItem => product.id === localItem.id);
    if (itemIndex >= 0) {
      localSepets = localSepets.filter(item => item.id !== product.id);
    } else {
      localSepets.push({ id: product.id, title: product.title });
    }
    localStorage.setItem("sepets", JSON.stringify(localSepets));
  }

  return (
    <div className="col-sm mb-3">
      <div className="card">
        {/* Ürün detay sayfasına doğrudan yönlendirme için Link öğesi */}
        <Link to={productUrl}>
          <img
            src={item.image}
            className="card-img-top p-3 img-thumbnail"
            alt={item.title}
            style={{ width: "100%", height: "200px" }}
          />
        </Link>
        <div className="card-body">
        <h5 className="card-title">{item.title.substring(0, 10)}</h5>

          
          <p className="card-text">
            {item.description.substring(0, 30)}
          </p>
          <p className="lead">{item.price}</p>

          {user && (
            <a href="#" className="btn btn-secondary" onClick={() => handleClick(item)}>
              Sepete Ekle
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
