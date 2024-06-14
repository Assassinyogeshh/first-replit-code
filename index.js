const express = require('express');

const app = express();

//Question 1

function greetUser(){
  return 'Welcome to my app';
}

app.get('/welcome', (req, res) =>{
  res.send(greetUser());
});


//Question 2

function getGreetingMessage(name){
  return `Hello ${name}`;
}

app.get('/greet', (req, res) => {
  const {username }= req.query;
  res.send(getGreetingMessage(username ));
});

//Question 3

function checkPasswordStrength(password){
  return password.length <15 ? 'Weak Password' : 'Strong Password';
}

app.get('/check-password', (req, res) => {
  const {password} = req.query;
  res.send(checkPasswordStrength(password));
});

//Question 4

function calculateSum(num1, num2){
  return num1 + num2;
}

app.get('/sum', (req, res) =>{
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);
  res.send(calculateSum(num1, num2).toString());
});

//Questio 5

function getSubscriptionStatus(username, isSubscribed){
  return isSubscribed === 'true' ? `${username} is subscribed` : `${username} is not subscribed`;  
}

app.get('/subscription-status', (req, res) => {
  const {username, isSubscribed} = req.query;
  res.send(getSubscriptionStatus(username, isSubscribed));
});

// Question 6
function getDiscountedPrice(price, discount){
  return `${price - (price * discount / 100)}`;
}

app.get('/discounted-price', (req, res)=>{
  const {price, discount} = req.query;
  res.send(getDiscountedPrice(price, discount));
});

//Question 7

function  getPersonalizedGreeting(age, Gender, name){
  return `Hello ${name}, you are ${age} years old and you are a ${Gender}`;
}

app.get('/personalized-greeting', (req, res) => {
  const {age, Gender, name} = req.query;
  res.send(getPersonalizedGreeting(age, Gender, name));
});

// Question 8

function getFinalPrice (price, discount, tax){
  let discountPrice= price - (price * discount / 100);
    return discountPrice;
}

app.get('/final-price', (req, res) =>{
  const price = parseFloat(req.query.price);
  const discount = parseFloat(req.query.discount);
  const  tax = parseFloat(req.query.tax);
  
  res.send(getFinalPrice(price, discount, tax).toString());
});

//Question 9

function getTotalExerciseTime(running, cycling, swimming){
  return `${running + cycling + swimming}`;
}

app.get('/total-exercise-time', (req, res) =>{
  const running = parseInt(req.query.running);
  const cycling = parseInt(req.query.cycling);
  const swimming = parseInt(req.query.swimming);
  res.send(getTotalExerciseTime(running, cycling, swimming));
});

app.get('/', (req, res)=>{
  res.send("I Am Live");
});

app.listen(3000, ()=>{
  console.log("Server Started");
});