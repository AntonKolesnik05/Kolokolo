import './Story.scss'
import storyImg from '../../assets/images/story-image.png'
import Values from './Values/Values.jsx'

function Story() {
  return (
    <section className="story">
      <div
        className="story_image"
        style={{ backgroundImage: `url(${storyImg})` }}
      >
        <div className="story_overlay" />

        <div className="story_content">
          <h1>OUR</h1>
          <h1>STORY</h1>
          <p>
            Real sourdough. Small-batch baking. Warm mornings in Prague.
          </p>
          <p>
            We started as a tiny kitchen experiment — mixing flour, 
            water, and patience. 
            Over time, it became our daily ritual: slow fermentation, 
            honest ingredients, and the smell of fresh bread that 
            brings people together.
            Today we bake in small batches to keep every loaf 
            personal. 
            No shortcuts, no “just add yeast” tricks — only time, 
            temperature, and craft. Come for the bread, stay for the 
            cozy vibe and the first bite you`ll remember.
          </p>
        </div>
      </div>
        <Values/>
    </section>
  );
}

export default Story;