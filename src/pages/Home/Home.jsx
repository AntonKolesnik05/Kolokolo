import Hero from '../../components/Hero/Hero.jsx';
import Gallery from '../../components/Gallery/Gallery.jsx';
import Location from '../../components/Location/Location.jsx';
import SliderGallery from '../../components/Gallery/SliderGallery.jsx';

function Home() {
  return (
    <>
      <Hero />
      <SliderGallery />
      <Location />
    </>
  );
}

export default Home;