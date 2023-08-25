import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Layout/Header";


export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(res => setCategories(res));
  }, []);

  return (
    <>
    
    <Header/>
    <br/>
    <br/>
    <br/>
    
    
    <div className="categories-container">
      <br/>
      
      
      <h2>Kategoriler:</h2>      
      <div className="list-group">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/products/category/${category}`}
            className="list-group-item list-group-item-action category-link"
          >
            
            <span className="category-text">{category.toUpperCase()}</span>
            <i className="bi bi-arrow-right category-icon"></i>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
}
