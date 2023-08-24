import products from "../../productData";
import "./Products.css";

const Products = () => {
  const productList = products.map((item) => <li>{item.name}</li>);

  return (
    <main className="products-wrapper">
      <ul className="products">{productList}</ul>
    </main>
  );
};

export default Products;
