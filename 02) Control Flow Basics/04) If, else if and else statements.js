// In python we have 'elif' and in javascript we have 'else if'.

const password = 'Z</F7e6FV';

if(password.length >= 12){
    console.log('Strong');
} else if(password.length >= 8){
    console.log('Fair');
} else{
    console.log('Weak');
}
