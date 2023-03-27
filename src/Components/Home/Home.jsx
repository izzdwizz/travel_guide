import React, {useEffect} from "react";
import "./home.css";
import ideo from "../../asset/video.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import Aos from 'aos'
import 'aos/dist/aos.css';

const Home = () => {

  // Slide left using react hook

  useEffect(()=>{

    Aos.init({duration:5000})

  }, [])


  
  return (
    <section className="home">
      <div className="overlay"></div>

      <video src={ideo} type="video/mp4" autoPlay loop muted></video>

      <div className="homeContent container">
        <div data-aos='fade-left' className="textDiv">
          <span data-aos='fade-left' className="smallText">Our Travel Options</span>

          <h1 data-aos='fade-left' className="homeTitle">Explore trips best suited for you</h1>
        </div>

        <div data-aos='fade-left' className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city"> Search your destination:</label>
            <div className="input flex">
              <input type="text" placeholder="Enter name here..." />
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select Travel Date:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="PriceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="total">₦2.500.000</h3>
            </div>

            <div className="input flex">
              <input type="range" max="2500000" min="100000" />
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>MORE FILTERS</span>
          </div>
        </div>

        <div data-aos='fade-left' className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className='icon'/>
            
            <AiOutlineInstagram className='icon'/>
            
            <FaTripadvisor className='icon'/>
          </div>

          <div className="leftIcons">
          <BsListTask className='icon'/>
          <TbApps className='icon'/>
        
        
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default Home;
