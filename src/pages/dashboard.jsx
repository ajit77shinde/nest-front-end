import React from "react";
import Card from "../components/card/card";
const DashBoard = () => {
  return (
    <>
      <Card
        productCategory="snack"
        productTitle="Seeds & Red Rice"
        productMerchant="NestFood"
        productFinalPrice="$28.85"
        productPrice="$32.00"
        buttonText="Add"
        productImagePath="https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-1-1.jpg"
      />
    </>
  );
};
export default DashBoard;
