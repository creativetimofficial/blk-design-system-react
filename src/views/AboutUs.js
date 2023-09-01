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

import "./AboutUs.css";
import IndexNavbar from "components/Navbars/IndexNavbar";
import avatarPhoto from "../assets/img/avatar.svg";
import familyIcon from "../assets/img/family.svg";
import homeowner from "../assets/img/homeownder.svg";
import oldman from "../assets/img/oldman.svg";
import backPhoto from "../assets/img/clean-place.jpg";
import Footer from "components/Footer/Footer";

export default function AboutUs() {
  return (
    <>
      <IndexNavbar />
      <Container>
        <div className="back">
          {/* <h3>About Us</h3> */}
          <Card className="text-center mt-5">
            <CardImg
              alt="Card image cap"
              src={backPhoto}
              style={{
                height: 570,
              }}
              width="100%"
            />
            <CardImgOverlay>
              <CardTitle className="newTitle" tag="h1">
                About Us
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
        <Row>
          <Col className="">
            <img src={avatarPhoto} alt="mike avatar" />
          </Col>
          <Col className="">
            <h2>Welcome to Without Spot OR Blemish</h2>
            <p>
              Hi, I'm Maria Murphy and I am the proud owner of Green Clean Plus.
              My team and I are here to provide you the best house cleaning
              services you can buy.
            </p>

            <p>
              In my years of going out to work, I always hired someone to clean
              my house. What a treat it was to come home after a long day to a
              sparkling clean house. Over the years I had a few different
              cleaners with various results; some good and some not-so-good,
              some honest and some not-so-honest. Since I had personal
              experience with house cleaners, I decided I could offer reliable,
              environmentally-friendly house cleaning services as good, or
              better, than what I had received.
            </p>

            <p>
              For me, starting a new business at 61 was another adventure. I
              started by focusing on seniors to assist them in remaining in
              their own homes as long as possible. I soon found that it is
              mostly working families that have contacted me. They work long
              hours and have many demands on their time and when something has
              to give it may as well be something that someone else can do. As
              it turns out, we love all of our customers and do what we can to
              take a lod off their shoulders.
            </p>
          </Col>
        </Row>
        <hr />
        {/* <div>
        <div>Text</div>
        <div>Photo</div>
      </div> */}
        <div>
          <h3>Our Customer</h3>
          {/* <div>
          <div>customer icon, title, description</div>
        </div>
        <div>
          <div>customer icon, title, description</div>
        </div>
        <div>
          <div>customer icon, title, description</div>
        </div>
        <div>
          <h2>Why CXHoose a professional CLeaning Company</h2>
          <div>
            <div>icon, headline, description</div>
            <div>icon, headline, description</div>
            <div>icon, headline, description</div>
            <div>icon, headline, description</div>
            <div>icon, headline, description</div>
            <div>icon, headline, description</div>
          </div>
        </div> */}

          <Row>
            <Col className="bg-light border">
              <div className="parentCustomer">
                <div className="customer">
                  <img src={familyIcon} alt="" />
                  <h4>Young Families</h4>
                </div>
                <p>
                  Green Clean Plus loves helping young families that have too
                  much to do and not enough time. When you're raising a family,
                  there are so many important moments. Don't miss a one of them
                  cleaning your house. Let us take that load off your shoulders!
                </p>
              </div>
            </Col>
            <Col className="bg-light border">
              <div className="parentCustomer">
                <div className="customer">
                  <img src={oldman} alt="" />
                  <h4>Seniors</h4>
                </div>
                <p>
                  We take great pleasure in assisting seniors with their
                  housework, allowing them to remain independent and in their
                  own homes. As a young senior myself, I have a good
                  understanding of the common concerns and requests.
                </p>
              </div>{" "}
            </Col>
            <Col className="bg-light border">
              <div className="parentCustomer">
                <div className="customer">
                  <img src={homeowner} alt="" />
                  <h4>Homeowners</h4>
                </div>
                <p>
                  The Green Clean Plus team takes pride in delivering the best
                  and most reliable cleaning services, ensuring home owners of
                  every age can enjoy their free time. Our clients are valuable
                  to us, and you have my personal commitment we will take your
                  job seriously, and deliver the service you expect.
                </p>
              </div>{" "}
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </>
  );
}
