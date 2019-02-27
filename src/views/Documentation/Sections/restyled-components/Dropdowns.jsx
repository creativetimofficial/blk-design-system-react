import React from "react";

// reactstrap components
import {
  Button,
  ButtonGroup,
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

class Dropdowns extends React.Component {
  render() {
    return (
      <>
<h1 className="bd-title" id="content">
Dropdowns
</h1>
<p className="bd-lead">
Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.
</p>
<h2 id="examples">
Examples
</h2>
<p>
Wrap the dropdown’s toggle (your button or link) and the dropdown menu within <code className="highlighter-rouge">
.dropdown
</code>
, or another element that declares <code className="highlighter-rouge">
position: relative;
</code>
. Dropdowns can be triggered from <code className="highlighter-rouge">
<a>
</code>
 or <code className="highlighter-rouge">
<button>
</code>
 elements to better fit your potential needs.
</p>
<h3 id="single-button-dropdowns">
Single button dropdowns
</h3>
<p>
Any single <code className="highlighter-rouge">
.btn
</code>
 can be turned into a dropdown toggle with some markup changes. Here’s how you can put them to work with either <code className="highlighter-rouge">
<button>
</code>
 elements:
</p>
<div className="bd-example" data-example-id="">
<UncontrolledDropdown>
<DropdownToggle aria-expanded={false} aria-haspopup={true} caret color="secondary" data-toggle="dropdown" id="dropdownMenuButton" type="button">
 Dropdown button
</DropdownToggle>
<DropdownMenu aria-labelledby="dropdownMenuButton">
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
"dropdown"
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
"btn btn-secondary dropdown-toggle"
</span>
<span className="na">
type=
</span>
<span className="s">
"button"
</span>
<span className="na">
id=
</span>
<span className="s">
"dropdownMenuButton"
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
 Dropdown button <span className="nt">
</button>
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
"dropdownMenuButton"
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
</div>
</span>
</code>
</pre>
</div>
<p>
And with <code className="highlighter-rouge">
<a>
</code>
 elements:
</p>
<div className="bd-example" data-example-id="">
<UncontrolledDropdown className="show">
<DropdownToggle aria-expanded={false} aria-haspopup={true} caret color="secondary" data-toggle="dropdown" href="#pablo" id="dropdownMenuLink" onClick={e =>
 e.preventDefault()} role="button">
 Dropdown link
</DropdownToggle>
<DropdownMenu aria-labelledby="dropdownMenuLink">
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
"dropdown show"
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
"btn btn-secondary dropdown-toggle"
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
id=
</span>
<span className="s">
"dropdownMenuLink"
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
"dropdownMenuLink"
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
</div>
</span>
</code>
</pre>
</div>
<p>
The best part is you can do this with any button variant, too:
</p>
<div className="bd-example">
<ButtonGroup className="dropdown">
<DropdownToggle aria-expanded={false} aria-haspopup={true} caret color="primary" data-toggle="dropdown" type="button">
Primary
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
</ButtonGroup>
 {/* /btn-group */}
 <ButtonGroup className="dropdown">
<DropdownToggle aria-expanded={false} aria-haspopup={true} caret color="secondary" data-toggle="dropdown" type="button">
Secondary
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
</ButtonGroup>
 {/* /btn-group */}
 <ButtonGroup className="dropdown">
<DropdownToggle aria-expanded={false} aria-haspopup={true} caret color="success" data-toggle="dropdown" type="button">
Success
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
</ButtonGroup>
 {/* /btn-group */}
 <ButtonGroup className="dropdown">
<DropdownToggle aria-expanded={false} aria-haspopup={true} caret color="info" data-toggle="dropdown" type="button">
Info
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
</ButtonGroup>
 {/* /btn-group */}
 <ButtonGroup className="dropdown">
<DropdownToggle aria-expanded={false} aria-haspopup={true} caret color="warning" data-toggle="dropdown" type="button">
Warning
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
</ButtonGroup>
 {/* /btn-group */}
 <ButtonGroup className="dropdown">
<DropdownToggle aria-expanded={false} aria-haspopup={true} caret color="danger" data-toggle="dropdown" type="button">
Danger
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
</ButtonGroup>
 {/* /btn-group */}

</div>
<figure className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="c">
<!-- Example single danger button -->
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"btn-group"
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
class=
</span>
<span className="s">
"btn btn-danger dropdown-toggle"
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
 Action <span className="nt">
</button>
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
</div>
</span>
</code>
</pre>
</figure>
<h3 id="split-button-dropdowns">
Split button dropdowns
</h3>
<p>
Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of <code className="highlighter-rouge">
.dropdown-toggle-split
</code>
 for proper spacing around the dropdown caret.
</p>
<p>
We use this extra class to reduce the horizontal <code className="highlighter-rouge">
padding
</code>
 on either side of the caret by 25% and remove the <code className="highlighter-rouge">
margin-left
</code>
 that’s added for regular button dropdowns. Those extra changes keep the caret centered in the split button and provide a more appropriately sized hit area next to the main button.
</p>
<div className="bd-example">
<ButtonGroup>
<Button color="primary" type="button">
Primary
</Button>
<DropdownToggle aria-expanded={false} aria-haspopup={true} caret className="dropdown-toggle-split" color="primary" data-toggle="dropdown" type="button">
<span className="sr-only">
Toggle Dropdown
</span>
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
</ButtonGroup>
 {/* /btn-group */}
 <ButtonGroup>
<Button color="secondary" type="button">
Secondary
</Button>
<DropdownToggle aria-expanded={false} aria-haspopup={true} caret className="dropdown-toggle-split" color="secondary" data-toggle="dropdown" type="button">
<span className="sr-only">
Toggle Dropdown
</span>
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
</ButtonGroup>
 {/* /btn-group */}
 <ButtonGroup>
<Button color="success" type="button">
Success
</Button>
<DropdownToggle aria-expanded={false} aria-haspopup={true} caret className="dropdown-toggle-split" color="success" data-toggle="dropdown" type="button">
<span className="sr-only">
Toggle Dropdown
</span>
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
</ButtonGroup>
 {/* /btn-group */}
 <ButtonGroup>
<Button color="info" type="button">
Info
</Button>
<DropdownToggle aria-expanded={false} aria-haspopup={true} caret className="dropdown-toggle-split" color="info" data-toggle="dropdown" type="button">
<span className="sr-only">
Toggle Dropdown
</span>
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
</ButtonGroup>
 {/* /btn-group */}
 <ButtonGroup>
<Button color="warning" type="button">
Warning
</Button>
<DropdownToggle aria-expanded={false} aria-haspopup={true} caret className="dropdown-toggle-split" color="warning" data-toggle="dropdown" type="button">
<span className="sr-only">
Toggle Dropdown
</span>
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
</ButtonGroup>
 {/* /btn-group */}
 <ButtonGroup>
<Button color="danger" type="button">
Danger
</Button>
<DropdownToggle aria-expanded={false} aria-haspopup={true} caret className="dropdown-toggle-split" color="danger" data-toggle="dropdown" type="button">
<span className="sr-only">
Toggle Dropdown
</span>
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
</ButtonGroup>
 {/* /btn-group */}

</div>
<figure className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="c">
<!-- Example split danger button -->
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"btn-group"
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
class=
</span>
<span className="s">
"btn btn-danger"
</span>
<span className="nt">
>
</span>
Action<span className="nt">
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
"btn btn-danger dropdown-toggle dropdown-toggle-split"
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
Toggle Dropdown<span className="nt">
</span>
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
</div>
</span>
</code>
</pre>
</figure>
<h2 id="dropup-variation">
Dropup variation
</h2>
<p>
Trigger dropdown menus above elements by adding <code className="highlighter-rouge">
.dropup
</code>
 to the parent element.
</p>
<div className="bd-example">
<ButtonGroup className="dropup">
<DropdownToggle aria-expanded={false} aria-haspopup={true} caret color="secondary" data-toggle="dropdown" type="button">
 Dropup
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
</ButtonGroup>
<ButtonGroup className="dropup">
<Button color="secondary" type="button">
 Split dropup
</Button>
<DropdownToggle aria-expanded={false} aria-haspopup={true} caret className="dropdown-toggle-split" color="secondary" data-toggle="dropdown" type="button">
<span className="sr-only">
Toggle Dropdown
</span>
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
</ButtonGroup>
</div>
<figure className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="c">
<!-- Default dropup button -->
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"btn-group dropup"
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
class=
</span>
<span className="s">
"btn btn-secondary"
</span>
<span className="nt">
>
</span>
Dropup<span className="nt">
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
"btn btn-secondary dropdown-toggle"
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
Toggle Dropdown<span className="nt">
</span>
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
"dropdown-menu"
</span>
<span className="nt">
>
</span>
<span className="c">
<!-- Dropdown menu links -->
</span>
<span className="nt">
</div>
</span>
<span className="nt">
</div>
</span>
<span className="c">
<!-- Split dropup button -->
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"btn-group dropup"
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
class=
</span>
<span className="s">
"btn btn-secondary"
</span>
<span className="nt">
>
</span>
 Split dropup <span className="nt">
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
"btn btn-secondary dropdown-toggle"
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
Toggle Dropdown<span className="nt">
</span>
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
"dropdown-menu"
</span>
<span className="nt">
>
</span>
<span className="c">
<!-- Dropdown menu links -->
</span>
<span className="nt">
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
<a href="http://getbootstrap.com/docs/4.0/components/dropdowns/" rel="noopener noreferrer" target="_blank">
Bootstrap Documentation
</a>
</strong>
.
</p>
</>
    );
  }
}

export default Dropdowns;
