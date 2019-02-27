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
  Progress,
  Container,
  Row,
  Col
} from "reactstrap";

class Progress extends React.Component {
  render() {
    return (
      <>
<h1 className="bd-title" id="content">
Progress
</h1>
<p className="bd-lead">
</p>
<h2 id="backgrounds">
Backgrounds
</h2>
<p>
Use background utility classes to change the appearance of individual progress bars.
</p>
<div className="bd-example" data-example-id="">
<div className="progress-container">
<span className="progress-badge">
Default
</span>
<Progress max="100" value="60">
<span className="progress-value">
25%
</span>
</Progress>
</div>
<div className="progress-container progress-primary">
<span className="progress-badge">
Primary
</span>
<Progress max="100" value="60">
<span className="progress-value">
60%
</span>
</Progress>
</div>
<div className="progress-container progress-danger">
<span className="progress-badge">
Danger
</span>
<Progress max="100" value="60">
<span className="progress-value">
60%
</span>
</Progress>
</div>
<div className="progress-container progress-warning">
<span className="progress-badge">
Warning
</span>
<Progress max="100" value="60">
<span className="progress-value">
60%
</span>
</Progress>
</div>
<div className="progress-container progress-success">
<span className="progress-badge">
Success
</span>
<Progress max="100" value="60">
<span className="progress-value">
60%
</span>
</Progress>
</div>
<div className="progress-container progress-info">
<span className="progress-badge">
Info
</span>
<Progress max="100" value="60">
<span className="progress-value">
60%
</span>
</Progress>
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
"progress-container"
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
"progress-badge"
</span>
<span className="nt">
>
</span>
Default<span className="nt">
</span>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"progress"
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
"progress-bar"
</span>
<span className="na">
role=
</span>
<span className="s">
"progressbar"
</span>
<span className="na">
aria-valuenow=
</span>
<span className="s">
"60"
</span>
<span className="na">
aria-valuemin=
</span>
<span className="s">
"0"
</span>
<span className="na">
aria-valuemax=
</span>
<span className="s">
"100"
</span>
<span className="na">
style=
</span>
<span className="s">
"width: 25%;"
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
"progress-value"
</span>
<span className="nt">
>
</span>
25%<span className="nt">
</span>
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
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"progress-container progress-primary"
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
"progress-badge"
</span>
<span className="nt">
>
</span>
Primary<span className="nt">
</span>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"progress"
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
"progress-bar progress-bar-warning"
</span>
<span className="na">
role=
</span>
<span className="s">
"progressbar"
</span>
<span className="na">
aria-valuenow=
</span>
<span className="s">
"60"
</span>
<span className="na">
aria-valuemin=
</span>
<span className="s">
"0"
</span>
<span className="na">
aria-valuemax=
</span>
<span className="s">
"100"
</span>
<span className="na">
style=
</span>
<span className="s">
"width: 60%;"
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
"progress-value"
</span>
<span className="nt">
>
</span>
60%<span className="nt">
</span>
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
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"progress-container progress-danger"
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
"progress-badge"
</span>
<span className="nt">
>
</span>
Danger<span className="nt">
</span>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"progress"
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
"progress-bar progress-bar-warning"
</span>
<span className="na">
role=
</span>
<span className="s">
"progressbar"
</span>
<span className="na">
aria-valuenow=
</span>
<span className="s">
"60"
</span>
<span className="na">
aria-valuemin=
</span>
<span className="s">
"0"
</span>
<span className="na">
aria-valuemax=
</span>
<span className="s">
"100"
</span>
<span className="na">
style=
</span>
<span className="s">
"width: 60%;"
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
"progress-value"
</span>
<span className="nt">
>
</span>
60%<span className="nt">
</span>
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
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"progress-container progress-warning"
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
"progress-badge"
</span>
<span className="nt">
>
</span>
Warning<span className="nt">
</span>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"progress"
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
"progress-bar progress-bar-warning"
</span>
<span className="na">
role=
</span>
<span className="s">
"progressbar"
</span>
<span className="na">
aria-valuenow=
</span>
<span className="s">
"60"
</span>
<span className="na">
aria-valuemin=
</span>
<span className="s">
"0"
</span>
<span className="na">
aria-valuemax=
</span>
<span className="s">
"100"
</span>
<span className="na">
style=
</span>
<span className="s">
"width: 60%;"
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
"progress-value"
</span>
<span className="nt">
>
</span>
60%<span className="nt">
</span>
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
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"progress-container progress-success"
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
"progress-badge"
</span>
<span className="nt">
>
</span>
Success<span className="nt">
</span>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"progress"
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
"progress-bar progress-bar-warning"
</span>
<span className="na">
role=
</span>
<span className="s">
"progressbar"
</span>
<span className="na">
aria-valuenow=
</span>
<span className="s">
"60"
</span>
<span className="na">
aria-valuemin=
</span>
<span className="s">
"0"
</span>
<span className="na">
aria-valuemax=
</span>
<span className="s">
"100"
</span>
<span className="na">
style=
</span>
<span className="s">
"width: 60%;"
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
"progress-value"
</span>
<span className="nt">
>
</span>
60%<span className="nt">
</span>
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
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"progress-container progress-info"
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
"progress-badge"
</span>
<span className="nt">
>
</span>
Info<span className="nt">
</span>
</span>
<span className="nt">
<div
</span>
<span className="na">
class=
</span>
<span className="s">
"progress"
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
"progress-bar progress-bar-warning"
</span>
<span className="na">
role=
</span>
<span className="s">
"progressbar"
</span>
<span className="na">
aria-valuenow=
</span>
<span className="s">
"60"
</span>
<span className="na">
aria-valuemin=
</span>
<span className="s">
"0"
</span>
<span className="na">
aria-valuemax=
</span>
<span className="s">
"100"
</span>
<span className="na">
style=
</span>
<span className="s">
"width: 60%;"
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
"progress-value"
</span>
<span className="nt">
>
</span>
60%<span className="nt">
</span>
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
 {/* ## Multiple barsInclude multiple progress bars in a progress component if you need.<div className="bd-example" data-example-id="">
<Progress multi>
<Progress bar max="100" value="15">
</Progress>
<Progress bar barclassName="bg-success" max="100" value="30">
</Progress>
<Progress bar barclassName="bg-info" max="100" value="20">
</Progress>
</Progress>
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
"progress"
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
"progress-bar"
</span>
<span className="na">
role=
</span>
<span className="s">
"progressbar"
</span>
<span className="na">
style=
</span>
<span className="s">
"width: 15%"
</span>
<span className="na">
aria-valuenow=
</span>
<span className="s">
"15"
</span>
<span className="na">
aria-valuemin=
</span>
<span className="s">
"0"
</span>
<span className="na">
aria-valuemax=
</span>
<span className="s">
"100"
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
"progress-bar bg-success"
</span>
<span className="na">
role=
</span>
<span className="s">
"progressbar"
</span>
<span className="na">
style=
</span>
<span className="s">
"width: 30%"
</span>
<span className="na">
aria-valuenow=
</span>
<span className="s">
"30"
</span>
<span className="na">
aria-valuemin=
</span>
<span className="s">
"0"
</span>
<span className="na">
aria-valuemax=
</span>
<span className="s">
"100"
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
"progress-bar bg-info"
</span>
<span className="na">
role=
</span>
<span className="s">
"progressbar"
</span>
<span className="na">
style=
</span>
<span className="s">
"width: 20%"
</span>
<span className="na">
aria-valuenow=
</span>
<span className="s">
"20"
</span>
<span className="na">
aria-valuemin=
</span>
<span className="s">
"0"
</span>
<span className="na">
aria-valuemax=
</span>
<span className="s">
"100"
</span>
<span className="nt">
></div>
</span>
<span className="nt">
</div>
</span>
</code>
</pre>
</div>
 */}
 {/* ## StripedAdd `.progress-bar-striped` to any `.progress-bar` to apply a stripe via CSS gradient over the progress bar's background color.<div className="bd-example" data-example-id="">
<Progress max="100" value="10">
</Progress>
<Progress max="100" value="25">
</Progress>
<Progress max="100" value="50">
</Progress>
<Progress max="100" value="75">
</Progress>
<Progress max="100" value="100">
</Progress>
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
"progress"
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
"progress-bar progress-bar-striped"
</span>
<span className="na">
role=
</span>
<span className="s">
"progressbar"
</span>
<span className="na">
style=
</span>
<span className="s">
"width: 10%"
</span>
<span className="na">
aria-valuenow=
</span>
<span className="s">
"10"
</span>
<span className="na">
aria-valuemin=
</span>
<span className="s">
"0"
</span>
<span className="na">
aria-valuemax=
</span>
<span className="s">
"100"
</span>
<span className="nt">
></div>
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
"progress"
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
"progress-bar progress-bar-striped bg-success"
</span>
<span className="na">
role=
</span>
<span className="s">
"progressbar"
</span>
<span className="na">
style=
</span>
<span className="s">
"width: 25%"
</span>
<span className="na">
aria-valuenow=
</span>
<span className="s">
"25"
</span>
<span className="na">
aria-valuemin=
</span>
<span className="s">
"0"
</span>
<span className="na">
aria-valuemax=
</span>
<span className="s">
"100"
</span>
<span className="nt">
></div>
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
"progress"
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
"progress-bar progress-bar-striped bg-info"
</span>
<span className="na">
role=
</span>
<span className="s">
"progressbar"
</span>
<span className="na">
style=
</span>
<span className="s">
"width: 50%"
</span>
<span className="na">
aria-valuenow=
</span>
<span className="s">
"50"
</span>
<span className="na">
aria-valuemin=
</span>
<span className="s">
"0"
</span>
<span className="na">
aria-valuemax=
</span>
<span className="s">
"100"
</span>
<span className="nt">
></div>
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
"progress"
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
"progress-bar progress-bar-striped bg-warning"
</span>
<span className="na">
role=
</span>
<span className="s">
"progressbar"
</span>
<span className="na">
style=
</span>
<span className="s">
"width: 75%"
</span>
<span className="na">
aria-valuenow=
</span>
<span className="s">
"75"
</span>
<span className="na">
aria-valuemin=
</span>
<span className="s">
"0"
</span>
<span className="na">
aria-valuemax=
</span>
<span className="s">
"100"
</span>
<span className="nt">
></div>
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
"progress"
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
"progress-bar progress-bar-striped bg-danger"
</span>
<span className="na">
role=
</span>
<span className="s">
"progressbar"
</span>
<span className="na">
style=
</span>
<span className="s">
"width: 100%"
</span>
<span className="na">
aria-valuenow=
</span>
<span className="s">
"100"
</span>
<span className="na">
aria-valuemin=
</span>
<span className="s">
"0"
</span>
<span className="na">
aria-valuemax=
</span>
<span className="s">
"100"
</span>
<span className="nt">
></div>
</span>
<span className="nt">
</div>
</span>
</code>
</pre>
</div>
 */}
 {/* If you want to see more examples and properties please check the official **[Bootstrap Documentation](http://getbootstrap.com/docs/4.0/components/progress/){:target="_blank"}**. */}

</>
    );
  }
}

export default Progress;
