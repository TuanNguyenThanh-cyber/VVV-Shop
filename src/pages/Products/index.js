import React from "react";
import AllProducts from "../../components/AllProducts";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Products() {
  return (
    <>
      <Header isScroll={true}></Header>
      <AllProducts></AllProducts>
      <Footer></Footer>
    </>
  );
}
