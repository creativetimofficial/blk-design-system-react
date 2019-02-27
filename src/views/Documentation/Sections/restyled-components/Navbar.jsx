import React from "react";

// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

class Navbar extends React.Component {
  render() {
    return (
      <>
<h1 className="bd-title" id="content">
Navbar
</h1>
<p className="bd-lead">
Documentation and examples for Bootstrap's powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.
</p>
<h2 id="how-it-works">
How it works
</h2>
<p>
Here’s what you need to know before getting started with the navbar:
</p>
<ul>
<li>
Navbars require a wrapping <code className="highlighter-rouge">
.navbar
</code>
 with <code className="highlighter-rouge">
.navbar-expand{-sm|-md|-lg|-xl}
</code>
 for responsive collapsing and <a href="#pablo" onClick={e =>
 e.preventDefault()}>
color scheme
</a>
 classes.
</li>
<li>
Navbars and their contents are fluid by default. Use <a href="#pablo" onClick={e =>
 e.preventDefault()}>
optional containers
</a>
 to limit their horizontal width.
</li>
<li>
Use our <a href="/docs/1.0/utilities/spacing/">
spacing
</a>
 and <a href="/docs/1.0/utilities/flex/">
flex
</a>
 utility classes for controlling spacing and alignment within navbars.
</li>
<li>
Navbars are responsive by default, but you can easily modify them to change that. Responsive behavior depends on our Collapse JavaScript plugin.
</li>
<li>
Navbars are hidden by default when printing. Force them to be printed by adding <code className="highlighter-rouge">
.d-print
</code>
 to the <code className="highlighter-rouge">
.navbar
</code>
. See the <a href="/docs/1.0/utilities/display/">
display
</a>
 utility class.
</li>
<li>
Ensure accessibility by using a <code className="highlighter-rouge">
<nav>
</code>
 element or, if using a more generic element such as a <code className="highlighter-rouge">
<div>
</code>
, add a <code className="highlighter-rouge">
role="navigation"
</code>
 to every navbar to explicitly identify it as a landmark region for users of assistive technologies.
</li>
</ul>
<p>
Read on for an example and list of supported sub-components.
</p>
<h3 id="nav">
Nav
</h3>
<p>
Navbar navigation links build on our <code className="highlighter-rouge">
.nav
</code>
 options with their own modifier class and require the use of <a href="#pablo" onClick={e =>
 e.preventDefault()}>
toggler classes
</a>
 for proper responsive styling. <strong>
Navigation in navbars will also grow to occupy as much horizontal space as possible
</strong>
 to keep your navbar contents securely aligned.
</p>
<p>
Active states—with <code className="highlighter-rouge">
.active
</code>
—to indicate the current page can be applied directly to <code className="highlighter-rouge">
.nav-link
</code>
s or their immediate parent <code className="highlighter-rouge">
.nav-item
</code>
s.
</p>
<div className="bd-example" data-example-id="">
<Navbar className="bg-primary" expand="lg">
<Container>
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Navbar
</NavbarBrand>
<button aria-controls="navbarNav" aria-expanded={false} aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbarNav" data-toggle="collapse" id="navbarNav" type="button">
<span className="navbar-toggler-bar navbar-kebab">
</span>
<span className="navbar-toggler-bar navbar-kebab">
</span>
<span className="navbar-toggler-bar navbar-kebab">
</span>
</button>
<UncontrolledCollapse id="navbarNav" navbar toggler="#navbarNav">
<Nav navbar>
<NavItem className="active">
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Home <span className="sr-only">
(current)
</span>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Features
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Pricing
</NavLink>
</NavItem>
<NavItem>
<NavLink className="disabled" href="#pablo" onClick={e =>
 e.preventDefault()}>
Disabled
</NavLink>
</NavItem>
</Nav>
</UncontrolledCollapse>
</Container>
</Navbar>
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
"navbar navbar-expand-lg bg-primary"
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
"container"
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
"navbar-brand"
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
Navbar<span className="nt">
</a>
</span>
<span className="nt">
<button
</span>
<span className="na">
class=
</span>
<span className="s">
"navbar-toggler"
</span>
<span className="na">
type=
</span>
<span className="s">
"button"
</span>
<span className="na">
data-toggle=
</span>
<span className="s">
"collapse"
</span>
<span className="na">
data-target=
</span>
<span className="s">
"#navbarNav"
</span>
<span className="na">
aria-controls=
</span>
<span className="s">
"navbarNav"
</span>
<span className="na">
aria-expanded=
</span>
<span className="s">
"false"
</span>
<span className="na">
aria-label=
</span>
<span className="s">
"Toggle navigation"
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
"navbar-toggler-bar navbar-kebab"
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
"navbar-toggler-bar navbar-kebab"
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
"navbar-toggler-bar navbar-kebab"
</span>
<span className="nt">
></span>
</span>
<span className="nt">
</button>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"collapse navbar-collapse"
</span>
<span className="na">
id=
</span>
<span className="s">
"navbarNav"
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
"navbar-nav"
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
"nav-item active"
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
Home <span className="nt">
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
(current)<span className="nt">
</span></a>
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
Features<span className="nt">
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
Pricing<span className="nt">
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
<span className="nt">
</div>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
</nav>
</span>
</code>
</pre>
</div>
<p>
You may also utilize dropdowns in your navbar nav. Dropdown menus require a wrapping element for positioning, so be sure to use separate and nested elements for <code className="highlighter-rouge">
.nav-item
</code>
 and <code className="highlighter-rouge">
.nav-link
</code>
 as shown below.
</p>
<div className="bd-example" data-example-id="">
<Navbar className="bg-primary" expand="lg">
<Container>
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Navbar
</NavbarBrand>
<button aria-controls="navbarNavDropdown" aria-expanded={false} aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbarNavDropdown" data-toggle="collapse" id="navbarNavDropdown" type="button">
<span className="navbar-toggler-bar navbar-kebab">
</span>
<span className="navbar-toggler-bar navbar-kebab">
</span>
<span className="navbar-toggler-bar navbar-kebab">
</span>
</button>
<UncontrolledCollapse id="navbarNavDropdown" navbar toggler="#navbarNavDropdown">
<Nav navbar>
<NavItem className="active">
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Home <span className="sr-only">
(current)
</span>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Features
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Pricing
</NavLink>
</NavItem>
<UncontrolledDropdown nav>
<DropdownToggle aria-expanded={false} aria-haspopup={true} caret color="default" data-toggle="dropdown" href="#pablo" id="navbarDropdownMenuLink" nav onClick={e =>
 e.preventDefault()}>
 Dropdown link
</DropdownToggle>
<DropdownMenu aria-labelledby="navbarDropdownMenuLink">
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
</DropdownMenu>
</UncontrolledDropdown>
</Nav>
</UncontrolledCollapse>
</Container>
</Navbar>
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
"navbar navbar-expand-lg bg-primary"
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
"container"
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
"navbar-brand"
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
Navbar<span className="nt">
</a>
</span>
<span className="nt">
<button
</span>
<span className="na">
class=
</span>
<span className="s">
"navbar-toggler"
</span>
<span className="na">
type=
</span>
<span className="s">
"button"
</span>
<span className="na">
data-toggle=
</span>
<span className="s">
"collapse"
</span>
<span className="na">
data-target=
</span>
<span className="s">
"#navbarNavDropdown"
</span>
<span className="na">
aria-controls=
</span>
<span className="s">
"navbarNavDropdown"
</span>
<span className="na">
aria-expanded=
</span>
<span className="s">
"false"
</span>
<span className="na">
aria-label=
</span>
<span className="s">
"Toggle navigation"
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
"navbar-toggler-bar navbar-kebab"
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
"navbar-toggler-bar navbar-kebab"
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
"navbar-toggler-bar navbar-kebab"
</span>
<span className="nt">
></span>
</span>
<span className="nt">
</button>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"collapse navbar-collapse"
</span>
<span className="na">
id=
</span>
<span className="s">
"navbarNavDropdown"
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
"navbar-nav"
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
"nav-item active"
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
Home <span className="nt">
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
(current)<span className="nt">
</span></a>
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
Features<span className="nt">
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
Pricing<span className="nt">
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
href=
</span>
<span className="s">
"#"
</span>
<span className="na">
id=
</span>
<span className="s">
"navbarDropdownMenuLink"
</span>
<span className="na">
data-toggle=
</span>
<span className="s">
"dropdown"
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
 Dropdown link <span className="nt">
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
<span className="na">
aria-labelledby=
</span>
<span className="s">
"navbarDropdownMenuLink"
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
</div>
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
</nav>
</span>
</code>
</pre>
</div>
<h3 id="forms">
Forms
</h3>
<p>
Place various form controls and components within a navbar with <code className="highlighter-rouge">
.form-inline
</code>
.
</p>
<div className="bd-example" data-example-id="">
<Navbar className="bg-primary" expand="lg">
<Container>
<div className="navbar-translate">
<NavbarBrand href="/presentation.html">
Brand
</NavbarBrand>
<button aria-expanded={false} aria-label="Toggle navigation" className="navbar-toggler" data-toggle="collapse" type="button">
<span className="navbar-toggler-icon">
</span>
<span className="navbar-toggler-icon">
</span>
<span className="navbar-toggler-icon">
</span>
</button>
</div>
<UncontrolledCollapse navbar toggler="#">
<Nav navbar>
<NavItem className="active">
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
link
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
link
</NavLink>
</NavItem>
</Nav>
<Form className="form-inline ml-auto">
<FormGroup className="no-border">
<Input placeholder="Search" type="text">
</Input>
</FormGroup>
</Form>
</UncontrolledCollapse>
</Container>
</Navbar>
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
"navbar navbar-expand-lg bg-primary"
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
"container"
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
"navbar-translate"
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
"navbar-brand"
</span>
<span className="na">
href=
</span>
<span className="s">
"/presentation.html"
</span>
<span className="nt">
>
</span>
Brand<span className="nt">
</a>
</span>
<span className="nt">
<button
</span>
<span className="na">
class=
</span>
<span className="s">
"navbar-toggler"
</span>
<span className="na">
type=
</span>
<span className="s">
"button"
</span>
<span className="na">
data-toggle=
</span>
<span className="s">
"collapse"
</span>
<span className="na">
aria-expanded=
</span>
<span className="s">
"false"
</span>
<span className="na">
aria-label=
</span>
<span className="s">
"Toggle navigation"
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
"navbar-toggler-icon"
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
"navbar-toggler-icon"
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
"navbar-toggler-icon"
</span>
<span className="nt">
></span>
</span>
<span className="nt">
</button>
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
"collapse navbar-collapse"
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
"navbar-nav"
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
"nav-item active"
</span>
<span className="nt">
>
</span>
<span className="nt">
<a
</span>
<span className="na">
href=
</span>
<span className="s">
"#pablo"
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link"
</span>
<span className="nt">
>
</span>
link<span className="nt">
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
href=
</span>
<span className="s">
"#pablo"
</span>
<span className="na">
class=
</span>
<span className="s">
"nav-link"
</span>
<span className="nt">
>
</span>
link<span className="nt">
</a>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
</ul>
</span>
<span className="nt">
<form
</span>
<span className="na">
class=
</span>
<span className="s">
"form-inline ml-auto"
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
"form-group no-border"
</span>
<span className="nt">
>
</span>
<span className="nt">
<input
</span>
<span className="na">
type=
</span>
<span className="s">
"text"
</span>
<span className="na">
class=
</span>
<span className="s">
"form-control"
</span>
<span className="na">
placeholder=
</span>
<span className="s">
"Search"
</span>
<span className="nt">
>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
</form>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
</nav>
</span>
</code>
</pre>
</div>
<h3 id="text">
Text
</h3>
<p>
Navbars may contain bits of text with the help of <code className="highlighter-rouge">
.navbar-text
</code>
. This class adjusts vertical alignment and horizontal spacing for strings of text.
</p>
<div className="bd-example" data-example-id="">
<Navbar className="navbar-dark bg-primary">
<Container>
<span className="navbar-text">
 Navbar text with an inline element
</span>
</Container>
</Navbar>
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
"navbar navbar-dark bg-primary"
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
"container"
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
"navbar-text"
</span>
<span className="nt">
>
</span>
 Navbar text with an inline element <span className="nt">
</span>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
</nav>
</span>
</code>
</pre>
</div>
<p>
Mix and match with other components and utilities as needed.
</p>
<div className="bd-example" data-example-id="">
<Navbar className="bg-primary" expand="lg">
<Container>
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Navbar w/ text
</NavbarBrand>
<button aria-controls="navbarText" aria-expanded={false} aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbarText" data-toggle="collapse" id="navbarText" type="button">
<span className="navbar-toggler-bar navbar-kebab">
</span>
<span className="navbar-toggler-bar navbar-kebab">
</span>
<span className="navbar-toggler-bar navbar-kebab">
</span>
</button>
<UncontrolledCollapse id="navbarText" navbar toggler="#navbarText">
<Nav className="mr-auto" navbar>
<NavItem className="active">
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Home <span className="sr-only">
(current)
</span>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Features
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Pricing
</NavLink>
</NavItem>
</Nav>
<span className="navbar-text">
 Navbar text with an inline element
</span>
</UncontrolledCollapse>
</Container>
</Navbar>
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
"navbar navbar-expand-lg bg-primary"
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
"container"
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
"navbar-brand"
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
Navbar w/ text<span className="nt">
</a>
</span>
<span className="nt">
<button
</span>
<span className="na">
class=
</span>
<span className="s">
"navbar-toggler"
</span>
<span className="na">
type=
</span>
<span className="s">
"button"
</span>
<span className="na">
data-toggle=
</span>
<span className="s">
"collapse"
</span>
<span className="na">
data-target=
</span>
<span className="s">
"#navbarText"
</span>
<span className="na">
aria-controls=
</span>
<span className="s">
"navbarText"
</span>
<span className="na">
aria-expanded=
</span>
<span className="s">
"false"
</span>
<span className="na">
aria-label=
</span>
<span className="s">
"Toggle navigation"
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
"navbar-toggler-bar navbar-kebab"
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
"navbar-toggler-bar navbar-kebab"
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
"navbar-toggler-bar navbar-kebab"
</span>
<span className="nt">
></span>
</span>
<span className="nt">
</button>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"collapse navbar-collapse"
</span>
<span className="na">
id=
</span>
<span className="s">
"navbarText"
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
"navbar-nav mr-auto"
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
"nav-item active"
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
Home <span className="nt">
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
(current)<span className="nt">
</span></a>
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
Features<span className="nt">
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
Pricing<span className="nt">
</a>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
</ul>
</span>
<span className="nt">
<span
</span>
<span className="na">
class=
</span>
<span className="s">
"navbar-text"
</span>
<span className="nt">
>
</span>
 Navbar text with an inline element <span className="nt">
</span>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
</nav>
</span>
</code>
</pre>
</div>
<h2 id="color-schemes">
Color schemes
</h2>
<p>
Theming the navbar has never been easier thanks to the combination of theming classes and <code className="highlighter-rouge">
background-color
</code>
 utilities. Choose from <code className="highlighter-rouge">
.navbar-light
</code>
 for use with light background colors, or <code className="highlighter-rouge">
.navbar-dark
</code>
 for dark background colors. Then, customize with <code className="highlighter-rouge">
.bg-*
</code>
 utilities.
</p>
<div className="bd-example">
<Navbar className="bg-dark" expand="lg">
<Container>
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Navbar
</NavbarBrand>
<button aria-controls="navbarColor01" aria-expanded={false} aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbarColor01" data-toggle="collapse" id="navbarColor01" type="button">
<span className="navbar-toggler-bar navbar-kebab">
</span>
<span className="navbar-toggler-bar navbar-kebab">
</span>
<span className="navbar-toggler-bar navbar-kebab">
</span>
</button>
<UncontrolledCollapse id="navbarColor01" navbar toggler="#navbarColor01">
<Nav className="mr-auto" navbar>
<NavItem className="active">
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Home <span className="sr-only">
(current)
</span>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Features
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Pricing
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
About
</NavLink>
</NavItem>
</Nav>
<Form className="form-inline ml-auto">
<FormGroup className="no-border">
<Input placeholder="Search" type="text">
</Input>
</FormGroup>
</Form>
</UncontrolledCollapse>
</Container>
</Navbar>
<Navbar className="bg-success" expand="lg">
<Container>
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Navbar
</NavbarBrand>
<button aria-controls="navbarColor02" aria-expanded={false} aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbarColor02" data-toggle="collapse" id="navbarColor02" type="button">
<span className="navbar-toggler-bar navbar-kebab">
</span>
<span className="navbar-toggler-bar navbar-kebab">
</span>
<span className="navbar-toggler-bar navbar-kebab">
</span>
</button>
<UncontrolledCollapse id="navbarColor02" navbar toggler="#navbarColor02">
<Nav className="mr-auto" navbar>
<NavItem className="active">
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Home <span className="sr-only">
(current)
</span>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Features
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Pricing
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
About
</NavLink>
</NavItem>
</Nav>
<Form className="form-inline ml-auto">
<FormGroup className="no-border">
<Input placeholder="Search" type="text">
</Input>
</FormGroup>
</Form>
</UncontrolledCollapse>
</Container>
</Navbar>
<Navbar className="bg-danger" expand="lg">
<Container>
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Navbar
</NavbarBrand>
<button aria-controls="navbarColor03" aria-expanded={false} aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbarColor03" data-toggle="collapse" id="navbarColor03" type="button">
<span className="navbar-toggler-bar navbar-kebab">
</span>
<span className="navbar-toggler-bar navbar-kebab">
</span>
<span className="navbar-toggler-bar navbar-kebab">
</span>
</button>
<UncontrolledCollapse id="navbarColor03" navbar toggler="#navbarColor03">
<Nav className="mr-auto" navbar>
<NavItem className="active">
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Home <span className="sr-only">
(current)
</span>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Features
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Pricing
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
About
</NavLink>
</NavItem>
</Nav>
<Form className="form-inline ml-auto">
<FormGroup className="no-border">
<Input placeholder="Search" type="text">
</Input>
</FormGroup>
</Form>
</UncontrolledCollapse>
</Container>
</Navbar>
<Navbar className="bg-warning" expand="lg">
<Container>
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Navbar
</NavbarBrand>
<button aria-controls="navbarColor04" aria-expanded={false} aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbarColor04" data-toggle="collapse" id="navbarColor04" type="button">
<span className="navbar-toggler-bar navbar-kebab">
</span>
<span className="navbar-toggler-bar navbar-kebab">
</span>
<span className="navbar-toggler-bar navbar-kebab">
</span>
</button>
<UncontrolledCollapse id="navbarColor04" navbar toggler="#navbarColor04">
<Nav className="mr-auto" navbar>
<NavItem className="active">
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Home <span className="sr-only">
(current)
</span>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Features
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Pricing
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
About
</NavLink>
</NavItem>
</Nav>
<Form className="form-inline ml-auto">
<FormGroup className="no-border">
<Input placeholder="Search" type="text">
</Input>
</FormGroup>
</Form>
</UncontrolledCollapse>
</Container>
</Navbar>
<Navbar className="bg-white" expand="lg">
<Container>
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Navbar
</NavbarBrand>
<button aria-controls="navbarColor05" aria-expanded={false} aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbarColor05" data-toggle="collapse" id="navbarColor05" type="button">
<span className="navbar-toggler-bar navbar-kebab">
</span>
<span className="navbar-toggler-bar navbar-kebab">
</span>
<span className="navbar-toggler-bar navbar-kebab">
</span>
</button>
<UncontrolledCollapse id="navbarColor05" navbar toggler="#navbarColor05">
<Nav className="mr-auto" navbar>
<NavItem className="active">
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Home <span className="sr-only">
(current)
</span>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Features
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Pricing
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
About
</NavLink>
</NavItem>
</Nav>
<Form className="form-inline ml-auto">
<FormGroup>
<Input placeholder="Search" type="text">
</Input>
</FormGroup>
</Form>
</UncontrolledCollapse>
</Container>
</Navbar>
<Navbar className="bg-primary" expand="lg">
<Container>
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Navbar
</NavbarBrand>
<button aria-controls="navbarColor06" aria-expanded={false} aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbarColor06" data-toggle="collapse" id="navbarColor06" type="button">
<span className="navbar-toggler-bar navbar-kebab">
</span>
<span className="navbar-toggler-bar navbar-kebab">
</span>
<span className="navbar-toggler-bar navbar-kebab">
</span>
</button>
<UncontrolledCollapse id="navbarColor06" navbar toggler="#navbarColor06">
<Nav className="mr-auto" navbar>
<NavItem className="active">
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Home <span className="sr-only">
(current)
</span>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Features
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Pricing
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
About
</NavLink>
</NavItem>
</Nav>
<Form className="form-inline ml-auto">
<FormGroup className="no-border">
<Input placeholder="Search" type="text">
</Input>
</FormGroup>
</Form>
</UncontrolledCollapse>
</Container>
</Navbar>
<Navbar className="bg-info" expand="lg">
<Container>
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Navbar
</NavbarBrand>
<button aria-controls="navbarColor07" aria-expanded={false} aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbarColor07" data-toggle="collapse" id="navbarColor07" type="button">
<span className="navbar-toggler-bar navbar-kebab">
</span>
<span className="navbar-toggler-bar navbar-kebab">
</span>
<span className="navbar-toggler-bar navbar-kebab">
</span>
</button>
<UncontrolledCollapse id="navbarColor07" navbar toggler="#navbarColor07">
<Nav className="mr-auto" navbar>
<NavItem className="active">
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Home <span className="sr-only">
(current)
</span>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Features
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Pricing
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
About
</NavLink>
</NavItem>
</Nav>
<Form className="form-inline ml-auto">
<FormGroup className="no-border">
<Input placeholder="Search" type="text">
</Input>
</FormGroup>
</Form>
</UncontrolledCollapse>
</Container>
</Navbar>
</div>
<figure className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="nt">
<nav
</span>
<span className="na">
class=
</span>
<span className="s">
"navbar navbar-expand-lg bg-dark"
</span>
<span className="nt">
>
</span>
<span className="c">
<!-- Navbar content -->
</span>
<span className="nt">
</nav>
</span>
<span className="nt">
<nav
</span>
<span className="na">
class=
</span>
<span className="s">
"navbar navbar-expand-lg bg-success"
</span>
<span className="nt">
>
</span>
<span className="c">
<!-- Navbar content -->
</span>
<span className="nt">
</nav>
</span>
<span className="nt">
<nav
</span>
<span className="na">
class=
</span>
<span className="s">
"navbar navbar-expand-lg bg-danger"
</span>
<span className="nt">
>
</span>
<span className="c">
<!-- Navbar content -->
</span>
<span className="nt">
</nav>
</span>
<span className="nt">
<nav
</span>
<span className="na">
class=
</span>
<span className="s">
"navbar navbar-expand-lg bg-warning"
</span>
<span className="nt">
>
</span>
<span className="c">
<!-- Navbar content -->
</span>
<span className="nt">
</nav>
</span>
<span className="nt">
<nav
</span>
<span className="na">
class=
</span>
<span className="s">
"navbar navbar-expand-lg bg-white"
</span>
<span className="nt">
>
</span>
<span className="c">
<!-- Navbar content -->
</span>
<span className="nt">
</nav>
</span>
<span className="nt">
<nav
</span>
<span className="na">
class=
</span>
<span className="s">
"navbar navbar-expand-lg bg-primary"
</span>
<span className="nt">
>
</span>
<span className="c">
<!-- Navbar content -->
</span>
<span className="nt">
</nav>
</span>
<span className="nt">
<nav
</span>
<span className="na">
class=
</span>
<span className="s">
"navbar navbar-expand-lg bg-info"
</span>
<span className="nt">
>
</span>
<span className="c">
<!-- Navbar content -->
</span>
<span className="nt">
</nav>
</span>
</code>
</pre>
</figure>
<h2 id="containers">
Containers
</h2>
<p>
When the container is within your navbar, its horizontal padding is removed at breakpoints lower than your specified <code className="highlighter-rouge">
.navbar-expand{-sm|-md|-lg|-xl}
</code>
 class. This ensures we’re not doubling up on padding unnecessarily on lower viewports when your navbar is collapsed.
</p>
<div className="bd-example" data-example-id="">
<Navbar className="navbar-light bg-primary" expand="lg">
<Container>
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Navbar
</NavbarBrand>
</Container>
</Navbar>
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
"navbar navbar-expand-lg navbar-light bg-primary"
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
"container"
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
"navbar-brand"
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
Navbar<span className="nt">
</a>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
</nav>
</span>
</code>
</pre>
</div>
<h2 id="placement">
Placement
</h2>
<p>
Use our <a href="/docs/1.0/utilities/position/">
position utilities
</a>
 to place navbars in non-static positions. Choose from fixed to the top, fixed to the bottom, or stickied to the top (scrolls with the page until it reaches the top, then stays there). Fixed navbars use <code className="highlighter-rouge">
position: fixed
</code>
, meaning they’re pulled from the normal flow of the DOM and may require custom CSS (e.g., <code className="highlighter-rouge">
padding-top
</code>
 on the <code className="highlighter-rouge">
<body>
</code>
) to prevent overlap with other elements.
</p>
<p>
Also note that <strong>
<code className="highlighter-rouge">
.sticky-top
</code>
 uses <code className="highlighter-rouge">
position: sticky
</code>
, which <a href="#pablo" onClick={e =>
 e.preventDefault()}>
isn’t fully supported in every browser
</a>
</strong>
.
</p>
<div className="bd-example" data-example-id="">
<Navbar className="navbar-light bg-primary">
<Container>
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Default
</NavbarBrand>
</Container>
</Navbar>
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
"navbar navbar-light bg-primary"
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
"container"
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
"navbar-brand"
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
Default<span className="nt">
</a>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
</nav>
</span>
</code>
</pre>
</div>
<div className="bd-example" data-example-id="">
<Navbar className="fixed-top navbar-light bg-primary">
<Container>
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Fixed top
</NavbarBrand>
</Container>
</Navbar>
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
"navbar fixed-top navbar-light bg-primary"
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
"container"
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
"navbar-brand"
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
Fixed top<span className="nt">
</a>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
</nav>
</span>
</code>
</pre>
</div>
<div className="bd-example" data-example-id="">
<Navbar className="fixed-bottom navbar-light bg-primary">
<Container>
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Fixed bottom
</NavbarBrand>
</Container>
</Navbar>
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
"navbar fixed-bottom navbar-light bg-primary"
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
"container"
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
"navbar-brand"
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
Fixed bottom<span className="nt">
</a>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
</nav>
</span>
</code>
</pre>
</div>
<div className="bd-example" data-example-id="">
<Navbar className="sticky-top navbar-light bg-primary">
<Container>
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Sticky top
</NavbarBrand>
</Container>
</Navbar>
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
"navbar sticky-top navbar-light bg-primary"
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
"container"
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
"navbar-brand"
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
Sticky top<span className="nt">
</a>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
</nav>
</span>
</code>
</pre>
</div>
<h2 id="responsive-behaviors">
Responsive behaviors
</h2>
<p>
Navbars can utilize <code className="highlighter-rouge">
.navbar-toggler
</code>
, <code className="highlighter-rouge">
.navbar-collapse
</code>
, and <code className="highlighter-rouge">
.navbar-expand{-sm|-md|-lg|-xl}
</code>
 classes to change when their content collapses behind a button. In combination with other utilities, you can easily choose when to show or hide particular elements.
</p>
<p>
For navbars that never collapse, add the <code className="highlighter-rouge">
.navbar-expand
</code>
 class on the navbar. For navbars that always collapse, don’t add any <code className="highlighter-rouge">
.navbar-expand
</code>
 class.
</p>
<h3 id="toggler">
Toggler
</h3>
<p>
Navbar togglers are left-aligned by default, but should they follow a sibling element like a <code className="highlighter-rouge">
.navbar-brand
</code>
, they’ll automatically be aligned to the far right. Reversing your markup will reverse the placement of the toggler. Below are examples of different toggle styles.
</p>
<p>
With no <code className="highlighter-rouge">
.navbar-brand
</code>
 shown in lowest breakpoint:
</p>
<div className="bd-example" data-example-id="">
<Navbar className="bg-primary" expand="lg">
<Container>
<button aria-controls="navbarTogglerDemo01" aria-expanded={false} aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbarTogglerDemo01" data-toggle="collapse" id="navbarTogglerDemo01" type="button">
<span className="navbar-toggler-bar navbar-kebab">
</span>
<span className="navbar-toggler-bar navbar-kebab">
</span>
<span className="navbar-toggler-bar navbar-kebab">
</span>
</button>
<UncontrolledCollapse id="navbarTogglerDemo01" navbar toggler="#navbarTogglerDemo01">
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Hidden brand
</NavbarBrand>
<Nav className="mr-auto mt-2 mt-lg-0" navbar>
<NavItem className="active">
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Home <span className="sr-only">
(current)
</span>
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
<Form className="form-inline ml-auto">
<FormGroup className="no-border">
<Input placeholder="Search" type="text">
</Input>
</FormGroup>
</Form>
</UncontrolledCollapse>
</Container>
</Navbar>
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
"navbar navbar-expand-lg bg-primary"
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
"container"
</span>
<span className="nt">
>
</span>
<span className="nt">
<button
</span>
<span className="na">
class=
</span>
<span className="s">
"navbar-toggler"
</span>
<span className="na">
type=
</span>
<span className="s">
"button"
</span>
<span className="na">
data-toggle=
</span>
<span className="s">
"collapse"
</span>
<span className="na">
data-target=
</span>
<span className="s">
"#navbarTogglerDemo01"
</span>
<span className="na">
aria-controls=
</span>
<span className="s">
"navbarTogglerDemo01"
</span>
<span className="na">
aria-expanded=
</span>
<span className="s">
"false"
</span>
<span className="na">
aria-label=
</span>
<span className="s">
"Toggle navigation"
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
"navbar-toggler-bar navbar-kebab"
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
"navbar-toggler-bar navbar-kebab"
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
"navbar-toggler-bar navbar-kebab"
</span>
<span className="nt">
></span>
</span>
<span className="nt">
</button>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"collapse navbar-collapse"
</span>
<span className="na">
id=
</span>
<span className="s">
"navbarTogglerDemo01"
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
"navbar-brand"
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
Hidden brand<span className="nt">
</a>
</span>
<span className="nt">
<ul
</span>
<span className="na">
class=
</span>
<span className="s">
"navbar-nav mr-auto mt-2 mt-lg-0"
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
"nav-item active"
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
Home <span className="nt">
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
(current)<span className="nt">
</span></a>
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
<span className="nt">
<form
</span>
<span className="na">
class=
</span>
<span className="s">
"form-inline ml-auto"
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
"form-group no-border"
</span>
<span className="nt">
>
</span>
<span className="nt">
<input
</span>
<span className="na">
type=
</span>
<span className="s">
"text"
</span>
<span className="na">
class=
</span>
<span className="s">
"form-control"
</span>
<span className="na">
placeholder=
</span>
<span className="s">
"Search"
</span>
<span className="nt">
>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
</form>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
</nav>
</span>
</code>
</pre>
</div>
<p>
With a brand name shown on the left and toggler on the right:
</p>
<div className="bd-example" data-example-id="">
<Navbar className="bg-primary" expand="lg">
<Container>
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Navbar
</NavbarBrand>
<button aria-controls="navbarTogglerDemo02" aria-expanded={false} aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbarTogglerDemo02" data-toggle="collapse" id="navbarTogglerDemo02" type="button">
<span className="navbar-toggler-bar navbar-kebab">
</span>
<span className="navbar-toggler-bar navbar-kebab">
</span>
<span className="navbar-toggler-bar navbar-kebab">
</span>
</button>
<UncontrolledCollapse id="navbarTogglerDemo02" navbar toggler="#navbarTogglerDemo02">
<Nav className="mr-auto mt-2 mt-lg-0" navbar>
<NavItem className="active">
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Home <span className="sr-only">
(current)
</span>
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
<Form className="form-inline ml-auto">
<FormGroup className="no-border">
<Input placeholder="Search" type="text">
</Input>
</FormGroup>
</Form>
</UncontrolledCollapse>
</Container>
</Navbar>
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
"navbar navbar-expand-lg bg-primary"
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
"container"
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
"navbar-brand"
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
Navbar<span className="nt">
</a>
</span>
<span className="nt">
<button
</span>
<span className="na">
class=
</span>
<span className="s">
"navbar-toggler"
</span>
<span className="na">
type=
</span>
<span className="s">
"button"
</span>
<span className="na">
data-toggle=
</span>
<span className="s">
"collapse"
</span>
<span className="na">
data-target=
</span>
<span className="s">
"#navbarTogglerDemo02"
</span>
<span className="na">
aria-controls=
</span>
<span className="s">
"navbarTogglerDemo02"
</span>
<span className="na">
aria-expanded=
</span>
<span className="s">
"false"
</span>
<span className="na">
aria-label=
</span>
<span className="s">
"Toggle navigation"
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
"navbar-toggler-bar navbar-kebab"
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
"navbar-toggler-bar navbar-kebab"
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
"navbar-toggler-bar navbar-kebab"
</span>
<span className="nt">
></span>
</span>
<span className="nt">
</button>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"collapse navbar-collapse"
</span>
<span className="na">
id=
</span>
<span className="s">
"navbarTogglerDemo02"
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
"navbar-nav mr-auto mt-2 mt-lg-0"
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
"nav-item active"
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
Home <span className="nt">
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
(current)<span className="nt">
</span></a>
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
<span className="nt">
<form
</span>
<span className="na">
class=
</span>
<span className="s">
"form-inline ml-auto"
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
"form-group no-border"
</span>
<span className="nt">
>
</span>
<span className="nt">
<input
</span>
<span className="na">
type=
</span>
<span className="s">
"text"
</span>
<span className="na">
class=
</span>
<span className="s">
"form-control"
</span>
<span className="na">
placeholder=
</span>
<span className="s">
"Search"
</span>
<span className="nt">
>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
</form>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
</nav>
</span>
</code>
</pre>
</div>
<p>
With a toggler on the left and brand name on the right:
</p>
<div className="bd-example" data-example-id="">
<Navbar className="bg-primary" expand="lg">
<Container>
<button aria-controls="navbarTogglerDemo03" aria-expanded={false} aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbarTogglerDemo03" data-toggle="collapse" id="navbarTogglerDemo03" type="button">
<span className="navbar-toggler-bar navbar-kebab">
</span>
<span className="navbar-toggler-bar navbar-kebab">
</span>
<span className="navbar-toggler-bar navbar-kebab">
</span>
</button>
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Navbar
</NavbarBrand>
<UncontrolledCollapse id="navbarTogglerDemo03" navbar toggler="#navbarTogglerDemo03">
<Nav className="mr-auto mt-2 mt-lg-0" navbar>
<NavItem className="active">
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Home <span className="sr-only">
(current)
</span>
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
<Form className="form-inline ml-auto">
<FormGroup className="no-border">
<Input placeholder="Search" type="text">
</Input>
</FormGroup>
</Form>
</UncontrolledCollapse>
</Container>
</Navbar>
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
"navbar navbar-expand-lg bg-primary"
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
"container"
</span>
<span className="nt">
>
</span>
<span className="nt">
<button
</span>
<span className="na">
class=
</span>
<span className="s">
"navbar-toggler"
</span>
<span className="na">
type=
</span>
<span className="s">
"button"
</span>
<span className="na">
data-toggle=
</span>
<span className="s">
"collapse"
</span>
<span className="na">
data-target=
</span>
<span className="s">
"#navbarTogglerDemo03"
</span>
<span className="na">
aria-controls=
</span>
<span className="s">
"navbarTogglerDemo03"
</span>
<span className="na">
aria-expanded=
</span>
<span className="s">
"false"
</span>
<span className="na">
aria-label=
</span>
<span className="s">
"Toggle navigation"
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
"navbar-toggler-bar navbar-kebab"
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
"navbar-toggler-bar navbar-kebab"
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
"navbar-toggler-bar navbar-kebab"
</span>
<span className="nt">
></span>
</span>
<span className="nt">
</button>
</span>
<span className="nt">
<a
</span>
<span className="na">
class=
</span>
<span className="s">
"navbar-brand"
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
Navbar<span className="nt">
</a>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"collapse navbar-collapse"
</span>
<span className="na">
id=
</span>
<span className="s">
"navbarTogglerDemo03"
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
"navbar-nav mr-auto mt-2 mt-lg-0"
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
"nav-item active"
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
Home <span className="nt">
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
(current)<span className="nt">
</span></a>
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
<span className="nt">
<form
</span>
<span className="na">
class=
</span>
<span className="s">
"form-inline ml-auto"
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
"form-group no-border"
</span>
<span className="nt">
>
</span>
<span className="nt">
<input
</span>
<span className="na">
type=
</span>
<span className="s">
"text"
</span>
<span className="na">
class=
</span>
<span className="s">
"form-control"
</span>
<span className="na">
placeholder=
</span>
<span className="s">
"Search"
</span>
<span className="nt">
>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
</form>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
</nav>
</span>
</code>
</pre>
</div>
</>
    );
  }
}

export default Navbar;
