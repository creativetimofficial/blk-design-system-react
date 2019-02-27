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

class Buttons extends React.Component {
  render() {
    return (
      <>
<h1 className="bd-title" id="content">
Buttons
</h1>
<p className="bd-lead">
Use Black Dashboard's custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
</p>
<h2 id="examples">
Examples
</h2>
<p>
Black Dashboard has changed the predefined button styles from Bootstrap, each serving its own semantic purpose, with a few extras thrown in for more control.
</p>
<div className="bd-example" data-example-id="">
<Button color="primary" type="button">
Primary
</Button>
<Button color="info" type="button">
Info
</Button>
<Button color="success" type="button">
Success
</Button>
<Button color="danger" type="button">
Danger
</Button>
<Button color="warning" type="button">
Warning
</Button>
<Button color="default" type="button">
Default
</Button>
</div>
<div className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="nt">
<button
</span>
<span className="na">
type=
</span>
<span className="s">
"button"
</span>
<span className="na">
class=
</span>
<span className="s">
"btn btn-primary"
</span>
<span className="nt">
>
</span>
Primary<span className="nt">
</button>
</span>
<span className="nt">
<button
</span>
<span className="na">
type=
</span>
<span className="s">
"button"
</span>
<span className="na">
class=
</span>
<span className="s">
"btn btn-info"
</span>
<span className="nt">
>
</span>
Info<span className="nt">
</button>
</span>
<span className="nt">
<button
</span>
<span className="na">
type=
</span>
<span className="s">
"button"
</span>
<span className="na">
class=
</span>
<span className="s">
"btn btn-success"
</span>
<span className="nt">
>
</span>
Success<span className="nt">
</button>
</span>
<span className="nt">
<button
</span>
<span className="na">
type=
</span>
<span className="s">
"button"
</span>
<span className="na">
class=
</span>
<span className="s">
"btn btn-danger"
</span>
<span className="nt">
>
</span>
Danger<span className="nt">
</button>
</span>
<span className="nt">
<button
</span>
<span className="na">
type=
</span>
<span className="s">
"button"
</span>
<span className="na">
class=
</span>
<span className="s">
"btn btn-warning"
</span>
<span className="nt">
>
</span>
Warning<span className="nt">
</button>
</span>
<span className="nt">
<button
</span>
<span className="na">
type=
</span>
<span className="s">
"button"
</span>
<span className="na">
class=
</span>
<span className="s">
"btn btn-default"
</span>
<span className="nt">
>
</span>
Default<span className="nt">
</button>
</span>
</code>
</pre>
</div>
<h2 id="style-buttons">
Style buttons
</h2>
<div className="bd-example" data-example-id="">
<Button color="primary">
Default
</Button>
<Button className="btn-round" color="primary">
Round
</Button>
<Button className="btn-round" color="primary">
<i className="tim-icons icon-gift-2">
</i>
 With Icon
</Button>
<Button className="btn-fab btn-icon btn-round" color="primary">
<i className="tim-icons icon-gift-2">
</i>
</Button>
<Button className="btn-neutral" color="primary">
Neutral
</Button>
</div>
<div className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="nt">
<button
</span>
<span className="na">
class=
</span>
<span className="s">
"btn btn-primary"
</span>
<span className="nt">
>
</span>
Default<span className="nt">
</button>
</span>
<span className="nt">
<button
</span>
<span className="na">
class=
</span>
<span className="s">
"btn btn-primary btn-round"
</span>
<span className="nt">
>
</span>
Round<span className="nt">
</button>
</span>
<span className="nt">
<button
</span>
<span className="na">
class=
</span>
<span className="s">
"btn btn-primary btn-round"
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
"tim-icons icon-gift-2"
</span>
<span className="nt">
></i>
</span>
 With Icon<span className="nt">
</button>
</span>
<span className="nt">
<button
</span>
<span className="na">
class=
</span>
<span className="s">
"btn btn-primary btn-fab btn-icon btn-round"
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
"tim-icons icon-gift-2"
</span>
<span className="nt">
></i>
</span>
<span className="nt">
</button>
</span>
<span className="nt">
<button
</span>
<span className="na">
class=
</span>
<span className="s">
"btn btn-primary btn-neutral"
</span>
<span className="nt">
>
</span>
Neutral<span className="nt">
</button>
</span>
</code>
</pre>
</div>
<h2 id="sizes">
Sizes
</h2>
<p>
Fancy larger or smaller buttons? Add <code className="highlighter-rouge">
.btn-lg
</code>
 or <code className="highlighter-rouge">
.btn-sm
</code>
 for additional sizes.
</p>
<div className="bd-example" data-example-id="">
<Button color="primary" size="sm">
Small
</Button>
<Button color="primary">
Regular
</Button>
<Button color="primary" size="lg">
Large
</Button>
</div>
<div className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="nt">
<button
</span>
<span className="na">
class=
</span>
<span className="s">
"btn btn-primary btn-sm"
</span>
<span className="nt">
>
</span>
Small<span className="nt">
</button>
</span>
<span className="nt">
<button
</span>
<span className="na">
class=
</span>
<span className="s">
"btn btn-primary"
</span>
<span className="nt">
>
</span>
Regular<span className="nt">
</button>
</span>
<span className="nt">
<button
</span>
<span className="na">
class=
</span>
<span className="s">
"btn btn-primary btn-lg"
</span>
<span className="nt">
>
</span>
Large<span className="nt">
</button>
</span>
</code>
</pre>
</div>
<h2 id="disabled-state">
Disabled state
</h2>
<p>
Make buttons look inactive by adding the <code className="highlighter-rouge">
disabled
</code>
 boolean attribute to any <code className="highlighter-rouge">
<button>
</code>
 element.
</p>
<div className="bd-example" data-example-id="">
<Button color="primary" disabled size="lg" type="button">
Primary button
</Button>
<Button color="secondary" disabled size="lg" type="button">
Button
</Button>
</div>
<div className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="nt">
<button
</span>
<span className="na">
type=
</span>
<span className="s">
"button"
</span>
<span className="na">
class=
</span>
<span className="s">
"btn btn-lg btn-primary"
</span>
<span className="na">
disabled
</span>
<span className="nt">
>
</span>
Primary button<span className="nt">
</button>
</span>
<span className="nt">
<button
</span>
<span className="na">
type=
</span>
<span className="s">
"button"
</span>
<span className="na">
class=
</span>
<span className="s">
"btn btn-secondary btn-lg"
</span>
<span className="na">
disabled
</span>
<span className="nt">
>
</span>
Button<span className="nt">
</button>
</span>
</code>
</pre>
</div>
<p>
Disabled buttons using the <code className="highlighter-rouge">
<a>
</code>
 element behave a bit different:
</p>
<ul>
<li>
<code className="highlighter-rouge">
<a>
</code>
s don’t support the <code className="highlighter-rouge">
disabled
</code>
 attribute, so you must add the <code className="highlighter-rouge">
.disabled
</code>
 class to make it visually appear disabled.
</li>
<li>
Some future-friendly styles are included to disable all <code className="highlighter-rouge">
pointer-events
</code>
 on anchor buttons. In browsers which support that property, you won’t see the disabled cursor at all.
</li>
</ul>
<div className="bd-example" data-example-id="">
<Button aria-disabled={true} className="disabled" color="primary" href="#pablo" onClick={e =>
 e.preventDefault()} role="button" size="lg">
Primary link
</Button>
<Button aria-disabled={true} className="disabled" color="secondary" href="#pablo" onClick={e =>
 e.preventDefault()} role="button" size="lg">
Link
</Button>
</div>
<div className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="nt">
<a
</span>
<span className="na">
href=
</span>
<span className="s">
"#"
</span>
<span className="na">
class=
</span>
<span className="s">
"btn btn-primary btn-lg disabled"
</span>
<span className="na">
role=
</span>
<span className="s">
"button"
</span>
<span className="na">
aria-disabled=
</span>
<span className="s">
"true"
</span>
<span className="nt">
>
</span>
Primary link<span className="nt">
</a>
</span>
<span className="nt">
<a
</span>
<span className="na">
href=
</span>
<span className="s">
"#"
</span>
<span className="na">
class=
</span>
<span className="s">
"btn btn-secondary btn-lg disabled"
</span>
<span className="na">
role=
</span>
<span className="s">
"button"
</span>
<span className="na">
aria-disabled=
</span>
<span className="s">
"true"
</span>
<span className="nt">
>
</span>
Link<span className="nt">
</a>
</span>
</code>
</pre>
</div>
<p>
If you want to see more examples and properties please check the official <strong>
<a href="http://getbootstrap.com/docs/4.0/components/buttons/" rel="noopener noreferrer" target="_blank">
Bootstrap Documentation
</a>
</strong>
.
</p>
</>
    );
  }
}

export default Buttons;
