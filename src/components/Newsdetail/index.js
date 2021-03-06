import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Newsdetail.scss";
import { useDispatch, useSelector } from "react-redux";
import { blogAction } from "../../redux/actions/blogAction";
import { Loading } from "../Loading";
import { newsdetailAction } from "../../redux/actions/newsDetailAction";
import ReactHtmlParser from "react-html-parser";

export default function Newsdetail() {
  const { datanewsdetail, isLoading, error } = useSelector(
    (state) => state.newsDetailReducer
  );

  const { datablog, isLoadingg, err } = useSelector(
    (state) => state.blogReducer
  );
  console.log(datanewsdetail);
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <new className="newsdetail">
      <div className="breadcrumb">
        <div className="container">
          <Link to="/" className="infobreadcrumb">
            Trang chủ
          </Link>
          <span> / </span>
          <Link to="/news" className="infobreadcrumb">
            Tin tức
          </Link>
          <span> / </span>
        </div>
      </div>
      <div className="container">
        <div className="newsimg">
          <img
            className="image"
            src="/images/top-8-laptop-gaming-2021.png"
          ></img>
        </div>

        <div className="row newsbody">
          <div className="col-8 newsinfo">
            <h3 className="newstopic">{datanewsdetail.name}</h3>
            <div className="authinfo">
              <div className="authimage">
                <img
                  className="authimg"
                  src={datanewsdetail.author.avatar}
                ></img>
              </div>
              <div className="authname">{datanewsdetail.author.name}</div>
              <div className="timecreate">{datanewsdetail.createdAt}</div>
            </div>

            <div className="info">{ReactHtmlParser(datanewsdetail.html)}</div>
          </div>

          <div className="col-4 newspopular">
            <div className="row bordertitle">
              <span className="titlepopular">BÀI VIẾT PHỔ BIẾN</span>
            </div>
            {datablog &&
              datablog.map((item) => (
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
                      <a href={"/news/" + item.slug} className="font-weight-bold newsname">
                        {item.name}
                      </a>
                      <p className="author">
                        <img className="authimg" src={item.author.avatar}></img>
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
    </new>
  );
}
