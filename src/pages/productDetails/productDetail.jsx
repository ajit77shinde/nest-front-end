import React from "react";
import { Category } from "../../components/category/category";
import CategoryDropdown from "../../components/category/CategoryDropdown";
import { data } from "../../components/category/category_data";
import "./productDetail.css"
const ProductDetails = () => {
    const arrowSign = <span class="material-symbols-outlined">chevron_right</span>
    const homeSign = <span class="material-symbols-outlined">home</span>
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
                        <div className="col-md-9">Product detail section </div>
                        <div className="col-md-3">
                            <CategoryDropdown data={data} onDetailPage={true} /> </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default ProductDetails;