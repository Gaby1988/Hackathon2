import React from "react";
import question from "../assets/pictures/faq_icone.png";
import setting from "../assets/pictures/setting.png";
import {Link} from "react-router-dom";

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
            <img src={setting} className="setting" alt="loto paramètre" />
            <Link to="/parameter">
              <li>Paramètres</li>
            </Link>
          </div>
        </div>
      </ul>
    </div>
  );
}
export default Footer ;