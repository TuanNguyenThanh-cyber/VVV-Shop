import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./BannerNew.scss";
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
      <div className="container">
        <div className="breadcrumb">
          <Link to="/" className="infobreadcrumb">
            Trang chủ
          </Link>
          <span> / </span>
          <Link to="/news" className="infobreadcrumb active">
            Tin tức
          </Link>
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
            <img src="/images/slider1.png" className="Bannermini"></img>
          </div>
          <div className="col bannerright">
            <img src="/images/slider1.png" className="Bannermini"></img>
          </div>
        </div>

        <hr></hr>

        <div className="row">
          <div className="col-8">
            {datablog &&
              datablog.map((item) => (
                <>
                  <div className="row">
                    <div className="col-4">
                      <img
                        className="newsimages"
                        src="/images/slider1.png"
                        alt="news_image"
                      ></img>
                    </div>
                    <div className="col-8 newsinfo">
                      <Link
                        to={"/news/" + item.slug}
                        className="font-weight-bold"
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
                      <p className="review">{item.html}</p>
                    </div>
                  </div>
                  <hr></hr>
                </>
              ))}
            <div className="morebtn">
              <button>Xem thêm</button>
            </div>
          </div>
          <div className="col-4">
            <div className="row bordertitle">
              <span className="titlepopular">BÀI VIẾT PHỔ BIẾN</span>
            </div>
            {datablog &&
              datablog.map((item) => (
                <>
                  <div className="row">
                    <div className="col-4">
                      <img
                        className="newsimages"
                        src="/images/slider1.png"
                        alt="news_image"
                      ></img>
                    </div>
                    <div className="col-8 newsinfo">
                      <a href="#" className="font-weight-bold">
                        {item.name}
                      </a>
                      <p className="author">
                        <img
                          className="authorimg"
                          src={item.author.avatar}
                        ></img>
                        {item.author.name}
                      </p>
                      <p className="review">{item.html}</p>
                    </div>
                  </div>
                  <hr></hr>
                </>
              ))}

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
  );
}
