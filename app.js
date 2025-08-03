
// const cowsay = require("cowsay");
// console.log(cowsay.say({text : "I'm a moooodul"}));
// console.log(cowsay.say({
//     text : "I'm a moooodule",
//     e : "oO",
//     T : "U "
// }));

// const subjectName = "Maths";
// console.log(subjectName);
// function greet(name,age) {
//     let message = `Hello,${name}, Your are ${age} years old!`;
//     return message;
// }
// const greeting = greet("padmaja",19);
//     console.log(greeting);

// let counter = 0;
// while(counter < 3) {
//     console.log(`Loop iteration: ${counter}`);
//     counter = counter + 1;
//     counter += 1;
// }
// console.log("While loop finished.");

// const fruits = ["Apple","Banana", "Cherry"];
// for (let i = 0; i< fruits.length; i++)
// {
//     const fruit = fruits[i];
//     console.log(`Fruit at index ${i} is: ${fruit}`);
// }

// let temperature = 25;
// if(temperature > 30) {
//     console.log("It's a pleasant day.");
// }else{
//     console.log("It's a bit chilly today.");
// }

// function calculateArea(length,width = 1) {
//     return length*width;
// }
// const rectangleArea = calculateArea(10,5);
// console.log(`Area of a 10*5 rectangle is: ${rectangleArea}`);
//     const squareArea = calculateArea(8,8);
//     console.log(`Area of a square(using default width) is: ${squareArea}`);

// const getSum = function(a,b) { return a + b; };
// const sum = getSum(15,20);
// console.log(`The sum of 15 and 20 is: ${sum}`);
// const mul = (x,y) => x*y;
// console.log(`The product of 9 and 8 is: ${mul(9,8)}`);
// function mult(x,y){
//     const c=x*y;
//     return c;
// }

//prac 1//
// function Sum(){
// let sum =0;
// for(let i=0;i<1000;i++){
//     if(i%3==0  || i%5==0){
//         sum = sum+i;
//     }
// }
// return sum;
// }
// console.log(`Sum is :${Sum()}`);

//prac 2//sum of fibonacci
// function fibonacci(){
// let n1=2,n2=4,sum=0;
// while(n1 < 4000000)
//     {
//         sum = sum + n1;
// if(n1%2==0) {
//     let curr = n1+n2;
//     n1 = n2;
//     n2 = curr;
    
// }
// }
// return sum;
// }

// console.log(`Sum of even no.s fibonacci series is:${fibonacci()}`);

//prac 3//largest prime factor
// function largestPrimeFactor(n) {
//     let largestFactor = -1;

//     while (n % 2 === 0) {
//         largestFactor = 2;
//         n /= 2;
//     }

//     let factor = 3;
//     while (factor * factor <= n) {
//         while (n % factor === 0) {
//             largestFactor = factor;
//             n /= factor;
//         }
//         factor += 2;
//     }

//     if (n > 2) {
//         largestFactor = n;
//     }

//     return largestFactor;
// }

// const number = 600851475143;
// console.log("Largest prime factor:", largestPrimeFactor(number));

//prac 4//
/*    let fact=1;

   for(i=1;i<=100;i++){
    fact = fact*i;
   }
   console.log(BigInt(fact));
   let sum=0;
   while(fact!=0)
   {
    let rem =fact%10;
    sum=sum+rem;
    fact=(fact/10);
   }
   console.log(sum);*/
// we shall say that an n-digit number is pandigital if it makes use of all the digits to exactly once. For example , 2143 is a 4 digit pandigital and is also prime

