import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-slogan">
        <span>Sadece En İyisi İçin! 🌟</span>
        <h2>Tarzını Kendine Özel Kıl! 💫</h2>
        <a href="/">Şimdi Keşfet</a>
      </div>
      <div className="hero-image-container">
        <img src="/images/hero.png" alt="" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
