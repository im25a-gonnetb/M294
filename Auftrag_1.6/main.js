let name = prompt('was ist dein name?');


let date = new Date();
let currentHours = date.getHours();

if (currentHours < 12) {
    console.log(`Good morning! ${name}`);
} else {
    console.log(`Good afternoon! ${name}`);
}