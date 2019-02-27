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

class MaterialIcons extends React.Component {
  render() {
    return (
      <>
<h1 className="bd-title" id="content">
Material Icons
</h1>
<p className="bd-lead">
</p>
<p>
Through most of the examples in this kit, we have used the default <a href="https://material.io/icons/">
Icons for the Material Design
</a>
 provided by Google.
</p>
<div className="bd-example" data-example-id="">
<i className="material-icons">
face
</i>
</div>
<div className="highlight">
<pre>
<code className="language-html" data-lang="html">
<span className="nt">
<i
</span>
<span className="na">
class=
</span>
<span className="s">
"material-icons"
</span>
<span className="nt">
>
</span>
face<span className="nt">
</i>
</span>
</code>
</pre>
</div>
</>
    );
  }
}

export default MaterialIcons;
