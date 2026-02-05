import './Facts.scss';

import millImg from '../../../assets/images/facts-mill.png';
import jamImg from '../../../assets/images/facts-jam.png';
import puffImg from '../../../assets/images/facts-puff.png';

const items = [
  {
    img: millImg,
    title: 'Our Own Mill',
    text: 'We mill our flour in-house, so every bake starts with grain we truly know.',
  },
  {
    img: jamImg,
    title: 'Jams Made in Our Kitchen',
    text: 'Our jams are cooked here, in small batches — never bought off a shelf.',
  },
  {
    img: puffImg,
    title: 'Handmade Puff Pastry',
    text: 'We laminate our puff pastry from scratch for that crisp, buttery finish.',
  },
];

function Facts() {
  return (
    <section className="facts" id="facts">
      <div className="facts_container">
        <h2 className="facts_title">FACTS ABOUT US</h2>

        <div className="facts_flex">
          {items.map((it, idx) => (
            <article className="fact-card" key={idx}>
              <div className="fact-card_media">
                <img className="fact-card_img" src={it.img} alt={it.title} />
              </div>

              <div className="fact-card_body">
                <h3 className="fact-card_title">{it.title}</h3>
                <p className="fact-card_text">{it.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Facts;
