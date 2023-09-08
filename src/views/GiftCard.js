import React from "react";
import {
  Container,
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";

import "./GiftCard.css";
import IndexNavbar from "components/Navbars/IndexNavbar";
import avatarPhoto from "../assets/img/avatar.svg";
import wellSoonIMG from "../assets/img/well-soon.jpg";
import backPhoto from "../assets/img/clean-place.jpg";
import Footer from "components/Footer/Footer";

export default function GiftCard() {
  return (
    <>
      <IndexNavbar />
      <Container>
        <div className="back">
          {/* <h3>About Us</h3> */}
          <Card className="text-center mt-5">
            <CardImg
              className="imageHero"
              alt="Card image cap"
              src={backPhoto}
              style={{
                height: 570,
              }}
              width="100%"
            />
            <CardImgOverlay>
              <CardTitle className="newTitle" tag="h1">
                Gift Cards
              </CardTitle>
              {/* <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      <CardText>
        <small className="text-muted">
          Last updated 3 mins ago
        </small>
      </CardText> */}
            </CardImgOverlay>
          </Card>
        </div>
        <div>
          <h3>Give The Gift Of A Beaustifully Clean Home</h3>
          <Row>
            <Col className="">
              <div className="wrapper">
                <img src={wellSoonIMG} alt="" />
                <h4>Get Well Gift</h4>
              </div>
            </Col>
            <Col className="">
              <div className="wrapper">
                <img src={wellSoonIMG} alt="" />
                <h4>Get Well Gift</h4>
              </div>
            </Col>
            <Col className="">
              <div className="wrapper">
                <img src={wellSoonIMG} alt="" />
                <h4>Get Well Gift</h4>
              </div>
            </Col>
            <Col className="">
              <div className="wrapper">
                <img src={wellSoonIMG} alt="" />
                <h4>Get Well Gift</h4>
              </div>
            </Col>
          </Row>

          <Row>
            <Col className="">
              <div className="wrapper">
                <img src={wellSoonIMG} alt="" />
                <h4>Get Well Gift</h4>
              </div>
            </Col>
            <Col className="">
              <div className="wrapper">
                <img src={wellSoonIMG} alt="" />
                <h4>Get Well Gift</h4>
              </div>
            </Col>
            <Col className="">
              <div className="wrapper">
                <img src={wellSoonIMG} alt="" />
                <h4>Get Well Gift</h4>
              </div>
            </Col>
            <Col className="">
              <div className="wrapper">
                <img src={wellSoonIMG} alt="" />
                <h4>Get Well Gift</h4>
              </div>
            </Col>
          </Row>
        </div>
        <hr />
        {/* <div>
        <div>Text</div>
        <div>Photo</div>
      </div> */}
      </Container>
      <Footer />
    </>
  );
}
