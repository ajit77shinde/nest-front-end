import React from "react";
import "./category.css"
import CartTitle from "../card/cardTitle";
const CategoryDropdown = (props) => {
    console.log("props = ", props);
    return (
        <>
            <div className="m-2 mb-3 category-border">
                <CartTitle title="Category" />
                {props.data.map((element, i) => {
                    if (i < 5) {
                        return (

                            <div class="d-flex cat-border mb-3 category-detail">
                                <div class="p-2 w-100 bd-highlight"><a class="d-inline dropdown-item category-items d-flex" href={element.path}>
                                    <img src={element.url} alt="" />{element.category_name}</a>
                                </div>
                                <div class="p-2 flex-shrink-1 bd-highlight">{props.onDetailPage && <span class="count flex-shrink-1">30</span>}</div>
                            </div>
                        )
                    } else return ("")
                })}
            </div>
        </>
    )
}
export default CategoryDropdown;