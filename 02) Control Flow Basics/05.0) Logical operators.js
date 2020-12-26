// In python logical AND is "and" whereas in javascript it is &&, and logical OR is "or" whereas in javascript it is ||

let passwords = ['password1234','p@ssword1234','paswrd','p@swrd'];

for(let i = 0; i < passwords.length; i++){

    if(passwords[i].length >= 12 && passwords[i].includes('@')){
        console.log('Strong');
    } else if(passwords[i].length >= 8 || (passwords[i].length >= 5 && passwords[i].includes('@'))){
        console.log('Fair');
    } else{
        console.log('Weak');
    }
    
}