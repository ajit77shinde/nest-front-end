import React from "react";

const Footer = () => {
    return (
        <>
            {/* long container */}
            <section
                class="newsletter mb-15 wow animate__ animate__fadeIn animated"
                style={{ visibility: "visible", animationName: "fadeIn" }}
            >
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="position-relative newsletter-inner">
                                <div class="newsletter-content">
                                    <h2 class="mb-20">
                                        Stay home &amp; get your daily <br />
                                        needs from our shop
                                    </h2>
                                    <p class="mb-45">
                                        Start You'r Daily Shopping with{" "}
                                        <span class="text-brand">Nest Mart</span>
                                    </p>
                                    <form class="form-subcriber d-flex">
                                        <input type="email" placeholder="Your emaill address" />
                                        <button class="bttn " type="submit">
                                            Subscribe
                                        </button>
                                    </form>
                                </div>
                                <img
                                    src="	https://nest-frontend-v6.netlify.app/assets/imgs/banner/banner-9.png"
                                    alt="newsletter"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*small container*/}

            <section class="featured section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-1-5 col-md-4 col-12 col-sm-6 mb-md-4 mb-xl-0">
                            <div
                                class="banner-left-icon d-flex align-items-center wow animate__ animate__fadeInUp animated"
                                data-wow-delay="0"
                                style={{ visibility: "visible", animationName: "fadeInUp" }}
                            >
                                <div class="banner-icon">
                                    <img
                                        src="	https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/icon-1.svg"
                                        alt=""
                                    />
                                </div>
                                <div class="banner-text">
                                    <h3 class="icon-box-title">Best prices &amp; offers</h3>
                                    <p>Orders $50 or more</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-1-5 col-md-4 col-12 col-sm-6">
                            <div
                                class="banner-left-icon d-flex align-items-center wow animate__ animate__fadeInUp animated"
                                data-wow-delay=".1s"
                                style={{
                                    visibility: "visibl",
                                    animationDelay: "0.1s",
                                    animationName: "fadeInUp",
                                }}
                            >
                                <div class="banner-icon">
                                    <img
                                        src="	https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/icon-2.svg"
                                        alt=""
                                    />
                                </div>
                                <div class="banner-text">
                                    <h3 class="icon-box-title">Free delivery</h3>
                                    <p>24/7 amazing services</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-1-5 col-md-4 col-12 col-sm-6">
                            <div
                                class="banner-left-icon d-flex align-items-center wow animate__ animate__fadeInUp animated"
                                data-wow-delay=".2s"
                                style={{
                                    visibility: "visibl",
                                    animationDelay: "0.2s",
                                    animationName: "fadeInUp",
                                }}
                            >
                                <div class="banner-icon">
                                    <img
                                        src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/icon-3.svg"
                                        alt=""
                                    />
                                </div>
                                <div class="banner-text">
                                    <h3 class="icon-box-title">Great daily deal</h3>
                                    <p>When you sign up</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-1-5 col-md-4 col-12 col-sm-6">
                            <div
                                class="banner-left-icon d-flex align-items-center wow animate__ animate__fadeInUp animated"
                                data-wow-delay=".3s"
                                style={{
                                    visibility: "visibl",
                                    animationDelay: "0.3s",
                                    animationName: "fadeInUp",
                                }}
                            >
                                <div class="banner-icon">
                                    <img
                                        src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/icon-4.svg"
                                        alt=""
                                    />
                                </div>
                                <div class="banner-text">
                                    <h3 class="icon-box-title">Wide assortment</h3>
                                    <p>Mega Discounts</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-1-5 col-md-4 col-12 col-sm-6">
                            <div
                                class="banner-left-icon d-flex align-items-center wow animate__ animate__fadeInUp animated"
                                data-wow-delay=".4s"
                                style={{
                                    visibility: "visibl",
                                    animationDelay: "0.4s",
                                    animationName: "fadeInUp",
                                }}
                            >
                                <div class="banner-icon">
                                    <img
                                        src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/icon-5.svg"
                                        alt=""
                                    />
                                </div>
                                <div class="banner-text">
                                    <h3 class="icon-box-title">Easy returns</h3>
                                    <p>Within 30 days</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-1-5 col-md-4 col-12 col-sm-6 d-xl-none">
                            <div
                                class="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp"
                                data-wow-delay=".5s"
                                style={{
                                    visibility: "visibl",
                                    animationDelay: "0.5s",
                                    animationName: "fadeInUp",
                                }}
                            >
                                <div class="banner-icon">
                                    <img
                                        src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/icon-6.svg"
                                        alt=""
                                    />
                                </div>
                                <div class="banner-text">
                                    <h3 class="icon-box-title">Safe delivery</h3>
                                    <p>Within 30 days</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Footer;