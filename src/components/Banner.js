import "../styles/Banner.css";
import logo from "../assets/logo.png";
import Recommendation from "./Recommendation";

function Banner() {
  const title = "La maison jungle";

  return (
    <div className="lmj-banner">
      <img src={logo} alt="La maison jungle" className="lmj-logo" />
      <div className="lmj-banner-row">
        <h1 className="lmj-title">{title}</h1>
        <Recommendation />
      </div>
    </div>
  );
}

export default Banner;
