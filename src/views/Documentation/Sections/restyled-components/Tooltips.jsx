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
  UncontrolledTooltip
} from "reactstrap";

class Tooltips extends React.Component {
  render() {
    return (
      <>
<h1 className="bd-title" id="content">
Tooltips
</h1>
<p className="bd-lead">
Documentation and examples for adding custom Bootstrap tooltips with CSS and JavaScript using CSS3 for animations and data-attributes for local title storage.
</p>
<h2 id="examples">
Examples
</h2>
<p>
Hover over the links below to see tooltips:
</p>
<div className="bd-example tooltip-demo">
<p className="muted">
Tight pants next level keffiyeh <a href="#pablo" id="tooltip918192997" onClick={e =>
 e.preventDefault()} title="Default tooltip">
you probably
</a>
<UncontrolledTooltip delay={0} target="tooltip918192997">
</UncontrolledTooltip>
 haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel <a href="#pablo" id="tooltip929920046" onClick={e =>
 e.preventDefault()} title="Another tooltip">
have a
</a>
<UncontrolledTooltip delay={0} target="tooltip929920046">
</UncontrolledTooltip>
 terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney's cleanse vegan chambray. A really ironic artisan <a href="#pablo" id="tooltip279174506" onClick={e =>
 e.preventDefault()} title="Another one here too">
whatever keytar
</a>
<UncontrolledTooltip delay={0} target="tooltip279174506">
</UncontrolledTooltip>
, scenester farm-to-table banksy Austin <a href="#pablo" id="tooltip619188664" onClick={e =>
 e.preventDefault()} title="The last tip!">
twitter handle
</a>
<UncontrolledTooltip delay={0} target="tooltip619188664">
</UncontrolledTooltip>
 freegan cred raw denim single-origin coffee viral.
</p>
</div>
<h3 id="static-demo">
Static demo
</h3>
<p>
Four options are available: top, right, bottom, and left aligned.
</p>
<div className="bd-example bd-example-tooltip-static">
<div className="tooltip bs-tooltip-top bs-tooltip-top-docs" role="tooltip">
<div className="arrow">
</div>
<div className="tooltip-inner">
 Tooltip on the top
</div>
</div>
<div className="tooltip bs-tooltip-right bs-tooltip-right-docs" role="tooltip">
<div className="arrow">
</div>
<div className="tooltip-inner">
 Tooltip on the right
</div>
</div>
<div className="tooltip bs-tooltip-bottom bs-tooltip-bottom-docs" role="tooltip">
<div className="arrow">
</div>
<div className="tooltip-inner">
 Tooltip on the bottom
</div>
</div>
<div className="tooltip bs-tooltip-left bs-tooltip-left-docs" role="tooltip">
<div className="arrow">
</div>
<div className="tooltip-inner">
 Tooltip on the left
</div>
</div>
</div>
<h3 id="interactive-demo">
Interactive demo
</h3>
<p>
Hover over the buttons below to see their tooltips.
</p>
<div className="bd-example tooltip-demo">
<div className="bd-example-tooltips">
<Button color="secondary" data-placement="top" id="tooltip449359966" title="Tooltip on top" type="button">
Tooltip on top
</Button>
<UncontrolledTooltip delay={0} placement="top" target="tooltip449359966">
</UncontrolledTooltip>
<Button color="secondary" data-placement="right" id="tooltip324127872" title="Tooltip on right" type="button">
Tooltip on right
</Button>
<UncontrolledTooltip delay={0} placement="right" target="tooltip324127872">
</UncontrolledTooltip>
<Button color="secondary" data-placement="bottom" id="tooltip819802833" title="Tooltip on bottom" type="button">
Tooltip on bottom
</Button>
<UncontrolledTooltip delay={0} placement="bottom" target="tooltip819802833">
</UncontrolledTooltip>
<Button color="secondary" data-placement="left" id="tooltip443865494" title="Tooltip on left" type="button">
Tooltip on left
</Button>
<UncontrolledTooltip delay={0} placement="left" target="tooltip443865494">
</UncontrolledTooltip>
<Button color="secondary" data-html={true} id="tooltip194412371" title="<em>
Tooltip</em>
 <u>
with</u>
 <b>
HTML</b>
" type="button">
Tooltip with HTML
</Button>
<UncontrolledTooltip delay={0} target="tooltip194412371">
</UncontrolledTooltip>
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
data-toggle=
</span>
<span className="s">
"tooltip"
</span>
<span className="na">
data-placement=
</span>
<span className="s">
"top"
</span>
<span className="na">
title=
</span>
<span className="s">
"Tooltip on top"
</span>
<span className="nt">
>
</span>
 Tooltip on top<span className="nt">
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
data-toggle=
</span>
<span className="s">
"tooltip"
</span>
<span className="na">
data-placement=
</span>
<span className="s">
"right"
</span>
<span className="na">
title=
</span>
<span className="s">
"Tooltip on right"
</span>
<span className="nt">
>
</span>
 Tooltip on right<span className="nt">
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
data-toggle=
</span>
<span className="s">
"tooltip"
</span>
<span className="na">
data-placement=
</span>
<span className="s">
"bottom"
</span>
<span className="na">
title=
</span>
<span className="s">
"Tooltip on bottom"
</span>
<span className="nt">
>
</span>
 Tooltip on bottom<span className="nt">
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
data-toggle=
</span>
<span className="s">
"tooltip"
</span>
<span className="na">
data-placement=
</span>
<span className="s">
"left"
</span>
<span className="na">
title=
</span>
<span className="s">
"Tooltip on left"
</span>
<span className="nt">
>
</span>
 Tooltip on left<span className="nt">
</button>
</span>
</code>
</pre>
</figure>
<p>
And with custom HTML added:
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
class=
</span>
<span className="s">
"btn btn-secondary"
</span>
<span className="na">
data-toggle=
</span>
<span className="s">
"tooltip"
</span>
<span className="na">
data-html=
</span>
<span className="s">
"true"
</span>
<span className="na">
title=
</span>
<span className="s">
"<em>Tooltip</em> <u>with</u> <b>HTML</b>"
</span>
<span className="nt">
>
</span>
 Tooltip with HTML<span className="nt">
</button>
</span>
</code>
</pre>
</figure>
<h2 id="usage">
Usage
</h2>
<p>
The tooltip plugin generates content and markup on demand, and by default places tooltips after their trigger element.
</p>
<p>
Trigger the tooltip via JavaScript:
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
'#example'
</span>
<span className="p">
).
</span>
<span className="nx">
tooltip
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
<h3 id="markup">
Markup
</h3>
<p>
The required markup for a tooltip is only a <code className="highlighter-rouge">
data
</code>
 attribute and <code className="highlighter-rouge">
title
</code>
 on the HTML element you wish to have a tooltip. The generated markup of a tooltip is rather simple, though it does require a position (by default, set to <code className="highlighter-rouge">
top
</code>
 by the plugin).
</p>
<div className="bd-callout bd-callout-warning">
<h4 id="making-tooltips-work-for-keyboard-and-assistive-technology-users">
Making tooltips work for keyboard and assistive technology users
</h4>
<p>
You should only add tooltips to HTML elements that are traditionally keyboard-focusable and interactive (such as links or form controls). Although arbitrary HTML elements (such as <code className="highlighter-rouge">
<span>
</code>
s) can be made focusable by adding the <code className="highlighter-rouge">
tabindex="0"
</code>
 attribute, this will add potentially annoying and confusing tab stops on non-interactive elements for keyboard users. In addition, most assistive technologies currently do not announce the tooltip in this situation.
</p>
</div>
<figure className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="c">
<!-- HTML to write -->
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
data-toggle=
</span>
<span className="s">
"tooltip"
</span>
<span className="na">
title=
</span>
<span className="s">
"Some tooltip text!"
</span>
<span className="nt">
>
</span>
Hover over me<span className="nt">
</a>
</span>
<span className="c">
<!-- Generated markup by the plugin -->
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"tooltip bs-tooltip-top"
</span>
<span className="na">
role=
</span>
<span className="s">
"tooltip"
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
"arrow"
</span>
<span className="nt">
></div>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"tooltip-inner"
</span>
<span className="nt">
>
</span>
 Some tooltip text! <span className="nt">
</div>
</span>
<span className="nt">
</div>
</span>
</code>
</pre>
</figure>
<div className="bd-callout bd-callout-info">
<h4 id="data-attributes-for-individual-tooltips">
Data attributes for individual tooltips
</h4>
<p>
Options for individual tooltips can alternatively be specified through the use of data attributes, as explained above.
</p>
</div>
<p>
If you want to see more examples and properties please check the official <strong>
<a href="http://getbootstrap.com/docs/4.0/components/tooltips/" rel="noopener noreferrer" target="_blank">
Bootstrap Documentation
</a>
</strong>
.
</p>
</>
    );
  }
}

export default Tooltips;
