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
  Pagination,
  PaginationItem,
  PaginationLink,
  Container,
  Row,
  Col
} from "reactstrap";

class Pagination extends React.Component {
  render() {
    return (
      <>
<h1 className="bd-title" id="content">
Pagination
</h1>
<p className="bd-lead">
Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages.
</p>
<h2 id="overview">
Overview
</h2>
<div className="bd-example" data-example-id="">
<nav aria-label="Page navigation example">
<Pagination>
<PaginationItem>
<PaginationLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Previous
</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#pablo" onClick={e =>
 e.preventDefault()}>
1
</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#pablo" onClick={e =>
 e.preventDefault()}>
2
</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#pablo" onClick={e =>
 e.preventDefault()}>
3
</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Next
</PaginationLink>
</PaginationItem>
</Pagination>
</nav>
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
"Page navigation example"
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
"pagination"
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
"page-item"
</span>
<span className="nt">
><a
</span>
<span className="na">
class=
</span>
<span className="s">
"page-link"
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
Previous<span className="nt">
</a></li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"page-item"
</span>
<span className="nt">
><a
</span>
<span className="na">
class=
</span>
<span className="s">
"page-link"
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
1<span className="nt">
</a></li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"page-item"
</span>
<span className="nt">
><a
</span>
<span className="na">
class=
</span>
<span className="s">
"page-link"
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
2<span className="nt">
</a></li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"page-item"
</span>
<span className="nt">
><a
</span>
<span className="na">
class=
</span>
<span className="s">
"page-link"
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
3<span className="nt">
</a></li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"page-item"
</span>
<span className="nt">
><a
</span>
<span className="na">
class=
</span>
<span className="s">
"page-link"
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
Next<span className="nt">
</a></li>
</span>
<span className="nt">
</ul>
</span>
<span className="nt">
</nav>
</span>
</code>
</pre>
</div>
<h2 id="disabled-and-active-states">
Disabled and active states
</h2>
<p>
Pagination links are customizable for different circumstances. Use <code className="highlighter-rouge">
.disabled
</code>
 for links that appear un-clickable and <code className="highlighter-rouge">
.active
</code>
 to indicate the current page.
</p>
<p>
While the <code className="highlighter-rouge">
.disabled
</code>
 class uses <code className="highlighter-rouge">
pointer-events: none
</code>
 to <em>
try
</em>
 to disable the link functionality of <code className="highlighter-rouge">
<a>
</code>
s, that CSS property is not yet standardized and doesn’t account for keyboard navigation. As such, you should always add <code className="highlighter-rouge">
tabindex="-1"
</code>
 on disabled links and use custom JavaScript to fully disable their functionality.
</p>
<div className="bd-example" data-example-id="">
<nav aria-label="...">
<Pagination>
<PaginationItem className="disabled">
<PaginationLink href="#pablo" onClick={e =>
 e.preventDefault()} tabindex="-1">
Previous
</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#pablo" onClick={e =>
 e.preventDefault()}>
1
</PaginationLink>
</PaginationItem>
<PaginationItem className="active">
<PaginationLink href="#pablo" onClick={e =>
 e.preventDefault()}>
2 <span className="sr-only">
(current)
</span>
</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#pablo" onClick={e =>
 e.preventDefault()}>
3
</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Next
</PaginationLink>
</PaginationItem>
</Pagination>
</nav>
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
"..."
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
"pagination"
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
"page-item disabled"
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
"page-link"
</span>
<span className="na">
href=
</span>
<span className="s">
"#"
</span>
<span className="na">
tabindex=
</span>
<span className="s">
"-1"
</span>
<span className="nt">
>
</span>
Previous<span className="nt">
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
"page-item"
</span>
<span className="nt">
><a
</span>
<span className="na">
class=
</span>
<span className="s">
"page-link"
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
1<span className="nt">
</a></li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"page-item active"
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
"page-link"
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
2 <span className="nt">
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
"page-item"
</span>
<span className="nt">
><a
</span>
<span className="na">
class=
</span>
<span className="s">
"page-link"
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
3<span className="nt">
</a></li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"page-item"
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
"page-link"
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
Next<span className="nt">
</a>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
</ul>
</span>
<span className="nt">
</nav>
</span>
</code>
</pre>
</div>
<p>
You can optionally swap out active or disabled anchors for <code className="highlighter-rouge">
<span>
</code>
, or omit the anchor in the case of the prev/next arrows, to remove click functionality and prevent keyboard focus while retaining intended styles.
</p>
<div className="bd-example" data-example-id="">
<nav aria-label="...">
<Pagination>
<PaginationItem className="disabled">
<PaginationLink>
Previous
</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#pablo" onClick={e =>
 e.preventDefault()}>
1
</PaginationLink>
</PaginationItem>
<PaginationItem className="active">
<PaginationLink>
 2 <span className="sr-only">
(current)
</span>
</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#pablo" onClick={e =>
 e.preventDefault()}>
3
</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Next
</PaginationLink>
</PaginationItem>
</Pagination>
</nav>
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
"..."
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
"pagination"
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
"page-item disabled"
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
"page-link"
</span>
<span className="nt">
>
</span>
Previous<span className="nt">
</span>
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
"page-item"
</span>
<span className="nt">
><a
</span>
<span className="na">
class=
</span>
<span className="s">
"page-link"
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
1<span className="nt">
</a></li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"page-item active"
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
"page-link"
</span>
<span className="nt">
>
</span>
 2 <span className="nt">
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
</span>
</span>
<span className="nt">
</span>
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
"page-item"
</span>
<span className="nt">
><a
</span>
<span className="na">
class=
</span>
<span className="s">
"page-link"
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
3<span className="nt">
</a></li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"page-item"
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
"page-link"
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
Next<span className="nt">
</a>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
</ul>
</span>
<span className="nt">
</nav>
</span>
</code>
</pre>
</div>
<h2 id="alignment">
Alignment
</h2>
<p>
Change the alignment of pagination components with <a href="/docs/1.0/utilities/flex/">
flexbox utilities
</a>
.
</p>
<div className="bd-example" data-example-id="">
<nav aria-label="Page navigation example">
<Pagination className="pagination justify-content-center" listclassName="justify-content-center">
<PaginationItem className="disabled">
<PaginationLink href="#pablo" onClick={e =>
 e.preventDefault()} tabindex="-1">
Previous
</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#pablo" onClick={e =>
 e.preventDefault()}>
1
</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#pablo" onClick={e =>
 e.preventDefault()}>
2
</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#pablo" onClick={e =>
 e.preventDefault()}>
3
</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Next
</PaginationLink>
</PaginationItem>
</Pagination>
</nav>
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
"Page navigation example"
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
"pagination justify-content-center"
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
"page-item disabled"
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
"page-link"
</span>
<span className="na">
href=
</span>
<span className="s">
"#"
</span>
<span className="na">
tabindex=
</span>
<span className="s">
"-1"
</span>
<span className="nt">
>
</span>
Previous<span className="nt">
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
"page-item"
</span>
<span className="nt">
><a
</span>
<span className="na">
class=
</span>
<span className="s">
"page-link"
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
1<span className="nt">
</a></li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"page-item"
</span>
<span className="nt">
><a
</span>
<span className="na">
class=
</span>
<span className="s">
"page-link"
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
2<span className="nt">
</a></li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"page-item"
</span>
<span className="nt">
><a
</span>
<span className="na">
class=
</span>
<span className="s">
"page-link"
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
3<span className="nt">
</a></li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"page-item"
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
"page-link"
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
Next<span className="nt">
</a>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
</ul>
</span>
<span className="nt">
</nav>
</span>
</code>
</pre>
</div>
<div className="bd-example" data-example-id="">
<nav aria-label="Page navigation example">
<Pagination className="pagination justify-content-end" listclassName="justify-content-end">
<PaginationItem className="disabled">
<PaginationLink href="#pablo" onClick={e =>
 e.preventDefault()} tabindex="-1">
Previous
</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#pablo" onClick={e =>
 e.preventDefault()}>
1
</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#pablo" onClick={e =>
 e.preventDefault()}>
2
</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#pablo" onClick={e =>
 e.preventDefault()}>
3
</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Next
</PaginationLink>
</PaginationItem>
</Pagination>
</nav>
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
"Page navigation example"
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
"pagination justify-content-end"
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
"page-item disabled"
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
"page-link"
</span>
<span className="na">
href=
</span>
<span className="s">
"#"
</span>
<span className="na">
tabindex=
</span>
<span className="s">
"-1"
</span>
<span className="nt">
>
</span>
Previous<span className="nt">
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
"page-item"
</span>
<span className="nt">
><a
</span>
<span className="na">
class=
</span>
<span className="s">
"page-link"
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
1<span className="nt">
</a></li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"page-item"
</span>
<span className="nt">
><a
</span>
<span className="na">
class=
</span>
<span className="s">
"page-link"
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
2<span className="nt">
</a></li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"page-item"
</span>
<span className="nt">
><a
</span>
<span className="na">
class=
</span>
<span className="s">
"page-link"
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
3<span className="nt">
</a></li>
</span>
<span className="nt">
<li
</span>
<span className="na">
class=
</span>
<span className="s">
"page-item"
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
"page-link"
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
Next<span className="nt">
</a>
</span>
<span className="nt">
</li>
</span>
<span className="nt">
</ul>
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

export default Pagination;
