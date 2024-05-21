import React from "react";
import { Category } from "../../components/category/category";
import CategoryDropdown from "../../components/category/CategoryDropdown";
import { data } from "../../components/category/category_data";
import "./productDetail.css";
import { Rating } from "@mui/material";
const ProductDetails = () => {
    const arrowSign = <span class="material-symbols-outlined">chevron_right</span>
    const homeSign = <span class="material-symbols-outlined">home</span>
    const value = 3.5
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
                        <div className="col-md-9 row">
                            <div className="col-md-6">product Image </div>

                            <div className="col-md-6">
                                <span>sale Off</span>

                                <div className="product-title">Seeds of Change Organic Quinoa, Brown</div>
                                <Rating name="half-rating-read" value={3.5} precision={0.5} readOnly />
                                <span>(32 review )</span>
                                <div className="mb-2">
                                    <span>$38</span>
                                    <span>26% off</span>
                                    <span>$52</span>
                                </div>

                                <div className="description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, porro, mollitia nihil dignissimos modi sunt obcaecati, ipsa ducimus eos illo nemo sint reprehenderit ipsum rem quibusdam repellat dolorum corrupti vitae?
                                </div>
                                <div>Size/Weight: 
                                    <span>50g</span>
                                    <span>60g</span>
                                    <span>80g</span>
                                    <span>100g</span>
                                    <span>150g</span>
                                    </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <CategoryDropdown data={data} onDetailPage={true} /> </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default ProductDetails;