import React from "react";
import main from "../../../assets/voip/1.jpg";
import image2 from "../../../assets/voip/5.jpeg";
import image3 from "../../../assets/voip/9.jfif";
import image4 from "../../../assets/voip/6.jfif";
import image5 from "../../../assets/voip/7.jfif";
import benefit1 from "../../../assets/voip/benefit1.jfif";
import benefit2 from "../../../assets/voip/benefit2.jfif";
import benefit3 from "../../../assets/voip/benefit3.jfif";
import benefit4 from "../../../assets/voip/benefit4.png";
import benefit5 from "../../../assets/voip/benefit5.jpg";
import benefit6 from "../../../assets/voip/benefit6.png";
import "./Voip.css";

const Voip = () => {
  return (
    <div className="voip-container">
      <div className="voip-main-image">
        <div className="carousel">
          <div className="carousel-item">
            <img src={image2} alt="voip" />
          </div>
          <div className="carousel-item">
            <img src={main} alt="voip" />
          </div>
          <div className="carousel-item">
            <img src={image3} alt="voip" />
          </div>
          <div className="carousel-item">
            <img src={image4} alt="voip" />
          </div>
          <div className="carousel-item">
            <img src={image5} alt="voip" />
          </div>
        </div>
      </div>
      <div className="voip-content">
        <h1>VOIP SUPPORT</h1>
        <p>
          VoIP support services offer businesses the opportunity to leverage
          voice over IP technology to enhance communication, reduce costs, and
          improve productivity. By harnessing the power of the internet, VoIP
          enables organizations to access phone services from anywhere with an
          internet connection, providing flexibility and scalability that
          traditional options cannot match.
        </p>

        <h3>Here's how VoIP support services can benefit businesses:</h3>

        <div className="cards">
          <div className="card">
            <div className="card-front">
              <img src={benefit1} alt="Cost Savings" />
              <h3>Cost Savings</h3>
            </div>
            <div className="card-back">
              <p>
                VoIP is often less expensive than traditional phone services,
                allowing businesses to eliminate costly phone bills and reduce
                telephony expenses...
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-front">
              <img src={benefit2} alt="Scalability" />
              <h3>Scalability</h3>
            </div>
            <div className="card-back">
              <p>
                VoIP solutions are highly scalable, making it easy for
                businesses to adjust their phone systems to accommodate changing
                needs and growth...
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-front">
              <img src={benefit3} alt="Flexibility" />
              <h3>Flexibility</h3>
            </div>
            <div className="card-back">
              <p>
                With VoIP, employees can work from anywhere with an internet
                connection, whether they're in the office, at home, on the road,
                or even on vacation...
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-front">
              <img src={benefit4} alt="Effective Voicemail Management" />
              <h3>Effective Voicemail Management</h3>
            </div>
            <div className="card-back">
              <p>
                Features like voicemail-to-email transcription, visual
                voicemail, and customizable greetings make it easier to manage
                voicemail messages and respond to important calls.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-front">
              <img src={benefit5} alt="Fax Elimination" />
              <h3>Fax Elimination</h3>
            </div>
            <div className="card-back">
              <p>
                VoIP support services help eliminate the need for fax machines.
                With virtual fax services, send and receive faxes directly from
                email or VoIP phone system...
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-front">
              <img src={benefit6} alt="Productivity Enhancement" />
              <h3>Productivity Enhancement</h3>
            </div>
            <div className="card-back">
              <p>
                VoIP support services enhance productivity with features like
                call routing, call forwarding, and unified communications tools
                for better collaboration...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voip;