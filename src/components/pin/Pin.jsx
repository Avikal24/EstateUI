import { Marker, Tooltip } from "react-leaflet";
import "./pin.scss";
import { Link } from "react-router-dom";

function Pin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Tooltip
        direction="top"
        offset={[0, -10]}
        opacity={1}
        permanent={false}
        className="customTooltip"
      >
        <div className="popupContainer">
          <img src={item.images[0]} alt="" />
          <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom} bedroom</span>
            <b>${item.price}</b>
          </div>
        </div>
      </Tooltip>
    </Marker>
  );
}

export default Pin;
