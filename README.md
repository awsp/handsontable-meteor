## Meteor Handsontable (@version 0.6.0)
This package uses the latest version of Handsontable (currently @version 0.15.0) in MeteorJS.


## Installation

- AtmosphereJS
```
meteor add awsp:handsontable
```

- Manual Installation
    - Clone this repository, add to the directory `packages` (Create one at your app root if you haven't done so. )
    - Run `meteor add awsp:handsontable`


## Important Notes
This package contains the latest yet slightly modified version of Handsontable (ver 0.14.1). Some of the UI has also been modified. 
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


## Release Notes
* Version 0.6.0 - Bump Handsontable to version 0.15.0. Removed shadow fixes as 0.15.0 no longer have that. Minor UI tweaked. 
                  Removed unnecessary libraries as Handsontable had already included it.  
* Version 0.5.2 - Remove table edge shadow as this is hurting performance especially dealing with large data. 
                  Until Handsontable version 0.15.x is stable, shall remove related styles. 

* Version 0.5.1 - Bump Handsontable to version 0.14.1. Minor tweaks of UI. 


## Github / Bug Reports
https://github.com/awsp/handsontable-meteor



## License
MIT License
