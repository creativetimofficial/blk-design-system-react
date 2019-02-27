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

class Images extends React.Component {
  render() {
    return (
      <>
<h1 className="bd-title" id="content">
Images
</h1>
<p className="bd-lead">
Documentation and examples for opting images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to them—all via classes.
</p>
<h2 id="responsive-images">
Responsive images
</h2>
<p>
Images in Bootstrap are made responsive with <code className="highlighter-rouge">
.img-fluid
</code>
. <code className="highlighter-rouge">
max-width: 100%;
</code>
 and <code className="highlighter-rouge">
height: auto;
</code>
 are applied to the image so that it scales with the parent element.
</p>
<div className="bd-example">
<img alt="..." className="img-fluid" data-src="holder.js/100px250">
</img>
</div>
<figure className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="nt">
<img
</span>
<span className="na">
src=
</span>
<span className="s">
"..."
</span>
<span className="na">
class=
</span>
<span className="s">
"img-fluid"
</span>
<span className="na">
alt=
</span>
<span className="s">
"Responsive image"
</span>
<span className="nt">
>
</span>
</code>
</pre>
</figure>
<div className="bd-callout bd-callout-warning">
<h4 id="svg-images-and-ie-10">
SVG images and IE 10
</h4>
<p>
In Internet Explorer 10, SVG images with <code className="highlighter-rouge">
.img-fluid
</code>
 are disproportionately sized. To fix this, add <code className="highlighter-rouge">
width: 100% \9;
</code>
 where necessary. This fix improperly sizes other image formats, so Bootstrap doesn’t apply it automatically.
</p>
</div>
<h2 id="image-thumbnails">
Image thumbnails
</h2>
<p>
In addition to our <a href="/docs/1.0/utilities/borders/">
border-radius utilities
</a>
, you can use <code className="highlighter-rouge">
.img-thumbnail
</code>
 to give an image a rounded 1px border appearance.
</p>
<div className="bd-example bd-example-images">
<img alt="..." className="img-thumbnail" data-src="holder.js/200x200">
</img>
</div>
<figure className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="nt">
<img
</span>
<span className="na">
src=
</span>
<span className="s">
"..."
</span>
<span className="na">
alt=
</span>
<span className="s">
"..."
</span>
<span className="na">
class=
</span>
<span className="s">
"img-thumbnail"
</span>
<span className="nt">
>
</span>
</code>
</pre>
</figure>
<h2 id="aligning-images">
Aligning images
</h2>
<p>
Align images with the <a href="/docs/1.0/utilities/float">
helper float classes
</a>
 or <a href="#pablo" onClick={e =>
 e.preventDefault()}>
text alignment classes
</a>
. <code className="highlighter-rouge">
block
</code>
-level images can be centered using <a href="#pablo" onClick={e =>
 e.preventDefault()}>
the <code className="highlighter-rouge">
.mx-auto
</code>
 margin utility class
</a>
.
</p>
<div className="bd-example bd-example-images">
<img alt="..." className="rounded float-left" data-src="holder.js/200x200">
</img>
<img alt="..." className="rounded float-right" data-src="holder.js/200x200">
</img>
</div>
<figure className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="nt">
<img
</span>
<span className="na">
src=
</span>
<span className="s">
"..."
</span>
<span className="na">
class=
</span>
<span className="s">
"rounded float-left"
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
<img
</span>
<span className="na">
src=
</span>
<span className="s">
"..."
</span>
<span className="na">
class=
</span>
<span className="s">
"rounded float-right"
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
</code>
</pre>
</figure>
<div className="bd-example bd-example-images">
<img alt="..." className="rounded mx-auto d-block" data-src="holder.js/200x200">
</img>
</div>
<figure className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="nt">
<img
</span>
<span className="na">
src=
</span>
<span className="s">
"..."
</span>
<span className="na">
class=
</span>
<span className="s">
"rounded mx-auto d-block"
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
</code>
</pre>
</figure>
<div className="bd-example bd-example-images">
<div className="text-center">
<img alt="..." className="rounded" data-src="holder.js/200x200">
</img>
</div>
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
"text-center"
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
"..."
</span>
<span className="na">
class=
</span>
<span className="s">
"rounded"
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
</code>
</pre>
</figure>
<h2 id="picture">
Picture
</h2>
<p>
If you are using the <code className="highlighter-rouge">
<picture>
</code>
 element to specify multiple <code className="highlighter-rouge">
<source>
</code>
 elements for a specific <code className="highlighter-rouge">
<img>
</code>
, make sure to add the <code className="highlighter-rouge">
.img-*
</code>
 classes to the <code className="highlighter-rouge">
<img>
</code>
 and not to the <code className="highlighter-rouge">
<picture>
</code>
 tag.
</p>
<figure className="highlight">
<pre>
<code className="language-html" data-lang="html">
​<span className="nt">
<picture>
</span>
<span className="nt">
<source
</span>
<span className="na">
srcset=
</span>
<span className="s">
"..."
</span>
<span className="na">
type=
</span>
<span className="s">
"image/svg+xml"
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
"..."
</span>
<span className="na">
class=
</span>
<span className="s">
"img-fluid img-thumbnail"
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
</picture>
</span>
</code>
</pre>
</figure>
</>
    );
  }
}

export default Images;
