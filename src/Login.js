import React, { useState } from "react";
import "./style_login.css";
import { Link } from "react-router-dom";

function Login() {
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullname, password }),
    });

    const data = await response.json();

    if (response.status === 200) {
      setMessage("Đăng nhập thành công");
    } else {
      setMessage(data.message);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Đăng nhập Facebook</h2>
        <div className="form-floating mb-3">
          <input
            name="fullname"
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Số điện thoại hoặc email"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <label htmlFor="floatingInput">Số điện thoại hoặc email:</label>
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
        <input type="submit" className="btn btn-primary" value="Đăng nhập" />
        <p>{message}</p>
        <div className="action-create">
          <Link to="/signup">Tạo tài khoản mới</Link> {/* Thay a bằng Link */}
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

export default Login;
