import React from "react";
import "./dashboard.css";

import { Category } from "../../components/category/category";

function DashBoard () {
    return (
        <>
            <div className="dashboard">
                <Category />
                <div>
                    <div className="card" style={{ width: 35 + 'rem' }}>
                        <img className="card-img-top" src="..." alt="Card image cap"></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card" style={{ width: 35 + 'rem' }}>
                        <img className="card-img-top" src="..." alt="Card image cap"></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashBoard;