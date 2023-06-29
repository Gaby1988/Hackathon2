import React from "react";
import question from "../assets/pictures/faq_icone.png";
import setting from "../assets/pictures/setting.png";
import {Link} from "react-router-dom";
import Hammer from "../assets/pictures/hammer.png";
import Persons from "../assets/pictures/persons.png";

function Footer() {
  return (
    <div className="footer-containe">
      <ul>
        <div className="footer">
          <div className="FAQ">
            <img src={question} className="questionFaq" alt="logo Faq" />
            <Link to="/faq">
              <li>FAQ</li>
            </Link>
          </div>
          <div className="Setting">
            <img src={setting} className="setting" alt="logo paramètre" />
            <Link to="/parameter">
              <li>Paramètres</li>
            </Link>
          </div>
          <div className="Hammer">
            <img src={Hammer} className="hammer" alt="logo marteau" />
            <Link to="/LegalNotice">
              <li>Mentions légales</li>
            </Link>
          </div><div className="Persons">
            <img src={Persons} className="persons" alt="logo personnes" />
            <Link to="/Persons">
              <li>A propos</li>
            </Link>
          </div>
        </div>
      </ul>
    </div>
  );
}
export default Footer ;