var person = "Volodymyr Medvid";
var time = "Mon Sep 25 2017 12:00";
var place = "Lviv";
var event = prompt("Do you have a some meeting?");

console.log(resultPerson());
alert(resultPerson());

function resultPerson() {
    return (person + " have a meeting " + event + " in " + place + " on " + time);
}

const USD = 25;
const EUR = 30;
const EUR_USD = 1.2;

var eur = prompt("EUR to UAH");
var usd = prompt("USD to UAH");
var eur_usd = prompt("EUR to USD");

var eurConverted = currencyConverter(eur,EUR);
var usdConverted = currencyConverter(usd,USD);
var eur_usdConverted = currencyConverter(eur_usd,EUR_USD);

console.log(resultConcatenation());
alert(resultConcatenation());

function resultConcatenation(){
    return (eur + " euros are equal " + eurConverted + " UAH, "+
            usd + " dollars are equal " + usdConverted + " UAH, " +
            eur_usd + " euros are equal " + eur_usdConverted + " USD");
}

function currencyConverter(money, currency){
    return money * currency;
}

document.getElementById('task1').innerHTML=resultPerson();
document.getElementById('task2').innerHTML=resultConcatenation();
