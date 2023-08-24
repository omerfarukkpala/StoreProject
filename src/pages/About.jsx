import React from "react";
import Header from "../components/Layout/Header";


export default function About() {
  return (
<>
    <Header/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h1 className="mb-4">Hakkımızda</h1>
          <p className="lead">
            Biz, PALA-Store olarak 10 yıldır müşterilerimize en kaliteli ürünleri sunmaktan gurur duyuyoruz.
            Mağazamızda geniş bir ürün yelpazesi bulabilirsiniz, her türlü ihtiyacınıza uygun ürünlerimiz mevcuttur.
          </p>
        </div>
        <div className="col-md-6">
          <h2 className="mb-4">Ekibimiz</h2>
          <p>
            Uzman ekibimiz, en son trendleri takip ederek sizlere en iyi ürünleri sunmaktadır.
            Müşteri memnuniyeti bizim için en önemli önceliğimizdir.
          </p>
          <p>
            Herhangi bir soru veya öneriniz varsa, lütfen bizimle iletişime geçmekten çekinmeyin.
            Size yardımcı olmaktan mutluluk duyarız.
          </p>
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
    </div>
    </>
  );
}
