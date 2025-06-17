// Find the last element of the following arrays.arr1 = [3,7,34,90,12]
// arr2 = [true, "green", "where",12,56]

let arr1 = [3,7,34,90,12]
let arr2 = [true, "green", "where", 12, 56]
n = arr1.length
n = arr2.length
let lastEle = arr1.at(n-1)
let second = arr2.at(n-1)
let lastElemement = arr1.pop()
let secondLast= arr2.pop()
console.log(lastEle)
console.log(second)
console.log(lastElemement)
console.log(secondLast)

// Write a JS program that will join the following array elements into a 
// string. myPets = ["Cow", "Bird", "Snake", "Dog"];
let myPets = ["Cow", "Bird", "Snake", "Dog"]
let myPetString = myPets.join(" ")
console.log(myPetString);

// Write a JS script to sort the following array items.
//  var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];

var arr3 = [-5, 9, 5, 3, 2, -3, 6, 8, 4,1]
sortedArr = arr3.sort((a,b) => a -b)
console.log(sortedArr);


// Write a program to remove duplicates from the following array. Console the array without 
// duplicates, and console another array that only contains the duplicates
let arr = ["boy", "man", "girl",  "school", "girl", "woman"];
let nonDuplicates = []
arr.forEach((word) =>{
    if(!nonDuplicates.includes(word)){
        nonDuplicates.push(word);
    }
});
console.log(arr)
console.log(nonDuplicates)

// Write a JS script to search for the following word in the array."food"If the word is present, 
// return it else return "the search word was not found". let arr5 = ["the", "way", "x", 4];
let arr5 = ["the", "way", "x", 4]
   if(arr5.includes("food")){
    console.log("food")
   } else{
    console.log("The search word was not found")
   }

// Write a JS script to sort the following string:let word = "renniw"
let word = "renniw"
n = word.length
let leftP = 0
let rightP = word[n-1]
  while (leftP < rightP){
    word.split().word[leftP], word[rightP] = word[rightP], word[leftP].join(" ")
  }
console.log(word);

// Using an array of fruits with length 10 , insert 'Tomato' at the 5th index
let fruits = ["apple", "grape", "mango", "pawpaw", "grapes", "kiwi", "guava", "melon", "lemon", "strawberry", "berry"]
fruits.splice(5, "tomato");
console.log(fruits)