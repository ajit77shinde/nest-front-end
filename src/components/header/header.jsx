import React from "react";
import "./header.css";
import Logo from "../../assets/images/logo.svg";
const Header = () => {
  return (
    <>
      <header>
        <div className="containe-fluid">
          <div className="header-section d-flex">
            <div>
              <ul className="d-flex">
                <li><a href=""></a>About US |</li>
                <li> <a href=""></a>My Account |</li>
                <li> <a href=""></a>Wishlist |</li>
                <li><a href=""></a>Order Tracking</li>
              </ul>
            </div>

            <div className="tranding-News">Trendy 25silver jewelry, save up 35% off today </div>
            <div className="help">
              <ul className="d-flex">
                <li>Need help? Call Us: + 1800 900</li>
                <li>English <span class="material-icons">expand_more</span></li>
                <li>USD <span class="material-icons">expand_more</span></li>
              </ul>
            </div>
          </div>

          <div className="section-search header-section d-flex">
            <div className="col-sm-2">
              <img src={Logo} alt="" />
            </div>
            {/* =====================header start here ===================== */}
            <div className="header-search d-flex align-items-center">
              <span className="d-flex">
                All Categories <span class="material-icons">expand_more</span> |
              </span>
              <input type="text" placeholder="Search for items..."></input>
            </div>
            <div className="header-action-right">
              <a href="#"><span class="material-symbols-outlined">cycle</span> <span>Compare</span> </a>
              <a href="#"><span class="material-icons">favorite_border</span> Wishlist</a>
              <a href="#"><span class="material-icons">shopping_cart</span>Cart</a>
              <a href="#"><span class="material-icons">person_outline</span>Account</a>
            </div>
          </div>

          <div className="header-section">
            <div className="main-menu-contents">
              <ul>
                </ul>
                <li><a href="">Trending Categories</a></li>
                <li><a href="">Deals</a></li>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Shop</a></li>
                <li><a href="">Vendors</a></li>
                <li><a href="">Mego Menu</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Pages</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">1900-888 24/7 Support Center</a></li>
                </div>
          </div>


        </div>
      </header>
    </>
  );
};

export default Header;
