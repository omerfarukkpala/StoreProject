import { useContext } from "react";
import { Link } from "react-router-dom";
import { SiteContext } from "../context/SiteContext";

export default function ProductCard({ item }) {
  const productUrl = `/products/product/${item.id}`;
  const { user } = useContext(SiteContext);

  function handleClick(product) {
    let localFavs = JSON.parse(localStorage.getItem("favs")) ?? [];
    const itemIndex = localFavs.findIndex(localItem => product.id === localItem.id);
    if (itemIndex >= 0) {
      localFavs = localFavs.filter(item => item.id !== product.id);
    } else {
      localFavs.push({ id: product.id, title: product.title });
    }
    localStorage.setItem("favs", JSON.stringify(localFavs));
  }

  return (
    <div className="col-sm mb-3">
      <div className="card">
        <Link to={productUrl}>
          <img
            src={item.image}
            className="card-img-top p-3 img-thumbnail"
            alt={item.title}
            style={{ width: "100%", height: "200px" }} // Resim boyutunu ayarlayın
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">
            {item.description.substring(0, 50)}.. {/* İlk 75 karakteri göster */}
          </p>
          <p className="lead">{item.price}</p>

          {user && (
            <a href="#" className="btn btn-secondary" onClick={() => handleClick(item)}>
              Fav
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
