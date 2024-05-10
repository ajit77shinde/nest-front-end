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
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card mb-3" style={{ width: 24 + 'rem', height: 20 + 'rem' }}>
                            <img className="card-img-top" src="..." alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashBoard;