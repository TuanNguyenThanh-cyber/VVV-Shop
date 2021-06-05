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
import { Link } from "react-router-dom";

export default function HeaderMiddle(props) {
  let { isScroll } = props;
  const [result, setResult] = useState(false);

  // const [isScroll, setIsScroll] = useState(false);

  // const handleScrollHeader = () => {
  //   if (window.scrollY >= 50) {
  //     setResult(result || isScroll);
  //   } else {
  //     setResult(false);
  //   }
  // };

  // window.addEventListener("scroll", handleScrollHeader);

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
    return function cleanup(){
      abortController.abort();
    }
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
          <div className="HeaderMiddle_icon col-3">
            <button className="HeaderMiddle__btn-heart">
              <FaRegHeart className="HeaderMiddle_iconHeart"></FaRegHeart>
              <span className="HeaderMiddle_amountHeart">3</span>
            </button>
            <a className="HeaderMiddle_shoppingcart">
              <div className="shoppingcart_container">
                <FaShoppingCart className="HeaderMiddle_iconShoppingCart"></FaShoppingCart>
                <span className="HeaderMiddle_amountShoppingCart">2</span>
              </div>
              <span className="HeaderMiddle_shoppingcart-name">Giỏ hàng</span>
            </a>
          </div>
        </Navbar>
      </div>
    </div>
  );
}
