'use strict';

/* 10. Implement phone book using hash (also known as `object`).
- Define hash with `key` contains `name` (from previous example) and `value`
contains `phone`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from hash/object.
Use `hash[key]` to find needed phone. */

const phonebook = {
    //            key -> value
    'Marcus Aurelius': '+380445554433' ,
    'Jhon Doe'       : '+380445678876' ,
    'Jane Doe'       : '+380445784433' ,
    'Harry Potter'   : '+380445599633' ,
    'Garry Moore'    : '+380445546663' ,
    
};

const findPhoneByName = (name) => phonebook[name];
/*
console.log(findPhoneByName('Marcus Aurelius'));
console.log(findPhoneByName('Garry Moore'));
console.log(findPhoneByName('Jane Doe'));
console.log(findPhoneByName('Jane Potter'));
*/
module.exports = { phonebook, findPhoneByName };
