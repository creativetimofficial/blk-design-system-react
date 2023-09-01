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

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view
import Basics from "views/IndexSections/Basics.js";
import Navbars from "views/IndexSections/Navbars.js";
import Tabs from "views/IndexSections/Tabs.js";
import Pagination from "views/IndexSections/Pagination.js";
import Notifications from "views/IndexSections/Notifications.js";
import Typography from "views/IndexSections/Typography.js";
import JavaScript from "views/IndexSections/JavaScript.js";
import NucleoIcons from "views/IndexSections/NucleoIcons.js";
import Signup from "views/IndexSections/Signup.js";
import Examples from "views/IndexSections/Examples.js";
import Download from "views/IndexSections/Download.js";
import UnderHero from "components/PageHeader/UnderHero";
import LineBar from "components/PageHeader/LineBar";
import LeftRight from "components/PageHeader/LeftRight";
import RightLeft from "components/PageHeader/RightLeft";
// import Reviews from "components/PageHeader/Reviews";

export default function Index() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader />
        <div className="main">
          {/* <Basics /> */}
          <UnderHero />
          {/* <LineBar /> */}
          <RightLeft title='Your Welcome Living Room' description='We know the family room is a place when the people you love gather. We will make sure it iss a room that you are proud to welcome family and friends.' b1='Dust all furniture
' b2='Dust TV and other electronics
' b3='Straighten pillows and throws
' b4='Dust baseboards and windowsills
' />
          <LeftRight title='Your Spotless Kitchen ' description='Cooking meals for your family is a lot more fun when the kitchen is nice and clean! We will make sure everything is sanitized and sparkles.' b1='Wipe down cabinet fronts
' b2='Wipe down and sanitize countertops
' b3='Clean the microwave inside and out
' b4='Clean and polish all appliances' />
<RightLeft title='Your Sparkling Bathroom' description='A clean and tidy bathroom makes getting ready in the morning less stressful. We will make sure everything is cleaned, sanitized and in its place.' b1='Clean sinks and countertops; polish fixtures
' b2='Clean mirrors
' b3='Sanitize toilet area
' b4='Vacuum bathroom rugs
' />
<LeftRight title='Your Relaxing Bedroom' description='Your bedroom is your oasis.  Relax and enjoy your perfectly clean bedroom.' b1='Dust all furniture
' b2='Dust wall art, lamps and knick-knacks
' b3='Dust ceiling fan
' b4='Vacuum and mop floors
' />
{/* <Reviews /> */}
          {/* <Navbars />
          <Tabs />
          <Pagination />
          <Notifications />
          <Typography />
          <JavaScript />
          <NucleoIcons />
          <Signup />
          <Examples />
          <Download /> */}
        </div>
        <Footer />
      </div>
    </>
  );
}
