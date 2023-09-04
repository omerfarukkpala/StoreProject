import React from "react";

export default function Footer() {
  // Footer'ın sabitlenip sabitlenmeyeceğini kontrol eden bir değişken
  const isFixed =
    window.location.pathname === "/contact" ||
    window.location.pathname === "/login" ||
    window.location.pathname === "/category" ||
    window.location.pathname === "/categories" ||
    window.location.pathname === "/sepet";

  const footerStyle = {
    backgroundColor: "#d9ffd4", // Koyu Mavi
    color: "#000000", // Beyaz
  };

  const linkStyle = {
    color: "#050502", // Altın Sarısı
    textDecoration: "none",
  };

  return (
    <footer className={`py-5 ${isFixed ? "fixed-bottom" : ""}`} style={footerStyle}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Trend Mağaza</h3>
            <p>
              Trend Mağaza olarak müşterilere en kaliteli ve en trend ürünleri sunma misyonuyla yola çıktık.
              Sizlere en iyi alışveriş deneyimini yaşatmak için buradayız.
            </p>
          </div>
          <div className="col-md-3">
            <h3>Hızlı Linkler</h3>
            <ul className="list-unstyled">
              <li>
                <a href="/" style={linkStyle}>
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a href="/products" style={linkStyle}>
                  Ürünler
                </a>
              </li>
              <li>
                <a href="/about" style={linkStyle}>
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="/contact" style={linkStyle}>
                  İletişim
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>İletişim</h3>
            <p>
              <strong>Adres:</strong> 1234 Elm Street, Şehir, Ülke
            </p>
            <p>
              <strong>Telefon:</strong> (123) 456-7890
            </p>
            <p>
              <strong>E-posta:</strong> info@example.com
            </p>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; {new Date().getFullYear()} Trend Mağaza. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
