var messageName = "enter your name";
var messageEvent = "enter your meeting";

var person = prompt("What's your name?", "Volodymyr Medvid");
person = checkPromptIfEmpty(person, messageName);

var time = "Mon Sep 25 2017 12:00";
var place = "Lviv";

var personEvent = prompt("Do you have a some meeting?", "meet my friend");
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

var eur = prompt(EUR_to_UAH, 1);
eur = checkPromptIfEmpty(eur, EUR_to_UAH);

var usd = prompt(USD_to_UAH, 1);
usd = checkPromptIfEmpty(usd, USD_to_UAH);

var eur_usd = prompt(EUR_to_USD, 1);
eur_usd = checkPromptIfEmpty(eur_usd, EUR_to_USD);

var eurConverted = currencyConverter(eur,EUR);
var usdConverted = currencyConverter(usd,USD);
var eur_usdConverted = currencyConverter(eur_usd,EUR_USD);

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
