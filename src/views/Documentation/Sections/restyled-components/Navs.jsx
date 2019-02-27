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
</>
    );
  }
}

export default Navs;
