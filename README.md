# Meteor Handsontable (@version 0.16.1)
This package uses the latest version of Handsontable (currently @version 0.24.1) in MeteorJS.


## Installation

- AtmosphereJS
```
meteor add awsp:handsontable
```

- Manual Installation
    - Clone this repository, add to the directory `packages` (Create one at your app root if you haven't done so. )
    - Run `meteor add awsp:handsontable`


## Important Notes
This package contains the latest yet slightly modified version of Handsontable (version 0.24.1). Minor change has been made to the UI as well.
The new version of Handsontable no longer necessary requires jQuery to work.
In order to introduce the latest Handsontable to Meteor,
a minimum of modification was made to Handsontable in this package to fix some of the conflicts when used in Meteor.


The new way of initializing Handsontable is by following,

```js
  var data = function () {
    return Handsontable.helper.createSpreadsheetData(100, 10);
  };

  var container = document.getElementById('example');

  var hot = new Handsontable(container, {
    data: data(),
    minSpareCols: 1,
    minSpareRows: 1,
    rowHeaders: true,
    colHeaders: true,
    contextMenu: true
  });
```

It is also possible to do in the old jQuery way.
```js
$("#hot3").handsontable({
    data: data,
    minSpareRows: 1,
    colHeaders: true,
    contextMenu: true
});
```

## Known Issue - Formula Support (Updated Jan 17, 2016)
Starting from package version 0.7.0, you could also enable formulas in Handsontable.
This package uses the default styling from Handsontable and RuleJS.
However, you can always customize to your own by changing the following 2 classes in CSS.

* `td.formulas`
* `td.formula-error`

```js
$("#hot3").handsontable({
    formulas: true, // Add this line to enable formulas support
    data: data,
    minSpareRows: 1,
    colHeaders: true,
    contextMenu: true
});
```

For more details on usage and supported formulas,
- Handsontable RuleJS Page: [http://handsontable.github.io/handsontable-ruleJS/](http://handsontable.github.io/handsontable-ruleJS/)
- Supported Formulas: [http://handsontable.github.io/ruleJS/](http://handsontable.github.io/ruleJS/)


#### Notes about formula support.
Formula support does not work with autofilling with Handsontable 0.14+.



## Release Notes
* Version 0.16.1 - Update Handsontable version to 0.24.1.
* Version 0.15.0 - Update Handsontable version to 0.23.0.
* Version 0.12.3 - Update Handsontable version to 0.20.3.
* Version 0.12.2 - Update Handsontable version to 0.20.2.
* Version 0.12.1 - Update Handsontable version to 0.20.1.
* Version 0.12.0 - Update Handsontable version to 0.20.0.
* Version 0.11.0 - Update Handsontable version to 0.19.0.
* Version 0.10.0 - Update Handsontable version to 0.18.0.
* Version 0.9.0 - Update Handsontable version to 0.17.0.
* Version 0.8.1 - Update Handsontable version to 0.16.1.
* Version 0.8.0 - Update Handsontable version to 0.16.0.
* Version 0.7.0 - Add formulas support. Add Handsontable license. Change package summary for Handsontable.
* Version 0.6.1 - Update to the latest version of Handsontable (0.15.1)
* Version 0.6.0 - Bump Handsontable to version 0.15.0. Removed shadow fixes as 0.15.0 no longer have that. Minor UI tweaked.
                  Removed unnecessary libraries as Handsontable had already included them.
* Version 0.5.2 - Remove table edge shadow as this is hurting performance especially dealing with large data.
                  Until Handsontable version 0.15.x is stable, shall remove related styles.

* Version 0.5.1 - Update Handsontable to version 0.14.1. Minor tweaks of UI.


## GitHub / Bug Reports
https://github.com/awsp/handsontable-meteor


## Versions Tracking
* Handsontable - 0.24.1  [Release Notes](https://github.com/handsontable/handsontable/releases) [New license](http://handsontable.com/static/licenses/v1/open-source-license.pdf?_ga=1.992503.778804082.1429430347)
* ruleJS - 0.0.5


## License
MIT License
