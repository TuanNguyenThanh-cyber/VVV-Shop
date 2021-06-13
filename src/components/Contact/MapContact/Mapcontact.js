import React from 'react'
import "./Mapcontact.scss"
import { Button} from 'reactstrap';

export default function Mapcontact() {
    return (
        <div className="container">
           <div className="ggmap">
                <h2>Vị trí Showroom</h2>
                <iframe className="mapStore" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7836.782583912778!2d106.80902436375615!3d10.85781418637757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf66f3c7f1b6f2401!2svvvshop!5e0!3m2!1svi!2s!4v1622921247877!5m2!1svi!2s" ></iframe>
                <div className="gap-md"></div>
            </div>
            <div>
                <h2 className="titleinput">Để lại thông tin để được ưu đãi</h2>
                <div class="row contact-form">
                        <div class="col">
                            <form method="POST" class="" id="contactForm" action="">
                    
                                <div class="form-group input_group">
                                    <input id="name" class="form-control align-input" name="name" type="text" autocomplete="on"
                                        placeholder="Họ và Tên"/>
                                </div>

                                <div class="form-group input_group">
                                    <input id="sdt" class="form-control align-input" name="sdt" type="text" autocomplete="on"
                                        placeholder="Nhập số điện thoại"/>
                                </div>
                    
                                <div class="form-group input_group">
                                    <input id="email" class="form-control align-input" name="email" type="text" autocomplete="on"
                                        placeholder="Email của bạn"/>
                                </div>
                    
                                <div class="form-group">
                                    <input type="submit" id="submit" value="Gửi" class="btn btn-primary btn-send" name="submit"/>
                                </div>
                    
                            </form>
                        </div>
                    </div>
            </div>
            <div className="gap-md"></div>
        </div>
        
    )
}

