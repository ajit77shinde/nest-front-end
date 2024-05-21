import React from "react";
import Select from "react-select";
import options from "./countryList";
import "./cart.css";
import Newsletter from "../../components/newletter/newsletter";
import Featured from "../../components/featured/featured";

// const options = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ];

const Cart = () => {
  return (
    <>
      <section class="section-padding">
        <div class="container mb-80 mt-50">
          <div class="row">
            <div class="col-lg-8 mb-40">
              <h1 class="heading-2 mb-10">Your Cart</h1>
              <div class="d-flex justify-content-between">
                <h6 class="text-body-new">
                  There are <span id="text-brand">3</span> products in your cart
                </h6>
                <h6 class="text-body-new">
                  <a href="#" class="text-muted">
                    <span class="material-symbols-outlined icon-delete">
                      delete
                    </span>
                    Clear Cart
                  </a>
                </h6>
              </div>
            </div>
          </div>
          {/* </div> */}
          <div class="row">
            <div class="col-lg-8">
              <div class="table-responsive shopping-summery">
                <table class="table table-wishlist">
                  <thead>
                    <tr class="main-heading">
                      <th class="custome-checkbox start pl-30">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="exampleCheckbox11"
                          value=""
                        />
                        <label
                          class="form-check-label"
                          for="exampleCheckbox11"
                        ></label>
                      </th>
                      <th scope="col" colspan="2">
                        Product
                      </th>
                      <th scope="col">Unit Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Subtotal</th>
                      <th scope="col" class="end">
                        Remove
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="pt-30">
                      <td class="custome-checkbox pl-30">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="exampleCheckbox1"
                          value=""
                        />
                        <label
                          class="form-check-label"
                          for="exampleCheckbox1"
                        ></label>
                      </td>
                      <td class="image product-thumbnail pt-40">
                        <img
                          src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-1-1.jpg"
                          alt="#"
                        />
                      </td>
                      <td class="product-des product-name">
                        <h6 class="mb-5- product-text">
                          {/* <h6 class="mb-5"> */}
                          <a
                            class="product-name mb-10 text-heading"
                            href="/shop-product-right"
                          >
                            Field Roast Chao Cheese Creamy Original
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
                      </td>
                      <td class="price" data-title="Price">
                        <h4 class="text-body-new ">$2.51 </h4>
                      </td>
                      <td class="text-center detail-info" data-title="Stock">
                        <div class="detail-extralink mr-15">
                          <div class="detail-qty border radius">
                            <a href="#" class="qty-up">
                              {/* <i class="fi-rs-angle-small-down"></i> */}
                              <span class="material-symbols-outlined">
                                keyboard_arrow_up
                              </span>
                            </a>
                            <input
                              type="text"
                              name="quantity"
                              class="qty-val"
                              value="1"
                              min="1"
                            />
                            <a href="#" class="qty-down">
                              {/* <i class="fi-rs-angle-small-up"></i> */}
                              <span class="material-symbols-outlined">
                                keyboard_arrow_down
                              </span>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td class="price" data-title="Price">
                        <h4 class="text-brand ">$2.51 </h4>
                      </td>
                      <td class="action text-center" data-title="Remove">
                        <a href="#" class="text-body-new">
                          <span class="material-symbols-outlined icon-delete ">
                            delete
                          </span>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td class="custome-checkbox pl-30">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="exampleCheckbox2"
                          value=""
                        />
                        <label
                          class="form-check-label"
                          for="exampleCheckbox2"
                        ></label>
                      </td>
                      <td class="image product-thumbnail">
                        <img
                          src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-2-1.jpg"
                          alt="#"
                        />
                      </td>
                      <td class="product-des product-name">
                        <h6 class="mb-5- product-text">
                          {/* <h6 class="mb-5"> */}
                          <a
                            class="product-name mb-10 text-heading"
                            href="/shop-product-right"
                          >
                            Blue Diamond Almonds Lightly Salted
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
                      </td>
                      <td class="price" data-title="Price">
                        <h4 class="text-body-new">$3.2 </h4>
                      </td>
                      <td class="text-center detail-info" data-title="Stock">
                        <div class="detail-extralink mr-15">
                          <div class="detail-qty border radius">
                            <a href="#" class="qty-up">
                              <span class="material-symbols-outlined">
                                keyboard_arrow_up
                              </span>
                            </a>
                            <input
                              type="text"
                              name="quantity"
                              class="qty-val"
                              value="1"
                              min="1"
                            />
                            <a href="#" class="qty-down">
                              <span class="material-symbols-outlined">
                                keyboard_arrow_down
                              </span>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td class="price" data-title="Price">
                        <h4 class="text-brand">$3.2 </h4>
                      </td>
                      <td class="action text-center" data-title="Remove">
                        <a href="#" class="text-body-new">
                          <span class="material-symbols-outlined icon-delete ">
                            delete
                          </span>{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td class="custome-checkbox pl-30">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="exampleCheckbox3"
                          value=""
                        />
                        <label
                          class="form-check-label"
                          for="exampleCheckbox3"
                        ></label>
                      </td>
                      <td class="image product-thumbnail">
                        <img
                          src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-3-1.jpg"
                          alt="#"
                        />
                      </td>
                      <td class="product-des product-name">
                        <h6 class="mb-5- product-text">
                          {/* <h6 class="mb-5"> */}
                          <a
                            class="product-name mb-10 text-heading"
                            href="/shop-product-right"
                          >
                            Fresh Organic Mustard Leaves Bell Pepper
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
                      </td>
                      <td class="price" data-title="Price">
                        <h4 class="text-body-new">$2.43 </h4>
                      </td>
                      <td class="text-center detail-info" data-title="Stock">
                        <div class="detail-extralink mr-15">
                          <div class="detail-qty border radius">
                            <a href="#" class="qty-up">
                              <span class="material-symbols-outlined">
                                keyboard_arrow_up
                              </span>
                            </a>
                            <input
                              type="text"
                              name="quantity"
                              class="qty-val"
                              value="1"
                              min="1"
                            />
                            <a href="#" class="qty-down">
                              <span class="material-symbols-outlined">
                                keyboard_arrow_down
                              </span>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td class="price" data-title="Price">
                        <h4 class="text-brand">$2.43 </h4>
                      </td>
                      <td class="action text-center" data-title="Remove">
                        <a href="#" class="text-body-new">
                          <span class="material-symbols-outlined icon-delete ">
                            delete
                          </span>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="divider-2 mb-30"></div>
              <div class="cart-action d-flex justify-content-between">
                <a class="btnn ">
                  <span class="material-symbols-outlined">
                    keyboard_backspace
                  </span>
                  Continue Shopping
                </a>
                {/* <a href="#" class="btnn mb-20 w-100">
              Proceed To CheckOut<i class="fi-rs-sign-out ml-15"></i>
            </a> */}
                <a class="btnn  mr-10 mb-sm-15">
                  <span class="material-symbols-outlined">cached</span>Update
                  Cart
                </a>
              </div>
              <div class="row mt-50">
                <div class="col-lg-7">
                  <div class="calculate-shiping p-40 border-radius-15 border">
                    <h4 class="mb-10">Calculate Shipping</h4>
                    <p class="mb-30">
                      <span class="font-lg text-muted">Flat rate:</span>
                      <strong class="text-brand">5%</strong>
                    </p>
                    <form class="field_form shipping_calculator">
                      <div class="form-row row">
                        <div class="form-group col-lg-8 col-md-8 col-xl-12 col-sm-12">
                          <div class="custom_select">
                            <Select options={options} />
                          </div>
                        </div>
                      </div>
                      <div class="form-row row">
                        <div class="form-group col-lg-6">
                          <input
                            required="required"
                            placeholder="State / Country"
                            name="name"
                            type="text"
                          />
                        </div>
                        <div class="form-group col-lg-6">
                          <input
                            required="required"
                            placeholder="PostCode / ZIP"
                            name="name"
                            type="text"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-lg-5">
                  <div class="p-40">
                    <h4 class="mb-10">Apply Coupon</h4>
                    <p class="mb-30">
                      <span class="font-lg text-muted">
                        Using A Promo Code?
                      </span>
                    </p>
                    <form action="#">
                      <div class="d-flex justify-content-between">
                        <input
                          class="font-medium mr-15 coupon"
                          name="Coupon"
                          placeholder="Enter Your Coupon"
                        />
                        <button class="btnn">
                          <i class="fi-rs-label mr-10"></i>
                          Apply
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="border p-md-4 cart-totals ml-30">
                <div class="table-responsive">
                  <table class="table no-border">
                    <tbody>
                      <tr>
                        <td class="cart_total_label">
                          <h6 class="text-muted box-text">Subtotal</h6>
                        </td>
                        <td class="cart_total_amount">
                          <h4 class="text-brand text-end">$12.31</h4>
                        </td>
                      </tr>
                      <tr>
                        <td scope="col" colspan="2">
                          <div class="divider-2 mt-10 mb-10"></div>
                        </td>
                      </tr>
                      <tr>
                        <td class="cart_total_label">
                          <h6 class="text-muted">Shipping</h6>
                        </td>
                        <td class="cart_total_amount">
                          <h5 class="text-heading text-end">Free </h5>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td class="cart_total_label">
                          <h6 class="text-muted">Estimate for</h6>
                        </td>
                        <td class="cart_total_amount">
                          <h5 class="text-heading text-end">United Kingdom </h5>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td scope="col" colspan="2">
                          <div class="divider-2 mt-10 mb-10"></div>
                        </td>
                      </tr>
                      <tr>
                        <td class="cart_total_label">
                          <h6 class="text-muted">Total</h6>
                        </td>
                        <td class="cart_total_amount">
                          <h4 class="text-brand text-end">$12.31</h4>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <a href="#" class="btnn mb-20 w-100">
                  Proceed To CheckOut
                  <span class="material-symbols-outlined icon-override-logout">
                    logout
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
