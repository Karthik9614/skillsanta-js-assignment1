// 'use strict';

/*   1. To print largest of 3 numbers    */  

// let a = parseInt(prompt("Enter first number"));
// let b = parseInt(prompt("Enter second number"));
// let c = parseInt(prompt("Enter third number"));

// if(a>b && a>c){
//     document.write(`${a} is the greatest number`);
// }else if(b>a && b>c){
//     document.write(`${b} is the greatest number`);
// }else if(c>a && c>b){
//     document.write(`${c} is the greatest number`);
// }else{
//     document.write('All numbers are equal, Please enter different numbers');
// }


/*   2. Age Calculator   */
//taking input from the user
// var birthday = prompt('Enter ur D.O.B(MM/DD/YYYY): ');

// var dob = new Date(birthday);  

// //calculate month difference from current date in time  
// var month_diff = Date.now() - dob.getTime();  
      
// //convert the calculated difference in date format  
// var age_dt = new Date(month_diff);   
      
// //extract year from date      
// var year = age_dt.getUTCFullYear();  
      
// //now calculate the age of the user  
// var age = Math.abs(year - 1970);  
      

// if(age>=18 && age<=44){
//     window.open('https://selfregistration.cowin.gov.in');
// }


/*   3. Temperature Conversion    */
// let temp = parseInt(prompt("Enter the value: "));

// function celsius(temp){
//     let result1 = (temp * 9/5) + 32;
//     document.write("Fahrenheit = "+result1+"°F<br><br>");
// }
// function fahrenheit(temp){
//     let result2 = (temp-32)*5/9;
//     document.write("Celsius=" + result2 + "°C");
// }

// celsius(temp);
// fahrenheit(temp);

/*   4. 50-100  or not   */

// const number = parseInt(prompt("Enter any number: "));

// if(number >= 50 && number <= 100){
//     document.write(`${number} lies between the range of 50 to 100`);
// }else {
//     document.write(`${number} is not in the range of 50 to 100`);
// }


/*  5. To check entered string is pallindrome or not   */

// function checkPalindrome(str) {

//     // convert string to an array
//     const arrayValues = string.split('');

//     // reverse the array values
//     const reverseArrayValues = arrayValues.reverse();

//     // convert array to string
//     const reverseString = reverseArrayValues.join('');

//     if(string == reverseString) {
//         document.write('It is a palindrome');
//     }
//     else {
//         document.write('It is not a palindrome');
//     }
// }

// //take input
// const string = prompt('Enter a string: ');

// checkPalindrome(string);

/*  6. program to pass a function as a parameter  */

// function greet() {
//     return 'Hello';
// }

// // passing function greet() as a parameter
// function name(user, func)
// {

//     // accessing passed function
//     const message = greet();

//     document.write(`${message} ${user}`);
// }

// name('User', greet); 

/*   7. to remove html/xml tags  */

// function strip_html_tags(str)
// {
//    if ((str===null) || (str===''))
//        return false;
//   else
//    str = str.toString();
//   return str.replace(/<[^>]*>/g, '');
// }

// console.log(strip_html_tags('<p><strong><em>Skillsanta Assignments</em></strong></p>'));

/*    8. iterate numbers and display odd or even   */
// let i;

// for(i=20; i<=30; i++){
//     if(i%2 === 0){
//         document.write(`${i} is even number <br><br>`);
//     }else{
//         document.write(`${i} is odd number <br><br>`);
//     }
// }

/*   9. js function to find unique elements in 2 arrays    */

let array3 = [];

//user input
let array1 = prompt('Enter the elements to be stored in array1: ');
let array2 = prompt('Enter the elements to be stored in array2: ');
// // console.log(array1);
// console.log(array2);

for(let i=0;i<array1.length;i++){
    if(array3.indexOf(array1[i]) == -1)
       array3.push(array1[i])
  }
  for(let i=0;i<array2.length;i++){
    if(array3.indexOf(array2[i]) == -1)
       array3.push(array2[i])
  }

  console.log(array3);


/*  10. JS function to find the number of vowels from a user input string  */

// program to count the number of vowels in a string

//defining vowels
// const vowels = ["a","e","i","o","u"];

// function countVowel(str){
//     //initialize count object
//     let countVowelObject = {
//         a:0,
//         e:0,
//         i:0,
//         o:0,
//         u:0
//     }

//     //loop through string to test if each character is a vowel
//     for(let letter of str.toLowerCase()){
//         if(vowels[0].includes(letter)){
//             countVowelObject.a = countVowelObject.a + 1;
//         }
//         if(vowels[1].includes(letter)){
//             countVowelObject.e = countVowelObject.e + 1;
//         }
//         if(vowels[2].includes(letter)){
//             countVowelObject.i = countVowelObject.i + 1;
//         }
//         if(vowels[3].includes(letter)){
//             countVowelObject.o = countVowelObject.o + 1;
//         }
//         if(vowels[4].includes(letter)){
//             countVowelObject.u = countVowelObject.u + 1;
//         }
//     }
//     for(const item in countVowelObject){
//         if(countVowelObject[item] > 0){
//             console.log(`${item.toUpperCase()}:${countVowelObject[item]}`);
//         }
//     }
// }

// const string = prompt('Enter a string: ');
// countVowel(string);



