import "./Location.scss";
import mapImg from "../../assets/images/map.png";

function Location() {
  return (
    <section className="location" id="location">
      <div className="location_container">
        <h2 className="location_title">OUR LOCATION</h2>

        <div className="location_box">
          <div className="location_map">
            <img className="location_mapImg" src={mapImg} alt="Map to Kolokolo bakery" />
          </div>

          <div className="location_info">
            <h3 className="location_heading">BAKERY ADDRESS</h3>
            <p className="location_line">Na Hutích 2 in Dejvice, Prague.</p>

            <h3 className="location_heading">BAKERY WORK TIME</h3>

            <p className="location_line">Monday-Friday — 7:30am-5:30pm</p>
            <p className="location_line">Saturday-Sunday — CLOSED</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;

