import React from "react";
import "./style.css";
import Card from "../components/card/card";

import { ProductData } from "../components/card/cardData";

const DashBoard = () => {
  return (
    <>
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
    </>
  );
};
export default DashBoard;
