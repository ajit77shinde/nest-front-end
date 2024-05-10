import React from "react";
import "./header.css";
import Logo from "../../assets/images/logo.svg";
import Header2 from "../header2/header2";
const Header = () => {
  return (
    <>
      <header>
        <div className="containe-fluid">
          <div className="section-search header-section d-flex">
            <div className="col-sm-2">
              <img src={Logo} alt="" />
            </div>
            {/* =====================header start here ===================== */}
            <div className="header-search d-flex align-items-center">
              <span className="d-flex">
                All Categories <span className="material-symbols-outlined">expand_more</span> |
              </span>
              <input type="text" placeholder="Search for items..."></input>
            </div>
            <div className="header-action-right">
              <a href="#"><span className="material-symbols-outlined">cycle</span> <span>Compare</span> </a>
              <a href="#"><span className="material-symbols-outlined">favorite_border</span> Wishlist</a>
              <a href="#"><span className="material-symbols-outlined">shopping_cart</span>Cart</a>
              <a href="#"><span className="material-symbols-outlined">person_outline</span>Account</a>
            </div>
          </div>
          <Header2/>
          {/* <div className="header-section">
            <div className="main-menu-contents">
              <span className="button">
                <span className="material-symbols-outlined">grid_view</span> 
                Trending Categories  <span className="material-symbols-outlined">
                  expand_more
                </span></span>
              <ul className="d-flex">
                <li><a href="/deals"> <i className="fa-solid fa-user"></i><span className="material-symbols-outlined">
                  local_fire_department
                </span>  Deals</a></li>
                <li><a href="/home">Home <span className="inline-icon material-symbols-outlined">
                  expand_more
                </span></a></li>
                <li><a href="/about">About</a></li>
                <li><a href="shop">Shop <span className="material-symbols-outlined">
                  expand_more
                </span> </a></li>
                <li><a href="/venders">Vendors <span className="material-symbols-outlined">
                  expand_more
                </span></a></li>
                <li><a href="/mega_menu">Mego Menu <span className="material-symbols-outlined">
                  expand_more
                </span></a></li>
                <li><a href="/blog">Blog <span className="material-symbols-outlined">
                  expand_more
                </span></a></li>
                <li><a href="/pages">Pages <span className="material-symbols-outlined">
                  expand_more
                </span></a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href=""></a></li>
              </ul>
              <div className="d-flex">
                <span><span className="display-5 material-symbols-outlined">
                  headphones
                </span>
                  <span className="marg-b-7 lh-1 d-inline-grid">
                    <span className="help-line">1900 - 888</span>
                    <span className="support"> 24/7 Support Center</span>
                  </span>
                </span>
              </div>
            </div>
          </div> */}


        </div>
      </header>
    </>
  );
};

export default Header;

