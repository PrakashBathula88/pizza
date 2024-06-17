import React from "react";
import "../lastgreenbackground/green.css";
import { MdEmail } from "react-icons/md";
export default function Green() {
  return (
    <div className="green-back">
      <div >
        <ul className="policy">
          <h3>useful Link</h3>
          <li>Shipping Policy</li>
          <li>Refund&policy</li>
          <li>Terms&Conditions</li>
          <li>Privacy Policy</li>
          <li>Promo Codes</li>
        </ul>
      </div>
      <div className="all-pay">
        <h3 className="pay">Payment Methods</h3>
        <div className="img-tag">
          <img src="https://lapinozpizza.in/assets/wla_new/img/footer/cash-svg.svg" alt="Loading..." />
          <img src="https://lapinozpizza.in/assets/wla_new/img/footer/mastercard-svg.svg" alt="Loading.." />
          <img src="https://lapinozpizza.in/assets/wla_new/img/footer/gpay-svg.svg" alt="Loading.." />
          <img src="https://lapinozpizza.in/assets/wla_new/img/footer/paytm-svg.svg" alt="Loading..." />
          <img src="https://lapinozpizza.in/assets/wla_new/img/footer/visa-svg.svg" alt="Loading..." />
          <img src="https://lapinozpizza.in/assets/wla_new/img/footer/visa-svg.svg" alt="Loading..." />
        </div>
      </div>
      <div className="support">
        <h4 className="All-cue">Contact Us</h4>
        <div>
          <ul>
            <h4 >Customer Support</h4>
            <li><MdEmail />Support@lapinospizza.in</li>
            <h4>Franchise Enquiry</h4>
            <li><MdEmail />info@lapinoz@gmail.com</li>
          </ul>
        </div>
      </div>
      
    </div>
  );
}
