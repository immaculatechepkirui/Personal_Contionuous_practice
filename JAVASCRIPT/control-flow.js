// Write a program that prompts the user for a number and checks if it is positive,
//  negative, or zero. Display an appropriate message.
function checkNumber(number){
    if(number < 0){
        console.log("Negative number")
    } else if(number === 0){
        console.log("The number is zero")
    } else {
        console.log("Positive number")
    };
};
checkNumber()
const number = 7;


// Use a switch statement to display the name of the day based on a number input 
// (1 for Monday, 2 for Tuesday, etc.). 
function weekDay(daysNum){
    switch(daysNum){
       case 1: 
       return "Monday"
       case 2:
         return "Tueday"
       case 3: 
       return "Wednesday"
       case 4: 
       return "Thursday"
       default:
        return "Invalid Day Number"
    }
}

console.log(weekDay(4))


// Use a do-while loop to continuously ask the user for a password until the
//  correct one is entered. 


// Write a function that takes two numbers as arguments and returns the larger number. 
function largerNum(num1, num2){
    let larger = num1
    if(num2 > larger){
        larger = num2
    } else {
        larger = num1
    }
}
largerNum()
const num1 = 64
const num2 = 23
console.log(largerNum(64,23))
console.log(largerNum(64,93))


// // Write a function that takes an array of numbers and returns the sum of only the
// //  even numbers.
// function evenNums(numArr){
//     total = 0
//     numArr.map(num =>{
//         if (num % 2 === 0){
//         total ++
//         }
//     })
// } 

// console.log(evenNums([12,13,14,15,16,17,18,19]));


// Write a program that takes an array of days like "Mon", "Tue", and "Fri" and uses a switch statement to print
//  what type of delivery is scheduled on each day.
function deliverydays(days){
    days.forEach(day => {
        

      switch(day){
        case "Mon":
             console.log("Clothes Delivery")
             break;

        case "Tue":
             console.log("Food Delivery");
             break;

        case "Wed":
             console.log("Grocery Delivery");
             break;
             
        case "Thur":
             console.log("Accessories Delivery");
             break;
             
        case "Fri":
             console.log("Books Delivery")
             break;

        default:
            return "Invalid Day"
}    });
};
const days = ["Mon", "Tue", "Wed", "Fri", "Thur","Tue", "Wed"];
deliverydays(days);


// Create a program that loops through an array of book statuses and prints "Ready to lend" if 
// the status is "available" or "Checked out" if the status is "borrowed".

function bookStatuses(status){
    status.forEach(stat => {
        if(stat === "available"){
            console.log("Ready to lend");
            
        } else if(status === "borrowed"){
            console.log("Checked out");
            
        };
    });
};

const status = ["borrowed", "available", "borrowed", "available", "borrowed"];
bookStatuses(status);


// Write a program using a while loop that simulates a countdown of lives in a game starting from 5 and
//  prints "You have X lives left" on each loop until it reaches 0.


function countDown(){
   let count = 5;
   while(count >= 0){
    console.log(`You have ${count} lives left`);
    count --;
   } ;

}; 
countDown();

// Using a do...while loop, write a program that loops through an array of user feedback and prints each 
// comment until the array is empty.

function userFeedback(feedbacks){
    let feed = feedbacks.length;
    do{
        console.log(feedbacks.shift());
    } 
    while (feedbacks.length > 0);
    
};
const feedbacks = ["Login successful", "Incorrect password", "Subcrription succeful"];
userFeedback(feedbacks);