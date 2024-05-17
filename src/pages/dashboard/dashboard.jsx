import React from "react";
import "./dashboard.css";
import "../style.css";
import { Category } from "../../components/category/category";
import Slider from "../../components/slider/slider";
import Card from "../../components/card/card";
// import selling from "../../components/bestSells/sellingItems";
import { ProductData } from "../../components/card/cardData";

function DashBoard() {
  return (
    <>
      <div className="section-1">
        <div className="dashboard">
          <Category />
          <div>
            <div
              className="card card-cutom-width"
              style={{ width: 55 + "rem" }}
            >
              <Slider />
            </div>
          </div>

          <div>
            <div
              className="card ml-3 mb-3  shop-now"
              style={{ width: 24 + "rem", height: 20 + "rem" }}
            >
              {/* <img className="card-img-top" src="..." alt="Card image cap"></img> */}
              <div className="card-body">
                <h5 className="card-title">
                  Everyday Fresh & Clean with Our Products
                </h5>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <a href="#" className="btn btn-success">
                  Shop Now{" "}
                  <span class="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
            </div>
            <div
              className="card ml-3 mb-3 organic-prod"
              style={{ width: 24 + "rem", height: 20 + "rem" }}
            >
              {/* <img className="card-img-top" src="..." alt="Card image cap"></img> */}
              <div className="card-body">
                <h5 className="card-title">
                  Everyday Fresh & Clean with Our Products
                </h5>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <a href="#" className="btn btn-success">
                  Shop Now{" "}
                  <span class="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="product-tabs section-padding position-relative">
        <h3 id="popular-heading">Popular Products</h3>
        <div class="container">
          {/* <div class="row"> */}
          <div class="row">
            {ProductData.map((data) => {
              return (
                <div class="col-lg-1-3 col-md-3  col-sm-6 col-12">
                  <Card
                    productCategory={data.product_category}
                    producttitle={data.product_name}
                    productRating={data.productRating}
                    reviewPercentage={data.reviewPercentage}
                    productMerchant={data.product_tag}
                    productFinalPrice={data.product_discounted_price}
                    productPrice={data.product_price}
                    buttonText={data.buttonText}
                    productImagePath={data.product_image_url}
                    badgeData={data.product_discount_percent}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section class="section-padding">
        <div class="container">
          <div
            class="section-Title wow animate__ animate__fadeIn animated"
            style={{
              visibility: "visible",
              animationName: "fadeIn",
            }}
          >
            <h3 class="">Daily Best Sells</h3>
            <ul class="nav nav-tabs links" id="myTab-2" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="nav-tab-one-1"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-one-1"
                  type="button"
                  role="tab"
                  aria-controls="tab-one"
                  aria-selected="false"
                >
                  Featured
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="nav-tab-two-1"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-two-1"
                  type="button"
                  role="tab"
                  aria-controls="tab-two"
                  aria-selected="true"
                >
                  Popular
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="nav-tab-three-1"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-three-1"
                  type="button"
                  role="tab"
                  aria-controls="tab-three"
                  aria-selected="false"
                >
                  New added
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* banner card */}
      <section class="section-padding">
        <div class="container">
          <div class="row">
            <div
              class="col-lg-3 d-none d-lg-flex wow animate__ animate__fadeIn animated"
              style={{
                visibility: "visible",
                animationName: "fadeIn",
              }}
            >
              <div class="banner-img style-2">
                <div class="banner-text">
                  <h2 id="name" class="mb-100">
                    Bring nature into your home
                  </h2>
                  <a class="shop-button" href="/shop-grid-right">
                    Shop Now{" "}
                    <span class="material-symbols-outlined">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
            {/* {ProductData.map((data) => {
              return (
                <div class="col-lg-1-3 col-md-3  col-sm-2 col-12">
                  <Card
                    productCategory={data.product_category}
                    producttitle={data.product_name}
                    productRating={data.productRating}
                    reviewPercentage={data.reviewPercentage}
                    productMerchant={data.product_tag}
                    productFinalPrice={data.product_discounted_price}
                    productPrice={data.product_price}
                    buttonText={data.buttonText}
                    productImagePath={data.product_image_url}
                    badgeData={data.product_discount_percent}
                  />
                </div>
              );
            })} */}
          </div>
        </div>
      </section>

      <section class="section-padding mb-30">
        <div class="container">
          <div class="row">
            <div
              class="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 wow animate__ animate__fadeInUp animated"
              data-wow-delay="0"
              style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeInUp",
              }}
            >
              <h4 class="section-title style-1 mb-30 animated animated">
                Top Selling
              </h4>
              <div class="product-list-small animated animated">
                <article class="row align-items-center hover-up">
                  <figure class="col-md-4 mb-0">
                    <a href="/shop-product-right">
                      <img
                        src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/thumbnail-1.jpg"
                        alt=""
                      />
                    </a>
                  </figure>
                  <div class="col-md-8 mb-0">
                    <h6>
                      <a href="/shop-product-right" class="content-text">
                        Nestle Original Coffee-Mate Coffee Creamer
                      </a>
                    </h6>
                    <div class="product-rate-cover">
                      <div class="product-rate d-inline-block">
                        <div
                          class="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span class="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div class="product-price">
                      <span>$32.85</span>
                      <span class="old-price">$33.8</span>
                    </div>
                  </div>
                </article>
                <article class="row align-items-center hover-up">
                  <figure class="col-md-4 mb-0">
                    <a href="/shop-product-right" class="content-text">
                      <img
                        src="	https://nest-frontend-v6.netlify.app/assets/imgs/shop/thumbnail-2.jpg"
                        alt=""
                      />
                    </a>
                  </figure>
                  <div class="col-md-8 mb-0">
                    <h6>
                      <a href="/shop-product-right" class="content-text">
                        Nestle Original Coffee-Mate Coffee Creamer
                      </a>
                    </h6>
                    <div class="product-rate-cover">
                      <div class="product-rate d-inline-block">
                        <div
                          class="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span class="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div class="product-price">
                      <span>$32.85</span>
                      <span class="old-price">$33.8</span>
                    </div>
                  </div>
                </article>
                <article class="row align-items-center hover-up">
                  <figure class="col-md-4 mb-0">
                    <a href="/shop-product-right">
                      <img
                        src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/thumbnail-3.jpg"
                        alt=""
                      />
                    </a>
                  </figure>
                  <div class="col-md-8 mb-0">
                    <h6>
                      <a href="/shop-product-right" class="content-text">
                        Nestle Original Coffee-Mate Coffee Creamer
                      </a>
                    </h6>
                    <div class="product-rate-cover">
                      <div class="product-rate d-inline-block">
                        <div
                          class="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span class="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div class="product-price">
                      <span>$32.85</span>
                      <span class="old-price">$33.8</span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div
              class="col-xl-3 col-lg-4 col-md-6 mb-md-0 wow animate__ animate__fadeInUp animated"
              data-wow-delay=".1s"
              style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeInUp",
              }}
            >
              <h4 class="section-title style-1 mb-30 animated animated">
                Trending Products
              </h4>
              <div class="product-list-small animated animated">
                <article class="row align-items-center hover-up">
                  <figure class="col-md-4 mb-0">
                    <a href="/shop-product-right">
                      <img
                        src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/thumbnail-4.jpg"
                        alt=""
                      />
                    </a>
                  </figure>
                  <div class="col-md-8 mb-0">
                    <h6>
                      <a href="/shop-product-right" class="content-text">
                        Organic Cage-Free Grade A Large Brown Eggs
                      </a>
                    </h6>
                    <div class="product-rate-cover">
                      <div class="product-rate d-inline-block">
                        <div
                          class="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span class="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div class="product-price">
                      <span>$32.85</span>
                      <span class="old-price">$33.8</span>
                    </div>
                  </div>
                </article>
                <article class="row align-items-center hover-up">
                  <figure class="col-md-4 mb-0">
                    <a href="/shop-product-right" class="content-text">
                      <img
                        src="	https://nest-frontend-v6.netlify.app/assets/imgs/shop/thumbnail-5.jpg"
                        alt=""
                      />
                    </a>
                  </figure>
                  <div class="col-md-8 mb-0">
                    <h6>
                      <a href="/shop-product-right" class="content-text">
                        Seeds of Change Organic Quinoa, Brown, &amp; Red Rice
                      </a>
                    </h6>
                    <div class="product-rate-cover">
                      <div class="product-rate d-inline-block">
                        <div
                          class="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span class="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div class="product-price">
                      <span>$32.85</span>
                      <span class="old-price">$33.8</span>
                    </div>
                  </div>
                </article>
                <article class="row align-items-center hover-up">
                  <figure class="col-md-4 mb-0">
                    <a href="/shop-product-right">
                      <img
                        src="	https://nest-frontend-v6.netlify.app/assets/imgs/shop/thumbnail-6.jpg"
                        alt=""
                      />
                    </a>
                  </figure>
                  <div class="col-md-8 mb-0">
                    <h6>
                      <a href="/shop-product-right" class="content-text">
                        Naturally Flavored Cinnamon Vanilla Light Roast Coffee
                      </a>
                    </h6>
                    <div class="product-rate-cover">
                      <div class="product-rate d-inline-block">
                        <div
                          class="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span class="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div class="product-price">
                      <span>$32.85</span>
                      <span class="old-price">$33.8</span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div
              class="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 d-none d-lg-block wow animate__ animate__fadeInUp animated"
              data-wow-delay=".2s"
              // style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;"
            >
              <h4 class="section-title style-1 mb-30 animated animated">
                Recently added
              </h4>
              <div class="product-list-small animated animated">
                <article class="row align-items-center hover-up">
                  <figure class="col-md-4 mb-0">
                    <a href="/shop-product-right" class="content-text">
                      <img
                        src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/thumbnail-7.jpg"
                        alt=""
                      />
                    </a>
                  </figure>
                  <div class="col-md-8 mb-0">
                    <h6>
                      <a href="/shop-product-right" class="content-text">
                        Pepperidge Farm Farmhouse Hearty White Bread
                      </a>
                    </h6>
                    <div class="product-rate-cover">
                      <div class="product-rate d-inline-block">
                        <div
                          class="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span class="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div class="product-price">
                      <span>$32.85</span>
                      <span class="old-price">$33.8</span>
                    </div>
                  </div>
                </article>
                <article class="row align-items-center hover-up">
                  <figure class="col-md-4 mb-0">
                    <a href="/shop-product-right">
                      <img
                        src="	https://nest-frontend-v6.netlify.app/assets/imgs/shop/thumbnail-8.jpg"
                        alt=""
                      />
                    </a>
                  </figure>
                  <div class="col-md-8 mb-0">
                    <h6>
                      <a href="/shop-product-right" class="content-text">
                        Organic Frozen Triple Berry Blend
                      </a>
                    </h6>
                    <div class="product-rate-cover">
                      <div class="product-rate d-inline-block">
                        <div
                          class="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span class="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div class="product-price">
                      <span>$32.85</span>
                      <span class="old-price">$33.8</span>
                    </div>
                  </div>
                </article>
                <article class="row align-items-center hover-up">
                  <figure class="col-md-4 mb-0">
                    <a href="/shop-product-right">
                      <img
                        src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/thumbnail-9.jpg"
                        alt=""
                      />
                    </a>
                  </figure>
                  <div class="col-md-8 mb-0">
                    <h6>
                      <a href="/shop-product-right" class="content-text">
                        Oroweat Country Buttermilk Bread
                      </a>
                    </h6>
                    <div class="product-rate-cover">
                      <div class="product-rate d-inline-block">
                        <div
                          class="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span class="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div class="product-price">
                      <span>$32.85</span>
                      <span class="old-price">$33.8</span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div
              class="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 d-none d-xl-block wow animate__ animate__fadeInUp animated"
              data-wow-delay=".3s"
              // style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;"
            >
              <h4 class="section-title style-1 mb-30 animated animated">
                Top Rated
              </h4>
              <div class="product-list-small animated animated">
                <article class="row align-items-center hover-up">
                  <figure class="col-md-4 mb-0">
                    <a href="/shop-product-right">
                      <img
                        src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/thumbnail-9.jpg"
                        alt=""
                      />
                    </a>
                  </figure>
                  <div class="col-md-8 mb-0">
                    <h6>
                      <a href="/shop-product-right" class="content-text">
                        Foster Farms Takeout Crispy Classic Buffalo Wings
                      </a>
                    </h6>
                    <div class="product-rate-cover">
                      <div class="product-rate d-inline-block">
                        <div
                          class="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span class="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div class="product-price">
                      <span>$32.85</span>
                      <span class="old-price">$33.8</span>
                    </div>
                  </div>
                </article>
                <article class="row align-items-center hover-up">
                  <figure class="col-md-4 mb-0">
                    <a href="/shop-product-right">
                      <img
                        src="	https://nest-frontend-v6.netlify.app/assets/imgs/shop/thumbnail-11.jpg"
                        alt=""
                      />
                    </a>
                  </figure>
                  <div class="col-md-8 mb-0">
                    <h6>
                      <a href="/shop-product-right" class="content-text">
                        Angie’s Boomchickapop Sweet &amp; Salty Kettle Corn
                      </a>
                    </h6>
                    <div class="product-rate-cover">
                      <div class="product-rate d-inline-block">
                        <div
                          class="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span class="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div class="product-price">
                      <span>$32.85</span>
                      <span class="old-price">$33.8</span>
                    </div>
                  </div>
                </article>
                <article class="row align-items-center hover-up">
                  <figure class="col-md-4 mb-0">
                    <a href="/shop-product-right">
                      <img
                        src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/thumbnail-12.jpg"
                        alt=""
                      />
                    </a>
                  </figure>
                  <div class="col-md-8 mb-0">
                    <h6>
                      <a href="/shop-product-right" class="content-text">
                        All Natural Italian-Style Chicken Meatballs
                      </a>
                    </h6>
                    <div class="product-rate-cover">
                      <div class="product-rate d-inline-block">
                        <div
                          class="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span class="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div class="product-price">
                      <span>$32.85</span>
                      <span class="old-price">$33.8</span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* long container */}
      <section
        class="newsletter mb-15 wow animate__ animate__fadeIn animated"
        style={{ visibility: "visible", animationName: "fadeIn" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="position-relative newsletter-inner">
                <div class="newsletter-content">
                  <h2 class="mb-20">
                    Stay home &amp; get your daily <br />
                    needs from our shop
                  </h2>
                  <p class="mb-45">
                    Start You'r Daily Shopping with{" "}
                    <span class="text-brand">Nest Mart</span>
                  </p>
                  <form class="form-subcriber d-flex">
                    <input type="email" placeholder="Your emaill address" />
                    <button class="bttn " type="submit">
                      Subscribe
                    </button>
                  </form>
                </div>
                <img
                  src="	https://nest-frontend-v6.netlify.app/assets/imgs/banner/banner-9.png"
                  alt="newsletter"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*small container*/}

      <section class="featured section-padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-1-5 col-md-4 col-12 col-sm-6 mb-md-4 mb-xl-0">
              <div
                class="banner-left-icon d-flex align-items-center wow animate__ animate__fadeInUp animated"
                data-wow-delay="0"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div class="banner-icon">
                  <img
                    src="	https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/icon-1.svg"
                    alt=""
                  />
                </div>
                <div class="banner-text">
                  <h3 class="icon-box-title">Best prices &amp; offers</h3>
                  <p>Orders $50 or more</p>
                </div>
              </div>
            </div>
            <div class="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div
                class="banner-left-icon d-flex align-items-center wow animate__ animate__fadeInUp animated"
                data-wow-delay=".1s"
                style={{
                  visibility: "visibl",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                <div class="banner-icon">
                  <img
                    src="	https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/icon-2.svg"
                    alt=""
                  />
                </div>
                <div class="banner-text">
                  <h3 class="icon-box-title">Free delivery</h3>
                  <p>24/7 amazing services</p>
                </div>
              </div>
            </div>
            <div class="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div
                class="banner-left-icon d-flex align-items-center wow animate__ animate__fadeInUp animated"
                data-wow-delay=".2s"
                style={{
                  visibility: "visibl",
                  animationDelay: "0.2s",
                  animationName: "fadeInUp",
                }}
              >
                <div class="banner-icon">
                  <img
                    src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/icon-3.svg"
                    alt=""
                  />
                </div>
                <div class="banner-text">
                  <h3 class="icon-box-title">Great daily deal</h3>
                  <p>When you sign up</p>
                </div>
              </div>
            </div>
            <div class="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div
                class="banner-left-icon d-flex align-items-center wow animate__ animate__fadeInUp animated"
                data-wow-delay=".3s"
                style={{
                  visibility: "visibl",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <div class="banner-icon">
                  <img
                    src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/icon-4.svg"
                    alt=""
                  />
                </div>
                <div class="banner-text">
                  <h3 class="icon-box-title">Wide assortment</h3>
                  <p>Mega Discounts</p>
                </div>
              </div>
            </div>
            <div class="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div
                class="banner-left-icon d-flex align-items-center wow animate__ animate__fadeInUp animated"
                data-wow-delay=".4s"
                style={{
                  visibility: "visibl",
                  animationDelay: "0.4s",
                  animationName: "fadeInUp",
                }}
              >
                <div class="banner-icon">
                  <img
                    src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/icon-5.svg"
                    alt=""
                  />
                </div>
                <div class="banner-text">
                  <h3 class="icon-box-title">Easy returns</h3>
                  <p>Within 30 days</p>
                </div>
              </div>
            </div>
            <div class="col-lg-1-5 col-md-4 col-12 col-sm-6 d-xl-none">
              <div
                class="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp"
                data-wow-delay=".5s"
                style={{
                  visibility: "visibl",
                  animationDelay: "0.5s",
                  animationName: "fadeInUp",
                }}
              >
                <div class="banner-icon">
                  <img
                    src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/icon-6.svg"
                    alt=""
                  />
                </div>
                <div class="banner-text">
                  <h3 class="icon-box-title">Safe delivery</h3>
                  <p>Within 30 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DashBoard;
