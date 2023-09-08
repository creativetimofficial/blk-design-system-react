/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

// reactstrap components
import {
  Container,
} from "reactstrap";

export default function Footer() {
  return (
  //   <footer className="footer">
  //     <Container>
  //       <Row>
  //         <Col md="3">
  //           <h1 className="title">(LOGO)</h1>
  //         </Col>
  //         <Col md="3">
  //           <Nav>
  //           <h4>Quick Links</h4>

  //             <NavItem>
  //               <NavLink to="/" tag={Link}>
  //                 Home
  //               </NavLink>
  //             </NavItem>
  //             <NavItem>
  //               <NavLink to="/landing-page" tag={Link}>
  //                 Blog
  //               </NavLink>
  //             </NavItem>
  //             <NavItem>
  //               <NavLink to="/register-page" tag={Link}>
  //                 Meet The Team
  //               </NavLink>
  //             </NavItem>
  //             <NavItem>
  //               <NavLink to="/profile-page" tag={Link}>
  //                 Profile
  //               </NavLink>
  //             </NavItem>
  //           </Nav>
  //         </Col>
  //         <Col md="3">
  //           <Nav>
  //           <h4>Cleaning Service</h4>

  //             <NavItem>
  //               <NavLink href="https://creative-tim.com/contact-us?ref=blkdsr-footer">
  //                 Contact Us
  //               </NavLink>
  //             </NavItem>
  //             <NavItem>
  //               <NavLink href="https://creative-tim.com/about-us?ref=blkdsr-footer">
  //                 About Us
  //               </NavLink>
  //             </NavItem>
  //             <NavItem>
  //               <NavLink href="https://creative-tim.com/blog?ref=blkdsr-footer">
  //                 Blog
  //               </NavLink>
  //             </NavItem>
  //             <NavItem>
  //               <NavLink href="https://opensource.org/licenses/MIT">
  //                 License
  //               </NavLink>
  //             </NavItem>
  //           </Nav>
  //         </Col>
  //         {/* <Col md="3">
  //           <div className="btn-wrapper profile">
  //           <h4 className="title">Follow us:</h4>

  //             <Button
  //               className="btn-icon btn-neutral btn-round btn-simple"
  //               color="default"
  //               href="https://twitter.com/creativetim"
  //               id="tooltip622135962"
  //               target="_blank"
  //             >
  //               <i className="fab fa-twitter" />
  //             </Button>
  //             <UncontrolledTooltip delay={0} target="tooltip622135962">
  //               Follow us
  //             </UncontrolledTooltip>
  //             <Button
  //               className="btn-icon btn-neutral btn-round btn-simple"
  //               color="default"
  //               href="https://www.facebook.com/creativetim"
  //               id="tooltip230450801"
  //               target="_blank"
  //             >
  //               <i className="fab fa-facebook-square" />
  //             </Button>
  //             <UncontrolledTooltip delay={0} target="tooltip230450801">
  //               Like us
  //             </UncontrolledTooltip>
  //             <Button
  //               className="btn-icon btn-neutral btn-round btn-simple"
  //               color="default"
  //               href="https://dribbble.com/creativetim"
  //               id="tooltip318450378"
  //               target="_blank"
  //             >
  //               <i className="fab fa-dribbble" />
  //             </Button>
  //             <UncontrolledTooltip delay={0} target="tooltip318450378">
  //               Follow us
  //             </UncontrolledTooltip>
  //           </div>
  //         </Col> */}
  //       </Row>
  //       {/* <FormGroup>
  //   <Label for="examplePassword">
  //     Join Our Mailing List
  //   </Label>
  //   <Input invalid />
  //   <FormFeedback>
  //     Invalid Email
  //   </FormFeedback>
  //   <FormText>
      
  //   </FormText>
  // </FormGroup> */}
  //     </Container>
  //   </footer>
  // );
  <Container>

  
  <MDBFooter className='text-center text-lg-start text-muted new-Footer'>
  <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
    {/* <div className='me-5 d-none d-lg-block'>
      <span>Get connected with us on social networks:</span>
    </div> */}

    {/* <div>
      <a href='' className='me-4 text-reset'>
        <MDBIcon fab icon="facebook-f" />
      </a>
      <a href='' className='me-4 text-reset'>
        <MDBIcon fab icon="twitter" />
      </a>
      <a href='' className='me-4 text-reset'>
        <MDBIcon fab icon="google" />
      </a>
      <a href='' className='me-4 text-reset'>
        <MDBIcon fab icon="instagram" />
      </a>
      <a href='' className='me-4 text-reset'>
        <MDBIcon fab icon="linkedin" />
      </a>
      <a href='' className='me-4 text-reset'>
        <MDBIcon fab icon="github" />
      </a>
    </div> */}
  </section>

  <section className=''>
    <MDBContainer className='text-center text-md-start mt-5'>
      <MDBRow className='mt-3'>
        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
          <h6 className='text-uppercase fw-bold mb-4'>
            {/* <MDBIcon icon="gem" className="me-3" /> */}
            Without Spot OR Blemish
          </h6>
          <p>
            
          </p>
        </MDBCol>

        {/* <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
          <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
          <p>
            <a href='#!' className='text-reset'>
              Angular
            </a>
          </p>
          <p>
            <a href='#!' className='text-reset'>
              React
            </a>
          </p>
          <p>
            <a href='#!' className='text-reset'>
              Vue
            </a>
          </p>
          <p>
            <a href='#!' className='text-reset'>
              Laravel
            </a>
          </p>
        </MDBCol> */}

        <MDBCol md="3" lg="3" xl="3" className='mx-auto mb-md-0 mb-4 '>
          <h6 className='text-uppercase  fw-bold mb-4'>Useful links</h6>
          <p>
            <Link href='/components' className='text-reset'>
              Home
            </Link>
          </p>
          <p>
            <a href='components/about-us' className='text-reset'>
              About Us
            </a>
          </p>
          <p>
            <a href='/components/reviews' className='text-reset'>
              Reviews
            </a>
          </p>
          <p>
            <a href='/components/careers' className='text-reset'>
              Careers
            </a>
          </p>
        </MDBCol>

        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
          <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
          <p>
            <MDBIcon icon="home" className="me-2" />
            New York, NY 10012, US
          </p>
          <p>
            <MDBIcon icon="envelope" className="me-3" />
            info@example.com
          </p>
          <p>
            <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
          </p>
          <p>
            <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </section>

  <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
    © 2023 Copyright:{' '}
    <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
       a servant of Christ
    </a>
  </div>
</MDBFooter>
</Container>
);
}
