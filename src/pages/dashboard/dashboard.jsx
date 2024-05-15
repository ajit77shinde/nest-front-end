import React from "react";
import "./dashboard.css";
import { Category } from "../../components/category/category";
import Slider from "../../components/slider/slider";

function DashBoard() {
    return (
        <>
            <div className="section-1">

                <div className="dashboard">
                    <Category />
                    <div>
                        <div className="card card-cutom-width" style={{ width: 55 + 'rem' }}>
                            <Slider />
                        </div>
                    </div>

                    <div>
                        <div className="card ml-3 mb-3  shop-now" style={{ width: 24 + 'rem', height: 20 + 'rem' }}>
                            {/* <img className="card-img-top" src="..." alt="Card image cap"></img> */}
                            <div className="card-body">
                                <h5 className="card-title">Everyday Fresh & Clean with Our Products</h5>
                                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                <a href="#" className="btn btn-success">Shop Now <span class="material-symbols-outlined">
                                    arrow_forward
                                </span></a>
                            </div>
                        </div>
                        <div className="card ml-3 mb-3 organic-prod" style={{ width: 24 + 'rem', height: 20 + 'rem' }}>
                            {/* <img className="card-img-top" src="..." alt="Card image cap"></img> */}
                            <div className="card-body">
                                <h5 className="card-title">Everyday Fresh & Clean with Our Products</h5>
                                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                <a href="#" className="btn btn-success">Shop Now <span class="material-symbols-outlined">
                                    arrow_forward
                                </span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                <div class="col col-sm-6 col-md-2">
                    <div class="card">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-8">
                    <div class="card">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div class="col col-sm-6 col-md-2">
                    <div class="card">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashBoard;