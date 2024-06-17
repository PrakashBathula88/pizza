import React from "react";
import "../FranchiseEnquiry/Franchise.css";
export default function Franchise() {
  return (
    <div className="All-franchise">
      <div className="theory-franchise">
        <h3>BE YOUR OWN BOSS</h3>
        <h2>JOIN THE LA PINOZ'S FAMILY</h2>
        <p>
          Are you looking for a franchise opportunity that focuses on good,
          quality food? If yes, then we are proud to offer pizza franchise
          opportunities across the states to people who have the same goals as
          we do: To serve great food made from fresh ingredients in a great
          atmosphere
        </p>
        <p>
          Investing in La Pinoz franchise gives you the independence of being a
          business owner along with the support of our outstanding brand and
          experienced network. So be a part of the bigger network and a winning
          brand that keeps customers coming back for delicious Pizzas just the
          way they want!
        </p>
        <p>
          <span>For Franchise Query</span>
          <br />
          <strong>8238235444</strong>
        </p>
        <p>
          Joining our pizza franchise family lets you benefit from the amazing
          brand we have created and gives you the opportunity to gain the
          independence of being your own boss
        </p>
      </div>
      <div >
        <h4 className="share">Share Your Details</h4>
        <div>
          <form className="All-form-content">
            <div>
              <input type="text" placeholder="Name"></input>
            </div>
            <div>
              <input type="text" placeholder="Last Name"></input>
            </div>
            <div>
              <input type="text" placeholder="City"></input>
            </div>
            <div>
              <input type="text" placeholder="Contact Number"></input>
            </div>
            <div>
              <input type="text" placeholder="Email Id"></input>
            </div>
            <div className="All-content-text">
              <input type="text" placeholder="Write your message"></input>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
      
    </div>
  );
}
