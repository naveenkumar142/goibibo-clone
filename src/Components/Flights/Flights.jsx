import React from "react";
import "../Bus/Bus.css";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import styles from "../Bus/BusStyle.module.css";
import adv from "./Screenshot 2024-03-05 081813.png";
import adv1 from "./Screenshot 2024-03-05 082751.png";
import adv2 from "./Screenshot 2024-03-05 084029.png";
import { useState } from "react";
import Hotelfooter from "../FlightFooter/HotelFooter";
export default function Flights() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className={styles.mainDiv}>
      <div className="Home">
        <div className="background-col"></div>
        <div className="background-col2"></div>
        <div className="bus-headline">
          <h2 className="bus-headline-h1">Flight Ticket Booking</h2>

          <div className="destination-crousal-div">
            <div className="destination">
            <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "black",
                  fontWeight: "bold",
                  justifyContent:"space-evenly",
                  textAlign: "left",
                  marginRight: "40px",
                }}
              >
                <label style={{ whiteSpace: "nowrap" }}>
                  <input
                    type="radio"
                    value="option1"
                    checked={selectedOption === "option1"}
                    onChange={handleOptionChange}
                  />
                  One-way
                </label>

                <label style={{ whiteSpace: "nowrap" }}>
                  <input
                    type="radio"
                    value="option2"
                    checked={selectedOption === "option2"}
                    onChange={handleOptionChange}
                  />
                  Round-trip
                </label>

                <label style={{ whiteSpace: "nowrap" }}>
                  <input
                    type="radio"
                    value="option3"
                    checked={selectedOption === "option3"}
                    onChange={handleOptionChange}
                  />
                  Multi-city
                </label>
                </div>
              <div>
                <div className="from-section">
                  <label>FROM</label>
                  <input type="text" name="" className="input-from" placeholder="Enter City or Airport"   style={{fontSize:"18px"}}/>
                </div>
              </div>
              <div>
                <div className="from-section">
                  <label>TO</label>
                  <input type="text" name="" className="input-from" placeholder="Enter City or Airport"   style={{fontSize:"18px"}} />
                </div>
              </div>
              <div className="date-travel">
                <label htmlFor="">Travel Date</label>
                <div className="datewrapper">
                  <input
                    className="inp-date"
                    value="Feb 27 2024"
                    type="text"
                    name=""
                    id=""
                  />
                  <div className="date-tomorrow">
                    <span className="span">Today,Feb 27 2024</span>
                    <span className="span">Tommorrow</span>
                  </div>
                </div>
              </div>
              <div className="lower-part-destination">
                <div className={styles.lowerPartDestinationChild}>
                  <img
                    src="https://gos3.ibcdn.com/social-distance-small-1592916992.png"
                    alt=""
                  />
                  <span>Social Distancing</span>
                </div>
                <div className={styles.knowMore}>
                  <span className="pad">
                    Introducing Distancing in select bus. <a href>know more</a>
                  </span>
                </div>
              </div>
              <div className="div-sersch-bus">
                
                  <button className="btn-search-bus">SEARCH Flights</button>
               
              </div>
            </div>

            <div className="rightSection">
              <div className="rightSection1">
                <img
                  src="https://savinghop.in/wp-content/uploads/2016/08/Goibibio-Internationla-Flights-Coupons.jpg"
                  alt=""
                />
              </div>

              <div className="rightSection2">
                <div className="r1">
                  <img src="https://images.freekaamaal.com/post_images/1577431496.png" alt="" />
                </div>

                <div className="r2">
                  <img src="https://live.staticflickr.com/65535/49654108553_6b6c8efde0.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{alignItems:"center",marginLeft:"80px"}}>
        <img src={adv}/>
      </div>
      
       <div className="popularBusRoutesHeading">
        <h2>Popular Flight Routes</h2>
      </div>
      <div className="popularBusRoutes">
        <div className="busLogo">
          <div className="busLogo1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#2276e3"
              class="BusIcon-sc-106t34v-0 bSKyoo"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h16v16H0z"></path>
                <path
                  fill="#647a97"
                  fill-rule="nonzero"
                  d="M2.667 10.667c0 .586.26 1.113.666 1.48V13a1 1 0 102 0v-.333h5.334V13c0 .547.446 1 1 1 .546 0 1-.447 1-1v-.853c.406-.367.666-.894.666-1.48V4c0-2.333-2.386-2.667-5.333-2.667S2.667 1.667 2.667 4v6.667zM5 11.333a1 1 0 111-1c0 .554-.447 1-1 1zm6 0a1 1 0 111-1c0 .554-.447 1-1 1zm1-4H4V4h8v3.333z"
                ></path>
              </g>
            </svg>
          </div>
          <div>
            <h4> Delhi Flights</h4>
            <p className="to">
              To:
              <a href>Manali, Chandigarh, Jaipur, Dehradun</a>
            </p>
          </div>
        </div>

        <div className="busLogo">
          <div className="busLogo1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#2276e3"
              class="BusIcon-sc-106t34v-0 bSKyoo"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h16v16H0z"></path>
                <path
                  fill="#647a97"
                  fill-rule="nonzero"
                  d="M2.667 10.667c0 .586.26 1.113.666 1.48V13a1 1 0 102 0v-.333h5.334V13c0 .547.446 1 1 1 .546 0 1-.447 1-1v-.853c.406-.367.666-.894.666-1.48V4c0-2.333-2.386-2.667-5.333-2.667S2.667 1.667 2.667 4v6.667zM5 11.333a1 1 0 111-1c0 .554-.447 1-1 1zm6 0a1 1 0 111-1c0 .554-.447 1-1 1zm1-4H4V4h8v3.333z"
                ></path>
              </g>
            </svg>
          </div>
          <div>
            <h4> Mumbai Flights</h4>
            <p className="to">
              To:
              <a href>Goa, Pune, Bangalore, Shirdi</a>
            </p>
          </div>
        </div>

        <div className="busLogo">
          <div className="busLogo1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#2276e3"
              class="BusIcon-sc-106t34v-0 bSKyoo"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h16v16H0z"></path>
                <path
                  fill="#647a97"
                  fill-rule="nonzero"
                  d="M2.667 10.667c0 .586.26 1.113.666 1.48V13a1 1 0 102 0v-.333h5.334V13c0 .547.446 1 1 1 .546 0 1-.447 1-1v-.853c.406-.367.666-.894.666-1.48V4c0-2.333-2.386-2.667-5.333-2.667S2.667 1.667 2.667 4v6.667zM5 11.333a1 1 0 111-1c0 .554-.447 1-1 1zm6 0a1 1 0 111-1c0 .554-.447 1-1 1zm1-4H4V4h8v3.333z"
                ></path>
              </g>
            </svg>
          </div>
          <div>
            <h4> Chennai Flights</h4>
            <p className="to">
              To:
              <a href>Coimbatore, Pondicherry, Bangalore</a>
            </p>
          </div>
        </div>

        <div className="busLogo">
          <div className="busLogo1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#2276e3"
              class="BusIcon-sc-106t34v-0 bSKyoo"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h16v16H0z"></path>
                <path
                  fill="#647a97"
                  fill-rule="nonzero"
                  d="M2.667 10.667c0 .586.26 1.113.666 1.48V13a1 1 0 102 0v-.333h5.334V13c0 .547.446 1 1 1 .546 0 1-.447 1-1v-.853c.406-.367.666-.894.666-1.48V4c0-2.333-2.386-2.667-5.333-2.667S2.667 1.667 2.667 4v6.667zM5 11.333a1 1 0 111-1c0 .554-.447 1-1 1zm6 0a1 1 0 111-1c0 .554-.447 1-1 1zm1-4H4V4h8v3.333z"
                ></path>
              </g>
            </svg>
          </div>
          <div>
            <h4> Bangalore Flights</h4>
            <p className="to">
              To:
              <a href>Mumbai, Hyderabad, Chennai, Goa</a>
            </p>
          </div>
        </div>

        <div className="busLogo">
          <div className="busLogo1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#2276e3"
              class="BusIcon-sc-106t34v-0 bSKyoo"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h16v16H0z"></path>
                <path
                  fill="#647a97"
                  fill-rule="nonzero"
                  d="M2.667 10.667c0 .586.26 1.113.666 1.48V13a1 1 0 102 0v-.333h5.334V13c0 .547.446 1 1 1 .546 0 1-.447 1-1v-.853c.406-.367.666-.894.666-1.48V4c0-2.333-2.386-2.667-5.333-2.667S2.667 1.667 2.667 4v6.667zM5 11.333a1 1 0 111-1c0 .554-.447 1-1 1zm6 0a1 1 0 111-1c0 .554-.447 1-1 1zm1-4H4V4h8v3.333z"
                ></path>
              </g>
            </svg>
          </div>
          <div>
            <h4> Hyderabad Flights</h4>
            <p className="to">
              To:
              <a href>Mumbai, Chennai, Bangalore, Goa</a>
            </p>
          </div>
        </div>

        <div className="busLogo">
          <div className="busLogo1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#2276e3"
              class="BusIcon-sc-106t34v-0 bSKyoo"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h16v16H0z"></path>
                <path
                  fill="#647a97"
                  fill-rule="nonzero"
                  d="M2.667 10.667c0 .586.26 1.113.666 1.48V13a1 1 0 102 0v-.333h5.334V13c0 .547.446 1 1 1 .546 0 1-.447 1-1v-.853c.406-.367.666-.894.666-1.48V4c0-2.333-2.386-2.667-5.333-2.667S2.667 1.667 2.667 4v6.667zM5 11.333a1 1 0 111-1c0 .554-.447 1-1 1zm6 0a1 1 0 111-1c0 .554-.447 1-1 1zm1-4H4V4h8v3.333z"
                ></path>
              </g>
            </svg>
          </div>
          <div>
            <h4> Pune Flights</h4>
            <p className="to">
              To:
              <a href>Mumbai, Shirdi, Bangalore, Goa</a>
            </p>
          </div>
        </div>

        <div className="busLogo">
          <div className="busLogo1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#2276e3"
              class="BusIcon-sc-106t34v-0 bSKyoo"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h16v16H0z"></path>
                <path
                  fill="#647a97"
                  fill-rule="nonzero"
                  d="M2.667 10.667c0 .586.26 1.113.666 1.48V13a1 1 0 102 0v-.333h5.334V13c0 .547.446 1 1 1 .546 0 1-.447 1-1v-.853c.406-.367.666-.894.666-1.48V4c0-2.333-2.386-2.667-5.333-2.667S2.667 1.667 2.667 4v6.667zM5 11.333a1 1 0 111-1c0 .554-.447 1-1 1zm6 0a1 1 0 111-1c0 .554-.447 1-1 1zm1-4H4V4h8v3.333z"
                ></path>
              </g>
            </svg>
          </div>
          <div>
            <h4> Kolkata Flights </h4>
            <p className="to">
              To:
              <a href>Digha, Siliguri, Durgapur, Asansol</a>
            </p>
          </div>
        </div>

        <div className="busLogo">
          <div className="busLogo1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#2276e3"
              class="BusIcon-sc-106t34v-0 bSKyoo"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h16v16H0z"></path>
                <path
                  fill="#647a97"
                  fill-rule="nonzero"
                  d="M2.667 10.667c0 .586.26 1.113.666 1.48V13a1 1 0 102 0v-.333h5.334V13c0 .547.446 1 1 1 .546 0 1-.447 1-1v-.853c.406-.367.666-.894.666-1.48V4c0-2.333-2.386-2.667-5.333-2.667S2.667 1.667 2.667 4v6.667zM5 11.333a1 1 0 111-1c0 .554-.447 1-1 1zm6 0a1 1 0 111-1c0 .554-.447 1-1 1zm1-4H4V4h8v3.333z"
                ></path>
              </g>
            </svg>
          </div>
          <div>
            <h4> Chandigarh Flights </h4>
            <p className="to">
              To:
              <a href>Manali, Delhi, Shimla, Dehradun</a>
            </p>
          </div>
        </div>

        <div className="busLogo">
          <div className="busLogo1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#2276e3"
              class="BusIcon-sc-106t34v-0 bSKyoo"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h16v16H0z"></path>
                <path
                  fill="#647a97"
                  fill-rule="nonzero"
                  d="M2.667 10.667c0 .586.26 1.113.666 1.48V13a1 1 0 102 0v-.333h5.334V13c0 .547.446 1 1 1 .546 0 1-.447 1-1v-.853c.406-.367.666-.894.666-1.48V4c0-2.333-2.386-2.667-5.333-2.667S2.667 1.667 2.667 4v6.667zM5 11.333a1 1 0 111-1c0 .554-.447 1-1 1zm6 0a1 1 0 111-1c0 .554-.447 1-1 1zm1-4H4V4h8v3.333z"
                ></path>
              </g>
            </svg>
          </div>
          <div>
            <h4> Coimbatore Flightss </h4>
            <p className="to">
              To:
              <a href>Chennai, Ooty, Bangalore, Mysore</a>
            </p>
          </div>
        </div>
      </div>
      <div  style={{marginBottom:"20px",marginLeft:"20px"}}>
        <div
          style={{
            textAlign: "left",
            marginLeft: "50px",
            marginRight: "40px",
            marginTop: "10px",
          }}
        >
          <div style={{marginLeft:"20px",paddingBottom:"10px"}}><h2 style={{justifyContent:"left"}}>Flight Booking FAQs</h2></div>
          
        </div>
        <div
          style={{
            // margin: "40px",
            backgroundColor: "#ffffff",
            borderRadius: "15px",
          }}
        >
          <div style={{ padding: "20px" }}>
            <h4>What are the advantages of online flight booking? </h4>
            <p>
            Through online air ticket booking you can easily compare prices of multiple airlines to get your air tickets at lowest rates. Also, it is easy to do online flight booking as multiple payment options are available on websites like Goibibo.
            </p>
          </div>
          <div style={{ padding: "20px" }}>
            <h4>When should I book to get best flight ticket prices? </h4>
            <p>
            For best flight ticket prices and flight ticket offers, it is recommended to book at least 3 to 4 weeks in advance for domestic air tickets. For international flight ticket it is recommended to book at least 7 to 8 weeks in advance, so that you can get the best flight ticket prices.
            </p>
          </div>
          <div style={{ padding: "20px" }}>
            <h4>Why you should book cabs from Goibibo?</h4>
            <p>
              From Goibibo you can get confirmed cheap cabs of your choice and
              budget. Expert and verified drivers will be taken care of your
              ride. Easy interface of booking with different payment modes
              available at Goibibo and finally with no hidden charges, Goibibo
              is the best option for online taxi booking.
            </p>
          </div>
          <div style={{ padding: "20px" }}>
            <h4> How can I book flight tickets online? </h4>
            <p>
With the help of Goibibo, you can easily book both domestic flight tickets and international air tickets in simple steps within a few seconds.
            </p>
          </div>
          <div style={{ padding: "20px" }}>
            <h4>Why should I make a flight booking from Goibibo? </h4>
            <p>
            Along with an easy flight booking process, Goibibo offers various discounts, instant EMI options and credit/ debit card related offers on flight booking. By availing such benefits, you can book air tickets at reasonable prices.
            </p>
          </div>
          <div style={{ padding: "20px" }}>
            <h4>
            In how much time, my flight booking will get confirmed? 
            </h4>
            <p>
            After completing the air ticket booking process on Goibibo, you will get an instant confirmation mail and a message on the registered number and email id respectively.
            </p>
          </div>
        </div>
      </div>
      <Hotelfooter/>
    </div>
  );
}
