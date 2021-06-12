import React from 'react';
import { Link, Redirect } from "react-router-dom";
import "./IntroContact.scss";
import {AiOutlineMessage} from 'react-icons/ai';
import {IoMdArrowDropright} from 'react-icons/io';
import {FiPhoneCall, FiYoutube} from "react-icons/fi";
import {GrMail} from 'react-icons/gr';
import {BiSupport} from 'react-icons/bi';
import {FaFacebookF, FaInstagramSquare, FaTwitterSquare} from "react-icons/fa";

export default function IntroContact() {
    return (
        <div className="introContact">
            <div className="container">
                <div className="breadcrumb">
                    <Link to="/" className="infobreadcrumb">Trang chủ</Link>
                        <span> / </span>
                    <Link to="/contact" className="infobreadcrumb active">Liên hệ</Link>
                </div>
                <div className="title-page">
                    Liên hệ
                </div>
                <div className="banner-box">
                    <img src="/images/contact.jpg"
                         alt="banner images"
                         className="banner-img">
                    </img>
                </div>
                <div className="gap-md"></div>
                <section className="row">
                    <div className="col">
                        <h2 className="header-item">Hỗ trợ</h2>
                        <ul>
                            <li className="list-item">
                                <a className="flex-container" href="#">
                                    <AiOutlineMessage className="firsticon"></AiOutlineMessage>
                                    <div className="text">Nhắn tin trực tiếp</div>
                                    <IoMdArrowDropright className="lasticon"></IoMdArrowDropright>
                                </a>                               
                            </li>
                            <li className="list-item">
                                <a className="flex-container" href="tel:0123456789">
                                    <FiPhoneCall className="firsticon"></FiPhoneCall>
                                    <div className="text">Call: 0123456789</div>
                                    <IoMdArrowDropright className="lasticon"></IoMdArrowDropright>
                                </a>                               
                            </li>
                            <li className="list-item">
                                <a className="flex-container" href="mailto:vvvshop@gmail.com">
                                    <GrMail className="firsticon"></GrMail>
                                    <div className="text">Liên hệ qua Email</div>
                                    <IoMdArrowDropright className="lasticon"></IoMdArrowDropright>
                                </a>                               
                            </li>
                            <li className="list-item">
                                <a className="flex-container" href="#">
                                    <BiSupport className="firsticon"></BiSupport>
                                    <div className="text">Nâng cấp hình ảnh</div>
                                    <IoMdArrowDropright className="lasticon"></IoMdArrowDropright>
                                </a>                               
                            </li>
                        </ul>
                    </div>

                    <div className="col">
                        <h2 className="header-item">Mạng xã hội</h2>
                        <ul>
                            <li className="list-item">
                                <a className="flex-container" href="#">
                                    <FaFacebookF className="firsticon"></FaFacebookF>
                                    <div className="text">Facebook</div>
                                    <IoMdArrowDropright className="lasticon"></IoMdArrowDropright>
                                </a>                               
                            </li>                           
                            <li className="list-item">
                                <a className="flex-container" href="#">
                                    <FaInstagramSquare className="firsticon"></FaInstagramSquare>
                                    <div className="text">Instagram</div>
                                    <IoMdArrowDropright className="lasticon"></IoMdArrowDropright>
                                </a>                               
                            </li>
                            <li className="list-item">
                                <a className="flex-container" href="#">
                                    <FaTwitterSquare className="firsticon"></FaTwitterSquare>
                                    <div className="text">Twitter</div>
                                    <IoMdArrowDropright className="lasticon"></IoMdArrowDropright>
                                </a>                               
                            </li>
                            <li className="list-item">
                                <a className="flex-container" href="#">
                                    <FiYoutube className="firsticon"></FiYoutube>
                                    <div className="text">Youtube</div>
                                    <IoMdArrowDropright className="lasticon"></IoMdArrowDropright>
                                </a>                               
                            </li>
                        </ul>
                    </div>
                </section>
                <div className="gap-md"></div>
            </div>
        </div>
    )
}
