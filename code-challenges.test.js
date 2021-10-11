// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with exspect statements using the variables provided.

describe('codeWord',()=>{
    it('It is a function that takes in a string and returns a coded message. The coded message converts a to 4, e to 3, i to 1, and o to 0',()=>{
        expect(codeWord(secretCodeWord1)).toEqual("L4ck4d41s1c4l"),
        expect(codeWord(secretCodeWord2)).toEqual("G0bbl3dyg00k"),
        expect(codeWord(secretCodeWord3)).toEqual("3cc3ntr1c")
})
})


var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"



// b) Create the function that makes the test pass.

//PSUEDO CODING!!!!
// First we need to create a function that will take in a 'string'
//const codeWord = (String)
// So first I attempted a for loop and that was a massive fail... but a huge win was that you can iterate through a string using .map()!! I thought that was only for arrays!
// so we iterate through evaluating the 'value' of the string and we need to write a series of if/else statments looking for aeioAEIO, and return them with their number values into a oined string.

let newStr = str.split('')
return newStr.map(value => {
        if(value === 'a'){
                return value = '4'
        }else if(value === 'A'){
                return value = '4'
        }else if(value === 'e'){
                return value = '3'
        }else if( value === 'E'){
                return value = '3'
        }else if(value === 'i'){
                return value = '1'
        }else if(value === 'I'){
                return value = '1'
         }else if(value === 'o'){
                return value = '0'
        }else if(value === 'O'){
        }else{
                return value
        }
        
}).join('')
        

// console.log(codeWord(secretCodeWord2));

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

describe('thisIsWeird',()=>{
    it('It is a function that takes in an array of words and a single letter and returns all the words that contain that particular letter',()=>{
        expect(thisIsWeird(hand1)).toEqual(["Apple", "Banana", "Orange"]),
        expect(thisIsWeird(arrayOfWords2)).toEqual(["Cherry", "Blueberry", "Peach"])
       
        })
})


var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
var letterA = "a"
// // Expected output: ["Apple", "Banana", "Orange"]
var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
var letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// // b) Create the function that makes the test pass.
// //PSUEDO!!!
// //First we need to make a function that will take in an array of words and a single letter. 
const thisIsWeird = (array, String) => {
// //Then we need to make an if statement that says if our array has any values equal to string, to return it into an array. since we are not looking to return an array of equal size and we are looking to return a particular variable we should iterate with filter. 

return array.filter(value => value.includes(String))

}

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe('fullHouse',()=>{
    it('a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind',()=>{
        expect(fullHouse(hand1)).toEqual(true),
        expect(fullHouse(hand2)).toEqual(false),
        expect(fullHouse(hand3)).toEqual(false),
        expect(fullHouse(hand4)).toEqual("please enter 5 numbers!")
       
        })
})

var hand1 = [5, 5, 5, 3, 3]
// // Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// // Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false
var hand4 = [1, 1, 2, 2, 2, 4]
// Expected output: "please enter 5 numbers!"



// // b) Create the function that makes the test pass.

// //PSEUDO CODE!!!!
// First we create a function that takes in an array of 5 numbers
 const fullHouse = (arr) => {
 // Then we create a funtion that will tell you what to do if you don't enter an array of exactly 5 cards.        
   if(arr.length > 5 || arr.length < 5){
     return "please enter 5 numbers!"
   }
 // then we need to create a function that iterates through our array using a for loop where it will look for like values 
 let countValue = {}
  for(let nums of arr){
    countValue[nums] = (countValue[nums] || 0) + 1;
// using object.value() we can make our array enumerable, making it easier to check in a conditional statement if the values at 0th index contain a pair and 1 index contains 3 of a kind and vice versa with the indexes. We can then have the conditional return a bolean value in the return. 
  }
  let val = Object.values(countValue);
  if((val[0] === 2 && val[1] === 3) || (val[1] === 2 && val[0] === 3)){
    return true;
  }
  return false;
}

//I had to search the interwebs for a while and finally came up on this solution in stack overflow that I kind of understood... If I totally botched this, I would love to know. It worked with MULTIPLE arrays. 