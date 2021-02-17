// Importing npm module
import { camelCase } from 'lodash';

// Importing our own module

// Method 1
import userData, {email as userEmail, add} from './module';

// Importing everything
// import * as myModule from './module';

// Use case of method 1
console.log(camelCase('yash desai'));

console.log(userData);

console.log(userEmail);

console.log(add(5,8));

// Use case of myModule
// console.log(myModule);

// console.log(myModule.default);

// console.log(myModule.sub(5,9));

// console.log(myModule.email);


