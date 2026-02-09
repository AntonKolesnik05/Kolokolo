import "./SliderGallery.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import g1 from "../../assets/images/gallery1.jpg";
import g2 from "../../assets/images/gallery2.jpg";
import g3 from "../../assets/images/gallery3.jpg";
import g4 from "../../assets/images/gallery4.jpg";
import g5 from "../../assets/images/gallery5.jpg";
import g6 from "../../assets/images/gallery6.jpg";
import g7 from "../../assets/images/gallery7.jpg";
import g8 from "../../assets/images/gallery8.jpg";
import g9 from "../../assets/images/gallery9.jpg";
import g10 from "../../assets/images/gallery10.jpg";
import g11 from "../../assets/images/gallery11.png";
import g12 from "../../assets/images/gallery12.png";
import g13 from "../../assets/images/gallery13.png";
import g14 from "../../assets/images/gallery14.png";
import g15 from "../../assets/images/gallery15.jpg";

const images = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15];

function SliderGallery() {
  return (
    <section className="gallery" id="gallery">
      <h2 className="gallery_title">Gallery</h2>

      <Swiper
        className="gallery_slider"
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={"auto"}
        spaceBetween={10}
        breakpoints={{
          768: { spaceBetween: 16 },
          1024: { spaceBetween: 22 },
        }}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="gallery_slide">
              <img className="gallery_img" src={src} alt={`Bakery photo ${i + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="gallery_more">
        <Link className="slider-btn-dark" to="/FullGallery">View more..</Link>
      </div>
    </section>
  );
}

export default SliderGallery;
