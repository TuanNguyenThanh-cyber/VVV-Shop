import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./BannerNew.scss";
import ReactHtmlParser from "react-html-parser";
import { blogAction } from "../../../redux/actions/blogAction";
import { Loading } from "../../Loading";
import { newsdetailAction } from "../../../redux/actions/newsDetailAction";

export default function BannerNew() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(blogAction());
  }, []);

  const { datablog, isLoading, error } = useSelector(
    (state) => state.blogReducer
  );
  console.log(datablog);

  const handleNewsDetail = (id) => {
    dispatch(newsdetailAction(id));
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="BannerNew">
      <div className="breadcrumb">
        <div className="container">
          <Link to="/" className="infobreadcrumb">
            Trang chủ
          </Link>
          <span> / </span>
          <Link to="/news" className="infobreadcrumb active">
            Tin tức
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="Bannerimg">
          <img
            src="/images/banner-0.jpg"
            alt="introLogo"
            className="imgabout"
          ></img>
        </div>

        <div className="row">
          <div className="col-12 col-sm-12 col-xl bannermini">
            <img src="/images/banner-01.png" className="imgmini"></img>
          </div>
          <div className="col-12 col-sm-12 col-xl bannermini">
            <img src="/images/banner-02.jpg" className="imgmini"></img>
          </div>
        </div>

        <hr></hr>
        
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-xl-8">
            <div className="row bordertitle">
              <span className="titlepopular">MỚI CẬP NHẬT</span>
            </div>
            {datablog &&
              datablog.data.map((item) => (
                <>
                  <div className="row">
                    <div className="col-4 imgbox">
                      <img
                        className="newsimages"
                        src="/images/slider1.png"
                        alt="news_image"
                      ></img>
                    </div>
                    <div className="col-8 newsinfo">
                      <Link
                        to={"/news/" + item.slug}
                        className="font-weight-bold newsname"
                        onClick={() => handleNewsDetail(item._id)}
                      >
                        {item.name}
                      </Link>
                      <p className="author">
                        <img
                          className="authorimg"
                          src={item.author.avatar}
                        ></img>
                        {item.author.name}
                      </p>
                      <p className="review">{ReactHtmlParser(item.html)}</p>
                    </div>
                  </div>
                  <hr></hr>
                </>
              ))}
            <div className="morebtn">
              <button className="btn">Xem thêm</button>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-xl-4">
            <div className="row bordertitle">
              <span className="titlepopular">BÀI VIẾT PHỔ BIẾN</span>
            </div>
            {datablog &&
              datablog.data.map((item) => (
                <>
                  <div className="row news">
                    <div className="col-6 imgbox">
                      <img
                        className="newsimages"
                        src="/images/slider1.png"
                        alt="news_image"
                      ></img>
                    </div>
                    <div className="col-6 newsinfo">
                      <a href="#" className="font-weight-bold newsnamepopular">
                        {item.name}
                      </a>
                      <p className="author">
                        <img
                          className="authorimg"
                          src={item.author.avatar}
                        ></img>
                        {item.createdAt}
                      </p>
                    </div>
                  </div>
                  <hr></hr>
                </>
              ))}

            <div className="row">
              <div className="col">
                <div className="morebtn">
                  <button className="btn">Xem thêm</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="gap-md"></div>
      </div>
    </div>
  );
}
