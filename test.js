
// 10 + 20 / 2 = 15

// let num1 = 10;
// let num2 = 20;

// let add = num1 + num2;
// let result = add / 2;
// let res = result * 2;
// console.log(res);

// function addBal(balance , amount){
//    let sum = balance + amount;
//    return sum;
// }
// function subtractBal(balance, amount){
//    let subtract = balance - amount;
//    return subtract;
// }
// function prntBal (comment , balance){
//    if (balance == 0){
//       console.log("You don't have enough balance");
//    }
//    else {
//       console.log(comment + balance);
//    }
// }

//  let balance = 15000;
//  balance = subtractBal (balance, 5000);
//  balance = addBal( balance, 10000);
//  balance = addBal(balance, 5000);
//  balance = subtractBal(balance , 25000);
//  prntBal("Your balance is ", balance);



// function addBalance( balance , amount){
//     let sum = balance + amount;
//     return sum;
// }

// function subtractBalance(balance, amount){
//     let subtract = balance - amount;
//     return subtract;
// }

// function printBalance(comment, balance){
//     if(balance == 0){
//         console.log("You dont have enough balance");
//     } 
//     else{
//         console.log(comment + balance);
//     }  

// }

// let balance = 5000; 
// balance = addBalance(balance ,10000);
// balance = subtractBalance(balance , 7000);
// balance = addBalance(balance, 20000);
// balance = subtractBalance(balance , 28000);
// balance = addBalance(balance, 5000);
// printBalance('Your current balance is ', balance);

/**
 * Graades
 * A+ -96 to 100
 * A - 91 to 95
 * B+ - 86 to 90
 * B - 80 to 85
 */

// let grades = 89; 
// if(grades >=96){
//     console.log("Your grade is A+");
// }
// else if(grades>=91){
//     console.log("Your grade is A");
// }
// else if( grades >= 86){
//     console.log("Your grade is B+");
// }
// else if( grades >= 80){
//     console.log("Your grade is B");
// }




// let x = 50;
// let y = 20;
// let z = 10;

// const output = (x > 20 && x <= 50) || (y > 0 && y < 100) || z == 10;

// console.log(output);

// if(output)
// {
//     console.log('Hello Aking misis, psshllppp');
// }
// else{
//     console.log("Hi Aking misis hmmwah!");
// }

// const isOld = false;

// if(isOld)
// {
//     console.log('Your old');
// }
// else{
//     console.log('Your young');
// }















//let something = "si lioncio aking nagiisang asawa na mahal na mahal kong sobra";
// let len = something.length;
// console.log(len);

// console.log(something.toUpperCase());
// console.log(something.toLowerCase());


//let subSTR = something.substring(3, 32); //lioncio aking nagiisang asawa
//console.log(subSTR);



// let text = "Hello World";
// text.replace()


// let num1 = 7;
// let num2 = 4;

// num1 *= num2;
// console.log(num1);

// function ageInfo(age){
//    if( age < 18 ){
//       return "teen";
//    }
//    else{
//       return "adult";
//    }
// }

// console.log(ageInfo(18));

// console.log(ageInfo(10));


// function ageInfo(age){
  
//    if(age >=18){
//       return "adult";
//    }
//    else{
//       return "teen";
//    }
// }
// let info = ageInfo(10);
// console.log(info);

// info = ageInfo(20);
// console.log(info);


//function - Insert Input -> Process the input -> Return Output

// function myName(fullname, lastname)
// {
//    if(fullname == 'rhea' && lastname == 'morcilla'){
//       return "kasal na";
//    }
//    else{
//       return "Magpakasal na";
//    }
// }
// console.log(myName('rhea', 'morcilla'));

// let fullname = myName('Rhea', 'Morcilla'); //My name is Lioncio Morcila
// console.log(fullname);



//

// CONTROLER
// * CTRL L - HIGHLIGHT 
// * 



/**
 * String Functions na aaralin naten
 * - length - G
 * - toUpperCase() - G
 * - toLowerCase()- G
 * - substring()- G
 * - repla
 * - charAt()- G()- number convert  to string index number position
 * - slice() -G
 * - indexOf()  string convert to index position start
 * - charCodeAt()  
 * - trim()
 * - split() from string converted to array
 */

// let something = "si lioncio aking nagiisang asawa na mahal na mahal kong sobra";
// let len = something.length; //61
// console.log(len);

// console.log(something.toUpperCase());
// console.log(something.toLowerCase());


// let subSTR = something.substring(3, 32); //lioncio aking nagiisang asawa
// console.log (subSTR);


// let message = "Hello and aking pinakamamahal na MISIS😍❤";
// let replace = message.replaceAll("and", " "); // Hello   aking pinakamamahal na MISIS😍❤
// console.log(replace);

// let charAt = message.charAt(27); // a
// console.log(charAt); 

// let slice = message.slice(0 , 10); // Hello and
// console.log(slice);

// let index = message.indexOf("aking"); //10
// console.log(index);

// let code = message.charCodeAt(7); // 110
// console.log(code);

// let arr = message.split(" "); // 'Hello' 'and' 'aking' 'pinakamamahal' 'na' 'MISIS'😍❤
// console.log(arr);


// let myArray = [2, 100, 30];

// Element is yung laman ng array


// myArray.push(10);       // [2, 100, 30, 10]
// console.log(myArray);
// console.log (myArray.push(200)); //  [2, 100, 30, 200]
// console.log(myArray[2]); // 30
// console.log (myArray.pop()); // return last deleted number
// console.log(myArray); // output will be [2, 100, 30]



//========================================-=-=================================//
// let myArray = [2, 100, 30];
// console.log(myArray.splice(1, 1)); // 100
// console.log(myArray); //2, 30

// console.log(myArray.splice(1)); //  [100, 30]
// console.log(myArray); // [2]

// console.log (myArray.join('-'));  2-100-30
// let myArray2 = [1, 2, 3];
// console.log (myArray2.concat(myArray)); // [1, 2, 3 , 2, 100, 30]






// let num = [1, 2 , 3, 4, 5 ];
// let total = 0;
// for( let i = 0; i < num.length; i++){
//    total = total + num[i];
// }
// console.log(total);

/**
 * Mayroon tayong variable na istoran naten ng number, name naten sya as num.
 * Mayroon tayong another variable na array ang value at element niya ay mga number
 * Sa for loop, icheck naten bawat element ng array kung equal siya kay num.
 * kung eqaul sya kay num, iprint naten ang index ng element from array na nag
 *    equal kay num.
 * 
 * num is 200
 * array is [11, 200, 400, 10]
 * I print naten ang index ni 200 which is 1.
 */

// let num = 200;
// let arr = [11, 400, 10, 200];
// for(let i = 0; i < arr.length; i++){
//    if(arr[i] == num){
//       console.log(i);
//    }
// }

// let myValue = [2, 1, 5, 6, 7];
// myValue[2] = 200;
// myValue[0] += 20;
// console.log(myValue);

/**
 * Practice Sceneario
 * Mayroon tayong array na ang laman ay numbers.
 * Magloop tayo on every element.
 * Kapag ang element ay less than 20, hindi naten sya iprint.
 * 
 * example
 * numbers is [10, 30, 25, 15, 100]
 * Outputs:
 * 30
 * 25
 * 100
 */
// let arr = [10, 30, 25, 15, 100, 20];
// for(let i = 0; i < arr.length; i++ ){
//    if(arr[i] >= 20){
//       console.log(arr[i]);
//    }
// }

/**
 * numbers is [10, 30, 25, 15, 100]
 * Outputs: [30, 25, 100]
 */




// let arr = [10, 20, 30, 15, 100];
// let output = [];
// for (let i = 0; i < arr.length; i++){
//    if(arr[i] >= 20){
//       output.push(arr[i]);
//    }
// }
// console.log(output);


/**
 * kapag greater than 40, add tayo ng 100
 * numbers is [10, 30, 25, 15, 100]
 * Outputs: [10, 30, 25, 15, 200]
 */

// let num = [50, 30, 75, 15, 100];
// for(let i = 0; i < num.length; i++){
//    if(num[i] > 40){
//       num[i] += 100;
//    }
// }
// console.log(num);


/**
 * May array tayo na may mga number na elements.
 * Kapag ang element ay mababa sa 15, Iadd naten yun sa array name na first.
 * Kapag naman ang element ay mataas or equal sa 15, iadd naten sa array name na second.
 * Imerge naten si array first and array second.
 * 
 * Input: 
 * arr is [10, 20, 14, 16, 18]
 * 
 * Output:
 * [10, 14, 20, 16, 18]
 */

// let arr1 = [10, 20, 14, 16, 18];
// let first = [];
// let second = [];

// for(let i = 0; i < arr1.length; i++){
//    if(arr1[i] < 15){
//       first.push(arr1[i]);
//    }
//    else{
//       second.push(arr1[i]);
//    }
// }
// console.log(first.concat(second));

/**
 * Grades average
 * Input:
 * [98, 87, 82, 95, 90]
 * 
 * Output:
 * 90.5
 */

// let array = [98, 87, 82, 95, 90];
// let sum = 0;
// for ( let i = 0; i < array.length; i++){
//    sum = sum + array[i];
   
// }
// let output = sum / array.length;
// console.log(output);


/**
 * Input:
 * [10, 7, 12, 15]
 * 
 * Output:
 * 7
 * 
 * if element is greater than 10
 * 12-10 = 2
 * Iadd naten kay total variable si 2.
 * 
 * total is 2.
 * 
 * 15-10=5
 * 
 * Ni add naten kay total which is currently 2 ang value.
 * total is 7.
 * 
 */

// let input = [10, 7, 12, 15];
// let total = 0;
// for( let i = 0; i < input.length; i++){
//    if(input[i] > 10){
//      total = total + (input[i] - 10);
     
//     
// }

// console.log(total);

// let input = [12, 19, 15, 20, 11];
// let output = 0;

// for (let i = 0; i < input.length; i++){

//    if(input[i] > 17){
//      output = output + input[i];
     
//    }
// }
//  console.log(output);
// input = input.filter(function(element){
//     return element > 17;   
// });

// input.forEach(function(element){
//     output += element;
// });
// console.log(output);

// let input1 = [10, 5, 12];
// let input2 = [20, 2, 8];

// for (let i = 0; i < input1.length; i++){
//    input1[i] += input2[i];
  
// }
// console.log(input1);


// let input1 = [12, 2, 5, 2, 10, 2];
// // let input1 = [1, 5, 10, 20, 3, 20];
// let input2 = 2;

// let output = 0;

// for (let i = 0; i < input1.length; i++){
//    if( input1[i] == input2){
//       output += 1;
//    }
// }
// console.log("input2 " + input2);
// console.log("output " + output);



//excersice 1 
// let value = [10, 3, 14, 21, 17];
// let value = [30, 15, 1, 17];
// for (let i = 0; i < value.length; i++){
//    if(value[i] > 10 && value[i] < 20){
//       console.log("Hello");
//    }
//    else{
//       console.log("Hi");
//    }
  
// }

//excersice 2
// let string = ['Chair', 'Hi', 'Elephant', 'fan'];
// let count = [];

// for(let i = 0; i < string.length; i++){

//    count.push(string[i].length);
// }
// console.log(count);


//excersice 3
// let removeIndex = [14, 35, 20, 12, 7, 100];
// let output = [];
// for(let i = 0; i < removeIndex.length; i++){
//    if(removeIndex[i] >= 20){
//       output.push(removeIndex[i]);
//    }
// }
// console.log(output);


//excersice 4
// let numbers = [12, 15, 2, 200, 7, 100];
// let getLargest = 0;

// for(let i = 0; i < numbers.length; i++){
//    if(numbers[i] < getLargest) {
//       getLargest = numbers[i];
//     }
// }
// console.log(getLargest);


//excersice 4
// let number = [12, 500, 2, 115, 7];
// let maxLargest = Math.max(...number);
// console.log(maxLargest);


/**
 * Exercise 5
 * 
 * Get the half value of each element and total it.
 * 
 * Input:
 * [12, 4, 8, 10]
 * 
 * 
 * Output:
 * 6 + 2 + 4 + 5 = 17
 */

// let input = [12, 4, 8, 10];
// let output = 0;

// for(let i = 0; i < input.length; i++){
//    output += input[i] / 2;
// }
// console.log(output);


/**
 * Exercise 6
 * 
 * Count the length of every element and total it
 * 
 * Input: ['shirt', 'book', 'cat']
 * 
 * Output:
 * 5 + 4 + 3 = 12
 */

// let input = ['mango'];
// let output = 0;

// for (let i = 0; i < input.length; i++){
//    let add = input[i].length;
//    output += add;
// }
// console.log(output);


/**
 * Add numbers that is greater than 20 or less than 10
 * 
 * 
 * Input: [5, 17, 22, 18, 25]
 * 
 * Output:
 * 5 + 22 + 25 = 52
 */

// let value = [5, 17, 22, 18, 25];
// let result = 0;

// for(let i = 0; i < value.length; i++){
//  if(value[i] > 20 || value[i] < 10){
//    result += value[i];
//  }
// }
// console.log(result);


/**
 * Get the minimum price in the array
 * 
 * Input: [12, 5, 20, 7, 30]
 * 
 * Output:
 * 5
 */

// let price =  [12, 5, 20, 7, 30];
// let getPrice = price[0]; //12

// for(let i = 0; i < price.length; i++){

//    if( price[i] < getPrice){ 
//        getPrice = price[i];
//    }
// }

// console.log(getPrice);

/**
 * Get the largest length count among string element
 * 
 * Input: ['book', 'eye', 'hello', 'be']
 * 
 * Output: 'hello'
 */

// let string = ['book', 'eye', 'hello', 'ILOVEYOUSOMUCH'];
// let largest = 0;
// let holder = '';

// for(let i = 0; i < string.length; i++){
   
//    if(string[i].length > largest){
//       holder = string[i];
//       largest = string[i].length;
//    }
// }
// console.log('Output: ' + holder);


/**
 * Total the length of letter in the element
 * 
 * Input: ['HI', 'Hello', 'do']
 * 
 * Output: 9
 */

// let input = ['Hi'];
// let output = 0;

// for(let i = 0; i < input.length; i++){
//    let get = input[i].length;
//    output += get;
   
// }

// console.log(output);


/**
 * Add the length of the element if the length is greater than 3
 * 
 * Input: npIut: ['Hi', 'Great', 'Hello', 'do']
 * 
 * Output: 10
 */

// let input = ['Hi', 'Great', 'ILOVEYOUSOMUCH AKING MISIS', 'do'];
// let output = 0;

// for (let i = 0; i < input.length; i++){
//    if(input[i].length > 3){
//       output += input[i].length ;
//    }
// }
// console.log(output);

/**
 * Total the lenght of the string element and divide the total to the length of array
 * 
 * Input: ['I', 'Love', 'You', 'So', 'Much', 'aking', 'Mister']
 * 
 * Output:
 * 25 / 7 = 3.5
 */

// let val = ['I', 'Love', 'You', 'So', 'Much', 'aking', 'Mister'];
// let output = 0;

// for(let i = 0; i < val.length; i++){
//    let get = val[i].length;
//    console.log(get);
//    // output += get;
 
// output /= val.length;
// console.log(output);



//  ======================================================

//Excercise 1
// let addNumber = [20, 5, 15, 4, 12];
// let output = 0;

// for(let i = 0; i < addNumber.length; i++){
//    if(addNumber[i] < 10){
//       output += addNumber[i];
//    }
// }
// console.log(output);


// Excercise 2
// let input = '4 8 2 1';
// let output = 0;

// let arr =  input.split(' ');

// for(let i = 0; i < arr.length; i++){
//     output += parseInt(arr[i]);
   
//  }
// let result = output * 2;
// console.log(result);


// Excercise 3
// let input = '2 20 5 8 10';
// let output = [ ];

// let str = input.split(' ');
// for( let i = 0; i < str.length; i++){
//    let num = parseInt(str[i]);
//    if(num < 10 ){
//       output.push(num + 100);
//    }
//    else{
//       output.push(num);
//    }
// }
// console.log(output);


/**
 * Add number that is greater than 50
 * 
 * Input: '41/52/20/100'
 * 
 * Output: 52 + 100 = 152
 */


// let str = '41/52/20/100';
// let output = 0;

// let arr =  str.split('/');
// for (let i = 0; i < arr.length; i++){
//    if(arr[i] > 50){
//       let num = parseInt(arr[i]);
//       output += num;

//    }
// }
// console.log(output);

// Excercise 4
// let input = 'hello world';
// let output= 0;

// let arr = input.split('');

// for(let i = 0; i < arr.length; i++){
//  if(arr[i]=='a' ||arr[i]=='e'|| arr[i]=='i'|| arr[i]=='o'|| arr[i]=='u'){
//      output += arr[i].length;
//  }
// }
// console.log(output);

// Excercise 5
// let input = [20, 2, 10, 5, 1, 3, 6];
// let output = [];

// for(let i = 0; i < input.length; i++){
//    if(input[i] < 10 && output.length < 3 ){
    
//       output.push(input[i]);
//    }
// }
// console.log(output);


//Excercise 1
// let input = [20, 25, 15, 11, 35];
// let output = [];

// for(let i = 0; i < input.length; i++){
//    if(input[i] > 20){
//       output.push(input[i] - 10);
//    }
//    else{
//       output.push(input[i]);
//    }
// }
// console.log(output);


//Excercise 2
// let arr = ['hello', 'hey', 'world', 'nice', 'aking misis'];
// let holder = '';

// for(let i = 0; i < arr.length; i++){
//    let string = arr[i].length;
//    if(string <= 4){
//       holder += arr[i];
//    }
// }
// console.log("The output will be " + holder);



//Excercise 3
// let input = [20, 11, 2, 18, 28];
// let output = [];

// for(let i = 0; i < input.length; i++){
//    if(input[i] > 10 && input[i] < 20){
//       output.push("T");
//    }
//    else{
//      output.push("F");
//    }
// }
// console.log(output);



//Excercise 4
// let input = [4, 1, 2, 7];
// let result = 0;
// let output = [];

// for(let i = 0; i < input.length; i++){
//    result += input[i];
//    output.push(result);
// }

// console.log(output);



//Excercise 1
// let input = [3, 7, 2, 9, 14];
// let output = 0;

// for(let i = 0; i < input.length; i++){
//    if(input[i] > 5 && input[i] < 10 ){
//       output += input[i];

//    }
// }
// console.log(output);


//Excercise 2
// let input = [7, 2, 5, 10];
// let output = [];

// for(let i = 0; i < input.length; i++){
//     output.push(input[i]);
// }
// console.log(output.join('-'));


//Excercise 3
// let input = [14, 17, 20, 8, 2];
// let output = [];
 
// for (let i = 0; i < input.length; i++){
//    if(input[i] < 15){
//       output.push(input[i]);
//    }
// }
// console.log(output.join(' '));


//Excercise 4
// let input = '5,2,10,3';
// // input = '8, 3, 9, 10, 5';
// let output = 0;

// let arr = input.split(',');
// for (let i = 0; i < arr.length; i++){
//    let result = parseInt(arr[i]);
//    output += result;
// }

// if(output > 30){
//    console.log('EXCEED');
// }
// else{
//    console.log('NOT EXCEED');
// }


// Excercise 5
// let input = [5, 2, 8, 8,2];
// let input2 = 3;
// let output = 0;

// for(let i = 0; i < input2; i++){
//    output += parseInt(input[i]);
// }
// let total =  output / input2;
// console.log(total);





///////// NEW ARRAY ETERATION FUNCTION
///EXCERCISE 1
// let array = [1, 4, 2, 8];
// let holder = 0;


// array = array.map(function(element){
//  holder += element / 4 ;

//  return holder;
// });

// console.log(holder);


///EXCERCISE 2
let input = [2, 12, 5, 8, 7];

input = input.filter(function(element){
    return element != 12;
});

console.log(input);

///EXCERCISE 3
// let input = [10, 3, 2, 5, 8];
// let input2 = 5;

// input = input.find(function(element){
//     return element < input2;
// });

// console.log(input);


///EXCERCISE 4
// let input = ['hello', 'world', 'nice', 'home'];

// input = input.map(function(element, i){
//     return element + "-" + i;
// });

// console.log(input); 

///EXCERCISE 5
// let input = '12, 5, 2, 7';

// let arr = input.split(',');
// let holder = arr[0];

// arr = arr.forEach(function(element){
//   if(element < holder){
//     holder = element;
//     return holder;
//   }   
// });
// console.log(holder);


