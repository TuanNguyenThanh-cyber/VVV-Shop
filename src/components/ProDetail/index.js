import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { Loading } from "../Loading";
import { formatMoneyVND } from "../../utils/formatMoneyVND";
import { GrFacebook } from 'react-icons/gr';
import { FaTwitterSquare, FaInstagram} from 'react-icons/fa';
import {AiFillStar } from 'react-icons/ai';
import "./ProDetail.scss";

export default function ProDetail() {

    const { dataproductdetail, isLoading, error } = useSelector(
        (state) => state.productDetailReducer
       );
        console.log(dataproductdetail);
        if (isLoading) {
            return <Loading></Loading>;
          }
    return (
        <div className="prodetail">
            <div className="bg-breadcrumb">
                <div className="container">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                    <li className="breadcrumb-item"><a href="#"> {dataproductdetail.categories[0].parent}</a></li>
                    <li className="breadcrumb-item active">{dataproductdetail.name} </li>
                    </ol>
                </div>
            </div>

            <div className="container">
                <div className="row sp no-gutters">
                    <div className="col-6 no-gutters">
                        <div className="picture-sp">
                            <img src="/images/phone-01.png" alt="product picture image" className="img-pic"></img>
                        </div>
                        <div className="row more-pic">
                            <div className="col-3">
                                <img src={dataproductdetail.images[0]} className="imgmore"></img>
                            </div>
                            <div className="col-3">
                                <img src="/images/phone-01.png" className="imgmore"></img>
                            </div>
                            <div className="col-3">
                                <img src="/images/phone-01.png" className="imgmore"></img>
                            </div>
                            <div className="col-3">
                                <img src="/images/phone-01.png" className="imgmore"></img>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 no-gutters info-sp">
                        <p className="name">{dataproductdetail.name}</p>
                        <div className="row">
                            <div className="col-4 judge">
                                <div className="star">
                                    <form>
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
                                    </form>
                                </div>
                            </div>
                            <div className="col-8 judge-text">
                                <div className="row">
                                    <div className="col-4">
                                    <p className="danh-gia">2 đánh giá</p>
                                    </div>
                                    <div className="col-8">
                                        <p className="hoi-dap">112 Hỏi & Đáp</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row price no-gutters">
                            <div className="col-4">
                                <p className="now-price">{formatMoneyVND(dataproductdetail.originalPrice)}</p>
                            </div>
                            <div className="col-8">
                                <p className="real-price">25.990.000 VND</p>
                            </div>
                        </div> 
                        <div class="row info-box">
                            <div class="col">
                                <p><img src="/images/ic-pro/screen-02-1.png" alt=""></img>6.7", FHD+, Dynamic AMOLED 2X, 1080 x 2400 Pixel</p>
                                <p><img src="/images/ic-pro/camerablack-1.png" alt=""></img>12.0 MP + 12.0 MP + 64.0 MP</p>
                                <p><img src="/images/ic-pro/selfie-1.png" alt=""></img>10.0 MP</p>
                                <p><img src="/images/ic-pro/microchip-1.png" alt=""></img>Nhà cung cấp: {dataproductdetail.supplier.name}</p>
                                <p><img src="/images/ic-pro/micro-sd-card-1.png" alt=""></img>128 GB</p>
                                <a href="">Xem chi tiết thông số kỹ thuật</a>
                            </div>
                        </div>  
                        <div className="row add">
                            <div className="col-2">
                                <div className="buttons_added">
                                    <input className="minus is-form" type="button" value="-"/>
                                    <input aria-label="quantity" className="input-qty" max="Số tối đa" min="Số tối thiểu" name="" type="number"
                                        value=""/>
                                    <input className="plus is-form" type="button" value="+"/>
                                </div>
                            </div>
                            <div className="col-10">
                                <button className="btn-add-cart">Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                        <div class="row like-comp">
                            <div className="col-3">
                                <button><img src="./img/heart-regular.svg" alt=""/> Yêu thích</button>
                            </div>
                            <div className="col-9">
                                <button><img src="./img/compress-alt-solid.svg" alt=""/>So sánh</button>
                            </div>
                        </div>
                        <hr/>
                        <div className="share">
                            <p>CHIA SẺ SẢN PHẨM     
                                <a href=""><GrFacebook className="icon-social"></GrFacebook></a>
                                <a href=""><FaTwitterSquare className="icon-social"></FaTwitterSquare></a> 
                                <a href=""><FaInstagram className="icon-social"></FaInstagram></a>
                            </p>
                        </div>

                    </div>
                    <hr/>
                    <div className="row no-gutters">
                        <h3> Đánh giá chi tiết</h3>
                        {dataproductdetail.description}
                    </div>
                </div>

            </div>
          
        </div>
    )
}