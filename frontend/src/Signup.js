import React, { useState } from "react";
import "./style_signup.css"; // Link đến file CSS đã tạo
import { Link } from "react-router-dom";
function Signup() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5001/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullname, password }), // Không gửi email
    });

    const data = await response.json();

    if (response.status === 200) {
      setMessage("Đăng ký thành công!");
    } else {
      setMessage(data.message || "Đã có lỗi xảy ra.");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Đăng ký tài khoản</h2>
        <div className="form-floating mb-3">
          <input
            name="fullname"
            type="text"
            className="form-control"
            id="floatingFullname"
            placeholder="Số điện thoại hoặc email:"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <label htmlFor="floatingFullname">Số điện thoại hoặc email:</label>
        </div>

        <div className="form-floating">
          <input
            name="password"
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Mật khẩu:</label>
        </div>

        <input type="submit" className="btn btn-primary" value="Đăng ký" />
        <p>{message}</p>
        <div className="action-create">
          <Link to="/login">đăng nhập</Link> {/* Thay a bằng Link */}
        </div>
        <div className="link-a">
          <a href="">Giới thiệu</a>
          <a href="">Trợ giúp</a>
          <a href="">Xem thêm</a>
        </div>
      </form>
    </div>
  );
}

export default Signup;
