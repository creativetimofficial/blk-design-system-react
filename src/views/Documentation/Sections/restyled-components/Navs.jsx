import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
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
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

class Navs extends React.Component {
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
 Navs - Blk• Design System by Creative Tim 
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
 <a className="sr-only sr-only-focusable" href="#pablo" id="skippy" onClick={e =>
 e.preventDefault()}>
<Container>
<span className="skiplink-text">
Skip to main content
</span>
</Container>
</a>
<Navbar className="navbar-expand bg-primary flex-column flex-md-row bd-navbar">
<NavbarBrand className="mr-0 mr-md-2 navbar-absolute-logo" href="https://www.creative-tim.com/product/blk-design-system" rel="noopener noreferrer" target="_blank">
 Blk• Design System 
</NavbarBrand>
<Nav className="flex-row d-none d-md-flex" navbar>
<NavItem>
<NavLink className="p-2" href="#pablo" onClick={e =>
 e.preventDefault()}>
 1.0.0 
</NavLink>
</NavItem>
 {/* <UncontrolledDropdown nav>
<DropdownToggle aria-expanded={false} aria-haspopup={true} caret className="nav-item mr-md-2" color="default" data-toggle="dropdown" href="#pablo" id="bd-versions" nav onClick={e =>
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
<NavLink aria-label="GitHub" className="p-2" href="https://github.com/creativetimofficial/blk-design-system" rel="noopener" target="_blank">
<svg xmlns="http://www.w3.org/2000/svg" className="navbar-nav-svg" focusable={false} viewbox="0 0 512 499.36">
<title>
GitHub
</title>
<path d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z" fill="currentColor" fill-rule="evenodd">
</path>
</svg>
</NavLink>
</NavItem>
<NavItem>
<NavLink aria-label="Twitter" className="p-2" href="https://twitter.com/CreativeTim" rel="noopener" target="_blank">
<svg xmlns="http://www.w3.org/2000/svg" className="navbar-nav-svg" focusable={false} viewbox="0 0 512 416.32">
<title>
Twitter
</title>
<path d="M160.83 416.32c193.2 0 298.92-160.22 298.92-298.92 0-4.51 0-9-.2-13.52A214 214 0 0 0 512 49.38a212.93 212.93 0 0 1-60.44 16.6 105.7 105.7 0 0 0 46.3-58.19 209 209 0 0 1-66.79 25.37 105.09 105.09 0 0 0-181.73 71.91 116.12 116.12 0 0 0 2.66 24c-87.28-4.3-164.73-46.3-216.56-109.82A105.48 105.48 0 0 0 68 159.6a106.27 106.27 0 0 1-47.53-13.11v1.43a105.28 105.28 0 0 0 84.21 103.06 105.67 105.67 0 0 1-47.33 1.84 105.06 105.06 0 0 0 98.14 72.94A210.72 210.72 0 0 1 25 370.84a202.17 202.17 0 0 1-25-1.43 298.85 298.85 0 0 0 160.83 46.92" fill="currentColor">
</path>
</svg>
</NavLink>
</NavItem>
</Nav>
<div className="navbar-nav-scroll ml-md-auto">
<Nav className="bd-navbar-nav flex-row" navbar>
<NavItem>
<NavLink className="active" href="../../../docs/1.0/getting-started/introduction.html">
<i className="tim-icons icon-app">
</i>
 Documentation
</NavLink>
</NavItem>
<NavItem>
<NavLink href="https://demos.creative-tim.com/blk-design-system/index.html">
<i className="tim-icons icon-tv-2">
</i>
 Live Preview
</NavLink>
</NavItem>
<NavItem>
<NavLink href="https://github.com/creativetimofficial/blk-design-system" rel="noopener" target="_blank">
<i className="tim-icons icon-shape-star">
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
<a aria-label="View source on Github" className="github-corner" href="https://github.com/creativetimofficial/blk-design-system">
<svg aria-hidden={true} height="60" style={{fill:#fff", color:#9c27b0", position: "absolute", top: "0", border: "0", right: "0",}} viewbox="0 0 250 250" width="60">
<path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z">
</path>
<path className="octo-arm" d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style={{transform-origin: "130px 106px",}}>
</path>
<path className="octo-body" d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor">
</path>
</svg>
</a>
<style>
 .github-corner:hover .octo-arm { animation: octocat-wave 560ms ease-in-out } @keyframes octocat-wave { 0%, 100% { transform: rotate(0) } 20%, 60% { transform: rotate(-25deg) } 40%, 80% { transform: rotate(10deg) } } @media (max-width:500px) { .github-corner:hover .octo-arm { animation: none } .github-corner .octo-arm { animation: octocat-wave 560ms ease-in-out } } 
</style>
 {/* <Button className="btn-white d-none d-lg-inline-block" color="default" href="">
Download
</Button>
 */}
 
</Navbar>
<Container fluid>
<Row className="flex-xl-nowrap">
<Col className="bd-sidebar" md="3" xl="2" xs="12">
<UncontrolledCollapse className="bd-links" id="bd-docs-nav" toggler="#bd-docs-nav">
<div className="bd-toc-item active">
<a className="bd-toc-link" href="#pablo" onClick={e =>
 e.preventDefault()}>
 Getting started 
</a>
<Nav className="bd-sidenav">
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
<div className="bd-toc-item active">
<a className="bd-toc-link" href="#pablo" onClick={e =>
 e.preventDefault()}>
 Foundation 
</a>
<Nav className="bd-sidenav">
<li>
<a href="../../../docs/1.0/foundation/colors.html">
 Colors 
</a>
</li>
<li>
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
<div className="bd-toc-item active">
<a className="bd-toc-link" href="#pablo" onClick={e =>
 e.preventDefault()}>
 Components 
</a>
<Nav className="bd-sidenav">
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
<li className="active bd-sidenav-active">
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
<div className="bd-toc-item active">
<a className="bd-toc-link" href="#pablo" onClick={e =>
 e.preventDefault()}>
 Plugins 
</a>
<Nav className="bd-sidenav">
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
<Col className="d-none d-xl-block bd-toc" xl="2">
<ul className="section-nav">
<li className="toc-entry toc-h2">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Base nav
</a>
</li>
<li className="toc-entry toc-h2">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Available styles
</a>
<ul>
<li className="toc-entry toc-h3">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Horizontal alignment
</a>
</li>
<li className="toc-entry toc-h3">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Vertical
</a>
</li>
<li className="toc-entry toc-h3">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Tabs
</a>
<ul>
<li className="toc-entry toc-h4">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Tabs on Plain Card
</a>
</li>
<li className="toc-entry toc-h4">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Tabs with Icons on Card
</a>
</li>
</ul>
</li>
<li className="toc-entry toc-h3">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Pills
</a>
<ul>
<li className="toc-entry toc-h4">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Horizontal Tabs
</a>
</li>
<li className="toc-entry toc-h4">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Vertical Tabs
</a>
</li>
<li className="toc-entry toc-h4">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
With Icons
</a>
</li>
</ul>
</li>
<li className="toc-entry toc-h3">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Pills with dropdowns
</a>
</li>
<li className="toc-entry toc-h3">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Using data attributes
</a>
</li>
</ul>
</li>
</ul>
</Col>
<Col className="py-md-3 pl-md-5 bd-content" md="9" role="main" xl="8" xs="12">
<h1 className="bd-title" id="content">
Navs
</h1>
<p className="bd-lead">
Documentation and examples for how to use Bootstrap's included navigation components.
</p>
<h2 id="base-nav">
Base nav
</h2>
<p>
Navigation available in Bootstrap share general markup and styles, from the base <code className="highlighter-rouge">
.nav
</code>
 class to the active and disabled states. Swap modifier classes to switch between each style.
</p>
<p>
The base <code className="highlighter-rouge">
.nav
</code>
 component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling.
</p>
<div className="bd-callout bd-callout-info">
<p>
The base <code className="highlighter-rouge">
.nav
</code>
 component does not include any <code className="highlighter-rouge">
.active
</code>
 state. The following examples include the class, mainly to demonstrate that this particular class does not trigger any special styling.
</p>
</div>
<div className="bd-example" data-example-id="">
<Nav>
<NavItem>
<NavLink className="active" href="#pablo" onClick={e =>
 e.preventDefault()}>
Active
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Link
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Link
</NavLink>
</NavItem>
<NavItem>
<NavLink className="disabled" href="#pablo" onClick={e =>
 e.preventDefault()}>
Disabled
</NavLink>
</NavItem>
</Nav>
</div>
<div className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="nt">
<ul
</span>
<span className="na">
class=
</span>
<span className="s">
"nav"
</span>
<span className="nt">
>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-item"
</span>
<span className="nt">
>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link active"
</span>
<span className="na">
href=
</span>
<span className="s">
"#"
</span>
<span className="nt">
>
</span>
Active<span className="nt">
</a>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-item"
</span>
<span className="nt">
>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link"
</span>
<span className="na">
href=
</span>
<span className="s">
"#"
</span>
<span className="nt">
>
</span>
Link<span className="nt">
</a>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-item"
</span>
<span className="nt">
>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link"
</span>
<span className="na">
href=
</span>
<span className="s">
"#"
</span>
<span className="nt">
>
</span>
Link<span className="nt">
</a>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-item"
</span>
<span className="nt">
>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link disabled"
</span>
<span className="na">
href=
</span>
<span className="s">
"#"
</span>
<span className="nt">
>
</span>
Disabled<span className="nt">
</a>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
</ul>
</span>
</code>
</pre>
</div>
<p>
Classes are used throughout, so your markup can be super flexible. Use <code className="highlighter-rouge">
<ul>
</code>
s like above, or roll your own with say a <code className="highlighter-rouge">
<nav>
</code>
 element. Because the <code className="highlighter-rouge">
.nav
</code>
 uses <code className="highlighter-rouge">
display: flex
</code>
, the nav links behave the same as nav items would, but without the extra markup.
</p>
<div className="bd-example" data-example-id="">
<Nav tag="nav">
<NavLink className="active" href="#pablo" onClick={e =>
 e.preventDefault()}>
Active
</NavLink>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Link
</NavLink>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Link
</NavLink>
<NavLink className="disabled" href="#pablo" onClick={e =>
 e.preventDefault()}>
Disabled
</NavLink>
</Nav>
</div>
<div className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="nt">
<nav
</span>
<span className="na">
class=
</span>
<span className="s">
"nav"
</span>
<span className="nt">
>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link active"
</span>
<span className="na">
href=
</span>
<span className="s">
"#"
</span>
<span className="nt">
>
</span>
Active<span className="nt">
</a>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link"
</span>
<span className="na">
href=
</span>
<span className="s">
"#"
</span>
<span className="nt">
>
</span>
Link<span className="nt">
</a>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link"
</span>
<span className="na">
href=
</span>
<span className="s">
"#"
</span>
<span className="nt">
>
</span>
Link<span className="nt">
</a>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link disabled"
</span>
<span className="na">
href=
</span>
<span className="s">
"#"
</span>
<span className="nt">
>
</span>
Disabled<span className="nt">
</a>
</span>
<span className="nt">
</nav>
</span>
</code>
</pre>
</div>
<h2 id="available-styles">
Available styles
</h2>
<p>
Change the style of <code className="highlighter-rouge">
.nav
</code>
s component with modifiers and utilities. Mix and match as needed, or build your own.
</p>
<h3 id="horizontal-alignment">
Horizontal alignment
</h3>
<p>
Change the horizontal alignment of your nav with <a href="#pablo" onClick={e =>
 e.preventDefault()}>
flexbox utilities
</a>
. By default, navs are left-aligned, but you can easily change them to center or right aligned.
</p>
<p>
Centered with <code className="highlighter-rouge">
.justify-content-center
</code>
:
</p>
<div className="bd-example" data-example-id="">
<Nav className="justify-content-center">
<NavItem>
<NavLink className="active" href="#pablo" onClick={e =>
 e.preventDefault()}>
Active
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Link
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Link
</NavLink>
</NavItem>
<NavItem>
<NavLink className="disabled" href="#pablo" onClick={e =>
 e.preventDefault()}>
Disabled
</NavLink>
</NavItem>
</Nav>
</div>
<div className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="nt">
<ul
</span>
<span className="na">
class=
</span>
<span className="s">
"nav justify-content-center"
</span>
<span className="nt">
>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-item"
</span>
<span className="nt">
>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link active"
</span>
<span className="na">
href=
</span>
<span className="s">
"#"
</span>
<span className="nt">
>
</span>
Active<span className="nt">
</a>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-item"
</span>
<span className="nt">
>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link"
</span>
<span className="na">
href=
</span>
<span className="s">
"#"
</span>
<span className="nt">
>
</span>
Link<span className="nt">
</a>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-item"
</span>
<span className="nt">
>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link"
</span>
<span className="na">
href=
</span>
<span className="s">
"#"
</span>
<span className="nt">
>
</span>
Link<span className="nt">
</a>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-item"
</span>
<span className="nt">
>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link disabled"
</span>
<span className="na">
href=
</span>
<span className="s">
"#"
</span>
<span className="nt">
>
</span>
Disabled<span className="nt">
</a>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
</ul>
</span>
</code>
</pre>
</div>
<p>
Right-aligned with <code className="highlighter-rouge">
.justify-content-end
</code>
:
</p>
<div className="bd-example" data-example-id="">
<Nav className="justify-content-end">
<NavItem>
<NavLink className="active" href="#pablo" onClick={e =>
 e.preventDefault()}>
Active
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Link
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Link
</NavLink>
</NavItem>
<NavItem>
<NavLink className="disabled" href="#pablo" onClick={e =>
 e.preventDefault()}>
Disabled
</NavLink>
</NavItem>
</Nav>
</div>
<div className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="nt">
<ul
</span>
<span className="na">
class=
</span>
<span className="s">
"nav justify-content-end"
</span>
<span className="nt">
>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-item"
</span>
<span className="nt">
>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link active"
</span>
<span className="na">
href=
</span>
<span className="s">
"#"
</span>
<span className="nt">
>
</span>
Active<span className="nt">
</a>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-item"
</span>
<span className="nt">
>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link"
</span>
<span className="na">
href=
</span>
<span className="s">
"#"
</span>
<span className="nt">
>
</span>
Link<span className="nt">
</a>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-item"
</span>
<span className="nt">
>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link"
</span>
<span className="na">
href=
</span>
<span className="s">
"#"
</span>
<span className="nt">
>
</span>
Link<span className="nt">
</a>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-item"
</span>
<span className="nt">
>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link disabled"
</span>
<span className="na">
href=
</span>
<span className="s">
"#"
</span>
<span className="nt">
>
</span>
Disabled<span className="nt">
</a>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
</ul>
</span>
</code>
</pre>
</div>
<h3 id="vertical">
Vertical
</h3>
<p>
Stack your navigation by changing the flex item direction with the <code className="highlighter-rouge">
.flex-column
</code>
 utility. Need to stack them on some viewports but not others? Use the responsive versions (e.g., <code className="highlighter-rouge">
.flex-sm-column
</code>
).
</p>
<div className="bd-example" data-example-id="">
<Nav className="flex-column">
<NavItem>
<NavLink className="active" href="#pablo" onClick={e =>
 e.preventDefault()}>
Active
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Link
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Link
</NavLink>
</NavItem>
<NavItem>
<NavLink className="disabled" href="#pablo" onClick={e =>
 e.preventDefault()}>
Disabled
</NavLink>
</NavItem>
</Nav>
</div>
<div className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="nt">
<ul
</span>
<span className="na">
class=
</span>
<span className="s">
"nav flex-column"
</span>
<span className="nt">
>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-item"
</span>
<span className="nt">
>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link active"
</span>
<span className="na">
href=
</span>
<span className="s">
"#"
</span>
<span className="nt">
>
</span>
Active<span className="nt">
</a>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-item"
</span>
<span className="nt">
>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link"
</span>
<span className="na">
href=
</span>
<span className="s">
"#"
</span>
<span className="nt">
>
</span>
Link<span className="nt">
</a>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-item"
</span>
<span className="nt">
>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link"
</span>
<span className="na">
href=
</span>
<span className="s">
"#"
</span>
<span className="nt">
>
</span>
Link<span className="nt">
</a>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-item"
</span>
<span className="nt">
>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link disabled"
</span>
<span className="na">
href=
</span>
<span className="s">
"#"
</span>
<span className="nt">
>
</span>
Disabled<span className="nt">
</a>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
</ul>
</span>
</code>
</pre>
</div>
<p>
As always, vertical navigation is possible without <code className="highlighter-rouge">
<ul>
</code>
s, too.
</p>
<div className="bd-example" data-example-id="">
<Nav className="flex-column" tag="nav">
<NavLink className="active" href="#pablo" onClick={e =>
 e.preventDefault()}>
Active
</NavLink>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Link
</NavLink>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Link
</NavLink>
<NavLink className="disabled" href="#pablo" onClick={e =>
 e.preventDefault()}>
Disabled
</NavLink>
</Nav>
</div>
<div className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="nt">
<nav
</span>
<span className="na">
class=
</span>
<span className="s">
"nav flex-column"
</span>
<span className="nt">
>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link active"
</span>
<span className="na">
href=
</span>
<span className="s">
"#"
</span>
<span className="nt">
>
</span>
Active<span className="nt">
</a>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link"
</span>
<span className="na">
href=
</span>
<span className="s">
"#"
</span>
<span className="nt">
>
</span>
Link<span className="nt">
</a>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link"
</span>
<span className="na">
href=
</span>
<span className="s">
"#"
</span>
<span className="nt">
>
</span>
Link<span className="nt">
</a>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link disabled"
</span>
<span className="na">
href=
</span>
<span className="s">
"#"
</span>
<span className="nt">
>
</span>
Disabled<span className="nt">
</a>
</span>
<span className="nt">
</nav>
</span>
</code>
</pre>
</div>
<h3 id="tabs">
Tabs
</h3>
<p>
Takes the basic nav from above and adds the <code className="highlighter-rouge">
.nav-tabs
</code>
 class to generate a tabbed interface. Use them to create tabbable regions with our <a href="#pablo" onClick={e =>
 e.preventDefault()}>
tab JavaScript plugin
</a>
.
</p>
<h4 id="tabs-on-plain-card">
Tabs on Plain Card
</h4>
<div className="bd-example" data-example-id="">
<Card className="card-nav-tabs card-plain">
<CardHeader className="card-header-danger">
 {/* colors: "header-primary", "header-info", "header-success", "header-warning", "header-danger" */}
 <div className="nav-tabs-navigation">
<div className="nav-tabs-wrapper">
<Nav data-tabs="tabs" tabs>
<NavItem>
<NavLink className="active" data-toggle="tab" href="#pablo" onClick={e =>
 e.preventDefault()}>
Home
</NavLink>
</NavItem>
<NavItem>
<NavLink data-toggle="tab" href="#pablo" onClick={e =>
 e.preventDefault()}>
Updates
</NavLink>
</NavItem>
<NavItem>
<NavLink data-toggle="tab" href="#pablo" onClick={e =>
 e.preventDefault()}>
History
</NavLink>
</NavItem>
</Nav>
</div>
</div>
</CardHeader>
<CardBody>
<TabContent className="text-center">
<TabPane className="active" id="home">
<p>
I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.
</p>
</TabPane>
<TabPane id="updates">
<p>
 I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. 
</p>
</TabPane>
<TabPane id="history">
<p>
 I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.
</p>
</TabPane>
</TabContent>
</CardBody>
</Card>
</div>
<div className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"card card-nav-tabs card-plain"
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
"card-header card-header-danger"
</span>
<span className="nt">
>
</span>
<span className="c">
<!-- colors: "header-primary", "header-info", "header-success", "header-warning", "header-danger" -->
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-tabs-navigation"
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
"nav-tabs-wrapper"
</span>
<span className="nt">
>
</span>
<span className="nt">
<ul
</span>
<span className="na">
class=
</span>
<span className="s">
"nav nav-tabs"
</span>
<span className="na">
data-tabs=
</span>
<span className="s">
"tabs"
</span>
<span className="nt">
>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-item"
</span>
<span className="nt">
>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link active"
</span>
<span className="na">
href=
</span>
<span className="s">
"#home"
</span>
<span className="na">
data-toggle=
</span>
<span className="s">
"tab"
</span>
<span className="nt">
>
</span>
Home<span className="nt">
</a>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-item"
</span>
<span className="nt">
>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link"
</span>
<span className="na">
href=
</span>
<span className="s">
"#updates"
</span>
<span className="na">
data-toggle=
</span>
<span className="s">
"tab"
</span>
<span className="nt">
>
</span>
Updates<span className="nt">
</a>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-item"
</span>
<span className="nt">
>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link"
</span>
<span className="na">
href=
</span>
<span className="s">
"#history"
</span>
<span className="na">
data-toggle=
</span>
<span className="s">
"tab"
</span>
<span className="nt">
>
</span>
History<span className="nt">
</a>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
</ul>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
</div><div
</span>
<span className="na">
class=
</span>
<span className="s">
"card-body "
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
"tab-content text-center"
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
"tab-pane active"
</span>
<span className="na">
id=
</span>
<span className="s">
"home"
</span>
<span className="nt">
>
</span>
<span className="nt">
<p>
</span>
I think that<span className="ni">
&amp;#x2019;
</span>
s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it<span className="ni">
&amp;#x2019;
</span>
s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.<span className="nt">
</p>
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
"tab-pane"
</span>
<span className="na">
id=
</span>
<span className="s">
"updates"
</span>
<span className="nt">
>
</span>
<span className="nt">
<p>
</span>
 I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that<span className="ni">
&amp;#x2019;
</span>
s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that<span className="ni">
&amp;#x2019;
</span>
s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. <span className="nt">
</p>
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
"tab-pane"
</span>
<span className="na">
id=
</span>
<span className="s">
"history"
</span>
<span className="nt">
>
</span>
<span className="nt">
<p>
</span>
 I think that<span className="ni">
&amp;#x2019;
</span>
s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that<span className="ni">
&amp;#x2019;
</span>
s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.<span className="nt">
</p>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
</div>
</span>
</code>
</pre>
</div>
<h4 id="tabs-with-icons-on-card">
Tabs with Icons on Card
</h4>
<Card className="card-nav-tabs">
<CardHeader className="card-header-primary">
 {/* colors: "header-primary", "header-info", "header-success", "header-warning", "header-danger" */}
 <div className="nav-tabs-navigation">
<div className="nav-tabs-wrapper">
<Nav data-tabs="tabs" tabs>
<NavItem>
<NavLink className="active" data-toggle="tab" href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className="tim-icons icon-single-02">
</i>
</NavLink>
</NavItem>
<NavItem>
<NavLink data-toggle="tab" href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className="tim-icons icon-chat-33">
</i>
</NavLink>
</NavItem>
<NavItem>
<NavLink data-toggle="tab" href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className="tim-icons icon-settings-gear-63">
</i>
</NavLink>
</NavItem>
</Nav>
</div>
</div>
</CardHeader>
<CardBody>
<TabContent className="text-center">
<TabPane className="active" id="profile">
<p>
 I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. 
</p>
</TabPane>
<TabPane id="messages">
<p>
 I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.
</p>
</TabPane>
<TabPane id="settings">
<p>
I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.
</p>
</TabPane>
</TabContent>
</CardBody>
</Card>
<h3 id="pills">
Pills
</h3>
<p>
Take that same HTML, but use <code className="highlighter-rouge">
.nav-pills
</code>
 instead:
</p>
<h4 id="horizontal-tabs">
Horizontal Tabs
</h4>
<div className="bd-example" data-example-id="">
<Nav className="nav-pills-primary" pills role="tablist">
<NavItem>
<NavLink aria-expanded={true} className="active" data-toggle="tab" href="#pablo" onClick={e =>
 e.preventDefault()} role="tablist">
 Profile 
</NavLink>
</NavItem>
<NavItem>
<NavLink aria-expanded={false} data-toggle="tab" href="#pablo" onClick={e =>
 e.preventDefault()} role="tablist">
 Settings 
</NavLink>
</NavItem>
<NavItem>
<NavLink aria-expanded={false} data-toggle="tab" href="#pablo" onClick={e =>
 e.preventDefault()} role="tablist">
 Options 
</NavLink>
</NavItem>
</Nav>
<TabContent className="tab-space">
<TabPane aria-expanded={true} className="active" id="link1">
 Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. <br>
</br>
<br>
</br>
 Dramatically visualize customer directed convergence without revolutionary ROI. 
</TabPane>
<TabPane aria-expanded={false} id="link2">
 Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. <br>
</br>
<br>
</br>
Dramatically maintain clicks-and-mortar solutions without functional solutions. 
</TabPane>
<TabPane aria-expanded={false} id="link3">
 Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. <br>
</br>
<br>
</br>
Dynamically innovate resource-leveling customer service for state of the art customer service. 
</TabPane>
</TabContent>
</div>
<div className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="nt">
<ul
</span>
<span className="na">
class=
</span>
<span className="s">
"nav nav-pills nav-pills-primary"
</span>
<span className="na">
role=
</span>
<span className="s">
"tablist"
</span>
<span className="nt">
>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-item"
</span>
<span className="nt">
>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link active"
</span>
<span className="na">
data-toggle=
</span>
<span className="s">
"tab"
</span>
<span className="na">
href=
</span>
<span className="s">
"#link1"
</span>
<span className="na">
role=
</span>
<span className="s">
"tablist"
</span>
<span className="na">
aria-expanded=
</span>
<span className="s">
"true"
</span>
<span className="nt">
>
</span>
 Profile <span className="nt">
</a>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-item"
</span>
<span className="nt">
>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link"
</span>
<span className="na">
data-toggle=
</span>
<span className="s">
"tab"
</span>
<span className="na">
href=
</span>
<span className="s">
"#link2"
</span>
<span className="na">
role=
</span>
<span className="s">
"tablist"
</span>
<span className="na">
aria-expanded=
</span>
<span className="s">
"false"
</span>
<span className="nt">
>
</span>
 Settings <span className="nt">
</a>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-item"
</span>
<span className="nt">
>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link"
</span>
<span className="na">
data-toggle=
</span>
<span className="s">
"tab"
</span>
<span className="na">
href=
</span>
<span className="s">
"#link3"
</span>
<span className="na">
role=
</span>
<span className="s">
"tablist"
</span>
<span className="na">
aria-expanded=
</span>
<span className="s">
"false"
</span>
<span className="nt">
>
</span>
 Options <span className="nt">
</a>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
</ul>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"tab-content tab-space"
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
"tab-pane active"
</span>
<span className="na">
id=
</span>
<span className="s">
"link1"
</span>
<span className="na">
aria-expanded=
</span>
<span className="s">
"true"
</span>
<span className="nt">
>
</span>
 Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. <span className="nt">
<br><br>
</span>
 Dramatically visualize customer directed convergence without revolutionary ROI. <span className="nt">
</div>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"tab-pane"
</span>
<span className="na">
id=
</span>
<span className="s">
"link2"
</span>
<span className="na">
aria-expanded=
</span>
<span className="s">
"false"
</span>
<span className="nt">
>
</span>
 Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. <span className="nt">
<br><br>
</span>
Dramatically maintain clicks-and-mortar solutions without functional solutions. <span className="nt">
</div>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"tab-pane"
</span>
<span className="na">
id=
</span>
<span className="s">
"link3"
</span>
<span className="na">
aria-expanded=
</span>
<span className="s">
"false"
</span>
<span className="nt">
>
</span>
 Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. <span className="nt">
<br><br>
</span>
Dynamically innovate resource-leveling customer service for state of the art customer service. <span className="nt">
</div>
</span>
<span className="nt">
</div>
</span>
</code>
</pre>
</div>
<h4 id="vertical-tabs">
Vertical Tabs
</h4>
<div className="bd-example" data-example-id="">
<Row>
<Col md="4">
<Nav className="nav-pills-primary flex-column" pills>
<NavItem>
<NavLink className="active" data-toggle="tab" href="#pablo" onClick={e =>
 e.preventDefault()}>
Profile
</NavLink>
</NavItem>
<NavItem>
<NavLink data-toggle="tab" href="#pablo" onClick={e =>
 e.preventDefault()}>
Settings
</NavLink>
</NavItem>
<NavItem>
<NavLink data-toggle="tab" href="#pablo" onClick={e =>
 e.preventDefault()}>
Options
</NavLink>
</NavItem>
</Nav>
</Col>
<Col md="8">
<TabContent>
<TabPane className="active" id="tab1">
 Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. <br>
</br>
<br>
</br>
 Dramatically visualize customer directed convergence without revolutionary ROI. 
</TabPane>
<TabPane id="tab2">
 Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. <br>
</br>
<br>
</br>
Dramatically maintain clicks-and-mortar solutions without functional solutions. 
</TabPane>
<TabPane id="tab3">
 Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. <br>
</br>
<br>
</br>
Dynamically innovate resource-leveling customer service for state of the art customer service. 
</TabPane>
</TabContent>
</Col>
</Row>
</div>
<div className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"row"
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
"col-md-4"
</span>
<span className="nt">
>
</span>
<span className="nt">
<ul
</span>
<span className="na">
class=
</span>
<span className="s">
"nav nav-pills nav-pills-primary flex-column"
</span>
<span className="nt">
>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-item"
</span>
<span className="nt">
><a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link active"
</span>
<span className="na">
href=
</span>
<span className="s">
"#tab1"
</span>
<span className="na">
data-toggle=
</span>
<span className="s">
"tab"
</span>
<span className="nt">
>
</span>
Profile<span className="nt">
</a></li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-item"
</span>
<span className="nt">
><a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link"
</span>
<span className="na">
href=
</span>
<span className="s">
"#tab2"
</span>
<span className="na">
data-toggle=
</span>
<span className="s">
"tab"
</span>
<span className="nt">
>
</span>
Settings<span className="nt">
</a></li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-item"
</span>
<span className="nt">
><a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link"
</span>
<span className="na">
href=
</span>
<span className="s">
"#tab3"
</span>
<span className="na">
data-toggle=
</span>
<span className="s">
"tab"
</span>
<span className="nt">
>
</span>
Options<span className="nt">
</a></li>
</span>
<span className="nt">
</ul>
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
"col-md-8"
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
"tab-content"
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
"tab-pane active"
</span>
<span className="na">
id=
</span>
<span className="s">
"tab1"
</span>
<span className="nt">
>
</span>
 Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. <span className="nt">
<br><br>
</span>
 Dramatically visualize customer directed convergence without revolutionary ROI. <span className="nt">
</div>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"tab-pane"
</span>
<span className="na">
id=
</span>
<span className="s">
"tab2"
</span>
<span className="nt">
>
</span>
 Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. <span className="nt">
<br><br>
</span>
Dramatically maintain clicks-and-mortar solutions without functional solutions. <span className="nt">
</div>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"tab-pane"
</span>
<span className="na">
id=
</span>
<span className="s">
"tab3"
</span>
<span className="nt">
>
</span>
 Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. <span className="nt">
<br><br>
</span>
Dynamically innovate resource-leveling customer service for state of the art customer service. <span className="nt">
</div>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
</div>
</span>
</code>
</pre>
</div>
<h4 id="with-icons">
With Icons
</h4>
<div className="bd-example" data-example-id="">
<Nav className="nav-pills-primary nav-pills-icons" pills role="tablist">
 {/* color-classes: "nav-pills-primary", "nav-pills-info", "nav-pills-success", "nav-pills-warning","nav-pills-danger" */}
 <NavItem>
<NavLink data-toggle="tab" href="#pablo" onClick={e =>
 e.preventDefault()} role="tab">
<i className="tim-icons icon-laptop">
</i>
 Dashboard 
</NavLink>
</NavItem>
<NavItem>
<NavLink className="active" data-toggle="tab" href="#pablo" onClick={e =>
 e.preventDefault()} role="tab">
<i className="tim-icons icon-settings-gear-63">
</i>
 Settings 
</NavLink>
</NavItem>
<NavItem>
<NavLink data-toggle="tab" href="#pablo" onClick={e =>
 e.preventDefault()} role="tab">
<i className="tim-icons icon-calendar-60">
</i>
 Tasks 
</NavLink>
</NavItem>
</Nav>
<TabContent className="tab-space">
<TabPane className="active" id="dashboard-1">
 Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. <br>
</br>
<br>
</br>
 Dramatically visualize customer directed convergence without revolutionary ROI. 
</TabPane>
<TabPane id="schedule-1">
 Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. <br>
</br>
<br>
</br>
Dramatically maintain clicks-and-mortar solutions without functional solutions. 
</TabPane>
<TabPane id="tasks-1">
 Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. <br>
</br>
<br>
</br>
Dynamically innovate resource-leveling customer service for state of the art customer service. 
</TabPane>
</TabContent>
</div>
<div className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="nt">
<ul
</span>
<span className="na">
class=
</span>
<span className="s">
"nav nav-pills nav-pills-primary nav-pills-icons"
</span>
<span className="na">
role=
</span>
<span className="s">
"tablist"
</span>
<span className="nt">
>
</span>
<span className="c">
<!-- color-classes: "nav-pills-primary", "nav-pills-info", "nav-pills-success", "nav-pills-warning","nav-pills-danger" -->
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-item"
</span>
<span className="nt">
>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link"
</span>
<span className="na">
href=
</span>
<span className="s">
"#dashboard-1"
</span>
<span className="na">
role=
</span>
<span className="s">
"tab"
</span>
<span className="na">
data-toggle=
</span>
<span className="s">
"tab"
</span>
<span className="nt">
>
</span>
<span className="nt">
<i
</span>
<span className="na">
class=
</span>
<span className="s">
"tim-icons icon-laptop"
</span>
<span className="nt">
></i>
</span>
 Dashboard <span className="nt">
</a>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-item"
</span>
<span className="nt">
>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link active"
</span>
<span className="na">
href=
</span>
<span className="s">
"#schedule-1"
</span>
<span className="na">
role=
</span>
<span className="s">
"tab"
</span>
<span className="na">
data-toggle=
</span>
<span className="s">
"tab"
</span>
<span className="nt">
>
</span>
<span className="nt">
<i
</span>
<span className="na">
class=
</span>
<span className="s">
"tim-icons icon-settings-gear-63"
</span>
<span className="nt">
></i>
</span>
 Settings <span className="nt">
</a>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-item"
</span>
<span className="nt">
>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link"
</span>
<span className="na">
href=
</span>
<span className="s">
"#tasks-1"
</span>
<span className="na">
role=
</span>
<span className="s">
"tab"
</span>
<span className="na">
data-toggle=
</span>
<span className="s">
"tab"
</span>
<span className="nt">
>
</span>
<span className="nt">
<i
</span>
<span className="na">
class=
</span>
<span className="s">
"tim-icons icon-calendar-60"
</span>
<span className="nt">
></i>
</span>
 Tasks <span className="nt">
</a>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
</ul>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"tab-content tab-space"
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
"tab-pane active"
</span>
<span className="na">
id=
</span>
<span className="s">
"dashboard-1"
</span>
<span className="nt">
>
</span>
 Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. <span className="nt">
<br><br>
</span>
 Dramatically visualize customer directed convergence without revolutionary ROI. <span className="nt">
</div>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"tab-pane"
</span>
<span className="na">
id=
</span>
<span className="s">
"schedule-1"
</span>
<span className="nt">
>
</span>
 Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. <span className="nt">
<br><br>
</span>
Dramatically maintain clicks-and-mortar solutions without functional solutions. <span className="nt">
</div>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"tab-pane"
</span>
<span className="na">
id=
</span>
<span className="s">
"tasks-1"
</span>
<span className="nt">
>
</span>
 Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. <span className="nt">
<br><br>
</span>
Dynamically innovate resource-leveling customer service for state of the art customer service. <span className="nt">
</div>
</span>
<span className="nt">
</div>
</span>
</code>
</pre>
</div>
<h3 id="pills-with-dropdowns">
Pills with dropdowns
</h3>
<div className="bd-example" data-example-id="">
<Nav pills>
<NavItem>
<NavLink className="active" href="#pablo" onClick={e =>
 e.preventDefault()}>
Active
</NavLink>
</NavItem>
<UncontrolledDropdown nav>
<DropdownToggle aria-expanded={false} aria-haspopup={true} caret color="default" data-toggle="dropdown" href="#pablo" nav onClick={e =>
 e.preventDefault()} role="button">
Dropdown
</DropdownToggle>
<DropdownMenu>
<DropdownItem href="#pablo" onClick={e =>
 e.preventDefault()}>
Action
</DropdownItem>
<DropdownItem href="#pablo" onClick={e =>
 e.preventDefault()}>
Another action
</DropdownItem>
<DropdownItem href="#pablo" onClick={e =>
 e.preventDefault()}>
Something else here
</DropdownItem>
<DropdownItem divider>
</DropdownItem>
<DropdownItem href="#pablo" onClick={e =>
 e.preventDefault()}>
Separated link
</DropdownItem>
</DropdownMenu>
</UncontrolledDropdown>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Link
</NavLink>
</NavItem>
<NavItem>
<NavLink className="disabled" href="#pablo" onClick={e =>
 e.preventDefault()}>
Disabled
</NavLink>
</NavItem>
</Nav>
</div>
<div className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="nt">
<ul
</span>
<span className="na">
class=
</span>
<span className="s">
"nav nav-pills"
</span>
<span className="nt">
>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-item"
</span>
<span className="nt">
>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link active"
</span>
<span className="na">
href=
</span>
<span className="s">
"#"
</span>
<span className="nt">
>
</span>
Active<span className="nt">
</a>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-item dropdown"
</span>
<span className="nt">
>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link dropdown-toggle"
</span>
<span className="na">
data-toggle=
</span>
<span className="s">
"dropdown"
</span>
<span className="na">
href=
</span>
<span className="s">
"#"
</span>
<span className="na">
role=
</span>
<span className="s">
"button"
</span>
<span className="na">
aria-haspopup=
</span>
<span className="s">
"true"
</span>
<span className="na">
aria-expanded=
</span>
<span className="s">
"false"
</span>
<span className="nt">
>
</span>
Dropdown<span className="nt">
</a>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"dropdown-menu"
</span>
<span className="nt">
>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"dropdown-item"
</span>
<span className="na">
href=
</span>
<span className="s">
"#"
</span>
<span className="nt">
>
</span>
Action<span className="nt">
</a>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"dropdown-item"
</span>
<span className="na">
href=
</span>
<span className="s">
"#"
</span>
<span className="nt">
>
</span>
Another action<span className="nt">
</a>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"dropdown-item"
</span>
<span className="na">
href=
</span>
<span className="s">
"#"
</span>
<span className="nt">
>
</span>
Something else here<span className="nt">
</a>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"dropdown-divider"
</span>
<span className="nt">
></div>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"dropdown-item"
</span>
<span className="na">
href=
</span>
<span className="s">
"#"
</span>
<span className="nt">
>
</span>
Separated link<span className="nt">
</a>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-item"
</span>
<span className="nt">
>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link"
</span>
<span className="na">
href=
</span>
<span className="s">
"#"
</span>
<span className="nt">
>
</span>
Link<span className="nt">
</a>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-item"
</span>
<span className="nt">
>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link disabled"
</span>
<span className="na">
href=
</span>
<span className="s">
"#"
</span>
<span className="nt">
>
</span>
Disabled<span className="nt">
</a>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
</ul>
</span>
</code>
</pre>
</div>
<h3 id="using-data-attributes">
Using data attributes
</h3>
<p>
You can activate a tab or pill navigation without writing any JavaScript by simply specifying <code className="highlighter-rouge">
data-toggle="tab"
</code>
 or <code className="highlighter-rouge">
data-toggle="pill"
</code>
 on an element. Use these data attributes on <code className="highlighter-rouge">
.nav-tabs
</code>
 or <code className="highlighter-rouge">
.nav-pills
</code>
.
</p>
<figure className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="c">
<!-- Nav tabs -->
</span>
<span className="nt">
<ul
</span>
<span className="na">
class=
</span>
<span className="s">
"nav nav-tabs"
</span>
<span className="na">
id=
</span>
<span className="s">
"myTab"
</span>
<span className="na">
role=
</span>
<span className="s">
"tablist"
</span>
<span className="nt">
>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-item"
</span>
<span className="nt">
>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link active"
</span>
<span className="na">
id=
</span>
<span className="s">
"home-tab"
</span>
<span className="na">
data-toggle=
</span>
<span className="s">
"tab"
</span>
<span className="na">
href=
</span>
<span className="s">
"#home"
</span>
<span className="na">
role=
</span>
<span className="s">
"tab"
</span>
<span className="na">
aria-controls=
</span>
<span className="s">
"home"
</span>
<span className="na">
aria-selected=
</span>
<span className="s">
"true"
</span>
<span className="nt">
>
</span>
Home<span className="nt">
</a>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-item"
</span>
<span className="nt">
>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link"
</span>
<span className="na">
id=
</span>
<span className="s">
"profile-tab"
</span>
<span className="na">
data-toggle=
</span>
<span className="s">
"tab"
</span>
<span className="na">
href=
</span>
<span className="s">
"#profile"
</span>
<span className="na">
role=
</span>
<span className="s">
"tab"
</span>
<span className="na">
aria-controls=
</span>
<span className="s">
"profile"
</span>
<span className="na">
aria-selected=
</span>
<span className="s">
"false"
</span>
<span className="nt">
>
</span>
Profile<span className="nt">
</a>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-item"
</span>
<span className="nt">
>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link"
</span>
<span className="na">
id=
</span>
<span className="s">
"messages-tab"
</span>
<span className="na">
data-toggle=
</span>
<span className="s">
"tab"
</span>
<span className="na">
href=
</span>
<span className="s">
"#messages"
</span>
<span className="na">
role=
</span>
<span className="s">
"tab"
</span>
<span className="na">
aria-controls=
</span>
<span className="s">
"messages"
</span>
<span className="na">
aria-selected=
</span>
<span className="s">
"false"
</span>
<span className="nt">
>
</span>
Messages<span className="nt">
</a>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-item"
</span>
<span className="nt">
>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link"
</span>
<span className="na">
id=
</span>
<span className="s">
"settings-tab"
</span>
<span className="na">
data-toggle=
</span>
<span className="s">
"tab"
</span>
<span className="na">
href=
</span>
<span className="s">
"#settings"
</span>
<span className="na">
role=
</span>
<span className="s">
"tab"
</span>
<span className="na">
aria-controls=
</span>
<span className="s">
"settings"
</span>
<span className="na">
aria-selected=
</span>
<span className="s">
"false"
</span>
<span className="nt">
>
</span>
Settings<span className="nt">
</a>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
</ul>
</span>
<span className="c">
<!-- Tab panes -->
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"tab-content"
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
"tab-pane active"
</span>
<span className="na">
id=
</span>
<span className="s">
"home"
</span>
<span className="na">
role=
</span>
<span className="s">
"tabpanel"
</span>
<span className="na">
aria-labelledby=
</span>
<span className="s">
"home-tab"
</span>
<span className="nt">
>
</span>
...<span className="nt">
</div>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"tab-pane"
</span>
<span className="na">
id=
</span>
<span className="s">
"profile"
</span>
<span className="na">
role=
</span>
<span className="s">
"tabpanel"
</span>
<span className="na">
aria-labelledby=
</span>
<span className="s">
"profile-tab"
</span>
<span className="nt">
>
</span>
...<span className="nt">
</div>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"tab-pane"
</span>
<span className="na">
id=
</span>
<span className="s">
"messages"
</span>
<span className="na">
role=
</span>
<span className="s">
"tabpanel"
</span>
<span className="na">
aria-labelledby=
</span>
<span className="s">
"messages-tab"
</span>
<span className="nt">
>
</span>
...<span className="nt">
</div>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"tab-pane"
</span>
<span className="na">
id=
</span>
<span className="s">
"settings"
</span>
<span className="na">
role=
</span>
<span className="s">
"tabpanel"
</span>
<span className="na">
aria-labelledby=
</span>
<span className="s">
"settings-tab"
</span>
<span className="nt">
>
</span>
...<span className="nt">
</div>
</span>
<span className="nt">
</div>
</span>
</code>
</pre>
</figure>
<p>
If you want to see more examples and properties please check the official <strong>
<a href="http://getbootstrap.com/docs/4.0/components/navs/" rel="noopener noreferrer" target="_blank">
Bootstrap Documentation
</a>
</strong>
.
</p>
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

export default Navs;