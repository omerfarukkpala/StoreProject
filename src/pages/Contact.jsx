import React from "react";
import Header from "../components/Layout/Header";

export default function Contact() {
  const contactContainerStyle = {
    padding: "100px 0 800px 0",
    margin: "100px",
  };

  const formButtonStyle = {
    backgroundColor: "#FFD700",
    borderColor: "#FFD700",
    color: "#333333",
  };

  return (
    <>
      <Header />
      <div className="container mt-3" style={{ ...contactContainerStyle, marginLeft: "0cm" }}>
        <div className="row">
          <div className="col-md-6">
            <h2 className="mb-4">İletişim</h2>
            
            <p className="lead">
              Bizimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz:
            </p>
            <ul className="list-unstyled">
              <li>
                <strong>Adres:</strong> 1234 Elm Street, Şehir, Ülke
              </li>
              <li>
                <strong>Telefon:</strong> (123) 456-7890
              </li>
              <li>
                <strong>E-posta:</strong> info@example.com
              </li>
            </ul>
         
          </div>
          <div className="col-md-6">
            <h2 className="mb-4">Bize Ulaşın</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Adınız
                </label>
                <input type="text" className="form-control" id="name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  E-posta Adresiniz
                </label>
                <input type="email" className="form-control" id="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Mesajınız
                </label>
                <textarea className="form-control" id="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary my-3" style={formButtonStyle}>
                Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
      
    </>
  );
}
