import './Hero.scss';
import heroImg from '../../assets/images/hero.png';

function Hero() {
  return (
    <section className="hero">
      <div
        className="hero_image"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero_overlay" />

        <div className="hero_content">
          <h1>TRUE</h1>
          <h1>SOURDOUGH</h1>
          <h1>BREAD</h1>
          <p>
            We are a small artisanal bakery based in Prague, dedicated to slow
            fermentation and honest ingredients. Every loaf is naturally leavened,
            hand-shaped, and baked fresh every day. Our bakery specializes in
            traditional sourdough made with our own flour, natural fermentation,
            and time. No shortcuts, no additives — only real bread.
          </p>

          <div className="hero_buttons">
            <a className="hero_btn hero_btn--light" href="#gallery">
              EXPLORE OUR BAKERY
            </a>

            <a className="hero_btn hero_btn--dark" href="#story">
              Our story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
