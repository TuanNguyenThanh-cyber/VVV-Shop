import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useParams } from "react-router-dom";
import { Loading } from "../Loading";
import { formatMoneyVND } from "../../utils/formatMoneyVND";
import { GrFacebook } from "react-icons/gr";
import { FaTwitterSquare, FaInstagram } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { productDetailAction } from "../../redux/actions/productDetailAction";
import Swal from 'sweetalert2';
import "./ProDetail.scss";

export default function ProDetail() {
  const dispatch = useDispatch();
  const { idProduct } = useParams();
  useEffect(() => {
    dispatch(productDetailAction(idProduct));
  }, []);

  const { dataproductdetail, isLoading, error } = useSelector(
    (state) => state.productDetailReducer
  );
  console.log(dataproductdetail);

  // Wish List

  const wishList = localStorage.getItem("wishList")
    ? JSON.parse(localStorage.getItem("wishList"))
    : new Object();

  const [isInWishList, setIsInWishList] = useState(
    wishList.hasOwnProperty(idProduct)
  );

  const handleLoveProduct = () => {
    setIsInWishList(!isInWishList);
    if (!isInWishList) {
      wishList[idProduct] = true;
    } else {
      delete wishList[idProduct];
    }
    localStorage.setItem("wishList", JSON.stringify(wishList));
  };

  // OrderCart

  const orderCart = localStorage.getItem("orderCart")
    ? JSON.parse(localStorage.getItem("orderCart"))
    : new Object();

  const [isOrderCart, setIsOrderCart] = useState(
    orderCart.hasOwnProperty(idProduct)
  );

  const handleOrderCart = () => {
    setIsOrderCart(true);
    if (!isOrderCart) {
      orderCart[idProduct] = 1;
    }
    else{
      orderCart[idProduct]++;
    }
    localStorage.setItem("orderCart", JSON.stringify(orderCart));
    Swal.fire({
      icon: 'success',
      title: 'Th??m v??o gi??? h??ng th??nh c??ng',
      text: 'Truy c???p gi??? h??ng ????? ti???n h??nh thanh to??n!',
    })
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="prodetail">
      <div className="bg-breadcrumb">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Trang ch???</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">
                {" "}
                {dataproductdetail
                  ? dataproductdetail.categories[0].parent
                  : null}
              </a>
            </li>
            <li className="breadcrumb-item active">
              {dataproductdetail ? dataproductdetail.name : null}{" "}
            </li>
          </ol>
        </div>
      </div>

      <div className="container">
        <div className="row sp no-gutters">
          <div className="col-6 no-gutters">
            <Carousel
              emulateTouch={true}
              showStatus={false}
              autoPlay={true}
              infiniteLoop={true}
              showArrows={false}
            >
              {dataproductdetail &&
                dataproductdetail.images.map((item) => (
                  <div className="picture-sp">
                    <img src={item} />
                  </div>
                ))}
            </Carousel>
          </div>
          <div className="col-6 no-gutters info-sp">
            <p className="name">
              {dataproductdetail && dataproductdetail.name}
            </p>
            <div className="row">
              <div className="col-4 judge">
                <div className="star">
                  <div>
                    <AiFillStar className="star star-5"></AiFillStar>
                    <AiFillStar className="star star-4"></AiFillStar>
                    <AiFillStar className="star star-3"></AiFillStar>
                    <AiFillStar className="star star-2"></AiFillStar>
                    <AiFillStar className="star star-1"></AiFillStar>
                    {/* <input className="star star-5" id="star-5" type="radio" name="star" />
                                    <label className="star star-5" for="star-5"></label>
                                    <input className="star star-4" id="star-4" type="radio" name="star" />
                                    <label className="star star-4" for="star-4"></label>
                                    <input className="star star-3" id="star-3" type="radio" name="star" />
                                    <label className="star star-3" for="star-3"></label>
                                    <input className="star star-2" id="star-2" type="radio" name="star" />
                                    <label className="star star-2" for="star-2"></label>
                                    <input className="star star-1" id="star-1" type="radio" name="star" />
                                    <label className="star star-1" for="star-1"></label> */}
                  </div>
                </div>
              </div>
              <div className="col-8 judge-text">
                <div className="row">
                  <div className="col-4">
                    <p className="danh-gia">2 ????nh gi??</p>
                  </div>
                  <div className="col-8">
                    <p className="hoi-dap">112 H???i & ????p</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row price no-gutters">
              <div className="col-4">
                <p className="now-price">
                  {dataproductdetail
                    ? formatMoneyVND(dataproductdetail.originalPrice)
                    : null}
                </p>
              </div>
              <div className="col-8">
                <p className="real-price">25.990.000 VND</p>
              </div>
            </div>
            <div class="row info-box">
              <div class="col">
                <p>
                  <img src="/images/ic-pro/screen-02-1.png" alt=""></img>6.7",
                  FHD+, Dynamic AMOLED 2X, 1080 x 2400 Pixel
                </p>
                <p>
                  <img src="/images/ic-pro/camerablack-1.png" alt=""></img>12.0
                  MP + 12.0 MP + 64.0 MP
                </p>
                <p>
                  <img src="/images/ic-pro/selfie-1.png" alt=""></img>10.0 MP
                </p>
                <p>
                  <img src="/images/ic-pro/microchip-1.png" alt=""></img>Nh??
                  cung c???p:
                  {dataproductdetail && dataproductdetail.supplier.name}
                </p>
                <p>
                  <img src="/images/ic-pro/micro-sd-card-1.png" alt=""></img>128
                  GB
                </p>
                <a href="">Xem chi ti???t th??ng s??? k??? thu???t</a>
              </div>
            </div>
            <div className="row add">
              <div className="col-3 add-container">
                <button className="btn btnLove" onClick={handleLoveProduct}>
                  {isInWishList ? (
                    <AiFillHeart className="iconLoveRed"></AiFillHeart>
                  ) : (
                    <AiOutlineHeart className="iconLoveWhite"></AiOutlineHeart>
                  )}
                </button>
                <span>Y??u th??ch</span>
              </div>
              <div className="col-9">
                <button className="btn-add-cart" onClick={handleOrderCart}>
                  Th??m v??o gi??? h??ng
                </button>
              </div>
            </div>
            <hr />
            <div className="share">
              <p>
                CHIA S??? S???N PH???M
                <a href="">
                  <GrFacebook className="icon-social"></GrFacebook>
                </a>
                <a href="">
                  <FaTwitterSquare className="icon-social"></FaTwitterSquare>
                </a>
                <a href="">
                  <FaInstagram className="icon-social"></FaInstagram>
                </a>
              </p>
            </div>
          </div>
          <hr />
        </div>
        <div className="no-gutters mb-5">
          <h3> ????nh gi?? chi ti???t</h3>
          <br></br>
          <span>{dataproductdetail && dataproductdetail.description}</span>
        </div>
        <h3>????nh gi?? s???n ph???m</h3>
        <br></br>
        <div
          class="fb-comments"
          data-href="http://localhost:3000/"
          data-width=""
          data-numposts="5"
        ></div>
      </div>
    </div>
  );
}
