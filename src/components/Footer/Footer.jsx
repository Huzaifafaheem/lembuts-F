import "./Footer.css";
import React from "react";
import footerLogo from "../../assets/images/logo-white-white.png";

export default function Footer() {
  return (
    <>
      <div className="mainFooter">
        <div className="footerBackground">
          <div className="container containerFooter">
            <div className="innerFooter">
              <div>
                <h2>Categories</h2>
                  <p>womens Shoes</p>
                  <p>Mens Shoes</p>
                  <p>Kids shose</p>
                  <p>Bags</p>
                  <p>Wallet</p>
              </div>
              <div>
                  <h2>Infomation</h2>
                  <p>About Us</p>
                  <p>Mens Shoes</p>
                  <p>Kids shose</p>
                  <p>Bags</p>
                  <p>Wallet</p>
              </div>
              <div>
                <img src={footerLogo} alt="" />
              </div>
              <div>
              <h2>Categories</h2>
                  <p>womens Shoes</p>
                  <p>Mens Shoes</p>
                  <p>Kids shose</p>
                  <p>Bags</p>
                  <p>Wallet</p>
              </div>
              <div>
              <h2>Categories</h2>
                  <p>womens Shoes</p>
                  <p>Mens Shoes</p>
                  <p>Kids shose</p>
                  <p>Bags</p>
                  <p>Wallet</p>
              </div>
            </div>
            <div className="bottomFooter"></div>
            <div className="Copyright">
              <p>Copyright © 2024 lembuts | All rights reserved</p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
