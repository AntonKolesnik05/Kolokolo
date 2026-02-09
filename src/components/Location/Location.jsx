import "./Location.scss";

function Location() {
  return (
    <section className="location" id="location">
      <div className="location_container">
        <h2 className="location_title">OUR LOCATION</h2>

        <div className="location_box">
          <div className="location_map">
            <iframe
              className="location_iframe"
              title="Kolokolo location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d760.8851427815373!2d14.39697847790768!3d50.09934737455482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b95238f3f3f2d%3A0x5fbbb5b5963b55fc!2zS09MTyBLT0xPIE1Mw51OU0vDnQ!5e0!3m2!1sen!2scz!4v1770421763200!5m2!1sen!2scz"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="location_info">
            <h3 className="location_heading">BAKERY ADDRESS</h3>
            <p className="location_line">Na Hutích 2 in Dejvice, Prague.</p>

            <h3 className="location_heading location_heading--mt">BAKERY WORK TIME</h3>
            <p className="location_line">Monday-Friday — 7:30am–5:30pm</p>
            <p className="location_line">Saturday-Sunday — CLOSED</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
