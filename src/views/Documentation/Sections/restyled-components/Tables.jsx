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
  Table,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class Tables extends React.Component {
  render() {
    return (
      <>
<h1 className="bd-title" id="content">
Tables
</h1>
<p className="bd-lead">
All Boostrap classes for tables are supported and improved.
</p>
<h2 id="examples">
Examples
</h2>
<h3 id="simple-table-with-actions">
Simple Table with Actions
</h3>
<div className="bd-example" data-example-id="">
<Table>
<thead>
<tr>
<th className="text-center">
#
</th>
<th>
Name
</th>
<th>
Job Position
</th>
<th>
Since
</th>
<th className="text-right">
Salary
</th>
<th className="text-right">
Actions
</th>
</tr>
</thead>
<tbody>
<tr>
<td className="text-center">
1
</td>
<td>
Andrew Mike
</td>
<td>
Develop
</td>
<td>
2013
</td>
<td className="text-right">
€ 99,225
</td>
<td className="td-actions text-right">
<Button className="btn-icon" color="info" id="tooltip756442936" size="sm" type="button">
<i className="tim-icons icon-single-02">
</i>
</Button>
<UncontrolledTooltip delay={0} target="tooltip756442936">
</UncontrolledTooltip>
<Button className="btn-icon" color="success" id="tooltip199880985" size="sm" type="button">
<i className="tim-icons icon-settings-gear-63">
</i>
</Button>
<UncontrolledTooltip delay={0} target="tooltip199880985">
</UncontrolledTooltip>
<Button className="btn-icon" color="danger" id="tooltip112318790" size="sm" type="button">
<i className="tim-icons icon-simple-remove">
</i>
</Button>
<UncontrolledTooltip delay={0} target="tooltip112318790">
</UncontrolledTooltip>
</td>
</tr>
<tr>
<td className="text-center">
2
</td>
<td>
John Doe
</td>
<td>
Design
</td>
<td>
2012
</td>
<td className="text-right">
€ 89,241
</td>
<td className="td-actions text-right">
<Button className="btn-round btn-icon" color="info" id="tooltip122822765" size="sm" type="button">
<i className="tim-icons icon-single-02">
</i>
</Button>
<UncontrolledTooltip delay={0} target="tooltip122822765">
</UncontrolledTooltip>
<Button className="btn-round btn-icon" color="success" id="tooltip638292587" size="sm" type="button">
<i className="tim-icons icon-settings-gear-63">
</i>
</Button>
<UncontrolledTooltip delay={0} target="tooltip638292587">
</UncontrolledTooltip>
<Button className="btn-round btn-icon" color="danger" id="tooltip15837987" size="sm" type="button">
<i className="tim-icons icon-simple-remove">
</i>
</Button>
<UncontrolledTooltip delay={0} target="tooltip15837987">
</UncontrolledTooltip>
</td>
</tr>
<tr>
<td className="text-center">
3
</td>
<td>
Alex Mike
</td>
<td>
Design
</td>
<td>
2010
</td>
<td className="text-right">
€ 92,144
</td>
<td className="td-actions text-right">
<Button className="btn-simple btn-icon" color="info" id="tooltip637104285" size="sm" type="button">
<i className="tim-icons icon-single-02">
</i>
</Button>
<UncontrolledTooltip delay={0} target="tooltip637104285">
</UncontrolledTooltip>
<Button className="btn-simple btn-icon" color="success" id="tooltip745684032" size="sm" type="button">
<i className="tim-icons icon-settings-gear-63">
</i>
</Button>
<UncontrolledTooltip delay={0} target="tooltip745684032">
</UncontrolledTooltip>
<Button className="btn-simple btn-icon" color="danger" id="tooltip793282036" size="sm" type="button">
<i className="tim-icons icon-simple-remove">
</i>
</Button>
<UncontrolledTooltip delay={0} target="tooltip793282036">
</UncontrolledTooltip>
</td>
</tr>
</tbody>
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
"table"
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
class=
</span>
<span className="s">
"text-center"
</span>
<span className="nt">
>
</span>
#<span className="nt">
</th>
</span>
<span className="nt">
<th>
</span>
Name<span className="nt">
</th>
</span>
<span className="nt">
<th>
</span>
Job Position<span className="nt">
</th>
</span>
<span className="nt">
<th>
</span>
Since<span className="nt">
</th>
</span>
<span className="nt">
<th
</span>
<span className="na">
class=
</span>
<span className="s">
"text-right"
</span>
<span className="nt">
>
</span>
Salary<span className="nt">
</th>
</span>
<span className="nt">
<th
</span>
<span className="na">
class=
</span>
<span className="s">
"text-right"
</span>
<span className="nt">
>
</span>
Actions<span className="nt">
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
<td
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
1<span className="nt">
</td>
</span>
<span className="nt">
<td>
</span>
Andrew Mike<span className="nt">
</td>
</span>
<span className="nt">
<td>
</span>
Develop<span className="nt">
</td>
</span>
<span className="nt">
<td>
</span>
2013<span className="nt">
</td>
</span>
<span className="nt">
<td
</span>
<span className="na">
class=
</span>
<span className="s">
"text-right"
</span>
<span className="nt">
>
</span>
<span className="ni">
&amp;euro;
</span>
 99,225<span className="nt">
</td>
</span>
<span className="nt">
<td
</span>
<span className="na">
class=
</span>
<span className="s">
"td-actions text-right"
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
rel=
</span>
<span className="s">
"tooltip"
</span>
<span className="na">
class=
</span>
<span className="s">
"btn btn-info btn-sm btn-icon"
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
"tim-icons icon-single-02"
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
type=
</span>
<span className="s">
"button"
</span>
<span className="na">
rel=
</span>
<span className="s">
"tooltip"
</span>
<span className="na">
class=
</span>
<span className="s">
"btn btn-success btn-sm btn-icon"
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
"tim-icons icon-settings-gear-63"
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
type=
</span>
<span className="s">
"button"
</span>
<span className="na">
rel=
</span>
<span className="s">
"tooltip"
</span>
<span className="na">
class=
</span>
<span className="s">
"btn btn-danger btn-sm btn-icon"
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
</td>
</span>
<span className="nt">
</tr>
</span>
<span className="nt">
<tr>
</span>
<span className="nt">
<td
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
2<span className="nt">
</td>
</span>
<span className="nt">
<td>
</span>
John Doe<span className="nt">
</td>
</span>
<span className="nt">
<td>
</span>
Design<span className="nt">
</td>
</span>
<span className="nt">
<td>
</span>
2012<span className="nt">
</td>
</span>
<span className="nt">
<td
</span>
<span className="na">
class=
</span>
<span className="s">
"text-right"
</span>
<span className="nt">
>
</span>
<span className="ni">
&amp;euro;
</span>
 89,241<span className="nt">
</td>
</span>
<span className="nt">
<td
</span>
<span className="na">
class=
</span>
<span className="s">
"td-actions text-right"
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
rel=
</span>
<span className="s">
"tooltip"
</span>
<span className="na">
class=
</span>
<span className="s">
"btn btn-info btn-sm btn-round btn-icon"
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
"tim-icons icon-single-02"
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
type=
</span>
<span className="s">
"button"
</span>
<span className="na">
rel=
</span>
<span className="s">
"tooltip"
</span>
<span className="na">
class=
</span>
<span className="s">
"btn btn-success btn-sm btn-round btn-icon"
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
"tim-icons icon-settings-gear-63"
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
type=
</span>
<span className="s">
"button"
</span>
<span className="na">
rel=
</span>
<span className="s">
"tooltip"
</span>
<span className="na">
class=
</span>
<span className="s">
"btn btn-danger btn-sm btn-round btn-icon"
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
</td>
</span>
<span className="nt">
</tr>
</span>
<span className="nt">
<tr>
</span>
<span className="nt">
<td
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
3<span className="nt">
</td>
</span>
<span className="nt">
<td>
</span>
Alex Mike<span className="nt">
</td>
</span>
<span className="nt">
<td>
</span>
Design<span className="nt">
</td>
</span>
<span className="nt">
<td>
</span>
2010<span className="nt">
</td>
</span>
<span className="nt">
<td
</span>
<span className="na">
class=
</span>
<span className="s">
"text-right"
</span>
<span className="nt">
>
</span>
<span className="ni">
&amp;euro;
</span>
 92,144<span className="nt">
</td>
</span>
<span className="nt">
<td
</span>
<span className="na">
class=
</span>
<span className="s">
"td-actions text-right"
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
rel=
</span>
<span className="s">
"tooltip"
</span>
<span className="na">
class=
</span>
<span className="s">
"btn btn-info btn-simple btn-icon btn-sm"
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
"tim-icons icon-single-02"
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
type=
</span>
<span className="s">
"button"
</span>
<span className="na">
rel=
</span>
<span className="s">
"tooltip"
</span>
<span className="na">
class=
</span>
<span className="s">
"btn btn-success btn-simple btn-icon btn-sm"
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
"tim-icons icon-settings-gear-63"
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
type=
</span>
<span className="s">
"button"
</span>
<span className="na">
rel=
</span>
<span className="s">
"tooltip"
</span>
<span className="na">
class=
</span>
<span className="s">
"btn btn-danger btn-simple btn-icon btn-sm"
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
</>
    );
  }
}

export default Tables;
