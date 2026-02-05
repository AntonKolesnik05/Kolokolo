import './Values.scss';

import values1 from '../../../assets/images/value1.png';
import values2 from '../../../assets/images/value2.png';
import values3 from '../../../assets/images/value3.png';

const items = [
  {
    img: values1,
    text: 'Flavor takes time — and we give it time.',
  },
  {
    img: values2,
    text: 'Flour, water, salt — and nothing extra.',
  },
  {
    img: values3,
    text: 'Small batches, warm bread, happy people.',
  },
];

function Values() {
  return (
    <section className="values" id="values">
      <div className="values">
        <h2 className="values_title">Our Values</h2>

        <div className="values_flex">
          {items.map((it, idx) => (
            <article className="values-card" key={idx}>
              <div className="values-card_media">
                <img className="values-card_img" src={it.img} alt={it.title} />
              </div>

              <div className="values-card_body">
                <p className="values-card_text">{it.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Values;
