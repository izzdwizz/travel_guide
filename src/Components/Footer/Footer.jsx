import React, {useEffect} from "react";
import "./footer.css";
import video from "../../asset/video2.mp4";
import { FiSend } from "react-icons/fi";
import { GiFlyingShuriken } from "react-icons/gi";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Aos from 'aos'
import 'aos/dist/aos.css';

const Footer = () => {


  // Slide left using react hook

  useEffect(()=>{

    Aos.init({duration:1700})

  }, [])


  return (
    <>
      <section className="footer">
        <div className="videoDiv">
          <video src={video} loop autoPlay muted type="video/mp4"></video>
        </div>

        <div className="sexContent container">
          <div className="contactDiv flex">
            <div  data-aos='fade-up' className="text">
              <small>KEEP IN TOUCH</small>
              <h2>Soar with Us</h2>
            </div>

            <div className="inputDiv flex">
              <input data-aos='fade-up' type="text" placeholder="Enter Email Address" />
              <button data-aos='fade-up' className="btn flex" type="submit">
                SEND
                <FiSend className="icon" />
              </button>
            </div>
          </div>

          <div className="footerCard flex">
            <div className="footerIntro flex">
              <div className="logoDiv">
                <a href="#" className="logo flex">
                  <GiFlyingShuriken className="icon" /> Soar.
                </a>
              </div>

              <div data-aos='fade-up' className="footerParagraph">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
                sunt facilis dolore. Nam exercitationem blanditiis officia,
                ullam quisquam soluta dicta adipisci nisi id fuga deleniti modi
                distinctio eum. Expedita, sequi!
              </div>

              <div data-aos='fade-up' className="footerSocials flex">
                <AiOutlineTwitter className="icon" />
                <AiFillYoutube className="icon" />
                <AiFillInstagram className="icon" />
                <FaTripadvisor className="icon" />
              </div>
            </div>

            <div className="footerLinks grid">
              {/* First group */}
              <div data-aos='fade-right' data-aos-duration='3000' className="linkGroup">
                <span className="groupTitle">OUR AGENCY</span>

                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Services
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Insurance
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Agency
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Tourism
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Payment
                </li>
              </div>
              {/* Second group */}
              <div data-aos='fade-left' data-aos-duration='4000' className="linkGroup">
                <span className="groupTitle">PARTNERS</span>

                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Bookings
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                 Rent Cars
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Hotels
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Trivago
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  TripAdvisor
                </li>
              </div>
              {/* Third group */}
              <div data-aos='fade-up' data-aos-duration='5000' className="linkGroup">
                <span className="groupTitle">LAST MINUTE TRIPS</span>

                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  London
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Vancouver
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Tokyo
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                 Poland
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Slovenia
                </li>
              </div>
            </div>

            <div className="footerDiv flex">

              <small>Soar.</small>
              <small>&copy; ALL RIGHTS RESERVED - 2022</small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
