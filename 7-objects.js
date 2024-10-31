'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {
    const obj1 = {name: ""};
    let obj2 = {name: ""};
    obj1.name = "Mark";
    obj2.name = "Roma";

    // obj1 = obj2;
    // onj2 = obj1;
};
// fn();

module.exports = { fn };
