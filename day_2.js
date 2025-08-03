/*const myObject={
    "name": "Alice",
    "age":25,
    "isStudent":true,
    "hobbies":["reading","coding"],
    "address":{
        "city": "New york",
        "zipcode": "10001"
    }
}*/
//get the first hobby and zipcode
/*How do i access information==>use the dot notation*/
/*console.log(`name: ${myObject.name}`);
console.log(`1st hobby : ${myObject.hobbies[0]}`);
console.log(`Zip code is: ${myObject.address.zipcode}`);*/
//array of 1 to 100
// let roll = [];
// for( i=1;i<=10; i++){
//     roll.push(i);
// }
// console.log("Initial array:",roll);
//     for(i=0;i<roll.length;i++){
//         roll[i]*=3;
//     }
//     console.log("After multipling by 3",roll);
//     let newroll=[];
//     for(i=0;i<roll.length;i++){
//         if(roll[i]%5==0){
//             newroll.push(roll[i]);
//         }
//     }
//     console.log("New array is: ",newroll);
//     let sum=0;
//     for(i=0;i<newroll.length;i++){
//         sum+=newroll[i];
//     }
//     console.log(sum);

// a is accumulator its a symbol

/*let arr=[];
for(i=1;i<=100;i++)arr.push(i);
let b=arr.map(x=>x*3).filter(x=>x%5===0).reduce((a,x)=>a+x);
console.log(b);*/
// or u could just console log the whole statement
/*map if only for modification of values whiles,
filter is used to return as conditon eg:-x=>x%5==0;
a is accumulator*/1305

//sum of positive numbers
/*let arr=[3,-4,5,-6,67];
let b= arr.filter(x=>x>0).reduce((a,x)=>a+x);
console.log(b);*/


/*users of i= users.[i]se me array access karta hu
and then .age se mein age access karta hu*/


/*const users=[
    { name:'Alice',age:25},
    { name:'Bob',age:30},
    { name:'Charlie',age:25},
];
let sum=0;
for(let i=0;i<3;i++){
sum= sum+ users[i].age;}
let avg=sum/3;
console.log(avg);*/
// Handle Errors - Try/Catch
try{
    const jsonData = '{"name":"Alice","Age": 25}';
    const user = JSON.parse(jsonData);
    console.log("User data:",user.name);

    const badJson = '{"name": "Bob"}';//This is missing a closing quote
    // the next line will fail because the JSON is invalid.
    const badUser = JSON.parse(badJson);
    console.log("Bad User:",badUser.name);//This line is never reached 
}
catch(error){
    //The code that runs if an error occurs in the 'try' block
    console.error("An error occured! Details: ",error.message);
}
console.log("Program continues to run here");