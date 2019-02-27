import React from "react";

// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

class Forms extends React.Component {
  render() {
    return (
      <>
<h1 className="bd-title" id="content">
Forms
</h1>
<p className="bd-lead">
Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.
</p>
<h2 id="overview">
Overview
</h2>
<p>
Be sure to use an appropriate <code className="highlighter-rouge">
type
</code>
 attribute on all inputs (e.g., <code className="highlighter-rouge">
email
</code>
 for email address or <code className="highlighter-rouge">
number
</code>
 for numerical information) to take advantage of newer input controls like email verification, number selection, and more.
</p>
<p>
Here’s a quick example to demonstrate Bootstrap’s form styles. Keep reading for documentation on required classes, form layout, and more.
</p>
<div className="bd-example" data-example-id="">
<Form>
<FormGroup>
<label htmlFor="exampleInputEmail1">
Email address
</label>
<Input aria-describedby="emailHelp" id="exampleInputEmail1" placeholder="Enter email" type="email">
</Input>
<FormText className="text-muted" color="default" id="emailHelp">
We'll never share your email with anyone else.
</FormText>
</FormGroup>
<FormGroup>
<label htmlFor="exampleInputPassword1">
Password
</label>
<Input id="exampleInputPassword1" placeholder="Password" type="password">
</Input>
</FormGroup>
<FormGroup check>
<Label check>
<Input defaultValue="" type="checkbox">
</Input>
 Option one is this <span className="form-check-sign">
<span className="check">
</span>
</span>
</Label>
</FormGroup>
<Button color="primary" type="submit">
Submit
</Button>
</Form>
</div>
<div className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="nt">
<form>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"form-group"
</span>
<span className="nt">
>
</span>
<span className="nt">
<label
</span>
<span className="na">
for=
</span>
<span className="s">
"exampleInputEmail1"
</span>
<span className="nt">
>
</span>
Email address<span className="nt">
</label>
</span>
<span className="nt">
<input
</span>
<span className="na">
type=
</span>
<span className="s">
"email"
</span>
<span className="na">
class=
</span>
<span className="s">
"form-control"
</span>
<span className="na">
id=
</span>
<span className="s">
"exampleInputEmail1"
</span>
<span className="na">
aria-describedby=
</span>
<span className="s">
"emailHelp"
</span>
<span className="na">
placeholder=
</span>
<span className="s">
"Enter email"
</span>
<span className="nt">
>
</span>
<span className="nt">
<small
</span>
<span className="na">
id=
</span>
<span className="s">
"emailHelp"
</span>
<span className="na">
class=
</span>
<span className="s">
"form-text text-muted"
</span>
<span className="nt">
>
</span>
We'll never share your email with anyone else.<span className="nt">
</small>
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
"form-group"
</span>
<span className="nt">
>
</span>
<span className="nt">
<label
</span>
<span className="na">
for=
</span>
<span className="s">
"exampleInputPassword1"
</span>
<span className="nt">
>
</span>
Password<span className="nt">
</label>
</span>
<span className="nt">
<input
</span>
<span className="na">
type=
</span>
<span className="s">
"password"
</span>
<span className="na">
class=
</span>
<span className="s">
"form-control"
</span>
<span className="na">
id=
</span>
<span className="s">
"exampleInputPassword1"
</span>
<span className="na">
placeholder=
</span>
<span className="s">
"Password"
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
"form-check"
</span>
<span className="nt">
>
</span>
<span className="nt">
<label
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-label"
</span>
<span className="nt">
>
</span>
<span className="nt">
<input
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-input"
</span>
<span className="na">
type=
</span>
<span className="s">
"checkbox"
</span>
<span className="na">
value=
</span>
<span className="s">
""
</span>
<span className="nt">
>
</span>
 Option one is this <span className="nt">
<span
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-sign"
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
"check"
</span>
<span className="nt">
></span>
</span>
<span className="nt">
</span>
</span>
<span className="nt">
</label>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
<button
</span>
<span className="na">
type=
</span>
<span className="s">
"submit"
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
Submit<span className="nt">
</button>
</span>
<span className="nt">
</form>
</span>
</code>
</pre>
</div>
<h2 id="form-controls">
Form controls
</h2>
<p>
Textual form controls—like <code className="highlighter-rouge">
<input>
</code>
s, <code className="highlighter-rouge">
<select>
</code>
s, and <code className="highlighter-rouge">
<textarea>
</code>
s—are styled with the <code className="highlighter-rouge">
.form-control
</code>
 class. Included are styles for general appearance, focus state, sizing, and more.
</p>
<p>
Be sure to explore our <a href="#pablo" onClick={e =>
 e.preventDefault()}>
custom forms
</a>
 to further style <code className="highlighter-rouge">
<select>
</code>
s.
</p>
<div className="bd-example" data-example-id="">
<Form>
<FormGroup>
<label htmlFor="exampleFormControlInput1">
Email address
</label>
<Input id="exampleFormControlInput1" placeholder="name@example.com" type="email">
</Input>
</FormGroup>
<FormGroup>
<label htmlFor="exampleFormControlSelect1">
Example select
</label>
<Input id="exampleFormControlSelect1" type="select">
<option>
1
</option>
<option>
2
</option>
<option>
3
</option>
<option>
4
</option>
<option>
5
</option>
</Input>
</FormGroup>
<FormGroup>
<label htmlFor="exampleFormControlSelect2">
Example multiple select
</label>
<Input id="exampleFormControlSelect2" multiple="" type="select">
<option>
1
</option>
<option>
2
</option>
<option>
3
</option>
<option>
4
</option>
<option>
5
</option>
</Input>
</FormGroup>
<FormGroup>
<label htmlFor="exampleFormControlTextarea1">
Example textarea
</label>
<Input id="exampleFormControlTextarea1" rows="3">
</Input>
</FormGroup>
</Form>
</div>
<div className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="nt">
<form>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"form-group"
</span>
<span className="nt">
>
</span>
<span className="nt">
<label
</span>
<span className="na">
for=
</span>
<span className="s">
"exampleFormControlInput1"
</span>
<span className="nt">
>
</span>
Email address<span className="nt">
</label>
</span>
<span className="nt">
<input
</span>
<span className="na">
type=
</span>
<span className="s">
"email"
</span>
<span className="na">
class=
</span>
<span className="s">
"form-control"
</span>
<span className="na">
id=
</span>
<span className="s">
"exampleFormControlInput1"
</span>
<span className="na">
placeholder=
</span>
<span className="s">
"name@example.com"
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
"form-group"
</span>
<span className="nt">
>
</span>
<span className="nt">
<label
</span>
<span className="na">
for=
</span>
<span className="s">
"exampleFormControlSelect1"
</span>
<span className="nt">
>
</span>
Example select<span className="nt">
</label>
</span>
<span className="nt">
<select
</span>
<span className="na">
class=
</span>
<span className="s">
"form-control"
</span>
<span className="na">
id=
</span>
<span className="s">
"exampleFormControlSelect1"
</span>
<span className="nt">
>
</span>
<span className="nt">
<option>
</span>
1<span className="nt">
</option>
</span>
<span className="nt">
<option>
</span>
2<span className="nt">
</option>
</span>
<span className="nt">
<option>
</span>
3<span className="nt">
</option>
</span>
<span className="nt">
<option>
</span>
4<span className="nt">
</option>
</span>
<span className="nt">
<option>
</span>
5<span className="nt">
</option>
</span>
<span className="nt">
</select>
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
"form-group"
</span>
<span className="nt">
>
</span>
<span className="nt">
<label
</span>
<span className="na">
for=
</span>
<span className="s">
"exampleFormControlSelect2"
</span>
<span className="nt">
>
</span>
Example multiple select<span className="nt">
</label>
</span>
<span className="nt">
<select
</span>
<span className="na">
multiple
</span>
<span className="na">
class=
</span>
<span className="s">
"form-control"
</span>
<span className="na">
id=
</span>
<span className="s">
"exampleFormControlSelect2"
</span>
<span className="nt">
>
</span>
<span className="nt">
<option>
</span>
1<span className="nt">
</option>
</span>
<span className="nt">
<option>
</span>
2<span className="nt">
</option>
</span>
<span className="nt">
<option>
</span>
3<span className="nt">
</option>
</span>
<span className="nt">
<option>
</span>
4<span className="nt">
</option>
</span>
<span className="nt">
<option>
</span>
5<span className="nt">
</option>
</span>
<span className="nt">
</select>
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
"form-group"
</span>
<span className="nt">
>
</span>
<span className="nt">
<label
</span>
<span className="na">
for=
</span>
<span className="s">
"exampleFormControlTextarea1"
</span>
<span className="nt">
>
</span>
Example textarea<span className="nt">
</label>
</span>
<span className="nt">
<textarea
</span>
<span className="na">
class=
</span>
<span className="s">
"form-control"
</span>
<span className="na">
id=
</span>
<span className="s">
"exampleFormControlTextarea1"
</span>
<span className="na">
rows=
</span>
<span className="s">
"3"
</span>
<span className="nt">
></textarea>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
</form>
</span>
</code>
</pre>
</div>
<h2 id="examples">
Examples
</h2>
<div className="bd-example" data-example-id="">
<FormGroup className="has-success">
<Input className="form-control-success" defaultValue="Success" type="text">
</Input>
</FormGroup>
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
"form-group has-success"
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
value=
</span>
<span className="s">
"Success"
</span>
<span className="na">
class=
</span>
<span className="s">
"form-control form-control-success"
</span>
<span className="nt">
>
</span>
<span className="nt">
</div>
</span>
</code>
</pre>
</div>
<div className="bd-example" data-example-id="">
<FormGroup className="has-danger">
<Input className="form-control-danger" defaultValue="Danger" type="text">
</Input>
</FormGroup>
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
"form-group has-danger"
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
value=
</span>
<span className="s">
"Danger"
</span>
<span className="na">
class=
</span>
<span className="s">
"form-control form-control-danger"
</span>
<span className="nt">
>
</span>
<span className="nt">
</div>
</span>
</code>
</pre>
</div>
<div className="bd-example" data-example-id="">
<InputGroup>
<Input placeholder="With Nucleo Icons" type="text">
</Input>
<InputGroupAddon addonType="append">
<InputGroupText>
<i className="tim-icons icon-lock-circle">
</i>
</InputGroupText>
</InputGroupAddon>
</InputGroup>
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
"input-group"
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
"With Nucleo Icons"
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
"input-group-append"
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
"input-group-text"
</span>
<span className="nt">
><i
</span>
<span className="na">
class=
</span>
<span className="s">
"tim-icons icon-lock-circle"
</span>
<span className="nt">
></i></span>
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
<div className="bd-example" data-example-id="">
<InputGroup>
<InputGroupAddon addonType="prepend">
<InputGroupText>
<i className="fa fa-user">
</i>
</InputGroupText>
</InputGroupAddon>
<Input placeholder="With Font Awesome Icons" type="text">
</Input>
</InputGroup>
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
"input-group"
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
"input-group-prepend"
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
"input-group-text"
</span>
<span className="nt">
><i
</span>
<span className="na">
class=
</span>
<span className="s">
"fa fa-user"
</span>
<span className="nt">
></i></span>
</span>
<span className="nt">
</div>
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
"With Font Awesome Icons"
</span>
<span className="nt">
>
</span>
<span className="nt">
</div>
</span>
</code>
</pre>
</div>
<h2 id="checkboxes-and-radios">
Checkboxes and radios
</h2>
<p>
Default checkboxes and radios are improved upon with the help of <code className="highlighter-rouge">
.form-check
</code>
, <strong>
a single class for both input types that improves the layout and behavior of their HTML elements
</strong>
. Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.
</p>
<p>
Disabled checkboxes and radios are supported, but to provide a <code className="highlighter-rouge">
not-allowed
</code>
 cursor on hover of the parent <code className="highlighter-rouge">
<label>
</code>
, you’ll need to add the <code className="highlighter-rouge">
.disabled
</code>
 class to the parent <code className="highlighter-rouge">
.form-check
</code>
. The disabled class will also lighten the text color to help indicate the input’s state.
</p>
<h3 id="default-stacked">
Default (stacked)
</h3>
<p>
By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced with <code className="highlighter-rouge">
.form-check
</code>
.
</p>
<div className="bd-example" data-example-id="">
<FormGroup check>
<Label check>
<Input defaultValue="" type="checkbox">
</Input>
 Option one is this and that—be sure to include why it's great <span className="form-check-sign">
<span className="check">
</span>
</span>
</Label>
</FormGroup>
<FormGroup check disabled>
<Label check>
<Input defaultValue="" disabled type="checkbox">
</Input>
 Option two is disabled <span className="form-check-sign">
<span className="check">
</span>
</span>
</Label>
</FormGroup>
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
"form-check"
</span>
<span className="nt">
>
</span>
<span className="nt">
<label
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-label"
</span>
<span className="nt">
>
</span>
<span className="nt">
<input
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-input"
</span>
<span className="na">
type=
</span>
<span className="s">
"checkbox"
</span>
<span className="na">
value=
</span>
<span className="s">
""
</span>
<span className="nt">
>
</span>
 Option one is this and that<span className="ni">
&amp;mdash;
</span>
be sure to include why it's great <span className="nt">
<span
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-sign"
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
"check"
</span>
<span className="nt">
></span>
</span>
<span className="nt">
</span>
</span>
<span className="nt">
</label>
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
"form-check disabled"
</span>
<span className="nt">
>
</span>
<span className="nt">
<label
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-label"
</span>
<span className="nt">
>
</span>
<span className="nt">
<input
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-input"
</span>
<span className="na">
type=
</span>
<span className="s">
"checkbox"
</span>
<span className="na">
value=
</span>
<span className="s">
""
</span>
<span className="na">
disabled
</span>
<span className="nt">
>
</span>
 Option two is disabled <span className="nt">
<span
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-sign"
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
"check"
</span>
<span className="nt">
></span>
</span>
<span className="nt">
</span>
</span>
<span className="nt">
</label>
</span>
<span className="nt">
</div>
</span>
</code>
</pre>
</div>
<div className="bd-example" data-example-id="">
<FormGroup check className="form-check-radio">
<Label check>
<Input defaultValue="option1" id="exampleRadios1" name="exampleRadios" type="radio">
</Input>
 Radio is off <span className="form-check-sign">
</span>
</Label>
</FormGroup>
<FormGroup check className="form-check-radio">
<Label check>
<Input defaultChecked defaultValue="option2" id="exampleRadios2" name="exampleRadios" type="radio">
</Input>
 Radio is on <span className="form-check-sign">
</span>
</Label>
</FormGroup>
<FormGroup check className="form-check-radio" disabled>
<Label check>
<Input defaultValue="option1" disabled id="exampleRadios1" name="exampleRadios1" type="radio">
</Input>
 Disabled radio is off <span className="form-check-sign">
</span>
</Label>
</FormGroup>
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
"form-check form-check-radio"
</span>
<span className="nt">
>
</span>
<span className="nt">
<label
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-label"
</span>
<span className="nt">
>
</span>
<span className="nt">
<input
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-input"
</span>
<span className="na">
type=
</span>
<span className="s">
"radio"
</span>
<span className="na">
name=
</span>
<span className="s">
"exampleRadios"
</span>
<span className="na">
id=
</span>
<span className="s">
"exampleRadios1"
</span>
<span className="na">
value=
</span>
<span className="s">
"option1"
</span>
<span className="nt">
>
</span>
 Radio is off <span className="nt">
<span
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-sign"
</span>
<span className="nt">
></span>
</span>
<span className="nt">
</label>
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
"form-check form-check-radio"
</span>
<span className="nt">
>
</span>
<span className="nt">
<label
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-label"
</span>
<span className="nt">
>
</span>
<span className="nt">
<input
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-input"
</span>
<span className="na">
type=
</span>
<span className="s">
"radio"
</span>
<span className="na">
name=
</span>
<span className="s">
"exampleRadios"
</span>
<span className="na">
id=
</span>
<span className="s">
"exampleRadios2"
</span>
<span className="na">
value=
</span>
<span className="s">
"option2"
</span>
<span className="na">
checked
</span>
<span className="nt">
>
</span>
 Radio is on <span className="nt">
<span
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-sign"
</span>
<span className="nt">
></span>
</span>
<span className="nt">
</label>
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
"form-check form-check-radio disabled"
</span>
<span className="nt">
>
</span>
<span className="nt">
<label
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-label"
</span>
<span className="nt">
>
</span>
<span className="nt">
<input
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-input"
</span>
<span className="na">
type=
</span>
<span className="s">
"radio"
</span>
<span className="na">
name=
</span>
<span className="s">
"exampleRadios1"
</span>
<span className="na">
id=
</span>
<span className="s">
"exampleRadios1"
</span>
<span className="na">
value=
</span>
<span className="s">
"option1"
</span>
<span className="na">
disabled
</span>
<span className="nt">
>
</span>
 Disabled radio is off <span className="nt">
<span
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-sign"
</span>
<span className="nt">
></span>
</span>
<span className="nt">
</label>
</span>
<span className="nt">
</div>
</span>
</code>
</pre>
</div>
<h3 id="inline">
Inline
</h3>
<p>
Group checkboxes or radios on the same horizontal row by adding <code className="highlighter-rouge">
.form-check-inline
</code>
 to any <code className="highlighter-rouge">
.form-check
</code>
.
</p>
<div className="bd-example" data-example-id="">
<FormGroup check inline>
<Label check>
<Input defaultValue="option1" id="inlineCheckbox1" type="checkbox">
</Input>
 1 <span className="form-check-sign">
</span>
</Label>
</FormGroup>
<FormGroup check inline>
<Label check>
<Input defaultValue="option2" id="inlineCheckbox2" type="checkbox">
</Input>
 2 <span className="form-check-sign">
</span>
</Label>
</FormGroup>
<FormGroup check disabled inline>
<Label check>
<Input defaultValue="option3" disabled id="inlineCheckbox3" type="checkbox">
</Input>
 3 <span className="form-check-sign">
</span>
</Label>
</FormGroup>
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
"form-check form-check-inline"
</span>
<span className="nt">
>
</span>
<span className="nt">
<label
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-label"
</span>
<span className="nt">
>
</span>
<span className="nt">
<input
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-input"
</span>
<span className="na">
type=
</span>
<span className="s">
"checkbox"
</span>
<span className="na">
id=
</span>
<span className="s">
"inlineCheckbox1"
</span>
<span className="na">
value=
</span>
<span className="s">
"option1"
</span>
<span className="nt">
>
</span>
 1 <span className="nt">
<span
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-sign"
</span>
<span className="nt">
></span>
</span>
<span className="nt">
</label>
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
"form-check form-check-inline"
</span>
<span className="nt">
>
</span>
<span className="nt">
<label
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-label"
</span>
<span className="nt">
>
</span>
<span className="nt">
<input
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-input"
</span>
<span className="na">
type=
</span>
<span className="s">
"checkbox"
</span>
<span className="na">
id=
</span>
<span className="s">
"inlineCheckbox2"
</span>
<span className="na">
value=
</span>
<span className="s">
"option2"
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
"form-check-sign"
</span>
<span className="nt">
></span>
</span>
<span className="nt">
</label>
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
"form-check form-check-inline disabled"
</span>
<span className="nt">
>
</span>
<span className="nt">
<label
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-label"
</span>
<span className="nt">
>
</span>
<span className="nt">
<input
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-input"
</span>
<span className="na">
type=
</span>
<span className="s">
"checkbox"
</span>
<span className="na">
id=
</span>
<span className="s">
"inlineCheckbox3"
</span>
<span className="na">
value=
</span>
<span className="s">
"option3"
</span>
<span className="na">
disabled
</span>
<span className="nt">
>
</span>
 3 <span className="nt">
<span
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-sign"
</span>
<span className="nt">
></span>
</span>
<span className="nt">
</label>
</span>
<span className="nt">
</div>
</span>
</code>
</pre>
</div>
<div className="bd-example" data-example-id="">
<FormGroup check className="form-check-radio" inline>
<Label check>
<Input defaultValue="option1" id="inlineRadio1" name="inlineRadioOptions" type="radio">
</Input>
 1 <span className="form-check-sign">
</span>
</Label>
</FormGroup>
<FormGroup check className="form-check-radio" inline>
<Label check>
<Input defaultValue="option2" id="inlineRadio2" name="inlineRadioOptions" type="radio">
</Input>
 2 <span className="form-check-sign">
</span>
</Label>
</FormGroup>
<FormGroup check className="form-check-radio" disabled inline>
<Label check>
<Input defaultValue="option3" disabled id="inlineRadio3" name="inlineRadioOptions" type="radio">
</Input>
 3 <span className="form-check-sign">
</span>
</Label>
</FormGroup>
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
"form-check form-check-radio form-check-inline"
</span>
<span className="nt">
>
</span>
<span className="nt">
<label
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-label"
</span>
<span className="nt">
>
</span>
<span className="nt">
<input
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-input"
</span>
<span className="na">
type=
</span>
<span className="s">
"radio"
</span>
<span className="na">
name=
</span>
<span className="s">
"inlineRadioOptions"
</span>
<span className="na">
id=
</span>
<span className="s">
"inlineRadio1"
</span>
<span className="na">
value=
</span>
<span className="s">
"option1"
</span>
<span className="nt">
>
</span>
 1 <span className="nt">
<span
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-sign"
</span>
<span className="nt">
></span>
</span>
<span className="nt">
</label>
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
"form-check form-check-radio form-check-inline"
</span>
<span className="nt">
>
</span>
<span className="nt">
<label
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-label"
</span>
<span className="nt">
>
</span>
<span className="nt">
<input
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-input"
</span>
<span className="na">
type=
</span>
<span className="s">
"radio"
</span>
<span className="na">
name=
</span>
<span className="s">
"inlineRadioOptions"
</span>
<span className="na">
id=
</span>
<span className="s">
"inlineRadio2"
</span>
<span className="na">
value=
</span>
<span className="s">
"option2"
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
"form-check-sign"
</span>
<span className="nt">
></span>
</span>
<span className="nt">
</label>
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
"form-check form-check-radio form-check-inline disabled"
</span>
<span className="nt">
>
</span>
<span className="nt">
<label
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-label"
</span>
<span className="nt">
>
</span>
<span className="nt">
<input
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-input"
</span>
<span className="na">
type=
</span>
<span className="s">
"radio"
</span>
<span className="na">
name=
</span>
<span className="s">
"inlineRadioOptions"
</span>
<span className="na">
id=
</span>
<span className="s">
"inlineRadio3"
</span>
<span className="na">
value=
</span>
<span className="s">
"option3"
</span>
<span className="na">
disabled
</span>
<span className="nt">
>
</span>
 3 <span className="nt">
<span
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-sign"
</span>
<span className="nt">
></span>
</span>
<span className="nt">
</label>
</span>
<span className="nt">
</div>
</span>
</code>
</pre>
</div>
<h2 id="layout">
Layout
</h2>
<p>
Since Bootstrap applies <code className="highlighter-rouge">
display: block
</code>
 and <code className="highlighter-rouge">
width: 100%
</code>
 to almost all our form controls, forms will by default stack vertically. Additional classes can be used to vary this layout on a per-form basis.
</p>
<h3 id="form-grid">
Form grid
</h3>
<p>
More complex forms can be built using our grid classes. Use these for form layouts that require multiple columns, varied widths, and additional alignment options.
</p>
<div className="bd-example" data-example-id="">
<Form>
<Row>
<div className="col">
<Input placeholder="First name" type="text">
</Input>
</div>
<div className="col">
<Input placeholder="Last name" type="text">
</Input>
</div>
</Row>
</Form>
</div>
<div className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="nt">
<form>
</span>
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
"col"
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
"First name"
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
"col"
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
"Last name"
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
</form>
</span>
</code>
</pre>
</div>
<h4 id="form-row">
Form row
</h4>
<p>
You may also swap <code className="highlighter-rouge">
.row
</code>
 for <code className="highlighter-rouge">
.form-row
</code>
, a variation of our standard grid row that overrides the default column gutters for tighter and more compact layouts.
</p>
<div className="bd-example" data-example-id="">
<Form>
<div className="form-row">
<div className="col">
<Input placeholder="First name" type="text">
</Input>
</div>
<div className="col">
<Input placeholder="Last name" type="text">
</Input>
</div>
</div>
</Form>
</div>
<div className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="nt">
<form>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"form-row"
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
"col"
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
"First name"
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
"col"
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
"Last name"
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
</form>
</span>
</code>
</pre>
</div>
<p>
More complex layouts can also be created with the grid system.
</p>
<div className="bd-example" data-example-id="">
<Form>
<div className="form-row">
<FormGroup className="col-md-6">
<label htmlFor="inputEmail4">
Email
</label>
<Input id="inputEmail4" placeholder="Email" type="email">
</Input>
</FormGroup>
<FormGroup className="col-md-6">
<label htmlFor="inputPassword4">
Password
</label>
<Input id="inputPassword4" placeholder="Password" type="password">
</Input>
</FormGroup>
</div>
<FormGroup>
<label htmlFor="inputAddress">
Address
</label>
<Input id="inputAddress" placeholder="1234 Main St" type="text">
</Input>
</FormGroup>
<FormGroup>
<label htmlFor="inputAddress2">
Address 2
</label>
<Input id="inputAddress2" placeholder="Apartment, studio, or floor" type="text">
</Input>
</FormGroup>
<div className="form-row">
<FormGroup className="col-md-6">
<label htmlFor="inputCity">
City
</label>
<Input id="inputCity" type="text">
</Input>
</FormGroup>
<FormGroup className="col-md-4">
<label htmlFor="inputState">
State
</label>
<Input id="inputState" type="select">
<option selected="">
Choose...
</option>
<option>
...
</option>
</Input>
</FormGroup>
<FormGroup className="col-md-2">
<label htmlFor="inputZip">
Zip
</label>
<Input id="inputZip" type="text">
</Input>
</FormGroup>
</div>
<FormGroup>
<FormGroup check>
<Label check>
<Input defaultValue="" type="checkbox">
</Input>
 Check me out <span className="form-check-sign">
<span className="check">
</span>
</span>
</Label>
</FormGroup>
</FormGroup>
<Button color="primary" type="submit">
Sign in
</Button>
</Form>
</div>
<div className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="nt">
<form>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"form-row"
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
"form-group col-md-6"
</span>
<span className="nt">
>
</span>
<span className="nt">
<label
</span>
<span className="na">
for=
</span>
<span className="s">
"inputEmail4"
</span>
<span className="nt">
>
</span>
Email<span className="nt">
</label>
</span>
<span className="nt">
<input
</span>
<span className="na">
type=
</span>
<span className="s">
"email"
</span>
<span className="na">
class=
</span>
<span className="s">
"form-control"
</span>
<span className="na">
id=
</span>
<span className="s">
"inputEmail4"
</span>
<span className="na">
placeholder=
</span>
<span className="s">
"Email"
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
"form-group col-md-6"
</span>
<span className="nt">
>
</span>
<span className="nt">
<label
</span>
<span className="na">
for=
</span>
<span className="s">
"inputPassword4"
</span>
<span className="nt">
>
</span>
Password<span className="nt">
</label>
</span>
<span className="nt">
<input
</span>
<span className="na">
type=
</span>
<span className="s">
"password"
</span>
<span className="na">
class=
</span>
<span className="s">
"form-control"
</span>
<span className="na">
id=
</span>
<span className="s">
"inputPassword4"
</span>
<span className="na">
placeholder=
</span>
<span className="s">
"Password"
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
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"form-group"
</span>
<span className="nt">
>
</span>
<span className="nt">
<label
</span>
<span className="na">
for=
</span>
<span className="s">
"inputAddress"
</span>
<span className="nt">
>
</span>
Address<span className="nt">
</label>
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
id=
</span>
<span className="s">
"inputAddress"
</span>
<span className="na">
placeholder=
</span>
<span className="s">
"1234 Main St"
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
"form-group"
</span>
<span className="nt">
>
</span>
<span className="nt">
<label
</span>
<span className="na">
for=
</span>
<span className="s">
"inputAddress2"
</span>
<span className="nt">
>
</span>
Address 2<span className="nt">
</label>
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
id=
</span>
<span className="s">
"inputAddress2"
</span>
<span className="na">
placeholder=
</span>
<span className="s">
"Apartment, studio, or floor"
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
"form-row"
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
"form-group col-md-6"
</span>
<span className="nt">
>
</span>
<span className="nt">
<label
</span>
<span className="na">
for=
</span>
<span className="s">
"inputCity"
</span>
<span className="nt">
>
</span>
City<span className="nt">
</label>
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
id=
</span>
<span className="s">
"inputCity"
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
"form-group col-md-4"
</span>
<span className="nt">
>
</span>
<span className="nt">
<label
</span>
<span className="na">
for=
</span>
<span className="s">
"inputState"
</span>
<span className="nt">
>
</span>
State<span className="nt">
</label>
</span>
<span className="nt">
<select
</span>
<span className="na">
id=
</span>
<span className="s">
"inputState"
</span>
<span className="na">
class=
</span>
<span className="s">
"form-control"
</span>
<span className="nt">
>
</span>
<span className="nt">
<option
</span>
<span className="na">
selected
</span>
<span className="nt">
>
</span>
Choose...<span className="nt">
</option>
</span>
<span className="nt">
<option>
</span>
...<span className="nt">
</option>
</span>
<span className="nt">
</select>
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
"form-group col-md-2"
</span>
<span className="nt">
>
</span>
<span className="nt">
<label
</span>
<span className="na">
for=
</span>
<span className="s">
"inputZip"
</span>
<span className="nt">
>
</span>
Zip<span className="nt">
</label>
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
id=
</span>
<span className="s">
"inputZip"
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
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"form-group"
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
"form-check"
</span>
<span className="nt">
>
</span>
<span className="nt">
<label
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-label"
</span>
<span className="nt">
>
</span>
<span className="nt">
<input
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-input"
</span>
<span className="na">
type=
</span>
<span className="s">
"checkbox"
</span>
<span className="na">
value=
</span>
<span className="s">
""
</span>
<span className="nt">
>
</span>
 Check me out <span className="nt">
<span
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-sign"
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
"check"
</span>
<span className="nt">
></span>
</span>
<span className="nt">
</span>
</span>
<span className="nt">
</label>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
<button
</span>
<span className="na">
type=
</span>
<span className="s">
"submit"
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
Sign in<span className="nt">
</button>
</span>
<span className="nt">
</form>
</span>
</code>
</pre>
</div>
<h2 id="disabled-forms">
Disabled forms
</h2>
<p>
Add the <code className="highlighter-rouge">
disabled
</code>
 boolean attribute on an input to prevent user interactions and make it appear lighter.
</p>
<figure className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="nt">
<input
</span>
<span className="na">
class=
</span>
<span className="s">
"form-control"
</span>
<span className="na">
id=
</span>
<span className="s">
"disabledInput"
</span>
<span className="na">
type=
</span>
<span className="s">
"text"
</span>
<span className="na">
placeholder=
</span>
<span className="s">
"Disabled input here..."
</span>
<span className="na">
disabled
</span>
<span className="nt">
>
</span>
</code>
</pre>
</figure>
<p>
Add the <code className="highlighter-rouge">
disabled
</code>
 attribute to a <code className="highlighter-rouge">
<fieldset>
</code>
 to disable all the controls within.
</p>
<div className="bd-example" data-example-id="">
<Form>
<fieldset disabled>
<FormGroup>
<label htmlFor="disabledTextInput">
Disabled input
</label>
<Input id="disabledTextInput" placeholder="Disabled input" type="text">
</Input>
</FormGroup>
<FormGroup>
<label htmlFor="disabledSelect">
Disabled select menu
</label>
<Input id="disabledSelect" type="select">
<option>
Disabled select
</option>
</Input>
</FormGroup>
<FormGroup check>
<Label check>
<Input defaultValue="" type="checkbox">
</Input>
 Can't check me out <span className="form-check-sign">
<span className="check">
</span>
</span>
</Label>
</FormGroup>
<Button color="primary" type="submit">
Submit
</Button>
</fieldset>
</Form>
</div>
<div className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="nt">
<form>
</span>
<span className="nt">
<fieldset
</span>
<span className="na">
disabled
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
"form-group"
</span>
<span className="nt">
>
</span>
<span className="nt">
<label
</span>
<span className="na">
for=
</span>
<span className="s">
"disabledTextInput"
</span>
<span className="nt">
>
</span>
Disabled input<span className="nt">
</label>
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
id=
</span>
<span className="s">
"disabledTextInput"
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
"Disabled input"
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
"form-group"
</span>
<span className="nt">
>
</span>
<span className="nt">
<label
</span>
<span className="na">
for=
</span>
<span className="s">
"disabledSelect"
</span>
<span className="nt">
>
</span>
Disabled select menu<span className="nt">
</label>
</span>
<span className="nt">
<select
</span>
<span className="na">
id=
</span>
<span className="s">
"disabledSelect"
</span>
<span className="na">
class=
</span>
<span className="s">
"form-control"
</span>
<span className="nt">
>
</span>
<span className="nt">
<option>
</span>
Disabled select<span className="nt">
</option>
</span>
<span className="nt">
</select>
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
"form-check"
</span>
<span className="nt">
>
</span>
<span className="nt">
<label
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-label"
</span>
<span className="nt">
>
</span>
<span className="nt">
<input
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-input"
</span>
<span className="na">
type=
</span>
<span className="s">
"checkbox"
</span>
<span className="na">
value=
</span>
<span className="s">
""
</span>
<span className="nt">
>
</span>
 Can't check me out <span className="nt">
<span
</span>
<span className="na">
class=
</span>
<span className="s">
"form-check-sign"
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
"check"
</span>
<span className="nt">
></span>
</span>
<span className="nt">
</span>
</span>
<span className="nt">
</label>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
<button
</span>
<span className="na">
type=
</span>
<span className="s">
"submit"
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
Submit<span className="nt">
</button>
</span>
<span className="nt">
</fieldset>
</span>
<span className="nt">
</form>
</span>
</code>
</pre>
</div>
<div className="bd-callout bd-callout-warning">
<h4 id="caveat-with-anchors">
Caveat with anchors
</h4>
<p>
By default, browsers will treat all native form controls ( <code className="highlighter-rouge">
<input>
</code>
, <code className="highlighter-rouge">
<select>
</code>
 and <code className="highlighter-rouge">
<button>
</code>
 elements) inside a <code className="highlighter-rouge">
<fieldset disabled>
</code>
 as disabled, preventing both keyboard and mouse interactions on them. However, if your form also includes <code className="highlighter-rouge">
<a ... className="btn btn-*">
</code>
 elements, these will only be given a style of <code className="highlighter-rouge">
pointer-events: none
</code>
. As noted in the section about <a href="#pablo" onClick={e =>
 e.preventDefault()}>
disabled state for buttons
</a>
 (and specifically in the sub-section for anchor elements), this CSS property is not yet standardized and isn’t fully supported in Opera 18 and below, or in Internet Explorer 10, and won’t prevent keyboard users from being able to focus or activate these links. So to be safe, use custom JavaScript to disable such links.
</p>
</div>
<div className="bd-callout bd-callout-danger">
<h4 id="cross-browser-compatibility">
Cross-browser compatibility
</h4>
<p>
While Bootstrap will apply these styles in all browsers, Internet Explorer 11 and below don’t fully support the <code className="highlighter-rouge">
disabled
</code>
 attribute on a <code className="highlighter-rouge">
<fieldset>
</code>
. Use custom JavaScript to disable the fieldset in these browsers.
</p>
</div>
 {/* ### File browser<div className="bd-example" data-example-id="">
<div className="fileinput fileinput-new text-center" data-provides="fileinput">
<div className="fileinput-new thumbnail img-raised">
<img alt="..." src={require("http://style.anu.edu.au/_anu/4/images/placeholders/person_8x10.png")}>
</img>
</div>
<div className="fileinput-preview fileinput-exists thumbnail img-raised">
</div>
<div>
<Button className="btn-raised btn-round btn-file" color="default">
<span className="fileinput-new">
Select image
</span>
<span className="fileinput-exists">
Change
</span>
<input name="..." type="file">
</input>
</Button>
<Button className="btn-round fileinput-exists" color="danger" data-dismiss="fileinput" href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className="fa fa-times">
</i>
 Remove
</Button>
</div>
</div>
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
"fileinput fileinput-new text-center"
</span>
<span className="na">
data-provides=
</span>
<span className="s">
"fileinput"
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
"fileinput-new thumbnail img-raised"
</span>
<span className="nt">
>
</span>
<span className="nt">
<img
</span>
<span className="na">
src=
</span>
<span className="s">
"http://style.anu.edu.au/_anu/4/images/placeholders/person_8x10.png"
</span>
<span className="na">
alt=
</span>
<span className="s">
"..."
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
"fileinput-preview fileinput-exists thumbnail img-raised"
</span>
<span className="nt">
></div>
</span>
<span className="nt">
<div>
</span>
<span className="nt">
<span
</span>
<span className="na">
class=
</span>
<span className="s">
"btn btn-raised btn-round btn-default btn-file"
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
"fileinput-new"
</span>
<span className="nt">
>
</span>
Select image<span className="nt">
</span>
</span>
<span className="nt">
<span
</span>
<span className="na">
class=
</span>
<span className="s">
"fileinput-exists"
</span>
<span className="nt">
>
</span>
Change<span className="nt">
</span>
</span>
<span className="nt">
<input
</span>
<span className="na">
type=
</span>
<span className="s">
"file"
</span>
<span className="na">
name=
</span>
<span className="s">
"..."
</span>
<span className="nt">
/>
</span>
<span className="nt">
</span>
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
"btn btn-danger btn-round fileinput-exists"
</span>
<span className="na">
data-dismiss=
</span>
<span className="s">
"fileinput"
</span>
<span className="nt">
><i
</span>
<span className="na">
class=
</span>
<span className="s">
"fa fa-times"
</span>
<span className="nt">
></i>
</span>
 Remove<span className="nt">
</a>
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
 */}
 <p>
If you want to see more examples and properties please check the official <strong>
<a href="http://getbootstrap.com/docs/4.0/components/forms/" rel="noopener noreferrer" target="_blank">
Bootstrap Documentation
</a>
</strong>
.
</p>
</>
    );
  }
}

export default Forms;
