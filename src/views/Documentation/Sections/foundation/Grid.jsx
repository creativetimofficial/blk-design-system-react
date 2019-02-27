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
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

class Grid extends React.Component {
  render() {
    return (
      <>
        <html lang="en">
<head>
<meta charset="utf-8">
</meta>
<meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport">
</meta>
<link href="../../../assets/img/apple-icon.png" rel="apple-touch-icon" sizes="76x76">
</link>
<link href="../../../assets/img/favicon.png" rel="icon" type="image/png">
</link>
<title>
 Grid system - Blk• Design System by Creative Tim 
</title>
</head>
<body>
<p>
 {/* Extra details for Live View on GitHub Pages */}
 {/* Canonical SEO */}
 <link href="https://www.creative-tim.com/product/blk-design-system" rel="canonical">
</link>
 {/* Social tags */}
 <meta content="design system, bootstrap 4 design system, bootstrap 4 design, bootstrap 4 system, bootstrap 4, bootstrap 4 uit kit, bootstrap 4 kit, blk, blakc, black kit, blk ui kit, creative tim, html kit, html css template, web template, bootstrap, bootstrap 4, css3 template, frontend, responsive bootstrap template, bootstrap ui kit, responsive ui kit, blk design system" name="keywords">
</meta>
<meta content="Black Kit is a responsive Bootstrap 4 kit provided for free by Creative Tim. It is a beautiful cross-platform UI kit featuring over 50 elements and 3 templates." name="description">
</meta>
 {/* Schema.org markup for Google+ */}
 <meta content="Black Kit by Creative Tim" itemprop="name">
</meta>
<meta content="Black Kit is a responsive Bootstrap 4 kit provided for free by Creative Tim. It is a beautiful cross-platform UI kit featuring over 50 elements and 3 templates." itemprop="description">
</meta>
<meta content="https://s3.amazonaws.com/creativetim_bucket/products/56/opt_nudp_thumbnail.jpg" itemprop="image">
</meta>
 {/* Twitter Card data */}
 <meta content="product" name="twitter:card">
</meta>
<meta content="@creativetim" name="twitter:site">
</meta>
<meta content="Black Kit by Creative Tim" name="twitter:title">
</meta>
<meta content="Black Kit is a responsive Bootstrap 4 kit provided for free by Creative Tim. It is a beautiful cross-platform UI kit featuring over 50 elements and 3 templates." name="twitter:description">
</meta>
<meta content="@creativetim" name="twitter:creator">
</meta>
<meta content="https://s3.amazonaws.com/creativetim_bucket/products/56/opt_nudp_thumbnail.jpg" name="twitter:image">
</meta>
 {/* Open Graph data */}
 <meta content="655968634437471" property="fb:app_id">
</meta>
<meta content="Black Kit by Creative Tim" property="og:title">
</meta>
<meta content="article" property="og:type">
</meta>
<meta content="https://demos.creative-tim.com/blk-design-system-pro/index.html" property="og:url">
</meta>
<meta content="https://s3.amazonaws.com/creativetim_bucket/products/56/opt_nudp_thumbnail.jpg" property="og:image">
</meta>
<meta content="Black Kit is a responsive Bootstrap 4 kit provided for free by Creative Tim. It is a beautiful cross-platform UI kit featuring over 50 elements and 3 templates." property="og:description">
</meta>
<meta content="Creative Tim" property="og:site_name">
</meta>
 {/* */}
 {/* Fonts and icons */}
 <link href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800" rel="stylesheet">
</link>
<link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">
</link>
 {/* Nucleo Icons */}
 <link href="../../../assets/css/nucleo-icons.css" rel="stylesheet">
</link>
 {/* CSS Files */}
 <link href="../../../assets/css/blk-design-system.min.css?v=1.0.0" rel="stylesheet">
</link>
 {/* Documentation extras */}
 <link href="https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.css" rel="stylesheet">
</link>
<link href="../../../assets/demo/docs.min.css" rel="stylesheet">
</link>
<style>
 .navbar-absolute-logo { padding-left: 45px; } .navbar-absolute-logo img { position: absolute; left: 15px; margin-top: -6px; } body { background: white; } 
</style>
 {/* CSS Just for demo purpose, don't include it in your project */}
 <link href="../../../assets/demo/demo.css" rel="stylesheet">
</link>
 {/* Google Tag Manager */}
 <script>
 (function(w, d, s, l, i) { w[l] = w[l] || []; w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' }); var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&amp;l=' + l : ''; j.async = true; j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f); })(window, document, 'script', 'dataLayer', 'GTM-NKDMSK6'); 
</script>
 {/* End Google Tag Manager */}

</p>
 {/* Extra details for Live View on GitHub Pages */}
 {/* Google Tag Manager (noscript) */}
 <noscript>
<iframe height="0" src="https://www.googletagmanager.com/ns.html?id=GTM-NKDMSK6" style={{display:none",visibility:hidden}} width="0">
</iframe>
</noscript>
 {/* End Google Tag Manager (noscript) */}
 <a className=" sr-only sr-only-focusable" href="#pablo" id="skippy" onClick={e =>
 e.preventDefault()}>
<Container>
<span className=" skiplink-text">
Skip to main content
</span>
</Container>
</a>
<Navbar className=" navbar-expand bg-primary flex-column flex-md-row bd-navbar">
<NavbarBrand className=" mr-0 mr-md-2 navbar-absolute-logo" href="https://www.creative-tim.com/product/blk-design-system" rel="noopener noreferrer" target="_blank">
 Blk• Design System 
</NavbarBrand>
<Nav className=" flex-row d-none d-md-flex" navbar>
<NavItem>
<NavLink className=" p-2" href="#pablo" onClick={e =>
 e.preventDefault()}>
 1.0.0 
</NavLink>
</NavItem>
 {/* <UncontrolledDropdown nav>
<DropdownToggle aria-expanded={false} aria-haspopup={true} caret className=" nav-item mr-md-2" color="default" data-toggle="dropdown" href="#pablo" id="bd-versions" nav onClick={e =>
 e.preventDefault()}>
 v2.0.0 
</DropdownToggle>
<DropdownMenu aria-labelledby="bd-versions" right>
<DropdownItem active href="/docs/1.0/">
BS4 - 1.0.0
</DropdownItem>
<DropdownItem href="">
BS3 - 1.2.1
</DropdownItem>
</DropdownMenu>
</UncontrolledDropdown>
 */}
 <NavItem>
<NavLink aria-label="GitHub" className=" p-2" href="https://github.com/creativetimofficial/blk-design-system" rel="noopener" target="_blank">
<svg xmlns="http://www.w3.org/2000/svg" className=" navbar-nav-svg" focusable={false} viewbox="0 0 512 499.36">
<title>
GitHub
</title>
<path d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z" fill="currentColor" fill-rule="evenodd">
</path>
</svg>
</NavLink>
</NavItem>
<NavItem>
<NavLink aria-label="Twitter" className=" p-2" href="https://twitter.com/CreativeTim" rel="noopener" target="_blank">
<svg xmlns="http://www.w3.org/2000/svg" className=" navbar-nav-svg" focusable={false} viewbox="0 0 512 416.32">
<title>
Twitter
</title>
<path d="M160.83 416.32c193.2 0 298.92-160.22 298.92-298.92 0-4.51 0-9-.2-13.52A214 214 0 0 0 512 49.38a212.93 212.93 0 0 1-60.44 16.6 105.7 105.7 0 0 0 46.3-58.19 209 209 0 0 1-66.79 25.37 105.09 105.09 0 0 0-181.73 71.91 116.12 116.12 0 0 0 2.66 24c-87.28-4.3-164.73-46.3-216.56-109.82A105.48 105.48 0 0 0 68 159.6a106.27 106.27 0 0 1-47.53-13.11v1.43a105.28 105.28 0 0 0 84.21 103.06 105.67 105.67 0 0 1-47.33 1.84 105.06 105.06 0 0 0 98.14 72.94A210.72 210.72 0 0 1 25 370.84a202.17 202.17 0 0 1-25-1.43 298.85 298.85 0 0 0 160.83 46.92" fill="currentColor">
</path>
</svg>
</NavLink>
</NavItem>
</Nav>
<div className=" navbar-nav-scroll ml-md-auto">
<Nav className=" bd-navbar-nav flex-row" navbar>
<NavItem>
<NavLink className=" active" href="../../../docs/1.0/getting-started/introduction.html">
<i className=" tim-icons icon-app">
</i>
 Documentation
</NavLink>
</NavItem>
<NavItem>
<NavLink href="https://demos.creative-tim.com/blk-design-system/index.html">
<i className=" tim-icons icon-tv-2">
</i>
 Live Preview
</NavLink>
</NavItem>
<NavItem>
<NavLink href="https://github.com/creativetimofficial/blk-design-system" rel="noopener" target="_blank">
<i className=" tim-icons icon-shape-star">
</i>
 Help with a star
</NavLink>
</NavItem>
<NavItem>
<NavLink href="" rel="noopener" target="_blank">
</NavLink>
</NavItem>
<NavItem>
<NavLink href="" rel="noopener" target="_blank">
</NavLink>
</NavItem>
</Nav>
</div>
<a aria-label="View source on Github" className=" github-corner" href="https://github.com/creativetimofficial/blk-design-system">
<svg aria-hidden={true} height="60" style={{fill:#fff", color:#9c27b0", position: "absolute", top: "0", border: "0", right: "0",}} viewbox="0 0 250 250" width="60">
<path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z">
</path>
<path className=" octo-arm" d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style={{transform-origin: "130px 106px",}}>
</path>
<path className=" octo-body" d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor">
</path>
</svg>
</a>
<style>
 .github-corner:hover .octo-arm { animation: octocat-wave 560ms ease-in-out } @keyframes octocat-wave { 0%, 100% { transform: rotate(0) } 20%, 60% { transform: rotate(-25deg) } 40%, 80% { transform: rotate(10deg) } } @media (max-width:500px) { .github-corner:hover .octo-arm { animation: none } .github-corner .octo-arm { animation: octocat-wave 560ms ease-in-out } } 
</style>
 {/* <Button className=" btn-white d-none d-lg-inline-block" color="default" href="">
Download
</Button>
 */}
 
</Navbar>
<Container fluid>
<Row className=" flex-xl-nowrap">
<Col className=" bd-sidebar" md="3" xl="2" xs="12">
<UncontrolledCollapse className=" bd-links" id="bd-docs-nav" toggler="#bd-docs-nav">
<div className=" bd-toc-item active">
<a className=" bd-toc-link" href="#pablo" onClick={e =>
 e.preventDefault()}>
 Getting started 
</a>
<Nav className=" bd-sidenav">
<li>
<a href="../../../docs/1.0/getting-started/overview.html">
 Overview 
</a>
</li>
<li>
<a href="../../../docs/1.0/getting-started/download.html">
 Download 
</a>
</li>
<li>
<a href="../../../docs/1.0/getting-started/quick-start.html">
 Quick Start 
</a>
</li>
<li>
<a href="../../../docs/1.0/getting-started/license.html">
 License 
</a>
</li>
<li>
<a href="../../../docs/1.0/getting-started/contents.html">
 Contents 
</a>
</li>
<li>
<a href="../../../docs/1.0/getting-started/build-tools.html">
 Build Tools 
</a>
</li>
</Nav>
</div>
<div className=" bd-toc-item active">
<a className=" bd-toc-link" href="#pablo" onClick={e =>
 e.preventDefault()}>
 Foundation 
</a>
<Nav className=" bd-sidenav">
<li>
<a href="../../../docs/1.0/foundation/colors.html">
 Colors 
</a>
</li>
<li className=" active bd-sidenav-active">
<a href="../../../docs/1.0/foundation/grid.html">
 Grid 
</a>
</li>
<li>
<a href="../../../docs/1.0/foundation/typography.html">
 Typography 
</a>
</li>
<li>
<a href="../../../docs/1.0/foundation/icons.html">
 Icons 
</a>
</li>
</Nav>
</div>
<div className=" bd-toc-item active">
<a className=" bd-toc-link" href="#pablo" onClick={e =>
 e.preventDefault()}>
 Components 
</a>
<Nav className=" bd-sidenav">
<li>
<a href="../../../docs/1.0/components/alerts.html">
 Alerts 
</a>
</li>
<li>
<a href="../../../docs/1.0/components/badge.html">
 Badge 
</a>
</li>
<li>
<a href="../../../docs/1.0/components/breadcrumb.html">
 Breadcrumb 
</a>
</li>
<li>
<a href="../../../docs/1.0/components/buttons.html">
 Buttons 
</a>
</li>
<li>
<a href="../../../docs/1.0/components/carousel.html">
 Carousel 
</a>
</li>
<li>
<a href="../../../docs/1.0/components/dropdowns.html">
 Dropdowns 
</a>
</li>
<li>
<a href="../../../docs/1.0/components/forms.html">
 Forms 
</a>
</li>
<li>
<a href="../../../docs/1.0/components/modal.html">
 Modal 
</a>
</li>
<li>
<a href="../../../docs/1.0/components/navs.html">
 Navs 
</a>
</li>
<li>
<a href="../../../docs/1.0/components/navbar.html">
 Navbar 
</a>
</li>
<li>
<a href="../../../docs/1.0/components/pagination.html">
 Pagination 
</a>
</li>
<li>
<a href="../../../docs/1.0/components/popovers.html">
 Popovers 
</a>
</li>
<li>
<a href="../../../docs/1.0/components/progress.html">
 Progress 
</a>
</li>
<li>
<a href="../../../docs/1.0/components/tables.html">
 Tables 
</a>
</li>
<li>
<a href="../../../docs/1.0/components/tooltips.html">
 Tooltips 
</a>
</li>
</Nav>
</div>
<div className=" bd-toc-item active">
<a className=" bd-toc-link" href="#pablo" onClick={e =>
 e.preventDefault()}>
 Plugins 
</a>
<Nav className=" bd-sidenav">
<li>
<a href="../../../docs/1.0/plugins/datetimepicker.html">
 DateTimePicker 
</a>
</li>
<li>
<a href="../../../docs/1.0/plugins/bootstrap-switch.html">
 Bootstrap Switch 
</a>
</li>
<li>
<a href="../../../docs/1.0/plugins/chart-js.html">
 Chart.js 
</a>
</li>
<li>
<a href="../../../docs/1.0/plugins/sliders.html">
 Sliders 
</a>
</li>
</Nav>
</div>
</UncontrolledCollapse>
</Col>
<Col className=" d-none d-xl-block bd-toc" xl="2">
<ul className=" section-nav">
<li className=" toc-entry toc-h2">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
How it works
</a>
</li>
<li className=" toc-entry toc-h2">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Grid options
</a>
</li>
<li className=" toc-entry toc-h2">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Auto-layout columns
</a>
<ul>
<li className=" toc-entry toc-h3">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Equal-width
</a>
</li>
<li className=" toc-entry toc-h3">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Setting one column width
</a>
</li>
<li className=" toc-entry toc-h3">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Variable width content
</a>
</li>
<li className=" toc-entry toc-h3">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Equal-width multi-row
</a>
</li>
</ul>
</li>
<li className=" toc-entry toc-h2">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Responsive classes
</a>
<ul>
<li className=" toc-entry toc-h3">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
All breakpoints
</a>
</li>
<li className=" toc-entry toc-h3">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Stacked to horizontal
</a>
</li>
<li className=" toc-entry toc-h3">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Mix and match
</a>
</li>
</ul>
</li>
</ul>
</Col>
<Col className=" py-md-3 pl-md-5 bd-content" md="9" role="main" xl="8" xs="12">
<h1 className=" bd-title" id="content">
Grid system
</h1>
<p className=" bd-lead">
Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, five default responsive tiers, Sass variables and mixins, and dozens of predefined classes.
</p>
<h2 id="how-it-works">
How it works
</h2>
<p>
Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">
flexbox
</a>
 and is fully responsive. Below is an example and an in-depth look at how the grid comes together.
</p>
<p>
<strong>
New to or unfamiliar with flexbox?
</strong>
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Read this CSS Tricks flexbox guide
</a>
 for background, terminology, guidelines, and code snippets.
</p>
<div className=" bd-example" data-example-id="">
<Container>
<Row>
<Col className=" col-sm">
<span>
One of three columns
</span>
</Col>
<Col className=" col-sm">
<span>
One of three columns
</span>
</Col>
<Col className=" col-sm">
<span>
One of three columns
</span>
</Col>
</Row>
</Container>
</div>
<div className=" highlight">
<pre>
<code className=" language-html" data-lang="html">
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"container"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"row"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col-sm"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<span>
</span>
One of three columns<span className=" nt">
</span>
</span>
<span className=" nt">
</div>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col-sm"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<span>
</span>
One of three columns<span className=" nt">
</span>
</span>
<span className=" nt">
</div>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col-sm"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<span>
</span>
One of three columns<span className=" nt">
</span>
</span>
<span className=" nt">
</div>
</span>
<span className=" nt">
</div>
</span>
<span className=" nt">
</div>
</span>
</code>
</pre>
</div>
<p>
The above example creates three equal-width columns on small, medium, large, and extra large devices using our predefined grid classes. Those columns are centered in the page with the parent <code className=" highlighter-rouge">
.container
</code>
.
</p>
<h2 id="grid-options">
Grid options
</h2>
<p>
While Bootstrap uses <code className=" highlighter-rouge">
em
</code>
s or <code className=" highlighter-rouge">
rem
</code>
s for defining most sizes, <code className=" highlighter-rouge">
px
</code>
s are used for grid breakpoints and container widths. This is because the viewport width is in pixels and does not change with the <a href="#pablo" onClick={e =>
 e.preventDefault()}>
font size
</a>
.
</p>
<p>
See how aspects of the Bootstrap grid system work across multiple devices with a handy table.
</p>
<div className=" bd-example">
<Table className=" table-striped">
<thead>
<tr>
<th>
</th>
<th className=" text-center">
 Extra small <br>
</br>
<small>
<576px
</small>
</th>
<th className=" text-center">
 Small <br>
</br>
<small>
≥576px
</small>
</th>
<th className=" text-center">
 Medium <br>
</br>
<small>
≥768px
</small>
</th>
<th className=" text-center">
 Large <br>
</br>
<small>
≥992px
</small>
</th>
<th className=" text-center">
 Extra large <br>
</br>
<small>
≥1200px
</small>
</th>
</tr>
</thead>
<tbody>
<tr>
<th className=" text-nowrap" scope="row">
Max container width
</th>
<td>
None (auto)
</td>
<td>
540px
</td>
<td>
720px
</td>
<td>
960px
</td>
<td>
1140px
</td>
</tr>
<tr>
<th className=" text-nowrap" scope="row">
Class prefix
</th>
<td>
<code>
.col-
</code>
</td>
<td>
<code>
.col-sm-
</code>
</td>
<td>
<code>
.col-md-
</code>
</td>
<td>
<code>
.col-lg-
</code>
</td>
<td>
<code>
.col-xl-
</code>
</td>
</tr>
<tr>
<th className=" text-nowrap" scope="row">
# of columns
</th>
<td colSpan="5">
12
</td>
</tr>
<tr>
<th className=" text-nowrap" scope="row">
Gutter width
</th>
<td colSpan="5">
30px (15px on each side of a column)
</td>
</tr>
<tr>
<th className=" text-nowrap" scope="row">
Nestable
</th>
<td colSpan="5">
Yes
</td>
</tr>
<tr>
<th className=" text-nowrap" scope="row">
Column ordering
</th>
<td colSpan="5">
Yes
</td>
</tr>
</tbody>
</Table>
</div>
<h2 id="auto-layout-columns">
Auto-layout columns
</h2>
<p>
Utilize breakpoint-specific column classes for easy column sizing without an explicit numbered class like <code className=" highlighter-rouge">
.col-sm-6
</code>
.
</p>
<h3 id="equal-width">
Equal-width
</h3>
<p>
For example, here are two grid layouts that apply to every device and viewport, from <code className=" highlighter-rouge">
xs
</code>
 to <code className=" highlighter-rouge">
xl
</code>
. Add any number of unit-less classes for each breakpoint you need and every column will be the same width.
</p>
<div className=" bd-example" data-example-id="">
<Container>
<Row>
<div className=" col">
<span>
1 of 2
</span>
</div>
<div className=" col">
<span>
2 of 2
</span>
</div>
</Row>
<Row>
<div className=" col">
<span>
1 of 3
</span>
</div>
<div className=" col">
<span>
2 of 3
</span>
</div>
<div className=" col">
<span>
3 of 3
</span>
</div>
</Row>
</Container>
</div>
<div className=" highlight">
<pre>
<code className=" language-html" data-lang="html">
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"container"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"row"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<span>
</span>
1 of 2<span className=" nt">
</span>
</span>
<span className=" nt">
</div>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<span>
</span>
2 of 2<span className=" nt">
</span>
</span>
<span className=" nt">
</div>
</span>
<span className=" nt">
</div>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"row"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<span>
</span>
1 of 3<span className=" nt">
</span>
</span>
<span className=" nt">
</div>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<span>
</span>
2 of 3<span className=" nt">
</span>
</span>
<span className=" nt">
</div>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<span>
</span>
3 of 3<span className=" nt">
</span>
</span>
<span className=" nt">
</div>
</span>
<span className=" nt">
</div>
</span>
<span className=" nt">
</div>
</span>
</code>
</pre>
</div>
<p>
</div>
</p>
<p>
Equal-width columns can be broken into multiple lines, but there was a <a href="#pablo" onClick={e =>
 e.preventDefault()}>
Safari flexbox bug
</a>
 that prevented this from working without an explicit <code className=" highlighter-rouge">
flex-basis
</code>
 or <code className=" highlighter-rouge">
border
</code>
. There are workarounds for older browser versions, but they shouldn’t be necessary if you’re up-to-date.
</p>
<div className=" bd-example" data-example-id="">
<Container>
<Row>
<div className=" col">
<span>
Column
</span>
</div>
<div className=" col">
<span>
Column
</span>
</div>
<div className=" w-100">
</div>
<div className=" col">
<span>
Column
</span>
</div>
<div className=" col">
<span>
Column
</span>
</div>
</Row>
</Container>
</div>
<div className=" highlight">
<pre>
<code className=" language-html" data-lang="html">
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"container"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"row"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col"
</span>
<span className=" nt">
><span>
</span>
Column<span className=" nt">
</span></div>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col"
</span>
<span className=" nt">
><span>
</span>
Column<span className=" nt">
</span></div>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"w-100"
</span>
<span className=" nt">
></div>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col"
</span>
<span className=" nt">
><span>
</span>
Column<span className=" nt">
</span></div>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col"
</span>
<span className=" nt">
><span>
</span>
Column<span className=" nt">
</span></div>
</span>
<span className=" nt">
</div>
</span>
<span className=" nt">
</div>
</span>
</code>
</pre>
</div>
<h3 id="setting-one-column-width">
Setting one column width
</h3>
<p>
Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.
</p>
<div className=" bd-example" data-example-id="">
<Container>
<Row>
<div className=" col">
<span>
1 of 3
</span>
</div>
<Col xs="6">
<span>
2 of 3 (wider)
</span>
</Col>
<div className=" col">
<span>
3 of 3
</span>
</div>
</Row>
<Row>
<div className=" col">
<span>
1 of 3
</span>
</div>
<Col xs="5">
<span>
2 of 3 (wider)
</span>
</Col>
<div className=" col">
<span>
3 of 3
</span>
</div>
</Row>
</Container>
</div>
<div className=" highlight">
<pre>
<code className=" language-html" data-lang="html">
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"container"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"row"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<span>
</span>
1 of 3<span className=" nt">
</span>
</span>
<span className=" nt">
</div>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col-6"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<span>
</span>
2 of 3 (wider)<span className=" nt">
</span>
</span>
<span className=" nt">
</div>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<span>
</span>
3 of 3<span className=" nt">
</span>
</span>
<span className=" nt">
</div>
</span>
<span className=" nt">
</div>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"row"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<span>
</span>
1 of 3<span className=" nt">
</span>
</span>
<span className=" nt">
</div>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col-5"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<span>
</span>
2 of 3 (wider)<span className=" nt">
</span>
</span>
<span className=" nt">
</div>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<span>
</span>
3 of 3<span className=" nt">
</span>
</span>
<span className=" nt">
</div>
</span>
<span className=" nt">
</div>
</span>
<span className=" nt">
</div>
</span>
</code>
</pre>
</div>
<h3 id="variable-width-content">
Variable width content
</h3>
<p>
Use <code className=" highlighter-rouge">
col-{breakpoint}-auto
</code>
 classes to size columns based on the natural width of their content.
</p>
<div className=" bd-example" data-example-id="">
<Container>
<Row className=" justify-content-md-center">
<Col className=" col" lg="2">
<span>
1 of 3
</span>
</Col>
<Col className=" col-md-auto">
<span>
Variable width content
</span>
</Col>
<Col className=" col" lg="2">
<span>
3 of 3
</span>
</Col>
</Row>
<Row>
<div className=" col">
<span>
1 of 3
</span>
</div>
<Col className=" col-md-auto">
<span>
Variable width content
</span>
</Col>
<Col className=" col" lg="2">
<span>
3 of 3
</span>
</Col>
</Row>
</Container>
</div>
<div className=" highlight">
<pre>
<code className=" language-html" data-lang="html">
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"container"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"row justify-content-md-center"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col col-lg-2"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<span>
</span>
1 of 3<span className=" nt">
</span>
</span>
<span className=" nt">
</div>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col-md-auto"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<span>
</span>
Variable width content<span className=" nt">
</span>
</span>
<span className=" nt">
</div>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col col-lg-2"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<span>
</span>
3 of 3<span className=" nt">
</span>
</span>
<span className=" nt">
</div>
</span>
<span className=" nt">
</div>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"row"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<span>
</span>
1 of 3<span className=" nt">
</span>
</span>
<span className=" nt">
</div>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col-md-auto"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<span>
</span>
Variable width content<span className=" nt">
</span>
</span>
<span className=" nt">
</div>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col col-lg-2"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<span>
</span>
3 of 3<span className=" nt">
</span>
</span>
<span className=" nt">
</div>
</span>
<span className=" nt">
</div>
</span>
<span className=" nt">
</div>
</span>
</code>
</pre>
</div>
<h3 id="equal-width-multi-row">
Equal-width multi-row
</h3>
<p>
Create equal-width columns that span multiple rows by inserting a <code className=" highlighter-rouge">
.w-100
</code>
 where you want the columns to break to a new line. Make the breaks responsive by mixing the <code className=" highlighter-rouge">
.w-100
</code>
 with some <a href="/docs/1.0/utilities/display/">
responsive display utilities
</a>
.
</p>
<div className=" bd-example" data-example-id="">
<Row>
<div className=" col">
<span>
col
</span>
</div>
<div className=" col">
<span>
col
</span>
</div>
<div className=" w-100">
</div>
<div className=" col">
<span>
col
</span>
</div>
<div className=" col">
<span>
col
</span>
</div>
</Row>
</div>
<div className=" highlight">
<pre>
<code className=" language-html" data-lang="html">
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"row"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col"
</span>
<span className=" nt">
><span>
</span>
col<span className=" nt">
</span></div>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col"
</span>
<span className=" nt">
><span>
</span>
col<span className=" nt">
</span></div>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"w-100"
</span>
<span className=" nt">
></div>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col"
</span>
<span className=" nt">
><span>
</span>
col<span className=" nt">
</span></div>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col"
</span>
<span className=" nt">
><span>
</span>
col<span className=" nt">
</span></div>
</span>
<span className=" nt">
</div>
</span>
</code>
</pre>
</div>
<h2 id="responsive-classes">
Responsive classes
</h2>
<p>
Bootstrap’s grid includes five tiers of predefined classes for building complex responsive layouts. Customize the size of your columns on extra small, small, medium, large, or extra large devices however you see fit.
</p>
<h3 id="all-breakpoints">
All breakpoints
</h3>
<p>
For grids that are the same from the smallest of devices to the largest, use the <code className=" highlighter-rouge">
.col
</code>
 and <code className=" highlighter-rouge">
.col-*
</code>
 classes. Specify a numbered class when you need a particularly sized column; otherwise, feel free to stick to <code className=" highlighter-rouge">
.col
</code>
.
</p>
<div className=" bd-example" data-example-id="">
<Row>
<div className=" col">
<span>
col
</span>
</div>
<div className=" col">
<span>
col
</span>
</div>
<div className=" col">
<span>
col
</span>
</div>
<div className=" col">
<span>
col
</span>
</div>
</Row>
<Row>
<Col xs="8">
<span>
col-8
</span>
</Col>
<Col xs="4">
<span>
col-4
</span>
</Col>
</Row>
</div>
<div className=" highlight">
<pre>
<code className=" language-html" data-lang="html">
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"row"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col"
</span>
<span className=" nt">
><span>
</span>
col<span className=" nt">
</span></div>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col"
</span>
<span className=" nt">
><span>
</span>
col<span className=" nt">
</span></div>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col"
</span>
<span className=" nt">
><span>
</span>
col<span className=" nt">
</span></div>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col"
</span>
<span className=" nt">
><span>
</span>
col<span className=" nt">
</span></div>
</span>
<span className=" nt">
</div>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"row"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col-8"
</span>
<span className=" nt">
><span>
</span>
col-8<span className=" nt">
</span></div>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col-4"
</span>
<span className=" nt">
><span>
</span>
col-4<span className=" nt">
</span></div>
</span>
<span className=" nt">
</div>
</span>
</code>
</pre>
</div>
<h3 id="stacked-to-horizontal">
Stacked to horizontal
</h3>
<p>
Using a single set of <code className=" highlighter-rouge">
.col-sm-*
</code>
 classes, you can create a basic grid system that starts out stacked and becomes horizontal at the small breakpoint ( <code className=" highlighter-rouge">
sm
</code>
).
</p>
<div className=" bd-example" data-example-id="">
<Row>
<Col sm="8">
<span>
col-sm-8
</span>
</Col>
<Col sm="4">
<span>
col-sm-4
</span>
</Col>
</Row>
<Row>
<Col className=" col-sm">
<span>
col-sm
</span>
</Col>
<Col className=" col-sm">
<span>
col-sm
</span>
</Col>
<Col className=" col-sm">
<span>
col-sm
</span>
</Col>
</Row>
</div>
<div className=" highlight">
<pre>
<code className=" language-html" data-lang="html">
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"row"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col-sm-8"
</span>
<span className=" nt">
><span>
</span>
col-sm-8<span className=" nt">
</span></div>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col-sm-4"
</span>
<span className=" nt">
><span>
</span>
col-sm-4<span className=" nt">
</span></div>
</span>
<span className=" nt">
</div>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"row"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col-sm"
</span>
<span className=" nt">
><span>
</span>
col-sm<span className=" nt">
</span></div>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col-sm"
</span>
<span className=" nt">
><span>
</span>
col-sm<span className=" nt">
</span></div>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col-sm"
</span>
<span className=" nt">
><span>
</span>
col-sm<span className=" nt">
</span></div>
</span>
<span className=" nt">
</div>
</span>
</code>
</pre>
</div>
<h3 id="mix-and-match">
Mix and match
</h3>
<p>
Don’t want your columns to simply stack in some grid tiers? Use a combination of different classes for each tier as needed. See the example below for a better idea of how it all works.
</p>
<div className=" bd-example" data-example-id="">
 {/* Stack the columns on mobile by making one full-width and the other half-width */}
 <Row>
<Col md="8" xs="12">
<span>
.col-12 .col-md-8
</span>
</Col>
<Col md="4" xs="6">
<span>
.col-6 .col-md-4
</span>
</Col>
</Row>
 {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
 <Row>
<Col md="4" xs="6">
<span>
.col-6 .col-md-4
</span>
</Col>
<Col md="4" xs="6">
<span>
.col-6 .col-md-4
</span>
</Col>
<Col md="4" xs="6">
<span>
.col-6 .col-md-4
</span>
</Col>
</Row>
 {/* Columns are always 50% wide, on mobile and desktop */}
 <Row>
<Col xs="6">
<span>
.col-6
</span>
</Col>
<Col xs="6">
<span>
.col-6
</span>
</Col>
</Row>
</div>
<div className=" highlight">
<pre>
<code className=" language-html" data-lang="html">
<span className=" c">
<!-- Stack the columns on mobile by making one full-width and the other half-width -->
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"row"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col-12 col-md-8"
</span>
<span className=" nt">
><span>
</span>
.col-12 .col-md-8<span className=" nt">
</span></div>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col-6 col-md-4"
</span>
<span className=" nt">
><span>
</span>
.col-6 .col-md-4<span className=" nt">
</span></div>
</span>
<span className=" nt">
</div>
</span>
<span className=" c">
<!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"row"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col-6 col-md-4"
</span>
<span className=" nt">
><span>
</span>
.col-6 .col-md-4<span className=" nt">
</span></div>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col-6 col-md-4"
</span>
<span className=" nt">
><span>
</span>
.col-6 .col-md-4<span className=" nt">
</span></div>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col-6 col-md-4"
</span>
<span className=" nt">
><span>
</span>
.col-6 .col-md-4<span className=" nt">
</span></div>
</span>
<span className=" nt">
</div>
</span>
<span className=" c">
<!-- Columns are always 50% wide, on mobile and desktop -->
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"row"
</span>
<span className=" nt">
>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col-6"
</span>
<span className=" nt">
><span>
</span>
.col-6<span className=" nt">
</span></div>
</span>
<span className=" nt">
<div
</span>
<span className=" na">
class=
</span>
<span className=" s">
"col-6"
</span>
<span className=" nt">
><span>
</span>
.col-6<span className=" nt">
</span></div>
</span>
<span className=" nt">
</div>
</span>
</code>
</pre>
</div>
</Col>
</Row>
</Container>
 {/* Core JS Files */}
 <script src="../../../assets/js/core/jquery.min.js" type="text/javascript">
</script>
<script src="../../../assets/js/core/popper.min.js" type="text/javascript">
</script>
<script src="../../../assets/js/core/bootstrap.min.js" type="text/javascript">
</script>
<script src="../../../assets/js/plugins/perfect-scrollbar.jquery.min.js">
</script>
 {/* Plugin for Switches, full documentation here: http://www.jque.re/plugins/version3/bootstrap.switch/ */}
 <script src="../../../assets/js/plugins/bootstrap-switch.js">
</script>
 {/* Plugin for the Sliders, full documentation here: http://refreshless.com/nouislider/ */}
 <script src="../../../assets/js/plugins/nouislider.min.js" type="text/javascript">
</script>
 {/* Chart JS */}
 <script src="../../../assets/js/plugins/chartjs.min.js">
</script>
 {/* Plugin for the DatePicker, full documentation here: https://github.com/uxsolutions/bootstrap-datepicker */}
 <script src="../../../assets/js/plugins/moment.min.js">
</script>
<script src="../../../assets/js/plugins/bootstrap-datetimepicker.js" type="text/javascript">
</script>
 {/* Black Dashboard DEMO methods, don't include it in your project! */}
 <script src="../../../assets/demo/demo.js">
</script>
 {/* Control Center for Black UI Kit: parallax effects, scripts for the example pages etc */}
 <script src="../../../assets/js/blk-design-system.min.js?v=1.0.0" type="text/javascript">
</script>
<script src="../../../assets/js/plugins/jquery.sharrre.min.js" type="text/javascript">
</script>
 {/* Sharrre libray */}
 <script src="../../../assets/demo/jquery.sharrre.js">
</script>
<script>
 $(document).ready(function() { var _gaq = _gaq || []; _gaq.push(['_setAccount', 'UA-46172202-1']); _gaq.push(['_trackPageview']); (function() { var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); })(); // Facebook Pixel Code Don't Delete ! function(f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function() { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) }; if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s) }(window, document, 'script', '//connect.facebook.net/en_US/fbevents.js'); try { fbq('init', '111649226022273'); fbq('track', "PageView"); } catch (err) { console.log('Facebook Track Error:', err); } // // }); 
</script>
<noscript>
<img alt="..." height="1" src={require("https://www.facebook.com/tr?id=111649226022273&amp;ev=PageView&amp;noscript=1")} style={{display:none}} width="1">
</img>
</noscript>
<script src="../../../assets/demo/docs.min.js">
</script>
<script src="../../../assets/demo/vendor/anchor.min.js">
</script>
<script src="../../../assets/demo/vendor/clipboard.min.js">
</script>
<script src="../../../assets/demo/vendor/holder.min.js">
</script>
<script src="../../../assets/demo/src/application.js">
</script>
<script>
 $(document).ready(function() { if ($('#lineChartExample').length != 0) { demo.initDocChart(); } }); 
</script>
<script>
 Holder.addTheme('gray', { bg: '#777', fg: 'rgba(255,255,255,.75)', font: 'Helvetica', fontweight: 'normal' }) 
</script>
</body>
</html>

      </>
    );
  }
}

export default Grid;