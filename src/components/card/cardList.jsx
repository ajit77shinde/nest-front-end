import React from "react";
import "./card.css"
import CartTitle from "../card/cardTitle";
const CardList = (props) => {
    console.log("props = ", props);
    return (
        <>
            <div className="m-2 mb-3 card-border">
                <CartTitle title={props.title} />
                {props.children}
            </div>
        </>
    )
}
export default CardList;