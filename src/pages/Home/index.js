import React from "react";
import Header from "../../components/Header";
import Slider from "../../components/Slider";
import Category from "../../components/Category";
import Footer from "../../components/Footer";
import FeaturedProducts from "../../components/FeaturedProducts";
import HotSellingAccessories from "../../components/HotSellingAccessories";

export default function Home() {
  return (
    <>
      <Header isScroll={true}></Header>
      <Slider></Slider>
      <Category></Category>
      <FeaturedProducts></FeaturedProducts>
      <HotSellingAccessories></HotSellingAccessories>
      <Footer></Footer>
    </>
  );
}
