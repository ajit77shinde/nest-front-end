// import logo from './logo.svg';
import "./App.css";
import Header from "./components/header/header";
import "material-icons/iconfont/material-icons.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import ProductDetails from "./pages/productDetails/productDetail.jsx";
import DashBoard from "./pages/dashboard/dashboard";
import Deals from "./pages/deals";
// import Header2 from "./components/header2/header2";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Footer1 from "./components/footer/footer.jsx";
function App() {
  return (
    <>
      <Header />
      {/* Defining routes path and rendering components as element */}
      <Routes>
        <Route path="/" element={<DashBoard />} />
        {/* <Route path="/header" element={<Header2 />} /> */}
        <Route path="/" element={<DashBoard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        {/* <Route path="/live" element={<Live />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer1 />
    </>
  );
}

export default App;
