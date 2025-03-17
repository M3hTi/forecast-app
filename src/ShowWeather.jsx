import { FiWind } from "react-icons/fi";
import { WiHumidity } from "react-icons/wi";
import { GiWindsock } from "react-icons/gi";
import PropTypes from "prop-types";
ShowWeather.propTypes = {
  weatherObj: PropTypes.object.isRequired,
};
import Icon from "./Icon";
function ShowWeather({ weatherObj }) {
  // Check if weatherObj and current exist
  if (!weatherObj || !weatherObj.current) {
    return <div>Please enter a city to get weather information</div>;
  }

  const { current, location } = weatherObj;
  //   console.log(current);
  const {
    temp_c,
    wind_kph,
    humidity,
    precip_in,
    condition: { icon, text },
  } = current;

  const { localtime, name, country } = location;
  //   console.log(localtime);

  const date = new Date(localtime);

  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    weekday: "long",
  });

  return (
    <div className="weather-container">
      <h2 className="date">{formattedDate}</h2>
      <div className="weather-main">
        <img src={icon} alt={text} className="weather-icon" />
        <h2 className="temperature">{temp_c}°</h2>
        <h3 className="condition">{text}</h3>
        <h5 className="location">
          {name}, {country}
        </h5>
      </div>
      <div className="icons-container">
        <Icon icon={<FiWind />} className="icon-item">
          {wind_kph} km/h
        </Icon>
        <Icon icon={<WiHumidity />} className="icon-item">
          {humidity}%
        </Icon>
        <Icon icon={<GiWindsock />} className="icon-item">
          {precip_in}%
        </Icon>
      </div>
    </div>
  );
}

export default ShowWeather;
