import React from "react";

// reactstrap components
import {
  Alert,
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

class Alerts extends React.Component {
  render() {
    return (
      <>
<h1 className="bd-title" id="content">
Alerts
</h1>
<p className="bd-lead">
Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
</p>
<h2 id="examples">
Examples
</h2>
<p>
Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight <strong>
required
</strong>
 contextual classes (e.g., <code className="highlighter-rouge">
.alert-success
</code>
). For inline dismissal, use the <a href="#pablo" onClick={e =>
 e.preventDefault()}>
alerts jQuery plugin
</a>
.
</p>
<div className="bd-example" data-example-id="">
<Alert color="primary">
 This is a primary alert—check it out!
</Alert>
<Alert color="info">
 This is a info alert—check it out!
</Alert>
<Alert color="success">
 This is a success alert—check it out!
</Alert>
<Alert color="danger">
 This is a danger alert—check it out!
</Alert>
<Alert color="warning">
 This is a warning alert—check it out!
</Alert>
<Alert className="alert-default">
 This is a default alert—check it out!
</Alert>
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
"alert alert-primary"
</span>
<span className="na">
role=
</span>
<span className="s">
"alert"
</span>
<span className="nt">
>
</span>
 This is a primary alert—check it out!<span className="nt">
</div>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"alert alert-info"
</span>
<span className="na">
role=
</span>
<span className="s">
"alert"
</span>
<span className="nt">
>
</span>
 This is a info alert—check it out!<span className="nt">
</div>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"alert alert-success"
</span>
<span className="na">
role=
</span>
<span className="s">
"alert"
</span>
<span className="nt">
>
</span>
 This is a success alert—check it out!<span className="nt">
</div>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"alert alert-danger"
</span>
<span className="na">
role=
</span>
<span className="s">
"alert"
</span>
<span className="nt">
>
</span>
 This is a danger alert—check it out!<span className="nt">
</div>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"alert alert-warning"
</span>
<span className="na">
role=
</span>
<span className="s">
"alert"
</span>
<span className="nt">
>
</span>
 This is a warning alert—check it out!<span className="nt">
</div>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"alert alert-default"
</span>
<span className="na">
role=
</span>
<span className="s">
"alert"
</span>
<span className="nt">
>
</span>
 This is a default alert—check it out!<span className="nt">
</div>
</span>
</code>
</pre>
</div>
<h3 id="link-color">
Link color
</h3>
<p>
Use the <code className="highlighter-rouge">
.alert-link
</code>
 utility class to quickly provide matching colored links within any alert.
</p>
<div className="bd-example" data-example-id="">
<Alert color="primary">
 This is a primary alert with <a className="alert-link" href="#pablo" onClick={e =>
 e.preventDefault()}>
an example link
</a>
. Give it a click if you like.
</Alert>
<Alert color="info">
 This is a info alert with <a className="alert-link" href="#pablo" onClick={e =>
 e.preventDefault()}>
an example link
</a>
. Give it a click if you like.
</Alert>
<Alert color="success">
 This is a success alert with <a className="alert-link" href="#pablo" onClick={e =>
 e.preventDefault()}>
an example link
</a>
. Give it a click if you like.
</Alert>
<Alert color="danger">
 This is a danger alert with <a className="alert-link" href="#pablo" onClick={e =>
 e.preventDefault()}>
an example link
</a>
. Give it a click if you like.
</Alert>
<Alert color="warning">
 This is a warning alert with <a className="alert-link" href="#pablo" onClick={e =>
 e.preventDefault()}>
an example link
</a>
. Give it a click if you like.
</Alert>
<Alert className="alert-default">
 This is a default alert with <a className="alert-link" href="#pablo" onClick={e =>
 e.preventDefault()}>
an example link
</a>
. Give it a click if you like.
</Alert>
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
"alert alert-primary"
</span>
<span className="na">
role=
</span>
<span className="s">
"alert"
</span>
<span className="nt">
>
</span>
 This is a primary alert with <span className="nt">
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
"alert-link"
</span>
<span className="nt">
>
</span>
an example link<span className="nt">
</a>
</span>
. Give it a click if you like.<span className="nt">
</div>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"alert alert-info"
</span>
<span className="na">
role=
</span>
<span className="s">
"alert"
</span>
<span className="nt">
>
</span>
 This is a info alert with <span className="nt">
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
"alert-link"
</span>
<span className="nt">
>
</span>
an example link<span className="nt">
</a>
</span>
. Give it a click if you like.<span className="nt">
</div>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"alert alert-success"
</span>
<span className="na">
role=
</span>
<span className="s">
"alert"
</span>
<span className="nt">
>
</span>
 This is a success alert with <span className="nt">
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
"alert-link"
</span>
<span className="nt">
>
</span>
an example link<span className="nt">
</a>
</span>
. Give it a click if you like.<span className="nt">
</div>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"alert alert-danger"
</span>
<span className="na">
role=
</span>
<span className="s">
"alert"
</span>
<span className="nt">
>
</span>
 This is a danger alert with <span className="nt">
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
"alert-link"
</span>
<span className="nt">
>
</span>
an example link<span className="nt">
</a>
</span>
. Give it a click if you like.<span className="nt">
</div>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"alert alert-warning"
</span>
<span className="na">
role=
</span>
<span className="s">
"alert"
</span>
<span className="nt">
>
</span>
 This is a warning alert with <span className="nt">
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
"alert-link"
</span>
<span className="nt">
>
</span>
an example link<span className="nt">
</a>
</span>
. Give it a click if you like.<span className="nt">
</div>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"alert alert-default"
</span>
<span className="na">
role=
</span>
<span className="s">
"alert"
</span>
<span className="nt">
>
</span>
 This is a default alert with <span className="nt">
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
"alert-link"
</span>
<span className="nt">
>
</span>
an example link<span className="nt">
</a>
</span>
. Give it a click if you like.<span className="nt">
</div>
</span>
</code>
</pre>
</div>
<h3 id="dismissing">
Dismissing
</h3>
<p>
Using the alert JavaScript plugin, it’s possible to dismiss any alert inline. Here’s how:
</p>
<ul>
<li>
Be sure you’ve loaded the alert plugin, or the compiled Bootstrap JavaScript.
</li>
<li>
If you’re building our JavaScript from source, it <a href="#pablo" onClick={e =>
 e.preventDefault()}>
requires <code className="highlighter-rouge">
util.js
</code>
</a>
. The compiled version includes this.
</li>
<li>
Add a dismiss button and the <code className="highlighter-rouge">
.alert-dismissible
</code>
 class, which adds extra padding to the right of the alert and positions the <code className="highlighter-rouge">
.close
</code>
 button.
</li>
<li>
On the dismiss button, add the <code className="highlighter-rouge">
data-dismiss="alert"
</code>
 attribute, which triggers the JavaScript functionality. Be sure to use the <code className="highlighter-rouge">
<button>
</code>
 element with it for proper behavior across all devices.
</li>
<li>
To animate alerts when dismissing them, be sure to add the <code className="highlighter-rouge">
.fade
</code>
 and <code className="highlighter-rouge">
.show
</code>
 classes.
</li>
</ul>
<p>
You can see this in action with a live demo:
</p>
<div className="bd-example" data-example-id="">
<Alert className="alert-with-icon" color="info">
<span className="tim-icons icon-trophy">
</span>
<span>
<b>
 Heads up! -
</b>
 This is a regular notification made with ".alert-info"
</span>
</Alert>
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
"alert alert-info alert-with-icon"
</span>
<span className="nt">
>
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
aria-hidden=
</span>
<span className="s">
"true"
</span>
<span className="na">
class=
</span>
<span className="s">
"close"
</span>
<span className="na">
data-dismiss=
</span>
<span className="s">
"alert"
</span>
<span className="na">
aria-label=
</span>
<span className="s">
"Close"
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
"tim-icons icon-simple-remove"
</span>
<span className="nt">
></i>
</span>
<span className="nt">
</button>
</span>
<span className="nt">
<span
</span>
<span className="na">
data-notify=
</span>
<span className="s">
"icon"
</span>
<span className="na">
class=
</span>
<span className="s">
"tim-icons icon-trophy"
</span>
<span className="nt">
></span>
</span>
<span className="nt">
<span><b>
</span>
 Heads up! - <span className="nt">
</b>
</span>
 This is a regular notification made with ".alert-info"<span className="nt">
</span>
</span>
<span className="nt">
</div>
</span>
</code>
</pre>
</div>
<p>
If you want to see more examples and properties please check the official <strong>
<a href="http://getbootstrap.com/docs/4.0/components/alerts/" rel="noopener noreferrer" target="_blank">
Bootstrap Documentation
</a>
</strong>
.
</p>
</>
    );
  }
}

export default Alerts;
