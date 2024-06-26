import React, { useEffect, useState } from "react"
import { data } from "../category/category_data";
import './header2.css'
const Header2 = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light app-greeen">
                <div class="container-fluid">
                    {/* <a class="navbar-brand" href="#">Trending Categories</a> */}

                    <div class="dropdown">
                        <button style={{ backgroundColor: "orange" }} class="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="mr-2 material-symbols-outlined">grid_view</span>
                            Trending Categories
                        </button>
                        <ul class="mt-2 dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <div className="m-3 mb-1 row row-cols-md-2">
                                {data.map(element => {
                                    return (<div class="col col-md-6">
                                        <li className="cat-border mb-3 d-grid"><a class="d-inline dropdown-item category-items" href={element.path}>
                                            <img src={element.url} alt="" />
                                            {element.category_name}</a></li>
                                    </div>)
                                })}
                            </div>
                        </ul>
                    </div>
                    <button class="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon "></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav m-auto">
                            <li class="nav-item">
                                <a class="nav-link active text-light" aria-current="page" href="#"><span className="material-symbols-outlined">
                                    local_fire_department
                                </span> Deals</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Home
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Home 1</a></li>
                                    <li><a class="dropdown-item" href="#">Home 2</a></li>
                                    <li><a class="dropdown-item" href="#">Home 3</a></li>
                                    <li><a class="dropdown-item" href="#">Home 3</a></li>
                                    <li><a class="dropdown-item" href="#">Home 3</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">Shop</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">Vendors</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">Shop</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">Mega Menu</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">Page</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">Contact</a>
                            </li>

                        </ul>

                    </div>
                    <span class="text-light d-flex">
                        <div>
                            <span className="display-5 material-symbols-outlined">headphones</span>
                        </div>
                        <div>
                            <div class="text-light h4 m-0" href="#">1900 - 888</div>
                            <div class="text-light h6 m-0" href="#">24/7 Support Center</div>

                        </div>
                    </span>
                </div>
            </nav>

        </>
    )
}
export default Header2;