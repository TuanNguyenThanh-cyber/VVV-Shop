import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./BannerNew.scss";
import { blogAction } from "../../../redux/actions/blogAction";
import { Loading } from "../../Loading";

export default function BannerNew() {
    const dispatch = useDispatch();
    useEffect(() => {
     dispatch(blogAction());
    }, []);

    const { datablog, isLoading, error } = useSelector(
     (state) => state.blogReducer
    );
    console.log(datablog);

    if (isLoading) {
        return <Loading></Loading>;
      }
    return (
        <div className="BannerNew">
            <div className="container">
                <div className="breadcrumb">
                    <Link to="/" className="infobreadcrumb">Trang chủ</Link>
                    <span> / </span>
                    <Link to="/news" className="infobreadcrumb active">Tin tức</Link>
                </div>
                <div className="Bannerimg">  
                        <img
                            src="/images/vvvshop.jpg"
                            alt="introLogo"
                            className="imgabout"
                        ></img>
                </div>

                <div className="row">

                    <div className="col bannerleft">
                        <img
                        src="/images/slider1.png"
                        className="Bannermini"
                        ></img>
                    </div>
                    <div className="col bannerright">
                        <img
                        src="/images/slider1.png"
                        className="Bannermini"
                        ></img>
                    </div>
                </div>
                
                <hr></hr>

                <div className="row">

                    <div className="col">
                        <div className="row">
                            <div className="col newimages">
                                <img src="/images/Category/chuot.png"></img>
                            </div>
                            <div className="col newinfo">
                                <a href="#" className="font-weight-bold">Title</a>
                                <p className="author">Author</p>
                                <p className="review">review news</p>
                            </div>
                            
                        </div>
                        <hr></hr>
                        <div className="row">
                            <div className="col newimages">
                                <img src="/images/Category/chuot.png"></img>
                            </div>
                            <div className="col newinfo">
                                <a href="#" className="font-weight-bold">Title</a>
                                <p className="author">Author</p>
                                <p className="review">review news</p>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <div className="col newimages">
                                <img src="/images/Category/chuot.png"></img>
                            </div>
                            <div className="col newinfo">
                                <a href="#" className="font-weight-bold">Title</a>
                                <p className="author">Author</p>
                                <p className="review">review news</p>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="morebtn">
                            <button>Xem thêm</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row"><span>BÀI VIẾT PHỔ BIẾN</span></div>
                        <div className="row">
                            <div className="col newimages">
                                    <img src="/images/Category/chuot.png"></img>
                                </div>
                                <div className="col newinfo">
                                    <a href="#" className="font-weight-bold">Title</a>
                                    <p className="author">Author</p>
                                    <p className="review">review news</p>
                                </div>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <div className="col newimages">
                                    <img src="/images/Category/chuot.png"></img>
                                </div>
                                <div className="col newinfo">
                                    <a href="#" className="font-weight-bold">Title</a>
                                    <p className="author">Author</p>
                                    <p className="review">review news</p>
                                </div>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <div className="col newimages">
                                    <img src="/images/Category/chuot.png"></img>
                                </div>
                                <div className="col newinfo">
                                    <a href="#" className="font-weight-bold">Title</a>
                                    <p className="author">Author</p>
                                    <p className="review">review news</p>
                                </div>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <div className="col newimages">
                                    <img src="/images/Category/chuot.png"></img>
                                </div>
                                <div className="col newinfo">
                                    <a href="#" className="font-weight-bold">Title</a>
                                    <p className="author">Author</p>
                                    <p className="review">review news</p>
                                </div>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <div className="col">
                                <div className="morebtn">
                                <button>Xem thêm</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="gap-md"></div>
            </div>
        </div>
    )
}
