import React from "react";

const Newsletter = () => {
  return (
    <>
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
    </>
  );
};

export default Newsletter;
