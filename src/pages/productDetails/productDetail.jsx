import React from "react";
// import { Category } from "../../components/category/category";
// import CategoryDropdown from "../../components/category/CategoryDropdown";
import { data } from "../../components/category/category_data";
import "./productDetail.css";
import { Rating } from "@mui/material";
import CardList from "../../components/card/cardList";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import CartTitle from "../../components/card/cardTitle";
import { ProductData } from "../../components/card/cardData";
import Card from "../../components/card/card";
import Slider from "react-slick";


const ProductDetails = () => {
    const arrowSign = <span class="material-symbols-outlined">chevron_right</span>
    const homeSign = <span class="material-symbols-outlined">home</span>
    const value = 3.5;

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        Fade: false
      };

    return (
        <>
            <div className="my-3 mx-5">
                <section>
                    <div class="m-2 page-header breadcrumb-wrap">
                        <div class="">
                            <div class="breadcrumb">
                                {homeSign}
                                <a href="/" rel="nofollow"><i class="fi-rs-home mr-5"></i>Home</a>
                                {arrowSign}
                                <span></span> <a href="/shop-grid-right">Vegetables &amp; tubers</a> <span></span> {arrowSign}Seeds of Change Organic
                            </div>
                        </div>
                    </div>

                    {/* {homeSign} Home {arrowSign} Vegitables & Tubers {arrowSign} seads of change Organic  */}
                </section>
                <hr />
                <section className="my-3">
                    <div className="row row-cols-md-2">
                        {/* Product Image section */}
                        <div className="col-md-9 row ">
                            <div className="col-md-6">
                                <div className="zoom-image">
                                    <InnerImageZoom zoomType="hover" src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-16-1.jpg" />
                                </div>
                                <Slider {...settings} className="zoomSlider">
                                <div className="item">
                                    <img src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-16-6.jpg" className="w-100" alt="" />
                                </div>
                                <div className="item">
                                    <img src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-16-6.jpg" className="w-100" alt="" />
                                </div>
                                <div className="item">
                                    <img src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-16-6.jpg" className="w-100" alt="" />
                                </div>
                                <div className="item">
                                    <img src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-16-6.jpg" className="w-100" alt="" />
                                </div>

                            </Slider>
                            </div>
                           

                            <div className="col-md-6 product-details">
                                <span className="stock-status out-stock">sale Off</span>
                                <div className="title-detail">Seeds of Change Organic Quinoa, Brown</div>
                                <div className="product-detail-rating">
                                    <Rating name="half-rating-read" value={3.5} precision={0.5} readOnly />
                                    <span>(32 review )</span>
                                </div>
                                <div class="clearfix product-price-cover">
                                    <div class="row detail-product-price primary-color float-left">
                                        <span class="col-md-3 current-price text-brand">$38</span>
                                        <span className="col-md-3">
                                            <span class="save-price font-md color3 ml-15">26% Off</span>
                                            <span class="old-price font-md ml-15">$52</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="shor-desc mb-3">
                                    <p className="description">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, porro, mollitia nihil dignissimos modi sunt obcaecati, ipsa ducimus eos illo nemo sint reprehenderit ipsum rem quibusdam repellat dolorum corrupti vitae?
                                    </p>
                                </div>
                                <div className="d-flex mb-4">
                                    <strong className="px-2 mr-3">Size/Weight:</strong>
                                    <ul class="list-filter size-filter font-small">
                                        <li><a href="#">50g</a></li>
                                        <li class="active"><a href="#">60g</a></li>
                                        <li><a href="#">80g</a></li>
                                        <li><a href="#">100g</a></li>
                                        <li><a href="#">150g</a></li>
                                    </ul>
                                </div>
                                <div className="add-cart-section mb-5">
                                    <div className="detail-qty radius ">
                                        <input type="number" name="quantity" class="qty-val" min="1" />
                                    </div>
                                    <button type="button" class="btn btn-success lh-lg">
                                        <span class="material-symbols-outlined">shopping_cart</span> Add to Cart</button>

                                    <button type="button" class="btn-extra"><span className="material-symbols-outlined">favorite_border</span></button>
                                    <button type="button" class="btn-extra"><span className="material-symbols-outlined">shuffle</span></button>

                                </div>
                                <div class="font-xs">
                                    <ul class="mr-50 float-start">
                                        <li class="">Type: <span class="text-brand">Organic</span></li>
                                        <li class="">MFG:<span class="text-brand"> Jun 4.2024</span></li>
                                        <li>LIFE: <span class="text-brand">70 days</span></li>
                                    </ul>
                                    <ul class="float-start">
                                        <li class="">SKU: <a href="#">FWM15VKT</a></li>
                                        <li class="">Tags: <a href="#" rel="tag">Snack</a>, <a href="#" rel="tag">Organic</a>, <a href="#" rel="tag">Brown</a></li>
                                        <li>Stock:<span class="in-stock text-brand ml-5">8 Items In Stock</span></li>
                                    </ul>
                                </div>
                                {/* <div className="short-details">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="">Type: </label> <span>Orgnic</span>
                                            <label htmlFor="">Type: </label> <span>Orgnic</span>
                                            <label htmlFor="">Type: </label> <span>Orgnic</span>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="">Type: </label> <span>Orgnic</span>
                                            <label htmlFor="">Type: </label> <span>Orgnic</span>
                                            <label htmlFor="">Type: </label> <span>Orgnic</span>
                                        </div>
                                    </div>
                                </div> */}
                            </div>

                            <CartTitle title="Related products" />
                            {ProductData.map((data) => {
                                return (
                                    <div class="col-lg-1-3 col-md-3  col-sm-6 col-12">
                                        <Card
                                            productImagePath={data.product_image_url}
                                            // producttitle={data.product_name}
                                            productRating={data.productRating}
                                            productPrice={data.product_price}
                                            productFinalPrice={data.product_discounted_price}
                                            hideButton ={true}
                                            // reviewPercentage={data.reviewPercentage}
                                            productCategory={data.product_category}
                                            // productMerchant={data.product_tag}
                                            // buttonText={data.buttonText}
                                            badgeData={data.product_discount_percent}
                                        />
                                    </div>
                                );
                            })}
                        </div>

                        <div className="col-md-3">
                            {/* <CategoryDropdown data={data} onDetailPage={true} /> */}
                            <CardList title="Category">{data.map((element, i) => {
                                if (i < 5) {
                                    return (

                                        <div class="d-flex cat-border mb-3 category-detail">
                                            <div class="p-2 w-100 bd-highlight"><a class="d-inline dropdown-item category-items d-flex" href={element.path}>
                                                <img src={element.url} alt="" />{element.category_name}</a>
                                            </div>
                                            <div class="p-2 flex-shrink-1 bd-highlight">{true && <span class="count flex-shrink-1">30</span>}</div>
                                        </div>
                                    )
                                } else return ("")
                            })}</CardList>
                            <CardList title="New products">
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
                            </CardList>


                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default ProductDetails;