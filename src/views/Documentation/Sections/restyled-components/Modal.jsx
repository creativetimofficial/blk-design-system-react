import React from "react";

// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Modal,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

class Modal extends React.Component {
  render() {
    return (
      <>
<h1 className="bd-title" id="content">
Modal
</h1>
<p className="bd-lead">
Use Bootstrap's JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.
</p>
<h2 id="examples">
Examples
</h2>
<h3 id="modal-components">
Modal components
</h3>
<p>
Below is a <em>
static
</em>
 modal example (meaning its <code className="highlighter-rouge">
position
</code>
 and <code className="highlighter-rouge">
display
</code>
 have been overridden). Included are the modal header, modal body (required for <code className="highlighter-rouge">
padding
</code>
), and modal footer (optional). We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action.
</p>
<div className="bd-example bd-example-modal">
<Modal>
<div className="modal-header">
<h5 className="modal-title">
Modal title
</h5>
<button aria-label="Close" className="close" data-dismiss="modal" type="button">
<span aria-hidden={true}>
×
</span>
</button>
</div>
<div className="modal-body">
<p>
Modal body text goes here.
</p>
</div>
<div className="modal-footer">
<Button color="secondary" data-dismiss="modal" type="button">
Close
</Button>
<Button color="primary" type="button">
Save changes
</Button>
</div>
</Modal>
</div>
<figure className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"modal"
</span>
<span className="na">
tabindex=
</span>
<span className="s">
"-1"
</span>
<span className="na">
role=
</span>
<span className="s">
"dialog"
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
"modal-dialog"
</span>
<span className="na">
role=
</span>
<span className="s">
"document"
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
"modal-content"
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
"modal-header"
</span>
<span className="nt">
>
</span>
<span className="nt">
<h5
</span>
<span className="na">
class=
</span>
<span className="s">
"modal-title"
</span>
<span className="nt">
>
</span>
Modal title<span className="nt">
</h5>
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
"close"
</span>
<span className="na">
data-dismiss=
</span>
<span className="s">
"modal"
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
<span
</span>
<span className="na">
aria-hidden=
</span>
<span className="s">
"true"
</span>
<span className="nt">
>
</span>
<span className="ni">
&amp;times;
</span>
<span className="nt">
</span>
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
"modal-body"
</span>
<span className="nt">
>
</span>
<span className="nt">
<p>
</span>
Modal body text goes here.<span className="nt">
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
"modal-footer"
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
"btn btn-primary"
</span>
<span className="nt">
>
</span>
Save changes<span className="nt">
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
data-dismiss=
</span>
<span className="s">
"modal"
</span>
<span className="nt">
>
</span>
Close<span className="nt">
</button>
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
</figure>
<h3 id="live-demo">
Live demo
</h3>
<p>
Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.
</p>
<Modal>
<div className="modal-header">
<h5 className="modal-title" id="exampleModalLiveLabel">
Modal title
</h5>
<button aria-label="Close" className="close" data-dismiss="modal" type="button">
<span aria-hidden={true}>
×
</span>
</button>
</div>
<div className="modal-body">
<p>
Woohoo, you're reading this text in a modal!
</p>
</div>
<div className="modal-footer">
<Button color="secondary" data-dismiss="modal" type="button">
Close
</Button>
<Button color="primary" type="button">
Save changes
</Button>
</div>
</Modal>
<div className="bd-example">
<Button color="primary" data-target="#exampleModalLive" data-toggle="modal" type="button">
 Launch demo modal
</Button>
</div>
<figure className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="c">
<!-- Button trigger modal -->
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
"btn btn-primary"
</span>
<span className="na">
data-toggle=
</span>
<span className="s">
"modal"
</span>
<span className="na">
data-target=
</span>
<span className="s">
"#exampleModal"
</span>
<span className="nt">
>
</span>
 Launch demo modal<span className="nt">
</button>
</span>
<span className="c">
<!-- Modal -->
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"modal fade"
</span>
<span className="na">
id=
</span>
<span className="s">
"exampleModal"
</span>
<span className="na">
tabindex=
</span>
<span className="s">
"-1"
</span>
<span className="na">
role=
</span>
<span className="s">
"dialog"
</span>
<span className="na">
aria-labelledby=
</span>
<span className="s">
"exampleModalLabel"
</span>
<span className="na">
aria-hidden=
</span>
<span className="s">
"true"
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
"modal-dialog"
</span>
<span className="na">
role=
</span>
<span className="s">
"document"
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
"modal-content"
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
"modal-header"
</span>
<span className="nt">
>
</span>
<span className="nt">
<h5
</span>
<span className="na">
class=
</span>
<span className="s">
"modal-title"
</span>
<span className="na">
id=
</span>
<span className="s">
"exampleModalLabel"
</span>
<span className="nt">
>
</span>
Modal title<span className="nt">
</h5>
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
"close"
</span>
<span className="na">
data-dismiss=
</span>
<span className="s">
"modal"
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
<span
</span>
<span className="na">
aria-hidden=
</span>
<span className="s">
"true"
</span>
<span className="nt">
>
</span>
<span className="ni">
&amp;times;
</span>
<span className="nt">
</span>
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
"modal-body"
</span>
<span className="nt">
>
</span>
 ... <span className="nt">
</div>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"modal-footer"
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
<span className="na">
data-dismiss=
</span>
<span className="s">
"modal"
</span>
<span className="nt">
>
</span>
Close<span className="nt">
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
"btn btn-primary"
</span>
<span className="nt">
>
</span>
Save changes<span className="nt">
</button>
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
</figure>
<h3 id="scrolling-long-content">
Scrolling long content
</h3>
<p>
When modals become too long for the user’s viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.
</p>
<Modal>
<div className="modal-header">
<h5 className="modal-title" id="exampleModalLongTitle">
Modal title
</h5>
<button aria-label="Close" className="close" data-dismiss="modal" type="button">
<span aria-hidden={true}>
×
</span>
</button>
</div>
<div className="modal-body">
<p>
Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
</p>
<p>
Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
</p>
<p>
Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
</p>
<p>
Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
</p>
<p>
Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
</p>
<p>
Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
</p>
<p>
Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
</p>
<p>
Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
</p>
<p>
Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
</p>
<p>
Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
</p>
<p>
Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
</p>
<p>
Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
</p>
<p>
Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
</p>
<p>
Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
</p>
<p>
Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
</p>
<p>
Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
</p>
<p>
Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
</p>
<p>
Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
</p>
</div>
<div className="modal-footer">
<Button color="secondary" data-dismiss="modal" type="button">
Close
</Button>
<Button color="primary" type="button">
Save changes
</Button>
</div>
</Modal>
<div className="bd-example">
<Button color="primary" data-target="#exampleModalLong" data-toggle="modal" type="button">
 Launch demo modal
</Button>
</div>
<figure className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="c">
<!-- Button trigger modal -->
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
"btn btn-primary"
</span>
<span className="na">
data-toggle=
</span>
<span className="s">
"modal"
</span>
<span className="na">
data-target=
</span>
<span className="s">
"#exampleModalLong"
</span>
<span className="nt">
>
</span>
 Launch demo modal<span className="nt">
</button>
</span>
<span className="c">
<!-- Modal -->
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"modal fade"
</span>
<span className="na">
id=
</span>
<span className="s">
"exampleModalLong"
</span>
<span className="na">
tabindex=
</span>
<span className="s">
"-1"
</span>
<span className="na">
role=
</span>
<span className="s">
"dialog"
</span>
<span className="na">
aria-labelledby=
</span>
<span className="s">
"exampleModalLongTitle"
</span>
<span className="na">
aria-hidden=
</span>
<span className="s">
"true"
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
"modal-dialog"
</span>
<span className="na">
role=
</span>
<span className="s">
"document"
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
"modal-content"
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
"modal-header"
</span>
<span className="nt">
>
</span>
<span className="nt">
<h5
</span>
<span className="na">
class=
</span>
<span className="s">
"modal-title"
</span>
<span className="na">
id=
</span>
<span className="s">
"exampleModalLongTitle"
</span>
<span className="nt">
>
</span>
Modal title<span className="nt">
</h5>
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
"close"
</span>
<span className="na">
data-dismiss=
</span>
<span className="s">
"modal"
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
<span
</span>
<span className="na">
aria-hidden=
</span>
<span className="s">
"true"
</span>
<span className="nt">
>
</span>
<span className="ni">
&amp;times;
</span>
<span className="nt">
</span>
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
"modal-body"
</span>
<span className="nt">
>
</span>
 ... <span className="nt">
</div>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"modal-footer"
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
<span className="na">
data-dismiss=
</span>
<span className="s">
"modal"
</span>
<span className="nt">
>
</span>
Close<span className="nt">
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
"btn btn-primary"
</span>
<span className="nt">
>
</span>
Save changes<span className="nt">
</button>
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
</figure>
<h3 id="tooltips-and-popovers">
Tooltips and popovers
</h3>
<p>
<a href="/docs/1.0/components/tooltips/">
Tooltips
</a>
 and <a href="/docs/1.0/components/popovers/">
popovers
</a>
 can be placed within modals as needed. When modals are closed, any tooltips and popovers within are also automatically dismissed.
</p>
<Modal>
<div className="modal-header">
<h5 className="modal-title" id="exampleModalPopoversLabel">
Modal title
</h5>
<button aria-label="Close" className="close" data-dismiss="modal" type="button">
<span aria-hidden={true}>
×
</span>
</button>
</div>
<div className="modal-body">
<h5>
Popover in a modal
</h5>
<p>
This <Button className="popover-test" color="secondary" data-container="#exampleModalPopovers" data-content="Popover body content is set in this attribute." href="#pablo" onClick={e =>
 e.preventDefault()} role="button" title="Popover title">
button
</Button>
 triggers a popover on click.
</p>
<hr>
</hr>
<h5>
Tooltips in a modal
</h5>
<p>
<a className="tooltip-test" data-container="#exampleModalPopovers" href="#pablo" onClick={e =>
 e.preventDefault()} title="Tooltip">
This link
</a>
 and <a className="tooltip-test" data-container="#exampleModalPopovers" href="#pablo" onClick={e =>
 e.preventDefault()} title="Tooltip">
that link
</a>
 have tooltips on hover.
</p>
</div>
<div className="modal-footer">
<Button color="secondary" data-dismiss="modal" type="button">
Close
</Button>
<Button color="primary" type="button">
Save changes
</Button>
</div>
</Modal>
<div className="bd-example">
<Button color="primary" data-target="#exampleModalPopovers" data-toggle="modal" type="button">
 Launch demo modal
</Button>
</div>
<figure className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"modal-body"
</span>
<span className="nt">
>
</span>
<span className="nt">
<h5>
</span>
Popover in a modal<span className="nt">
</h5>
</span>
<span className="nt">
<p>
</span>
This <span className="nt">
<a
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
class=
</span>
<span className="s">
"btn btn-secondary popover-test"
</span>
<span className="na">
title=
</span>
<span className="s">
"Popover title"
</span>
<span className="na">
data-content=
</span>
<span className="s">
"Popover body content is set in this attribute."
</span>
<span className="nt">
>
</span>
button<span className="nt">
</a>
</span>
 triggers a popover on click.<span className="nt">
</p>
</span>
<span className="nt">
<hr>
</span>
<span className="nt">
<h5>
</span>
Tooltips in a modal<span className="nt">
</h5>
</span>
<span className="nt">
<p><a
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
"tooltip-test"
</span>
<span className="na">
title=
</span>
<span className="s">
"Tooltip"
</span>
<span className="nt">
>
</span>
This link<span className="nt">
</a>
</span>
 and <span className="nt">
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
"tooltip-test"
</span>
<span className="na">
title=
</span>
<span className="s">
"Tooltip"
</span>
<span className="nt">
>
</span>
that link<span className="nt">
</a>
</span>
 have tooltips on hover.<span className="nt">
</p>
</span>
<span className="nt">
</div>
</span>
</code>
</pre>
</figure>
<h3 id="embedding-youtube-videos">
Embedding YouTube videos
</h3>
<p>
Embedding YouTube videos in modals requires additional JavaScript not in Bootstrap to automatically stop playback and more. <a href="https://stackoverflow.com/questions/18622508/bootstrap-3-and-youtube-in-modal">
See this helpful Stack Overflow post
</a>
 for more information.
</p>
<h2 id="optional-sizes">
Optional sizes
</h2>
<p>
Modals have two optional sizes, available via modifier classes to be placed on a <code className="highlighter-rouge">
.modal-dialog
</code>
. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.
</p>
<div className="bd-example">
<Button color="primary" data-target=".bd-example-modal-lg" data-toggle="modal" type="button">
Large modal
</Button>
<Button color="primary" data-target=".bd-example-modal-sm" data-toggle="modal" type="button">
Small modal
</Button>
</div>
<figure className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="c">
<!-- Large modal -->
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
"btn btn-primary"
</span>
<span className="na">
data-toggle=
</span>
<span className="s">
"modal"
</span>
<span className="na">
data-target=
</span>
<span className="s">
".bd-example-modal-lg"
</span>
<span className="nt">
>
</span>
Large modal<span className="nt">
</button>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"modal fade bd-example-modal-lg"
</span>
<span className="na">
tabindex=
</span>
<span className="s">
"-1"
</span>
<span className="na">
role=
</span>
<span className="s">
"dialog"
</span>
<span className="na">
aria-labelledby=
</span>
<span className="s">
"myLargeModalLabel"
</span>
<span className="na">
aria-hidden=
</span>
<span className="s">
"true"
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
"modal-dialog modal-lg"
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
"modal-content"
</span>
<span className="nt">
>
</span>
 ... <span className="nt">
</div>
</span>
<span className="nt">
</div>
</span>
<span className="nt">
</div>
</span>
<span className="c">
<!-- Small modal -->
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
"btn btn-primary"
</span>
<span className="na">
data-toggle=
</span>
<span className="s">
"modal"
</span>
<span className="na">
data-target=
</span>
<span className="s">
".bd-example-modal-sm"
</span>
<span className="nt">
>
</span>
Small modal<span className="nt">
</button>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"modal fade bd-example-modal-sm"
</span>
<span className="na">
tabindex=
</span>
<span className="s">
"-1"
</span>
<span className="na">
role=
</span>
<span className="s">
"dialog"
</span>
<span className="na">
aria-labelledby=
</span>
<span className="s">
"mySmallModalLabel"
</span>
<span className="na">
aria-hidden=
</span>
<span className="s">
"true"
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
"modal-dialog modal-sm"
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
"modal-content"
</span>
<span className="nt">
>
</span>
 ... <span className="nt">
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
</figure>
<Modal className="modal-lg" modalclassName="bd-example-modal-lg">
<div className="modal-header">
<h4 className="modal-title" id="myLargeModalLabel">
Large modal
</h4>
<button aria-label="Close" className="close" data-dismiss="modal" type="button">
<span aria-hidden={true}>
×
</span>
</button>
</div>
<div className="modal-body">
 ...
</div>
</Modal>
<Modal className="modal-sm" modalclassName="bd-example-modal-sm">
<div className="modal-header">
<h4 className="modal-title" id="mySmallModalLabel">
Small modal
</h4>
<button aria-label="Close" className="close" data-dismiss="modal" type="button">
<span aria-hidden={true}>
×
</span>
</button>
</div>
<div className="modal-body">
 ...
</div>
</Modal>
<h2 id="usage">
Usage
</h2>
<p>
The modal plugin toggles your hidden content on demand, via data attributes or JavaScript. It also adds <code className="highlighter-rouge">
.modal-open
</code>
 to the <code className="highlighter-rouge">
<body>
</code>
 to override default scrolling behavior and generates a <code className="highlighter-rouge">
.modal-backdrop
</code>
 to provide a click area for dismissing shown modals when clicking outside the modal.
</p>
<h3 id="via-data-attributes">
Via data attributes
</h3>
<p>
Activate a modal without writing JavaScript. Set <code className="highlighter-rouge">
data-toggle="modal"
</code>
 on a controller element, like a button, along with a <code className="highlighter-rouge">
data-target="#foo"
</code>
 or <code className="highlighter-rouge">
href="#foo"
</code>
 to target a specific modal to toggle.
</p>
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
data-toggle=
</span>
<span className="s">
"modal"
</span>
<span className="na">
data-target=
</span>
<span className="s">
"#myModal"
</span>
<span className="nt">
>
</span>
Launch modal<span className="nt">
</button>
</span>
</code>
</pre>
</figure>
<h3 id="via-javascript">
Via JavaScript
</h3>
<p>
Call a modal with id <code className="highlighter-rouge">
myModal
</code>
 with a single line of JavaScript:
</p>
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
'#myModal'
</span>
<span className="p">
).
</span>
<span className="nx">
modal
</span>
<span className="p">
(
</span>
<span className="nx">
options
</span>
<span className="p">
)
</span>
</code>
</pre>
</figure>
<h3 id="options">
Options
</h3>
<p>
Options can be passed via data attributes or JavaScript. For data attributes, append the option name to <code className="highlighter-rouge">
data-
</code>
, as in <code className="highlighter-rouge">
data-backdrop=""
</code>
.
</p>
<div className="bd-example" data-example-id="">
<Table responsive>
<tr>
<th style={{width: "100px",}}>
Name
</th>
<th style={{width: "50px",}}>
Type
</th>
<th style={{width: "50px",}}>
Default
</th>
<th>
Description
</th>
</tr>
</Table>
</div>
<div className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="nt">
<table
</span>
<span className="na">
class=
</span>
<span className="s">
"table table-striped table-responsive"
</span>
<span className="nt">
>
</span>
<span className="nt">
<thead>
</span>
<span className="nt">
<tr>
</span>
<span className="nt">
<th
</span>
<span className="na">
style=
</span>
<span className="s">
"width: 100px;"
</span>
<span className="nt">
>
</span>
Name<span className="nt">
</th>
</span>
<span className="nt">
<th
</span>
<span className="na">
style=
</span>
<span className="s">
"width: 50px;"
</span>
<span className="nt">
>
</span>
Type<span className="nt">
</th>
</span>
<span className="nt">
<th
</span>
<span className="na">
style=
</span>
<span className="s">
"width: 50px;"
</span>
<span className="nt">
>
</span>
Default<span className="nt">
</th>
</span>
<span className="nt">
<th>
</span>
Description<span className="nt">
</th>
</span>
<span className="nt">
</tr>
</span>
<span className="nt">
</thead>
</span>
<span className="nt">
<tbody>
</span>
<span className="nt">
<tr>
</span>
<span className="nt">
<td>
</span>
backdrop<span className="nt">
</td>
</span>
<span className="nt">
<td>
</span>
boolean or the string <span className="nt">
<code>
</span>
'static'<span className="nt">
</code></td>
</span>
<span className="nt">
<td>
</span>
true<span className="nt">
</td>
</span>
<span className="nt">
<td>
</span>
Includes a modal-backdrop element. Alternatively, specify <span className="nt">
<code>
</span>
static<span className="nt">
</code>
</span>
 for a backdrop which doesn't close the modal on click.<span className="nt">
</td>
</span>
<span className="nt">
</tr>
</span>
<span className="nt">
<tr>
</span>
<span className="nt">
<td>
</span>
keyboard<span className="nt">
</td>
</span>
<span className="nt">
<td>
</span>
boolean<span className="nt">
</td>
</span>
<span className="nt">
<td>
</span>
true<span className="nt">
</td>
</span>
<span className="nt">
<td>
</span>
Closes the modal when escape key is pressed<span className="nt">
</td>
</span>
<span className="nt">
</tr>
</span>
<span className="nt">
<tr>
</span>
<span className="nt">
<td>
</span>
focus<span className="nt">
</td>
</span>
<span className="nt">
<td>
</span>
boolean<span className="nt">
</td>
</span>
<span className="nt">
<td>
</span>
true<span className="nt">
</td>
</span>
<span className="nt">
<td>
</span>
Puts the focus on the modal when initialized.<span className="nt">
</td>
</span>
<span className="nt">
</tr>
</span>
<span className="nt">
<tr>
</span>
<span className="nt">
<td>
</span>
show<span className="nt">
</td>
</span>
<span className="nt">
<td>
</span>
boolean<span className="nt">
</td>
</span>
<span className="nt">
<td>
</span>
true<span className="nt">
</td>
</span>
<span className="nt">
<td>
</span>
Shows the modal when initialized.<span className="nt">
</td>
</span>
<span className="nt">
</tr>
</span>
<span className="nt">
</tbody>
</span>
<span className="nt">
</table>
</span>
</code>
</pre>
</div>
<p>
If you want to see more examples and properties please check the official <strong>
<a href="http://getbootstrap.com/docs/4.0/components/modal/" rel="noopener noreferrer" target="_blank">
Bootstrap Documentation
</a>
</strong>
.
</p>
</>
    );
  }
}

export default Modal;
