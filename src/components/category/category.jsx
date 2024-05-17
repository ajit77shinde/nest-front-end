
import React from 'react';
import "./category.css";
import { data } from "./category_data"
export const Category = () => {
    return (
        <div class="card-1" style={{ width: 15 + 'rem',display: 'inline-table'}}>
            <div class="card-body categories-dropdown-wrap">
                <ul>
                    {data.map((element) => {
                        return (
                            <li>
                                <a href={element.path}>
                                    <img src={element.url} alt="" />{element.category_name} </a>
                                    
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

// export default Category;