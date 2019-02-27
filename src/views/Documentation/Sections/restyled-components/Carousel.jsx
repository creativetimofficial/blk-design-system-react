import React from "react";

// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

class Carousel extends React.Component {
  render() {
    return (
      <>
<h1 className="bd-title" id="content">
Carousel
</h1>
<p className="bd-lead">
A slideshow component for cycling through elements—images or slides of text—like a carousel.
</p>
<h2 id="example">
Example
</h2>
<p>
Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content. While carousels support previous/next controls and indicators, they’re not explicitly required. Add and customize as you see fit.
</p>
<p>
Be sure to set a unique id on the <code className="highlighter-rouge">
.carousel
</code>
 for optional controls, especially if you’re using multiple carousels on a single page.
</p>
<h3 id="with-indicators">
With indicators
</h3>
<p>
You can also add the indicators to the carousel, alongside the controls, too.
</p>
<div className="bd-example" data-example-id="">
<div className="carousel slide" data-ride="carousel" id="carouselExampleIndicators">
<ol className="carousel-indicators">
<li className="active" data-slide-to="0" data-target="#carouselExampleIndicators">
</li>
<li data-slide-to="1" data-target="#carouselExampleIndicators">
</li>
<li data-slide-to="2" data-target="#carouselExampleIndicators">
</li>
</ol>
<div className="carousel-inner">
<div className="carousel-item active">
<img alt="..." className="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=777&amp;fg=555&amp;text=First slide">
</img>
</div>
<div className="carousel-item">
<img alt="..." className="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=666&amp;fg=444&amp;text=Second slide">
</img>
</div>
<div className="carousel-item">
<img alt="..." className="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=Third slide">
</img>
</div>
</div>
<a className="carousel-control-prev" data-slide="prev" href="#pablo" onClick={e =>
 e.preventDefault()} role="button">
<span aria-hidden={true} className="carousel-control-prev-icon">
</span>
<span className="sr-only">
Previous
</span>
</a>
<a className="carousel-control-next" data-slide="next" href="#pablo" onClick={e =>
 e.preventDefault()} role="button">
<span aria-hidden={true} className="carousel-control-next-icon">
</span>
<span className="sr-only">
Next
</span>
</a>
</div>
</div>
<div className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="nt">
<div
</span>
<span className="na">
id=
</span>
<span className="s">
"carouselExampleIndicators"
</span>
<span className="na">
class=
</span>
<span className="s">
"carousel slide"
</span>
<span className="na">
data-ride=
</span>
<span className="s">
"carousel"
</span>
<span className="nt">
>
</span>
<span className="nt">
<ol
</span>
<span className="na">
class=
</span>
<span className="s">
"carousel-indicators"
</span>
<span className="nt">
>
</span>
<span className="nt">
<li
</span>
<span className="na">
data-target=
</span>
<span className="s">
"#carouselExampleIndicators"
</span>
<span className="na">
data-slide-to=
</span>
<span className="s">
"0"
</span>
<span className="na">
class=
</span>
<span className="s">
"active"
</span>
<span className="nt">
></li>
</span>
<span className="nt">
<li
</span>
<span className="na">
data-target=
</span>
<span className="s">
"#carouselExampleIndicators"
</span>
<span className="na">
data-slide-to=
</span>
<span className="s">
"1"
</span>
<span className="nt">
></li>
</span>
<span className="nt">
<li
</span>
<span className="na">
data-target=
</span>
<span className="s">
"#carouselExampleIndicators"
</span>
<span className="na">
data-slide-to=
</span>
<span className="s">
"2"
</span>
<span className="nt">
></li>
</span>
<span className="nt">
</ol>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"carousel-inner"
</span>
<span className="nt">
>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"carousel-item active"
</span>
<span className="nt">
>
</span>
<span className="nt">
<img
</span>
<span className="na">
class=
</span>
<span className="s">
"d-block w-100"
</span>
<span className="na">
src=
</span>
<span className="s">
"..."
</span>
<span className="na">
alt=
</span>
<span className="s">
"First slide"
</span>
<span className="nt">
>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"carousel-item"
</span>
<span className="nt">
>
</span>
<span className="nt">
<img
</span>
<span className="na">
class=
</span>
<span className="s">
"d-block w-100"
</span>
<span className="na">
src=
</span>
<span className="s">
"..."
</span>
<span className="na">
alt=
</span>
<span className="s">
"Second slide"
</span>
<span className="nt">
>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"carousel-item"
</span>
<span className="nt">
>
</span>
<span className="nt">
<img
</span>
<span className="na">
class=
</span>
<span className="s">
"d-block w-100"
</span>
<span className="na">
src=
</span>
<span className="s">
"..."
</span>
<span className="na">
alt=
</span>
<span className="s">
"Third slide"
</span>
<span className="nt">
>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"carousel-control-prev"
</span>
<span className="na">
href=
</span>
<span className="s">
"#carouselExampleIndicators"
</span>
<span className="na">
role=
</span>
<span className="s">
"button"
</span>
<span className="na">
data-slide=
</span>
<span className="s">
"prev"
</span>
<span className="nt">
>
</span>
<span className="nt">
<span
</span>
<span className="na">
class=
</span>
<span className="s">
"carousel-control-prev-icon"
</span>
<span className="na">
aria-hidden=
</span>
<span className="s">
"true"
</span>
<span className="nt">
></span>
</span>
<span className="nt">
<span
</span>
<span className="na">
class=
</span>
<span className="s">
"sr-only"
</span>
<span className="nt">
>
</span>
Previous<span className="nt">
</span>
</span>
<span className="nt">
</a>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"carousel-control-next"
</span>
<span className="na">
href=
</span>
<span className="s">
"#carouselExampleIndicators"
</span>
<span className="na">
role=
</span>
<span className="s">
"button"
</span>
<span className="na">
data-slide=
</span>
<span className="s">
"next"
</span>
<span className="nt">
>
</span>
<span className="nt">
<span
</span>
<span className="na">
class=
</span>
<span className="s">
"carousel-control-next-icon"
</span>
<span className="na">
aria-hidden=
</span>
<span className="s">
"true"
</span>
<span className="nt">
></span>
</span>
<span className="nt">
<span
</span>
<span className="na">
class=
</span>
<span className="s">
"sr-only"
</span>
<span className="nt">
>
</span>
Next<span className="nt">
</span>
</span>
<span className="nt">
</a>
</span>
<span className="nt">
</div>
</span>
</code>
</pre>
</div>
</>
    );
  }
}

export default Carousel;
