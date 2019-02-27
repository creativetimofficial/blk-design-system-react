import React from "react";

// reactstrap components
import {
  Breadcrumb,
  BreadcrumbItem,
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

class Breadcrumb extends React.Component {
  render() {
    return (
      <>
<h1 className="bd-title" id="content">
Breadcrumb
</h1>
<p className="bd-lead">
Indicate the current page's location within a navigational hierarchy that automatically adds separators via CSS.
</p>
<h2 id="overview">
Overview
</h2>
<p>
Separators are automatically added in CSS through <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::before">
<code className="highlighter-rouge">
::before
</code>
</a>
 and <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/content">
<code className="highlighter-rouge">
content
</code>
</a>
.
</p>
<div className="bd-example" data-example-id="">
<Breadcrumb>
<BreadcrumbItem aria-current="page" className="active">
Home
</BreadcrumbItem>
</Breadcrumb>
<Breadcrumb>
<BreadcrumbItem>
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Home
</a>
</BreadcrumbItem>
<BreadcrumbItem aria-current="page" className="active">
Library
</BreadcrumbItem>
</Breadcrumb>
<Breadcrumb>
<BreadcrumbItem>
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Home
</a>
</BreadcrumbItem>
<BreadcrumbItem>
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Library
</a>
</BreadcrumbItem>
<BreadcrumbItem aria-current="page" className="active">
Data
</BreadcrumbItem>
</Breadcrumb>
</div>
<div className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="nt">
<nav
</span>
<span className="na">
aria-label=
</span>
<span className="s">
"breadcrumb"
</span>
<span className="na">
role=
</span>
<span className="s">
"navigation"
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
"breadcrumb"
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
"breadcrumb-item active"
</span>
<span className="na">
aria-current=
</span>
<span className="s">
"page"
</span>
<span className="nt">
>
</span>
Home<span className="nt">
</li>
</span>
<span className="nt">
</ol>
</span>
<span className="nt">
</nav>
</span>
<span className="nt">
<nav
</span>
<span className="na">
aria-label=
</span>
<span className="s">
"breadcrumb"
</span>
<span className="na">
role=
</span>
<span className="s">
"navigation"
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
"breadcrumb"
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
"breadcrumb-item"
</span>
<span className="nt">
><a
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
Home<span className="nt">
</a></li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"breadcrumb-item active"
</span>
<span className="na">
aria-current=
</span>
<span className="s">
"page"
</span>
<span className="nt">
>
</span>
Library<span className="nt">
</li>
</span>
<span className="nt">
</ol>
</span>
<span className="nt">
</nav>
</span>
<span className="nt">
<nav
</span>
<span className="na">
aria-label=
</span>
<span className="s">
"breadcrumb"
</span>
<span className="na">
role=
</span>
<span className="s">
"navigation"
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
"breadcrumb"
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
"breadcrumb-item"
</span>
<span className="nt">
><a
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
Home<span className="nt">
</a></li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"breadcrumb-item"
</span>
<span className="nt">
><a
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
Library<span className="nt">
</a></li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"breadcrumb-item active"
</span>
<span className="na">
aria-current=
</span>
<span className="s">
"page"
</span>
<span className="nt">
>
</span>
Data<span className="nt">
</li>
</span>
<span className="nt">
</ol>
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

export default Breadcrumb;
