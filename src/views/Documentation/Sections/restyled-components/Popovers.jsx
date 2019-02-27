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
  Col,
  PopoverBody,
  PopoverHeader
} from "reactstrap";

class Popovers extends React.Component {
  render() {
    return (
      <>
<h1 className="bd-title" id="content">
Popovers
</h1>
<p className="bd-lead">
Documentation and examples for adding Bootstrap popovers, like those found in iOS, to any element on your site.
</p>
<h2 id="static-popover">
Static popover
</h2>
<p>
Four options are available: top, right, bottom, and left aligned.
</p>
<div className="bd-example bd-example-popover-static">
<div className="popover bs-popover-top bs-popover-top-docs">
<div className="arrow">
</div>
<h3 className="popover-header">
Popover top
</h3>
<div className="popover-body">
<p>
Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
</p>
</div>
</div>
<div className="popover bs-popover-right bs-popover-right-docs">
<div className="arrow">
</div>
<h3 className="popover-header">
Popover right
</h3>
<div className="popover-body">
<p>
Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
</p>
</div>
</div>
<div className="popover bs-popover-bottom bs-popover-bottom-docs">
<div className="arrow">
</div>
<h3 className="popover-header">
Popover bottom
</h3>
<div className="popover-body">
<p>
Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
</p>
</div>
</div>
<div className="popover bs-popover-left bs-popover-left-docs">
<div className="arrow">
</div>
<h3 className="popover-header">
Popover left
</h3>
<div className="popover-body">
<p>
Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
</p>
</div>
</div>
<div className="clearfix">
</div>
</div>
<h2 id="live-demo">
Live demo
</h2>
<div className="bd-example" data-example-id="">
<Button color="danger" data-color="primary" data-container="body" data-content="And here's some amazing content. It's very engaging. Right?" id="tooltip197987809" size="lg" type="button">
Click to toggle popover
</Button>
<UncontrolledPopover target="tooltip197987809">
<PopoverHeader>
Popover Title
</PopoverHeader>
<PopoverBody>
And here's some amazing content. It's very engaging. Right?
</PopoverBody>
</UncontrolledPopover>
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
"btn btn-lg btn-danger"
</span>
<span className="na">
data-toggle=
</span>
<span className="s">
"popover"
</span>
<span className="na">
data-container=
</span>
<span className="s">
"body"
</span>
<span className="na">
data-original-title=
</span>
<span className="s">
"Popover Title"
</span>
<span className="na">
data-content=
</span>
<span className="s">
"And here's some amazing content. It's very engaging. Right?"
</span>
<span className="na">
data-color=
</span>
<span className="s">
"primary"
</span>
<span className="nt">
>
</span>
Click to toggle popover<span className="nt">
</button>
</span>
</code>
</pre>
</div>
<h3 id="four-directions">
Four directions
</h3>
<div className="bd-example popover-demo">
<div className="bd-example-popovers">
<Button color="default" data-color="primary" data-container="body" data-content="Here will be some very useful information about his popover." data-placement="left" id="tooltip659361700" type="button">
 On left
</Button>
<UncontrolledPopover placement="left" target="tooltip659361700">
<PopoverHeader>
Popover On Left
</PopoverHeader>
<PopoverBody>
Here will be some very useful information about his popover.
</PopoverBody>
</UncontrolledPopover>
<Button color="default" data-container="body" data-content="Here will be some very useful information about his popover." data-placement="top" id="tooltip988657595" type="button">
 On top
</Button>
<UncontrolledPopover placement="top" target="tooltip988657595">
<PopoverHeader>
Popover on Top
</PopoverHeader>
<PopoverBody>
Here will be some very useful information about his popover.
</PopoverBody>
</UncontrolledPopover>
<Button color="default" data-container="body" data-content="Here will be some very useful information about his popover. Here will be some very useful information about his popover." data-placement="right" id="tooltip262189363" type="button">
 On right
</Button>
<UncontrolledPopover placement="right" target="tooltip262189363">
<PopoverHeader>
Popover on Right
</PopoverHeader>
<PopoverBody>
Here will be some very useful information about his popover. Here will be some very useful information about his popover.
</PopoverBody>
</UncontrolledPopover>
<Button color="default" data-container="body" data-content="Here will be some very useful information about his popover." data-placement="bottom" id="tooltip197545531" type="button">
 On bottom
</Button>
<UncontrolledPopover placement="bottom" target="tooltip197545531">
<PopoverHeader>
Popover on Bottom
</PopoverHeader>
<PopoverBody>
Here will be some very useful information about his popover.
</PopoverBody>
</UncontrolledPopover>
</div>
</div>
<figure className="highlight">
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
"btn btn-secondary"
</span>
<span className="na">
data-container=
</span>
<span className="s">
"body"
</span>
<span className="na">
data-toggle=
</span>
<span className="s">
"popover"
</span>
<span className="na">
data-placement=
</span>
<span className="s">
"top"
</span>
<span className="na">
data-content=
</span>
<span className="s">
"Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
</span>
<span className="nt">
>
</span>
 Popover on top<span className="nt">
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
"btn btn-secondary"
</span>
<span className="na">
data-container=
</span>
<span className="s">
"body"
</span>
<span className="na">
data-toggle=
</span>
<span className="s">
"popover"
</span>
<span className="na">
data-placement=
</span>
<span className="s">
"right"
</span>
<span className="na">
data-content=
</span>
<span className="s">
"Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
</span>
<span className="nt">
>
</span>
 Popover on right<span className="nt">
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
"btn btn-secondary"
</span>
<span className="na">
data-container=
</span>
<span className="s">
"body"
</span>
<span className="na">
data-toggle=
</span>
<span className="s">
"popover"
</span>
<span className="na">
data-placement=
</span>
<span className="s">
"bottom"
</span>
<span className="na">
data-content=
</span>
<span className="s">
"Vivamussagittis lacus vel augue laoreet rutrum faucibus."
</span>
<span className="nt">
>
</span>
 Popover on bottom<span className="nt">
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
"btn btn-secondary"
</span>
<span className="na">
data-container=
</span>
<span className="s">
"body"
</span>
<span className="na">
data-toggle=
</span>
<span className="s">
"popover"
</span>
<span className="na">
data-placement=
</span>
<span className="s">
"left"
</span>
<span className="na">
data-content=
</span>
<span className="s">
"Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
</span>
<span className="nt">
>
</span>
 Popover on left<span className="nt">
</button>
</span>
</code>
</pre>
</figure>
<h3 id="dismiss-on-next-click">
Dismiss on next click
</h3>
<p>
Use the <code className="highlighter-rouge">
focus
</code>
 trigger to dismiss popovers on the user’s next click of a different element than the toggle element.
</p>
<div className="bd-callout bd-callout-danger">
<h4 id="specific-markup-required-for-dismiss-on-next-click">
Specific markup required for dismiss-on-next-click
</h4>
<p>
For proper cross-browser and cross-platform behavior, you must use the <code className="highlighter-rouge">
<a>
</code>
 tag, <em>
not
</em>
 the <code className="highlighter-rouge">
<button>
</code>
 tag, and you also must include a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex">
<code className="highlighter-rouge">
tabindex
</code>
</a>
 attribute.
</p>
</div>
<div className="bd-example" data-example-id="">
<Button color="danger" data-content="And here's some amazing content. It's very engaging. Right?" data-trigger="focus" id="tooltip707294901" role="button" size="lg" tabindex="0" title="Dismissible popover">
Dismissible popover
</Button>
<UncontrolledPopover target="tooltip707294901">
<PopoverBody>
And here's some amazing content. It's very engaging. Right?
</PopoverBody>
</UncontrolledPopover>
</div>
<div className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="nt">
<a
</span>
<span className="na">
tabindex=
</span>
<span className="s">
"0"
</span>
<span className="na">
class=
</span>
<span className="s">
"btn btn-lg btn-danger"
</span>
<span className="na">
role=
</span>
<span className="s">
"button"
</span>
<span className="na">
data-toggle=
</span>
<span className="s">
"popover"
</span>
<span className="na">
data-trigger=
</span>
<span className="s">
"focus"
</span>
<span className="na">
title=
</span>
<span className="s">
"Dismissible popover"
</span>
<span className="na">
data-content=
</span>
<span className="s">
"And here's some amazing content. It's very engaging. Right?"
</span>
<span className="nt">
>
</span>
Dismissible popover<span className="nt">
</a>
</span>
</code>
</pre>
</div>
<figure className="highlight">
<pre>
<code className="language-js" data-lang="js">
<span className="nx">
$
</span>
<span className="p">
(
</span>
<span className="s1">
'.popover-dismiss'
</span>
<span className="p">
).
</span>
<span className="nx">
popover
</span>
<span className="p">
({
</span>
<span className="na">
trigger
</span>
<span className="p">
:
</span>
<span className="s1">
'focus'
</span>
<span className="p">
})
</span>
</code>
</pre>
</figure>
<p>
If you want to see more examples and properties please check the official <strong>
<a href="http://getbootstrap.com/docs/4.0/components/popovers/" rel="noopener noreferrer" target="_blank">
Bootstrap Documentation
</a>
</strong>
.
</p>
</>
    );
  }
}

export default Popovers;
