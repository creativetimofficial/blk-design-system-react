# Change Log

## [1.2.0] 2020-12-08
### Enhancements
- **Full Hooks Support**: Change `class` components usage with `functional` ones in order to support Hooks
### Bug fixing
### Misc
- Add new branch, named `main`, this will replace the `master` branch
### Major style changes
- Remove `src/assets/scss/blk-design-system-react/bootstrap` folder and start using the `node_modules/bootstrap` one
- Add `src/assets/scss/blk-design-system-react/react/_custom-forms.scss` for usage of Bootstrap Switch / Reactstrap CustomInput of type switch
### Deleted components
### Added components
### Deleted dependencies
- react-bootstrap-switch
  - This project was not longer maintained, and it had issues with the new React version. The styles for it are still kept inside the product, but we do not recommended using the plugin anymore. You can use the simple Reactstrap CustomInput of type switch or the basic HTML Bootstrap Switch one.
- eslint-plugin-flowtype
### Added dependencies
```
"@testing-library/jest-dom": "5.11.6",
"@testing-library/react": "11.2.2",
"@testing-library/user-event": "12.2.2",
"bootstrap": "4.5.3",
"jquery": "3.5.1",
"node-sass-package-importer": "5.3.2",
"web-vitals": "1.0.1"
```
### Updated dependencies
```
chart.js                   2.9.3   →    2.9.4
moment                    2.24.0   →   2.29.1
node-sass                 4.13.1   →   4.14.1
nouislider                14.2.0   →   14.6.3
react                    16.13.1   →   17.0.1
react-chartjs-2            2.9.0   →   2.11.1
react-datetime            2.16.3   →    3.0.4
react-dom                16.13.1   →   17.0.1
react-router-dom           5.1.2   →    5.2.0
react-scripts              3.4.1   →    4.0.1
reactstrap                 8.4.1   →    8.7.1
typescript                 3.8.3   →    4.1.2
```
### Important Notes
**The jQuery and TypeScript dependencies are installed only to stop console warnings on install. They are not actually used in our product. So the product is not based on jQuery, and it is not based on TypeScript!**
### Warning
_Some warnings may appear when running the installation command, but they do not affect the UI or the functionality of the product._
_The following warnings will appear when running the installation command, but they do not affect the UI or the functionality of the product (they will be solved in our next update):_
```
npm WARN react-datetime@3.0.4 requires a peer of react@^16.5.0 but none is installed. You must install peer dependencies yourself.
npm WARN react-popper@1.3.7 requires a peer of react@0.14.x || ^15.0.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN create-react-context@0.3.0 requires a peer of react@^0.14.0 || ^15.0.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.
```

## [1.1.0] 2020-04-10
### Bug fixing
- Github
  - https://github.com/creativetimofficial/blk-design-system-react/issues/8
  - https://github.com/creativetimofficial/blk-design-system-react/issues/7
  - https://github.com/creativetimofficial/blk-design-system-react/issues/5
  - https://github.com/creativetimofficial/blk-design-system-react/issues/4
  - https://github.com/creativetimofficial/blk-design-system-react/issues/2
  - https://github.com/creativetimofficial/blk-design-system-react/issues/1
### Major style changes
- `src/assets/scss/blk-design-system-react/react/plugins/_plugin-nouislider.scss`
### Deleted components
### Added components
### Deleted dependencies
### Added dependencies
+ eslint-plugin-flowtype@3.13.0 (to stop terminal/cmd warnings)
+ typescript@3.8.3 (to stop terminal/cmd warnings)
### Updated dependencies
```
chart.js             2.7.3   →     2.9.3
node-sass           4.11.0   →    4.13.1
nouislider          13.1.1   →    14.2.0
perfect-scrollbar    1.4.0   →     1.5.0
react               16.8.3   →   16.13.1
react-chartjs-2      2.7.4   →     2.9.0
react-dom           16.8.3   →   16.13.1
react-router-dom     4.3.1   →     5.1.2
react-scripts        2.1.5   →     3.4.1
reactstrap           7.1.0   →     8.4.1
```
### Warning
**The following warnings may appear when running the installation command, but they do not affect the UI or the functionality of the product:**
```
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated popper.js@1.16.1: Popper changed home, find its new releases at @popperjs/core
npm WARN deprecated core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
```
**The folowing components make react throw errors for using life-cycle methods that will be dropped in React 17.x: react-datetime, react-bootstrap-switch. But the UI or functionality of the product is not affected. When we'll update the product to React 17.x, if the issue will persist, we'll drop support for these components and replace them with other ones that create the same or a similar UI. Also, the warnings are only present in the development, and not in production.**
```
Warning: componentWillReceiveProps has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://fb.me/react-derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.

Please update the following components: DateTime, Switch
```

## [1.0.0] 2019-03-04
### Original Release
- Added Reactstrap as base framework
- Added design from BLK Design System by Creative Tim
