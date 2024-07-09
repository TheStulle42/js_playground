let raceNumber;
let age = 18;
let early = false;

if (age > 18 && early == false) {
    raceNumber = Math.floor((Math.random() * 2000) + 1000);
    console.log('You will ;race at 11:00am. Your race number is: '
    + raceNumber + '.');
} else if (age > 18 && early == true){
    raceNumber = Math.floor(Math.random() * 1000)
    console.log('You will race at 9:30am. Your race number is: '
    + raceNumber + '.');
} else if (age == 18) {
    console.log('Please ask for your race number at the registration test');
} else {
    raceNumber = Math.floor(Math.random() * 1000);
    console.log('You will race at 12:30pm. Your race number is: '
    + raceNumber + '.');
} 