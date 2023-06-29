import React, { useState } from "react";
import Teo from "../assets/pictures/Téo.jpg";
import Marine from "../assets/pictures/marine.jpg";
import Gaby from "../assets/pictures/Gaby.jpg";
import Laeti from "../assets/pictures/Laeti.jpg";
import Emilie from "../assets/pictures/Emilie.jpg";
import Eric from "../assets/pictures/Eric.jpg";
import Arnaud from "../assets/pictures/Arnaud.jpg";
import logoAboutUs from "../assets/pictures/Logo.png";
import Point from "../assets/pictures/point-interrogation.avif";

function AboutUs() {
  const [flipped, setFlipped] = useState(false);
  const handleClick = () => {
    setFlipped(!flipped);
    const currentPhoto = !flipped ? Arnaud : Point;
    setPhoto(currentPhoto);
  };
  const [photo, setPhoto] = useState(Point);
  return (
    <div>
      <img src={logoAboutUs} alt="logo techAccess" />
      <h2 className="titleAboutUs">Notre équipe de choc</h2>
      <div className="team">
        <img src={Teo} className="photoTeam" alt="Teo" />
        <img src={Marine} className="photoTeam" alt="Marine" />
        <img src={Gaby} className="photoTeam" alt="Gaby" />
        <img src={Laeti} className="photoTeam" alt="Laeti" />
        <img src={Eric} className="photoTeam" alt="Eric" />
        <img src={Emilie} className="photoTeam" alt="Emilie" />
        <img
          className={[
            "card-front",
            "card photoTeam",
            flipped ? "flipped" : "",
          ].join(" ")}
          onClick={handleClick}
          src={photo}
          alt="card front"
        />
      </div>
    </div>
  );
}
export default AboutUs;
