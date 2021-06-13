import React, { useState } from "react";
import "./termAbout.scss"
import { FcCollapse } from "react-icons/fc";
import { Collapse, Button, CardBody } from 'reactstrap';
import { AiOutlineDown } from 'react-icons/ai'

export default function TermAbout() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const toggle1 = () => setIsOpen1(!isOpen1);
  const toggle2 = () => setIsOpen2(!isOpen2);
  const toggle3 = () => setIsOpen3(!isOpen3);
    return (
        <div className="termAbout">
            <div className="container">
                <div className="row terms">                     
                    <div className="termAbout_topic card w-100">
                        <Button className="button_topic" onClick={toggle}>
                                <h3>Chính sách Giao hàng</h3>
                                {isOpen ? (<AiOutlineDown className="iconCollapse"></AiOutlineDown>) : (<FcCollapse className="iconCollapse"></FcCollapse>)} 
                                
                        </Button>
                    </div>
                    <div className="termAbout_info card">
                        <Collapse isOpen={isOpen}>
                            <CardBody>  
                                <div className="termAbout_info_up">
                                    <h4>Các khu vực nội thành</h4>
                                    <img src="/images/vcnoithanh.png" className="terms_picture"></img>
                                </div>
                                <div className="content">
                                    <span className="font-weight-bold">Nội thành TP. Hồ Chí Minh</span>: Quận 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, Thủ Đức, Tân Phú, Tân Bình, Phú Nhuận, Gò Vấp, Bình Thạnh, Bình Tân.
                                </div>
                                <div className="content">
                                    <span className="font-weight-bold">Nội thành Hà Nội</span>: Quận Ba Đình, Hoàn Kiếm, Tây Hồ, Long Biên, Cầu Giấy, Đống Đa, Hai Bà Trưng, Hoàng Mai, Thanh Xuân, Nam Từ Liêm, Bắc Từ Liêm, Hà Đông.
                                </div>
                                <div className="termAbout_info_up">
                                    <h4>Các khu vực ngoại thành</h4>
                                    <img src="/images/chinhsachvanchuyen.png" className="terms_picture"></img>
                                </div>
                            </CardBody>
                        </Collapse>
                    </div>
                </div>
                <div className="row terms">                     
                    <div className="termAbout_topic card w-100">
                        <Button className="button_topic" onClick={toggle1}>
                                <h3>Chính sách thanh toán</h3>
                                {isOpen1 ? (<AiOutlineDown className="iconCollapse"></AiOutlineDown>) : (<FcCollapse className="iconCollapse"></FcCollapse>)} 

                        </Button>
                    </div>
                    <div className="termAbout_info card">
                        <Collapse isOpen={isOpen1}>
                            <CardBody>
                                <div className="content">
                                Nhằm mang đến cho quý khách hàng những trải nghiệm mua sắm trực tuyến toàn diện nhất, tại VVVSHOP, chúng tôi hỗ trợ 05 phương thức thanh toán để quý khách dễ dàng lựa chọn:
                                    <ol>
                                        <li>Tiền mặt(COD)</li>
                                        <li>Thanh toán chuyển khoản</li>
                                        <li>Thanh toán online qua thẻ ngân hàng nội địa</li>
                                        <li>Thanh toán bằng thẻ VISA hoặc MASTERCARD</li>
                                        <li>Thanh toán qua ví điện tử MOMO</li>
                                    </ol>
                                </div>
                                <div className="termAbout_info_up">
                                    <h4>Chi tiết Thanh toán</h4>
                                    <img src="/images/thanhtoanvvvshop.png" className="terms_picture"></img>
                                </div>
                            </CardBody>
                        </Collapse>
                    </div>
                </div>
                <div className="row terms">                     
                    <div className="termAbout_topic card w-100">
                        <Button className="button_topic" onClick={toggle2}>
                                <h3>Chính sách bảo hành</h3>
                                {isOpen2 ? (<AiOutlineDown className="iconCollapse"></AiOutlineDown>) : (<FcCollapse className="iconCollapse"></FcCollapse>)} 

                        </Button>
                    </div>
                    <div className="termAbout_info card">
                        <Collapse isOpen={isOpen2}>
                            <CardBody>
                            <p className="content">
                                <strong>1. Điều kiện bảo hành:</strong>
                                <br/> Sản phẩm được bảo hành miễn phí nếu đảm bảo tất cả các điều kiện sau:
                                <br/> – Sản phẩm thuộc danh mục được bảo hành từ Nhà sản xuất hoặc Nhà phân phối.
                                <br/> – Sản phẩm bị lỗi kỹ thuật do Nhà sản xuất.
                                <br/> – Thời hạn bảo hành trên phiếu bảo hành vẫn còn hiệu lực.
                                <br/> – Phiếu bảo hành còn nguyên vẹn, không chắp vá, không bị gạch xóa hay sửa chữa, bôi bẩn.
                                <br/> – Phiếu bảo hành đầy đủ thông tin: mã sản phẩm, số seri, ngày sản xuất, tên khách hàng sử dụng, địa chỉ, ngày mua (đối với các sản phẩm không áp dụng Bảo hành điện tử).
                                <br/> – Tem bảo hành và tem niêm phong (nếu có) của Nhà sản xuất trên sản phẩm còn nguyên vẹn.
                            </p>
                            <p className="content">Sản phẩm không được bảo hành hoặc sẽ phát sinh phí bảo hành nếu rơi vào một trong các trường hợp sau:
                                <br/> – Sản phẩm không thuộc danh mục được bảo hành từ Nhà sản xuất hoặc nhà phân phối.
                                <br/> – Sản phẩm không thỏa mãn một trong những điều kiện bảo hành ở mục 1.
                                <br/> – Số series, model sản phẩm không khớp với Phiếu bảo hành.
                                <br/> – Khách hàng tự ý can thiệp sửa chữa sản phẩm hoặc sửa chữa tại những trung tâm bảo hành không được sự ủy nhiệm của Nhà sản xuất.
                                <br/> – Sản phẩm bị hư hỏng do lỗi người sử dụng, và lỗi hư hỏng không nằm trong phạm vi bảo hành của Nhà sản xuất.
                                <br/> – Với trường hợp phát sinh phí bảo hành, nhân viên chăm sóc khách hàng của VVVSHOP sẽ tư vấn đầy đủ thông tin cho khách hàng trước khi tiến hành các thủ tục bảo hành.
                            </p>
                            <p className="content"><strong>2. Thời hạn bảo hành</strong>
                                <ul>
                                    <li><strong>Đối với Laptop, PC</strong><br/>
                                        Bảo hành 12-24 tháng tùy vào nhà cung cấp quy định kể từ ngày mua mới nếu sự cố hư hỏng do hãng sản xuất.
                                    </li>
                                    <li><strong>Đối với Linh kiện máy tính</strong><br/>
                                        Bảo hành 6-12 tháng nếu có sự cố trong suốt quá trình sử dụng.
                                    </li>
                                </ul>
                            </p>
                            </CardBody>
                        </Collapse>
                    </div>
                </div>
                <div className="row terms">                     
                    <div className="termAbout_topic card w-100">
                        <Button className="button_topic" onClick={toggle3}>
                                <h3>Chính sách bảo mật</h3>
                                {isOpen3 ? (<AiOutlineDown className="iconCollapse"></AiOutlineDown>) : (<FcCollapse className="iconCollapse"></FcCollapse>)} 

                        </Button>
                    </div>
                    <div className="termAbout_info card">
                        <Collapse isOpen={isOpen3}>
                            <CardBody>
                                <p>
                                    <strong>Mục đích thu thập thông tin cá nhân</strong>
                                    <br/>
                                    Website này được Công ty VVVSHOP quản lý. Khi mỗi khách hàng truy cập vào website này, trang web sẽ tự động lưu địa chỉ IP cùng với tên miền. Chúng tôi cũng sử dụng các công cụ kiểm tra như “cookie”. Một tài khoản cookie sẽ lưu trữ dữ liệu mà server của website gửi đến trình duyệt của khách hàng khi khách hàng truy cập vào trang web, việc sử dụng chức năng này sẽ giúp chúng tôi hỗ trợ và tìm hiểu nhu cầu, thị hiếu của khách hàng khi truy cập vào website của chúng tôi.
                                    Chúng tôi cũng kết hợp thông tin về địa chỉ IP và tên miền của khách hàng cùng với các thông tin khác mà khách hàng cung cấp.  Các thông tin này được cung cấp qua những email khách hàng gửi cho chúng tôi, hoặc các thông tin khách hàng điền khi muốn đăng ký, ý kiến phản hồi, những yêu cầu được hỗ trợ, trả lời phiếu điều tra hoặc tham gia vào một cuộc thi/ các hoạt động khuyến mại.
                                </p>
                                <p>
                                    <strong>Phạm vi sử dụng thông tin</strong>
                                    <br/>
                                    Thông tin được thu thập thông qua website của chúng tôi sẽ giúp chúng tôi:
                                    <ul>
                                        <li>Hỗ trợ khách hàng khi mua sản phẩm của VVVSHOP</li>
                                        <li>Giải đáp thắc mắc cho khách hàng</li>
                                        <li>Cung cấp cho khách hàng thông tin về sản phẩm mới nhất</li>
                                        <li>Xem xét và nâng cấp nội dung, giao diện cho website</li>
                                    </ul>
                                </p>
                            </CardBody>
                        </Collapse>
                    </div>
                </div>
            </div>
        </div>
    )
}
