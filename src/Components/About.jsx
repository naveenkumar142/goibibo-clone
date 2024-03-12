import React from "react";
import Navbar from "./Navbar/Navbar";
import coppy from "./Screenshot 2024-03-04 203422.png";

export default function About() {
  return (
    <div>
      <div style={{marginLeft:"150px",marginTop:"50px",width:"1000px"}}>
        <h3>About Goibibo.com:</h3>
        <p style={{textAlign:"left",marginBottom:"20px"}}>
          Goibibo is India’s leading online travel booking brand providing range
          of choice for hotels, flights, trains, bus and cars for travelers. Our
          core value differentiator is the most trusted user experience, be it
          in terms of quickest search and booking, fastest payments, settlement
          or refund processes. Through GoStays, our customers enjoy standardised
          stay experience at certified hotel properties. With industry first
          virtual travel booking currency GoCash and travel social network,
          GoCash+ Rewards – GoIbibo is the number one choice for new India on
          the move. 
        </p>
      </div>
      <div style={{ margin:"40px"}}>
        <img src={coppy}/>
      </div>
    </div>
  );
}
