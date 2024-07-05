import React, { useState, useEffect, useRef } from "react";
import bgStart from "../images/bg-cl.jpg";
import icon from "../images/icon.png";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Start = () => {
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bgStart})`,
          height: "100vh",
          width: "100vw",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
        className="d-flex flex-column justify-content-center"
      >
        <div
          className="d-flex justify-content-between p-5"
          style={{ position: "absolute", top: 0, left: 0, right: 0 }}
        >
          <div
            style={{ color: "white" }}
            className="d-flex gap-2 justify-content-between"
          >
            <span className="text-white fs-4">GiaoLưuCầuLông</span>
            <img src={icon} style={{ width: "40px" }} alt="icon" />
          </div>
          <div>
            <button className="btn btn-danger" style={{ borderRadius: "20px" }}>
              Đăng tin
            </button>
          </div>
        </div>
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ height: "100%", marginBottom: "80px" }}
        >
          <div className="d-flex flex-column align-items-center justify-content-center">
            <span
              className="text-white"
              style={{ fontWeight: "bold", fontSize: "60px" }}
            >
              GiaoLuuCauLong.com
            </span>
            <p className="text-white fs-4">
              Tìm kiếm cơ hội giao lưu cầu lông gần bạn
            </p>
            <div
              style={{
                background: "white",
                width: "max-content",
                display: "flex",
                alignItems: "center",
                padding: "10px",
                borderRadius: "50px",
                border: "none",
                outline: "none",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <input
                type="text"
                style={{
                  outline: "none",
                  border: "none",
                  width: "100%",
                  flex: 1,
                }}
                placeholder="Nhập địa điểm"
                className="fs-5 px-3"
              />
              <div
                style={{
                  flex: 1,
                  borderLeft: "2px solid black",
                  paddingLeft: "20px",
                }}
                className="py-3"
              >
                <span className="fs-5" onClick={() => setToggle(true)}>
                  Giao lưu
                </span>
              </div>
              {toggle && (
                <div
                  ref={menuRef}
                  style={{
                    position: "absolute",
                    bottom: "-370px",
                    zIndex: 9999999999,
                    background: "white",
                    borderRadius: "20px",
                    left: 0,
                    right: "0px",
                    padding: "20px",
                    boxShadow: "#ccc 1px 1px 10px",
                  }}
                >
                  <div className="d-flex flex-column gap-3">
                    <span className="fs-4 fw-bold">Loại</span>
                    <Link to="/home/giaoluu">
                      <div
                        className="d-flex align-items-center gap-4"
                        style={{
                          border: "1px solid #ccc",
                          padding: "15px",
                          borderRadius: "15px",
                        }}
                      >
                        <FaMapMarkerAlt />
                        <div className="d-flex flex-column justify-content-center">
                          <span>Giao lưu</span>
                          <span>Tìm ca giao lưu cầu lông gần bạn</span>
                        </div>
                      </div>
                    </Link>
                    <Link to="/home/sandau">
                      <div
                        className="d-flex align-items-center gap-4"
                        style={{
                          border: "1px solid #ccc",
                          padding: "15px",
                          borderRadius: "15px",
                        }}
                      >
                        <FaMapMarkerAlt />
                        <div className="d-flex flex-column justify-content-center">
                          <span>Sân đấu</span>
                          <span>Tìm sân cầu lông gần bạn</span>
                        </div>
                      </div>
                    </Link>
                    <Link to="/home/traodoi">
                      <div
                        className="d-flex align-items-center gap-4"
                        style={{
                          border: "1px solid #ccc",
                          padding: "15px",
                          borderRadius: "15px",
                        }}
                      >
                        <FaMapMarkerAlt />
                        <div className="d-flex flex-column justify-content-center">
                          <span>Trao đổi</span>
                          <span>Bạn muốn trao đổi</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
              <Link to="/home">
                <div
                  style={{
                    background: "red",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                  }}
                  className="d-flex justify-content-center align-items-center fs-3 text-white"
                >
                  <FaSearch />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
