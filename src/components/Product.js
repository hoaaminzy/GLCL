import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { FaRegUserCircle } from "react-icons/fa";

const Product = () => {
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
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {data.map((item) => {
          return (
            <Link to={`/product/${item.id}`}>
              <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Link to="/" key={item.id}>
                    <Card.Title>{item.name}</Card.Title>
                  </Link>
                  <Card.Title>{item.price}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
};

export default Product;
