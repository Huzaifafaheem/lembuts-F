import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo-white-white.png";
import { Link } from "react-router-dom";
// react routes "Link".
// import { Link } from "react-router-dom";

export default function Navbar() {
  // $(function(){
  //   var str = '#len'; //increment by 1 up to 1-nelemnts
  //   $(document).ready(function(){
  //     var i, stop;
  //     i = 1;
  //     stop = 4; //num elements
  //     setInterval(function(){
  //       if (i > stop){
  //         return;
  //       }
  //       $('#len'+(i++)).toggleClass('bounce');
  //     }, 500)
  //   });
  // });
  const handleInputChange = () => {
    
 }
  return (
    <>
    {/* First Navbar */}
      <nav className="mainNavbar">
        <div className="mainNavbar container">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div>
            <form
              action="/search"
              method="get"
              role="search"
              className="mainForm"
              autoComplete="off"
            >
              <div className="dropdown">
                <Link
                  className="btn btn-secondary dropdown-toggle dropButton "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All Categories
                </Link>

                <ul className="dropdown-menu dropList">
                  <li>
                    <Link className="dropdown-item" href="#">
                     All Categories
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Nike
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Adidas
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Jordan
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Slides
                    </Link>
                  </li>
                </ul>
              </div>


              <div>
                <input
                  type="text"
                  name="q"
                  className="mainInput"
                  value=""
                  placeholder="Search our store"
                  onChange={handleInputChange}
                />
                {/* <div className=""></div> */}
              </div>

              <button type="submit" className="searchButton">
                <i className="fa-solid fa-magnifying-glass searchIcon"></i>
              </button>

            </form>
          </div>

          <div className="mainIcon">
            <div>
              <Link to="">
                <i className="fa-regular fa-user iconStyle"></i>
                {/* <div>My Account</div> */}
              </Link>
            </div>
            <div>
              <Link to="">
                <i className="fa-regular fa-heart iconStyle"></i>
                {/* <div>My Account</div> */}
              </Link>
            </div>
            <div>
              <Link to="">
                <i className="fa-solid fa-bag-shopping iconStyle"></i>
                {/* <div>My Account</div> */}
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Second Navbar */}


      <nav>
        <div className="secondNavbar">
          <div className="container">
            <ul className="secNavUl">
              <li>
                <Link className="hoverable" to="/home">
                  HOME
                </Link>
              </li>
              <li>
                <Link className="hoverable" to="/all-products">
                  ALL PRODUCTS
                </Link>
              </li>
              <li>
                <Link className="hoverable" to="/clearance-sale">
                  CLEARANCE SALE
                </Link>
              </li>
              <li>
                <Link className="hoverable" to="/premium-shoes">
                  PREMIUM SHOES
                </Link>
              </li>
              <li>
                <Link className="hoverable" to="/mens-shoes">
                  MENS SHOES
                </Link>
              </li>
              <li>
                <Link className="hoverable" to="/womens-shoes">
                  WOMENS SHOES 
                </Link>
              </li>
              <li>
                <Link className="hoverable" to="/customer-reviews">
                  CUSTOMER REVIEWS 
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
