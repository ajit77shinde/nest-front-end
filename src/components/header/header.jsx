import React from "react";
import "./header.css";
import Logo from "../../assets/images/logo.svg";
const Header = () => {
  return (
    <>
      <header>
        <div className="containe-fluid">
          <div className="section-search header-section d-flex">
            <div className="col-sm-2">
              <img id="logo" src={Logo} alt="" />
            </div>
            {/* =====================header start here ===================== */}
            <div className="header-search d-flex align-items-center">
              <span className="d-flex">
                All Categories <span class="material-icons">expand_more</span> |
              </span>
              <input type="text" placeholder="Search for items..."></input>
            </div>
            <div className="header-action-right">
              <a href="#">
                <span class="material-symbols-outlined">cycle</span>{" "}
                <span>Compare</span>{" "}
              </a>
              <a href="#">
                <span class="material-icons">favorite_border</span> Wishlist
              </a>
              <a href="#">
                <span class="material-icons">shopping_cart</span>Cart
              </a>
              <a href="#">
                <span class="material-icons">person_outline</span>Account
              </a>
            </div>
          </div>

          <div className="header-section">
            <div className="main-menu-contents">
              <span className="button">
                <span class="material-symbols-outlined">grid_view</span>{" "}
                Trending Categories{" "}
                <span class="material-symbols-outlined">expand_more</span>
              </span>
              <ul className="d-flex">
                <li>
                  <a href="/deals">
                    {" "}
                    <i class="fa-solid fa-user"></i>
                    <span class="material-symbols-outlined">
                      local_fire_department
                    </span>{" "}
                    Deals
                  </a>
                </li>
                <li>
                  <a href="/home">
                    Home{" "}
                    <span class="inline-icon material-symbols-outlined">
                      expand_more
                    </span>
                  </a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="shop">
                    Shop{" "}
                    <span class="material-symbols-outlined">expand_more</span>{" "}
                  </a>
                </li>
                <li>
                  <a href="/venders">
                    Vendors{" "}
                    <span class="material-symbols-outlined">expand_more</span>
                  </a>
                </li>
                <li>
                  <a href="/mega_menu">
                    Mego Menu{" "}
                    <span class="material-symbols-outlined">expand_more</span>
                  </a>
                </li>
                <li>
                  <a href="/blog">
                    Blog{" "}
                    <span class="material-symbols-outlined">expand_more</span>
                  </a>
                </li>
                <li>
                  <a href="/pages">
                    Pages{" "}
                    <span class="material-symbols-outlined">expand_more</span>
                  </a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href=""></a>
                </li>
              </ul>
              <span>
                <span class="material-symbols-outlined">headphones</span>
                <span>
                  <span>1900-888 24/7</span>
                  <span>Support Center</span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
