// Importing npm module
import { camelCase } from 'lodash';

// Importing our own module
import userData, {email as userEmail, add} from './module';

console.log(camelCase('yash desai'));

console.log(userData);

console.log(userEmail);

console.log(add(5,8));