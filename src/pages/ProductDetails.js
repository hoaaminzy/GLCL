import React from "react";
import { useParams } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { BsCalendar2HeartFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { SiLevelsdotfyi } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
const ProductDetails = () => {
  const { id } = useParams();
  const data = [
    {
      id: "1",
      productName: "Test",
      image: "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",
      category: "vot",
      description: "Test",
      price: 9000,
      status: "new",
      star: 1,
      user: {
        image: <FaRegUserCircle />,
        username: "Nguyen Van A",
        numberphone: "098765432",
        link: "https://docs.google.com/spreadsheets/d/1ybB9nrTB6TEFSFCxYtuFCZaHj1zyHQB2lO2LSNHpwe8/edit?gid=0#gid=0",
      },
    },
    {
      id: "2",
      productName: "Test2",
      image: "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",
      category: "giay",

      description: "Test 2",
      price: 9999,
      status: "old",
      star: 6,
      user: {
        image: <FaRegUserCircle />,
        username: "Nguyen Van A",
        numberphone: "098765432",
        link: "https://docs.google.com/spreadsheets/d/1ybB9nrTB6TEFSFCxYtuFCZaHj1zyHQB2lO2LSNHpwe8/edit?gid=0#gid=0",
      },
    },
    {
      id: "3",
      productName: "Test 3",
      image: "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",
      category: "quanao",

      description: "Test ",
      price: 900000,
      status: "used",
      star: 2,
      user: {
        image: <FaRegUserCircle />,
        username: "Nguyen Van A",
        numberphone: "098765432",
        link: "https://docs.google.com/spreadsheets/d/1ybB9nrTB6TEFSFCxYtuFCZaHj1zyHQB2lO2LSNHpwe8/edit?gid=0#gid=0",
      },
    },
    {
      id: "4",
      productName: "test 4",
      image: "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",
      category: "phukien",

      description: "test 1",
      price: 900000,
      status: "old",
      star: 1,
      user: {
        image: <FaRegUserCircle />,
        username: "Nguyen Van A",
        numberphone: "098765432",
        link: "https://docs.google.com/spreadsheets/d/1ybB9nrTB6TEFSFCxYtuFCZaHj1zyHQB2lO2LSNHpwe8/edit?gid=0#gid=0",
      },
    },
    {
      id: "5",
      productName: "Test",
      image: "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",
      category: "vot",

      description: "Test",
      price: 9000,
      status: "new",
      star: 1,
      user: {
        image: <FaRegUserCircle />,
        username: "Nguyen Van A",
        numberphone: "098765432",
        link: "https://docs.google.com/spreadsheets/d/1ybB9nrTB6TEFSFCxYtuFCZaHj1zyHQB2lO2LSNHpwe8/edit?gid=0#gid=0",
      },
    },
    {
      id: "6",
      productName: "Test2",
      image: "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",
      category: "quanao",

      description: "Test 2",
      price: 9999,
      status: "old",
      star: 6,
      user: {
        image: <FaRegUserCircle />,
        username: "Nguyen Van A",
        numberphone: "098765432",
        link: "https://docs.google.com/spreadsheets/d/1ybB9nrTB6TEFSFCxYtuFCZaHj1zyHQB2lO2LSNHpwe8/edit?gid=0#gid=0",
      },
    },
    {
      id: "7",
      productName: "Test 3",
      image: "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",
      category: "phukien",
      status: "used",
      description: "Test ",
      price: 900000,

      star: 2,
      user: {
        image: <FaRegUserCircle />,
        username: "Nguyen Van A",
        numberphone: "098765432",
        link: "https://docs.google.com/spreadsheets/d/1ybB9nrTB6TEFSFCxYtuFCZaHj1zyHQB2lO2LSNHpwe8/edit?gid=0#gid=0",
      },
    },
    {
      id: "8",
      productName: "test 4",
      image: "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",
      category: "giay",
      status: "new",
      description: "test 1",
      price: 900000,
      star: 1,
      user: {
        image: <FaRegUserCircle />,
        username: "Nguyen Van A",
        numberphone: "098765432",
        link: "https://docs.google.com/spreadsheets/d/1ybB9nrTB6TEFSFCxYtuFCZaHj1zyHQB2lO2LSNHpwe8/edit?gid=0#gid=0",
      },
    },
  ];

  const filterData = data.find((item) => item.id === id);
  //   const filterFeedBack = data.filter((fb) => pr.badmintonId === id);
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };
  return (
    <div>
      <div className="mt-5">
        <Container>
          <Row>
            <Col sm={6}>
              <div className="d-flex flex-column gap-4">
                <div style={{ position: "relative" }}>
                  <img
                    src={filterData?.image}
                    style={{
                      width: "100%",
                      height: "350px",
                      borderRadius: "20px",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div
                  style={{
                    border: "1px solid black",
                    padding: "15px",
                    borderRadius: "15px",
                  }}
                >
                  <div style={{ width: "100%" }}>
                    <strong className="fs-5 ">Người đăng tin</strong>
                    <div className="d-flex align-items-center gap-3">
                      <span className="fs-2">{filterData?.user.image}</span>
                      <span className="fs-4">{filterData?.user.username}</span>
                    </div>
                    <hr />
                    <div>
                      <strong className="fs-5">Liên hệ</strong>
                      <div className="d-flex flex-column">
                        <span>SDT: {filterData?.user.numberphone}</span>
                        <Link to={`${filterData?.user.link}`}>
                          Link facebook cá nhân
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={6}>
              <div className="d-flex flex-column gap-3">
                <strong style={{ width: "100%" }}>
                  Tên sản phẩm: {filterData.productName}
                </strong>
                <strong style={{ width: "100%" }}>
                  Danh mục: {filterData.category}
                </strong>
                <strong style={{ width: "100%" }}>
                  Tình trạng: {filterData.status}
                </strong>
                <strong style={{ width: "100%" }}>
                  Giá: {filterData.price}
                </strong>
                <strong style={{ width: "100%" }}>
                  Giá: {filterData.description}
                </strong>
              </div>
            </Col>
          </Row>
          {/* <Row>
            <div
              style={{
                border: "1px solid white",
                borderRadius: "20px",
                padding: "10px",
              }}
            >
              <strong className="fs-4">Đánh giá</strong>
              <hr />
              <div>
                {filterFeedBack.length === 0 ? (
                  <span className="d-flex">Chưa có đánh giá nào</span>
                ) : (
                  <>
                    {filterFeedBack?.map((fback) => {
                      return (
                        <div key={fback._id}>
                          <div className="d-flex flex-col gap-2">
                            <span className="fw-bold text-yellow-300">
                              {fback.name}
                            </span>
                            <div>
                              <Rating
                                name="size-small"
                                defaultValue={fback.rating}
                                size="small"
                              />
                            </div>
                          </div>
                          <div>
                            <p>{fback.review}</p>
                          </div>
                          <hr />
                        </div>
                      );
                    })}
                  </>
                )}

                <button
                  className="btn btn-primary mt-3"
                  onClick={() => setClickFB(true)}
                >
                  Viết đánh giá
                </button>
              </div>
            </div>

            {clickFB && <FeedBack onClose={() => setClickFB(false)} />}
          </Row> */}
        </Container>
      </div>
    </div>
  );
};

export default ProductDetails;
