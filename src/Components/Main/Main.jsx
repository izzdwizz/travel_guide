import React, {useEffect} from "react";
import "./main.css";
import img from "../../asset/img.jpg";
import img2 from "../../asset/img2.jpg";
import img3 from "../../asset/img3.jpg";
import img4 from "../../asset/img4.jpg";
import img5 from "../../asset/img5.jpg";
import img6 from "../../asset/img6.jpg";
import img7 from "../../asset/img7.jpg";
import img8 from "../../asset/img8.jpg";
import img9 from "../../asset/img9.jpg";
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from "react-icons/hi";
import {AiFillStar} from 'react-icons/ai'
import Aos from 'aos';
import 'aos/dist/aos.css';
 


const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "V&A Waterfront",
    location: "Capetown, South Africa",
    grade: "3.9",
    fees: "₦300.000",
    description:
      "The Victoria & Alfred Waterfront in Cape Town is situated on the Atlantic shore, Table Bay Harbour, the City of Cape Town and Table Mountain. Adrian van der Vyver designed the complex.",
  },
  {
    id:2,
    imgSrc: img2,
    destTitle: 'Boulders Beach' ,
    location: 'Capetown, South Africa',
    grade: '4.2',
    fees: '₦470.000',
    description: 'Boulders Beach is a sheltered beach made up of inlets between granite boulders, from which the name originated. It is located on the Cape Peninsula, in Simons Town, a suburb of Cape Town in the Western Cape province of South Africa. It is also commonly known as Boulders Bay.[1] It is a popular tourist spot because of a colony of African penguins which settled there in 1982. Boulders Beach forms part of the Table Mountain National Park.'
  },
  {
    id:3,
    imgSrc: img3,
    destTitle: 'The Louvre Museum' ,
    location: 'Paris, France',
    grade: '4.5',
    fees: '₦1.500.000',
    description: 'The Louvre, or the Louvre Museum, is the worlds most-visited museum, and a historic landmark in Paris, France. It is the home of some of the best-known works of art, including the Mona Lisa and the Venus de Milo.'
    },
    {
      id:4,
      imgSrc: img4,
      destTitle: 'Royal Alcazar of Seville' ,
      location: 'Seville, France',
      grade: '4.9',
      fees: '₦700.000',
      description: 'lorem ipsum is the only way I thought of filling in the blanks on this one'
      }
      ,
      {
        id:5,
        imgSrc: img5,
        destTitle: 'The Arch of Cabo San Lucas' ,
        location: 'Cabo, San Lucas',
        grade: '4.6',
        fees: '₦1.000.000',
        description: 'The arch of Cabo San Lucas is a distinctive granitic rock formation at the southern tip of Cabo San Lucas, which is itself the extreme southern end of Mexicos Baja California Peninsula. '
       },
       {
         id:6,
         imgSrc: img6,
         destTitle: 'The Huntington Library, Art Museum, and Botanical Gardens' ,
         location: 'Los Angeles, California',
         grade: '4.8',
         fees: '₦1.200.000',
         description:'The Huntington Library, Art Museum and Botanical Gardens, known as The Huntington, is a collections-based educational and research institution established by Henry E. Huntington and Arabella Huntington in San Marino, California, United States'
         },
         {
           id:7,
           imgSrc: img7,
           destTitle: 'Walt Disney' ,
           location: 'Los Angeles, California',
           grade: '4.8',
           fees: '₦2.200.000',
           description:'The Walt Disney Concert Hall at 111 South Grand Avenue in downtown Los Angeles, California, is the fourth hall of the Los Angeles Music Center and was designed by Frank Gehry. It was opened on October 24, 2003'
           }
           ,
         {
           id:8,
           imgSrc: img8,
           destTitle: 'Brandenburger Tower' ,
           location: 'Berlin, Germany',
           grade: '4.4',
           fees: '₦800.000',
           description:'This is a super tall building considered a gate or something over in germany not so sure never really been there before.'
           },
           {
             id:9,
             imgSrc: img9,
             destTitle: 'Osun-Osogbo Sacred Grove' ,
             location: 'Osun, Nigeria',
             grade: '4.2',
             fees: '₦160.000',
             description:'This is a super tall building considered a gate or something over in germany not so sure never really been there before.'
             }
];

const Main = () => {


  // Slide left using react hook

  useEffect(()=>{

    Aos.init({duration:1000})

  }, [])


  return (
    <section className="main container section">
      <div  className="secTitle">
        <h3 data-aos='fade-down' className="title">Most Visited Locations</h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({id, imgSrc, destTitle, location, grade, fees, description}) => {
            return (
              <div  data-aos='fade-right' key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon"/>
                  <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small><AiFillStar className="icons"/></small></span>
                    </div>

                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
              <div className="desc">
                <p>{description}</p>
              </div>

              <button className="btn flex">
                DETAILS <HiOutlineClipboardCheck className="icon"/>
              </button>

                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
