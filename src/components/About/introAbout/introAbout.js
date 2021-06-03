import React from 'react'
import { Link, Redirect } from "react-router-dom";
import "./introAbout.scss"

export default function introAbout() {
    return (
        <div className="introAbout">
            <div className="container">
                <div className="breadcrumb">
                    <Link to="/home" className="infobreadcrumb">Trang chủ</Link>
                    <span> / </span>
                    <Link to="/about" className="infobreadcrumb">Về VVV</Link>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Link to="/home">
                            <img
                                src="/images/vvvshop.jpg"
                                alt="introLogo"
                                className="imgabout"
                            ></img>
                        </Link>
                    </div>
                    <div className="col-6">
                        <div className="introInfo" >
                            <h1>Công Ty TNHH Thương Mại VVVSHOP</h1>
                            <span>Chào mừng đến với VVVSHOP. Tại đây chúng tôi chuyên cung cấp các loại máy tính, laptop, linh kiện PC cùng laptop. Hàng chính hãng bảo hành ưu đãi với độ uy tín tuyệt đối.</span>
                            <br/>
                            <span>Công ty được thành lập năm 2021 với dàn cổ đông gồm 5 thành viên hiện đang học tại trường đại học Công Nghệ Thông Tin, công ty là sản phẩm của đồ án môn học Kỹ thuật phát triển hệ thống web.</span>
                            <br/>
                            <span>Để biết thêm về các điều khoản cũng như chính sách của công ty, các bạn xem thêm ở dưới. Các khiếu nại tranh chấp cũng như bảo mật thông tin khách hàng đều được chúng tôi thực hiện và nêu ra rõ ràng cho khách hàng xem và đưa ra lựa chọn công ty chúng tôi. Xin chân thành cảm ơn!</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
