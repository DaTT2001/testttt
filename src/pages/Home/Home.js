import React from "react";
import SliderMain from "../../components/Slider/Slider";
import style from "./Home.module.css";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Home = () => {
  return (
    <div className={style.homeContainer}>
      <SliderMain />
      <div className={style.landingBanner}>
        <img src="https://landing-page-prod-hn-ss-bfcplatform.cdn.vccloud.vn/landing-page-prod/cloud-server_tlokvkdx.png" width={400}/>
        <span>
          <h3>Cloud Server là gì ?</h3>
          <p>Cloud Server là một dịch vụ lưu trữ và quản lý máy chủ trên nền tảng đám mây (Cloud Computing). Thay vì phải sử dụng máy chủ vật lý, doanh nghiệp có thể sử dụng dịch vụ Cloud Server để lưu trữ, quản lý và truy cập dữ liệu của mình thông qua internet.</p>
        </span> 
      </div>
      <Container>
        <h4 className={style.productListTitle}>Bảng giá các gói dịch vụ</h4>
        <div className={style.productList}>
          <Card className={style.productCard} style={{ width: "20rem" }}>
            <Card.Img variant="top" src="/cloud.jpg" />
            <Card.Body>
              <Card.Title className={style.title}>Gói 1</Card.Title>
              <p className={style.price}>50000 đ/ tháng</p>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Mua ngay</Button>
            </Card.Body>
          </Card>
          <Card className={style.productCard} style={{ width: "20rem" }}>
          <Card.Img variant="top" src="/cloud.jpg" />
            <Card.Body>
              <Card.Title className={style.title}>Gói 2</Card.Title>
              <p className={style.price}>50000 đ/ tháng</p>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Mua ngay</Button>
            </Card.Body>
          </Card>
          <Card className={style.productCard} style={{ width: "20rem" }}>
          <Card.Img variant="top" src="/cloud.jpg" />
            <Card.Body>
              <Card.Title className={style.title}>Gói 3</Card.Title>
              <p className={style.price}>50000 đ/ tháng</p>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Mua ngay</Button>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Home;
