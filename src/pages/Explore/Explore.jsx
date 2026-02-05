import exploreImg from '../../assets/images/explore.png'
import Facts from './Facts/Facts.jsx'
import './Explore.scss'

function Explore() {
  return (
    <section className="explore">
      <div
        className="explore_image"
        style={{ backgroundImage: `url(${exploreImg})` }}
      >
        <div className="explore_overlay" />

        <div className="explore_content">
          <h1>Explore</h1>
          <h1>Our</h1>
          <h1>Bakery</h1>
          <p>
            Step inside — warm ovens, 
            fresh sourdough, 
            and the smell of morning.
            From starter to crust, everything 
            happens here. 
            Small batches, slow fermentation, 
            and a cozy space made for a quick 
            coffee or a long chat.
          </p>

          <div className="explore_buttons">
            <a className="explore_btn explore_btn--light" href="">
              Visit us
            </a>

            <a className="explore_btn explore_btn--dark" href="">
              Menu
            </a>
          </div>
        </div>
      </div>
      <Facts/>
    </section>
  );
}

export default Explore;