import React from "react";
import './ResetPassword.scss'

export default function ResetPassword() {
  return (
    <div>
      <div class="row box">
        <div class="col-lg-12">
          <div class="infor-form">
            <form action="">
              <h3 class="title">Đổi mật khẩu</h3>
              <div class="form-group">
                <label for="password">Mật khẩu hiện tại</label>
                <div class="input-icons">
                  <input
                    id="password"
                    class="form-control form__input"
                    type="password"
                    name="password"
                    placeholder="Nhập mật khẩu"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="password">Mật khẩu mới</label>
                <div class="input-icons">
                  <input
                    id="password"
                    class="form-control form__input"
                    type="password"
                    name="password"
                    placeholder="Nhập mật khẩu xác nhận"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="password">Xác nhận mật khẩu</label>
                <div class="input-icons">
                  <input
                    id="password"
                    class="form-control form__input"
                    type="password"
                    name="password"
                    placeholder="Nhập mật khẩu xác nhận"
                  />
                </div>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-submit">
                  Submit
                </button>
              </div>
            </form>
            <div class="gap-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
