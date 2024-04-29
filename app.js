let number = parseFloat(prompt("Enter a postive integer"));
console.log(`Number: ${number}`);
console.log(`RoundOff: ${Math.round(number)}`);
console.log(`Floor Number: ${Math.floor(number)}`);
console.log(`Ceil Number: ${Math.ceil(number)}`);


let negativeNumber = parseFloat(prompt("Enter a negative number"));
console.log(`Number: ${negativeNumber}`);
console.log(`RoundOff: ${Math.round(negativeNumber)}`);
console.log(`Floor Number: ${Math.floor(negativeNumber)}`);
console.log(`Ceil Number: ${Math.ceil(negativeNumber)}`);


let absoluteValue = parseInt(prompt("Enter a absolute value"))
console.log(`User Given Absolute Value ${absoluteValue}`);
absoluteValue = absoluteValue.toString()
absoluteValue = absoluteValue.replace("-","")
console.log(`Absolute Value ${absoluteValue}`);



let diceMethod =  Math.floor(Math.random()*6)+1;
console.log(`Random Dice Method: ${diceMethod}`);



let randomCoins = Math.floor(Math.random()*2)+1;
// console.log(randomCoins);
if (randomCoins == 2) {
    console.log(`Random Coins Value: Heads`);
}else{
    console.log(`Random Coins Value: Tails`);
}



let ranndomNumber = Math.round(Math.random()*101)
console.log(`Random Number Between 1 to 100 is : ${ranndomNumber}`);



let userWeight = prompt("Enter Your Weight")
console.log(Math.floor(userWeight));
console.log(`${Math.floor(userWeight)}kgs`);
console.log(`${userWeight}kgs`);
console.log(`${userWeight}kilograms`);


let randomNumbers = Math.round(Math.random()*11)
let userNumber = prompt('Enter a number between 1 to 10')
if (randomNumbers == parseInt(userNumber)) {
    console.log(`Congratulations Your Number ${userNumber} and Random Number ${randomNumbers} is equals`);
}else{
    console.log(`Oops You Lose Your Number ${userNumber} and Random Number ${randomNumbers} is not equal`);

}