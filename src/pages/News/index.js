import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import New from "../../components/New"

export default function News() {
  return (
    <>
      <Header isScroll={true}></Header>
      <New></New>
      <Footer></Footer>
    </>
  );
}
