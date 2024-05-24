import React, {useEffect} from "react";
import "./card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  const {
    productImagePath,
    productCategory,
    producttitle,
    productRating,
    reviewPercentage,
    productMerchant,
    productFinalPrice,
    productPrice,

    badgeData,
    hideButton = false,
    id
  } = props;

  
  return (
    <Link to={`/product/${id}`}>
      <div>
        <div class="card card-margin card-color">
          <div class="product-badges product-badges-position product-badges-mrg">
            <span class="hot">{badgeData}</span>
          </div>
          <img
            src={productImagePath}
            class="card-img-top card-product-image"
            alt="..."
          />
          <div class="product-action-1">
            <a
              aria-label="Add To Wishlist"
              class="action-btn"
              href="/shop-wishlist"
            >
              <i class="fi-rs-heart"></i>
            </a>
            <a aria-label="Compare" class="action-btn" href="/shop-compare">
              <i class="fi-rs-shuffle"></i>
            </a>
            <a
              aria-label="Quick view"
              class="action-btn"
              data-bs-toggle="modal"
              data-bs-target="#quickViewModal"
            >
              <i class="fi-rs-eye"></i>
            </a>
          </div>
          <div class="card-body">
            <p class="card-text">{productCategory}</p>

            <h5 class="card-title card-cursor-pointer">{producttitle}</h5>

            <div class="product-rate-cover">
              <div class="product-rate d-inline-block">
                <div
                  class="product-rating"
                  // style={{ width: reviewPercentage }}
                ></div>
              </div>
              <span class="font-small ml-5 text-muted"> ({productRating})</span>
            </div>
            {productMerchant &&
              <p class="card-text">
                <span class="colorChange">{"By "}</span>
                <span class="merchantHighlight card-cursor-pointer">
                  {productMerchant}
                </span>
              </p>
            }

            {hideButton === true ? (
              <div class="row">

                <div class="col-lg-6 col-md-6">
                  <h5 class="product-final-price">{productFinalPrice}</h5>
                </div>
                <div class="col-lg-6 col-md-5">

                  <h6 class="card-title discounted-price-strike float-end">
                    {productPrice}
                  </h6>
                </div>
              </div>
            ) : (
              <div class="row">

                <div class="col-lg-4 col-md-4">
                  <h5 class="product-final-price">{productFinalPrice}</h5>
                </div>
                <div class="col-lg-3 col-md-3">

                  <h6 class="card-title discounted-price-strike float-end">
                    {productPrice}
                  </h6>
                </div>
                <div class="col-lg-5 col-md-5">
                  <Link to={'/cart'}>
                    <a href="./cart" class="btn float-end cart-button">
                      <span class="material-symbols-outlined">shopping_cart</span>
                      {buttonText}
                    </a>
                  </Link>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </Link >
  );
};

export default Card;
