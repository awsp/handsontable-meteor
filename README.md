## Meteor Handsontable (@version 0.4.5)
This package uses the latest version of Handsontable (currently @version 0.13.1) in MeteorJS.


## Installation

- AtmosphereJS
```
meteor add awsp:handsontable
```

- Manual Installation
    - Clone this repository, add to the directory `packages` (Create one at your app root if you haven't done so. )
    - Run `meteor add awsp:handsontable`


## Important Notes
This package contains the latest yet slightly modified version of Handsontable (ver 0.13.0). Some of the UI has also been modified. 
The new version of Handsontable no longer necessary requires jQuery to work.
In order to introduce the latest Handsontable to Meteor,
a minimum of modification was made to Handsontable in this package to fix some of the conflicts when used in Meteor.


The new way of initializing Handsontable is by following,

```js
var data = [
    ['', 'Maserati', 'Mazda', 'Mercedes', 'Mini', 'Mitsubishi'],
    ['2009', 0, 2941, 4303, 354, 5814],
    ['2010', 3, 2905, 2867, 412, 5284],
    ['2011', 4, 2517, 4822, 552, 6127],
    ['2012', 2, 2422, 5399, 776, 4151]
];
var container = hot, document.getElementById('hot');


hot = new Handsontable(container, {
    data: data,
    minSpareRows: 1,
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


## ToDo
- Add Tinytest



## Github / Bug Reports
https://github.com/awsp/handsontable-meteor



## License
MIT License
