let messageName = "enter your name";
let messageEvent = "enter your meeting";

let person = prompt("What's your name?", "Volodymyr Medvid");
person = checkPromptIfEmpty(person, messageName);

let time = "Mon Sep 25 2017 12:00";
let place = "Lviv";

let personEvent = prompt("Do you have a some meeting?", "with friends");
personEvent = checkPromptIfEmpty(personEvent, messageEvent);

console.log(resultPerson());
alert(resultPerson());

function resultPerson() {
    return (person + " have a meeting " + personEvent + " in " + place + " on " + time);
}

const USD = 25;
const EUR = 30;
const EUR_USD = 1.2;
const EUR_to_UAH = "EUR to UAH";
const USD_to_UAH = "USD to UAH";
const EUR_to_USD = "EUR to USD";

let eur = prompt(EUR_to_UAH, 1);
eur = checkPromptIfEmpty(eur, EUR_to_UAH);

let usd = prompt(USD_to_UAH, 1);
usd = checkPromptIfEmpty(usd, USD_to_UAH);

let eur_usd = prompt(EUR_to_USD, 1);
eur_usd = checkPromptIfEmpty(eur_usd, EUR_to_USD);

let eurConverted = currencyConverter(eur,EUR);
let usdConverted = currencyConverter(usd,USD);
let eur_usdConverted = currencyConverter(eur_usd,EUR_USD);

function currencyConverter(money, currency){
    return (Math.round((money * currency)*100)/100);
}

function resultConcatenation(){
    return (eur + " euros are equal " + eurConverted + " UAH, "+
            usd + " dollars are equal " + usdConverted + " UAH, " +
            eur_usd + " euros are equal " + eur_usdConverted + " USD");
}

function checkPromptIfEmpty(enteredData, message){
    while (enteredData === "" || enteredData == null) {
        enteredData  = prompt("Oops, try again " + message);
    }
    return enteredData;
}

console.log(resultConcatenation());
alert(resultConcatenation());

document.getElementById('task1').innerHTML=resultPerson();
document.getElementById('task2').innerHTML=resultConcatenation();
