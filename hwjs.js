var person = "Volodymyr Medvid";
var time = "Mon Sep 25 2017 12:00";
var place = "Lviv";
var event = prompt("Do you have a some meeting?");

console.log(resultPerson());
alert(resultPerson());

const USD = 25;
const EUR = 30;
const EUR_USD = 1.2;

var usd = prompt("USD");
var eur = prompt("EUR");

console.log(resultMoney());
alert(resultMoney());

function resultPerson() {
    return (person + " have a meeting " + event + " in " + place + " on " + time);
}

function resultMoney() {
    return (eur + " euros are equal " + eur * EUR + " UAH, "+
    usd + " dollars are equal " + usd * USD + " UAH, " +
    "one euro is equal " + EUR_USD + " dollars.");
}

document.getElementById('task1').innerHTML=resultPerson();
document.getElementById('task2').innerHTML=resultMoney();
