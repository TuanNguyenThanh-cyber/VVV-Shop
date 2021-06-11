import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
} from "reactstrap";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import "./HeaderMiddle.scss";
import { Link, Redirect } from "react-router-dom";


export default function HeaderMiddle(props) {
  let loveProduct = JSON.parse(localStorage.getItem("wishList"));
  let arrayIdLoveProduct = Object.keys(loveProduct);

  let { isScroll } = props;
  const [result, setResult] = useState(false);
  const [amountLove, setamountLove] = useState(arrayIdLoveProduct.length);

  const abortController = new AbortController();
  const signal = abortController.signal;

  useEffect(() => {
    const handleScrollHeader = () => {
      if (window.scrollY >= 10) {
        setResult(result || isScroll);
      } else {
        setResult(false);
      }
    };
    window.addEventListener("scroll", handleScrollHeader);
    return function cleanup() {
      abortController.abort();
    };
  }, [result]);

  return (
    <div className={result ? "HeaderMiddle scroll" : "HeaderMiddle"}>
      <div className="container">
        <Navbar className="HeaderMiddle_navbar row">
          <Link to="/" className="HeaderMiddle_navbrand col-3">
            <img
              src="/images/logoVVVheader.png"
              alt="Logo"
              className={result ? "imgLogoScroll" : "imgLogo"}
            ></img>
          </Link>
          <InputGroup className="HeaderMiddle_search col-6">
            <Input
              className="HeaderMiddle_input"
              placeholder="Tìm kiếm Sản phẩm..."
            />
            <InputGroupAddon addonType="append">
              <Button className="HeaderMiddle_btnSearch">
                <span>Tìm kiếm</span>
              </Button>
            </InputGroupAddon>
          </InputGroup>
          <Link className="HeaderMiddle_icon col-3" to="/myloveproduct">
            <button className="HeaderMiddle__btn-heart">
              <FaRegHeart className="HeaderMiddle_iconHeart"></FaRegHeart>
              <span className="HeaderMiddle_amountHeart">{amountLove}</span>
            </button>
            <Link className="HeaderMiddle_shoppingcart" to="/myshoppingcart">
              <div className="shoppingcart_container">
                <FaShoppingCart className="HeaderMiddle_iconShoppingCart"></FaShoppingCart>
                <span className="HeaderMiddle_amountShoppingCart">2</span>
              </div>
              <span className="HeaderMiddle_shoppingcart-name">Giỏ hàng</span>
            </Link>
          </Link>
        </Navbar>
      </div>
    </div>
  );
}
