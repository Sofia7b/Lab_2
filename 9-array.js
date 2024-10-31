'use strict';

/* Collections: Array, Hash (Object)

Implement phone book using array of records.
- Define Array of objects with two fields: `name` and `phone`.
Object example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search. */

const phonebook = [
    { name: 'Marcus Aurelius', phone: '+380445554433' },
    { name: 'Jhon Doe', phone: '+380445678876' },
    { name: 'Jane Doe', phone: '+380445784433' },
    { name: 'Harry Potter', phone: '+380445599633' },
    { name: 'Garry Moore', phone: '+380445546663' },
    
];

const findPhoneByName = (name) => {
    let phone;
    for (const element of phonebook) {
        if (element.name === name) {
            phone = element.phone;
            break;

        }
        
    }
    return phone;
};
/* 
console.log(findPhoneByName('Marcus Aurelius'));
console.log(findPhoneByName('Garry Moore'));
console.log(findPhoneByName('Jane Doe'));
console.log(findPhoneByName('Jane Potter'));
*/

module.exports = { phonebook, findPhoneByName };
