import React from "react";
import "./card.css";

const Card = (props) => {
  const {
    productImagePath,
    productCategory,
    productTitle,
    productMerchant,
    productFinalPrice,
    productPrice,
    buttonText,
  } = props;
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-3">
            <div class="card">
              <div class="product-badges product-badges-position product-badges-mrg">
                <span class="hot">Hot</span>
              </div>
              <img
                src={productImagePath}
                class="card-img-top card-product-image"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">{productCategory}</p>

                <h5 class="card-title card-cursor-pointer">{productTitle}</h5>

                <p class="card-text">
                  {"By "}
                  <span class="merchantHighlight card-cursor-pointer">
                    {productMerchant}
                  </span>
                </p>
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
                    <a href="/productDetails" class="btn float-end cart-button">
                      <span class="material-symbols-outlined">
                        shopping_cart
                      </span>
                      {buttonText}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
