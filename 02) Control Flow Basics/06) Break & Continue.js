let names = ['Yash', 'Govind', 'Suresh', 'Mukesh', 'Ketan', 'Lalit', 'Mihir'];

/* BREAK STATEMENT */
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);

    if (names[i].toLowerCase() == 'mukesh') {
        break;
    }
}

/* CONTINUE STATEMENT */ console.log('');

for (let i = 0; i < names.length; i++) {
    if (names[i].toLowerCase() == 'mukesh') {
        continue;
    }

    console.log(names[i]);
}
